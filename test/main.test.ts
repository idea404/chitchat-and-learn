import { Client } from "../src/chatgpt";
import { describe, it, expect } from "vitest";
import { PromptRequest } from "../src/chatgpt/calls";
import * as dotenv from "dotenv";

describe("Client", () => {
  it("should throw an error if no API key is provided", () => {
    expect(() => new Client()).toThrow();
    expect(() => new Client("apikey")).toBeDefined();
  });

  it("should return 'Maandag.'", async () => {
    dotenv.config({ path: '.env' });
    const apiKey = process.env.VITE_API_KEY;
    const client = new Client(apiKey);
    const params = {
      prompt: "Say this in Dutch: Monday.",
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 10,
    };
    const response = await client.getResponse(params);
    expect(response).toBe("Maandag");
  });
});
