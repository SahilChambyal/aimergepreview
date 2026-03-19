import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== "string") {
      return Response.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      )
    }

    // Basic format check before hitting the API
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      )
    }

    // Verify email with Verimail API
    const verimailKey = process.env.VERIMAIL_KEY
    if (!verimailKey) {
      return Response.json(
        { success: false, message: "Email verification service not configured" },
        { status: 500 }
      )
    }

    const verifyUrl = new URL("https://api.verimail.io/v3/verify")
    verifyUrl.searchParams.set("email", email)
    verifyUrl.searchParams.set("key", verimailKey)

    const verimailRes = await fetch(verifyUrl.toString())

    if (!verimailRes.ok) {
      console.error("[VerifyEmail] Verimail API error:", verimailRes.status)
      return Response.json(
        { success: false, message: "Email verification service error" },
        { status: 502 }
      )
    }

    const verimailData = await verimailRes.json()

    if (verimailData.status !== "success") {
      return Response.json(
        { success: false, message: "Email verification failed" },
        { status: 400 }
      )
    }

    // Check deliverability — reject undeliverable/hardbounce
    const rejectResults = ["undeliverable", "hardbounce"]
    if (rejectResults.includes(verimailData.result)) {
      return Response.json(
        {
          success: false,
          message: "This email address appears to be invalid or undeliverable.",
          did_you_mean: verimailData.did_you_mean || null,
        },
        { status: 400 }
      )
    }

    // Warn about disposable emails
    if (verimailData.result === "disposable") {
      return Response.json(
        {
          success: false,
          message: "Disposable email addresses are not allowed. Please use a permanent email.",
        },
        { status: 400 }
      )
    }

    // Email is valid — store in Supabase (upsert to handle duplicates gracefully)
    const { error: dbError } = await supabase
      .from("demo_leads")
      .upsert(
        [{ email: email.toLowerCase().trim() }],
        { onConflict: "email" }
      )

    if (dbError) {
      console.error("[VerifyEmail] Supabase error:", dbError)
      // Don't block the user if DB insert fails — email is still valid
    }

    return Response.json({
      success: true,
      message: "Email verified",
      result: verimailData.result,
      did_you_mean: verimailData.did_you_mean || null,
    })
  } catch (error) {
    console.error("[VerifyEmail] Unexpected error:", error)
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
