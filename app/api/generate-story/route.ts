import { OpenRouter } from '@openrouter/sdk'

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return Response.json({ error: 'Prompt is required' }, { status: 400 })
    }

    const apiKey = process.env.OPENROUTER_KEY
    if (!apiKey) {
      return Response.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      )
    }

    const openrouter = new OpenRouter({
      apiKey,
    })

    const result = openrouter.callModel({
      model: 'openai/gpt-5.4',
      input: prompt,
      maxOutputTokens: 4000,
      temperature: 0.8,
    })

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const delta of result.getTextStream()) {
            controller.enqueue(encoder.encode(delta))
          }
          controller.close()
        } catch (err) {
          controller.error(err)
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    })
  } catch (error) {
    console.error('OpenRouter API error:', error)
    return Response.json(
      { error: 'Failed to generate story. Please try again.' },
      { status: 500 }
    )
  }
}
