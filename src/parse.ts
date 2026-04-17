import { TOKENS } from "./constants/tokens";

/**
 * Parses the source code and returns an array of tokens.
 * @param source The source code to be tokenized
 * @returns An array of tokens extracted from the source code
 */
const parseSourceCode = (source: string): TOKENS[] => {
  for (let i = 0; i < source.length; i++) {
    // ?? Replace with proper tokenization logic.

    const char = source[i];
    if (!char) continue; // Skip if char is undefined or null

    if (char.match(/[a-zA-Z_]/)) {
      // todo Handle identifier
    } else if (char.match(/[0-9]/)) {
      // todo Handle number
    } else if (char === '"') {
      // todo Handle string
    } else if (char.match(/[\+\-\*\/=]/)) {
      // todo Handle operator
    } else if (char.match(/\s/)) {
      // todo Handle whitespace
    } else {
      // todo Handle punctuation or other tokens
    }
  }
  return [];
};

export default parseSourceCode;