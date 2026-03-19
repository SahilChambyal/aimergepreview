export async function POST(req: Request) {
  try {
    const { audio, format } = await req.json()

    if (!audio) {
      return Response.json({ error: 'Audio data is required' }, { status: 400 })
    }

    const apiKey = process.env.OPENROUTER_KEY
    if (!apiKey) {
      return Response.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      )
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-audio',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Transcribe the following audio exactly as spoken. Return only the transcription text, nothing else. No quotes, no labels, no explanation.',
              },
              {
                type: 'input_audio',
                input_audio: {
                  data: audio,
                  format: format || 'webm',
                },
              },
            ],
          },
        ],
      }),
    })

    if (!response.ok) {
      const errBody = await response.text()
      console.error('Transcription API error:', response.status, errBody)
      return Response.json(
        { error: `Transcription failed (${response.status})` },
        { status: 502 }
      )
    }

    const data = await response.json()
    const text = data.choices?.[0]?.message?.content?.trim() || ''

    return Response.json({ text })
  } catch (error) {
    console.error('Transcription error:', error)
    return Response.json(
      { error: 'Failed to transcribe audio' },
      { status: 500 }
    )
  }
}
