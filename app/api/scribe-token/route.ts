import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js"

export async function GET() {
  const apiKey = process.env.ELEVENLABS_KEY
  if (!apiKey) {
    console.error("[ScribeToken] ELEVENLABS_KEY is not set in environment")
    return Response.json(
      { error: "ElevenLabs API key not configured" },
      { status: 500 }
    )
  }

  try {
    const elevenlabs = new ElevenLabsClient({ apiKey })
    const result = await elevenlabs.tokens.singleUse.create("realtime_scribe")
    console.log("[ScribeToken] Token created successfully, keys:", Object.keys(result))
    return Response.json({ token: result.token })
  } catch (error) {
    console.error("[ScribeToken] Failed to create scribe token:", error)
    return Response.json(
      { error: "Failed to create transcription token" },
      { status: 500 }
    )
  }
}
