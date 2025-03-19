import OpenAI from 'openai';
import { systemPrompt } from './systemPrompt';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getResponse(prompt : string ){
    const completion: any = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
      });
      
      return completion.choices[0].message.content
}