import { Client } from "../src/chatgpt";
import { describe, it, expect } from "vitest";

describe("Client", () => {
  it("should throw an error if no API key is provided", () => {
    expect(() => new Client()).toThrow();
    expect(() => new Client("apikey")).toBeDefined();
  });
});
