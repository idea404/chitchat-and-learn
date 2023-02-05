import axios, { AxiosInstance } from 'axios';

export type PromptRequest = {
  prompt: string,
  model: string,
  max_tokens: number,
  temperature: number,
}

export class Client {
  client: AxiosInstance;
  apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || import.meta.env.VITE_API_KEY;
    if (!this.apiKey) {
      throw new Error("No API key provided");
    }
    this.client = axios.create({
      headers: {
        Authorization: "Bearer " + this.apiKey,
      },
    });
  }

  async getResponse(params: PromptRequest) {
    const response = await this.client.post("https://api.openai.com/v1/completions", params);
    return response.data.choices[0].text.trim();
  }
}
