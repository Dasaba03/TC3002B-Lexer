/**
 * Combined indentation regex patterns for easier access
 */

export const NEWLINE = /\r?\n/;
export const INDENT = /^[ \t]+/;
export const DEDENT = /(?<![\s\S])/;

export const indentation = {
  NEWLINE,
  INDENT,
  DEDENT,
};

/**
 * Array of all indentation patterns with their names for iteration
 */
export const indentationList = [
  { name: "NEWLINE", pattern: NEWLINE },
  { name: "INDENT", pattern: INDENT },
  { name: "DEDENT", pattern: DEDENT },
];