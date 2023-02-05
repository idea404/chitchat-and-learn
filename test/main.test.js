// test Client from '../src/chatgpt/calls.ts' using jest

import { Client } from '../src/chatgpt/calls';

describe('Client', () => {
  it('should throw an error if no API key is provided', () => {
    expect(() => new Client()).toThrow();
  });
});