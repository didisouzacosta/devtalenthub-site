import OpenAI from "openai"

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true })
const model = "gpt-3.5-turbo"

export async function summarize(content) {
    const completion = await openai.chat.completions.create({
        model,
        messages: [
            {
                "role": "system",
                "content": "Summarize content provided formatted in markdown style."
            },
            {
                "role": "user",
                "content": content
            }
        ],
        temperature: 0,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })

    return completion.choices.map((choice) => choice.message?.content)
}