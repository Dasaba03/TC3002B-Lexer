/**
 * Regex patterns for Python keywords
 * Word boundaries (\b) ensure we match complete words only
 */

// Function definition
export const DEF = /\bdef\b/;

// Return statement
export const RETURN = /\breturn\b/;

// Conditional statements (if/else/elif)
export const IF = /\bif\b/;
export const ELSE = /\belse\b/;
export const ELIF = /\belif\b/;

// Loops
export const FOR = /\bfor\b/;
export const WHILE = /\bwhile\b/;

// Membership and identity operators
export const IN = /\bin\b/;
export const IS = /\bis\b/;

// Logical operators
export const AND = /\band\b/;
export const OR = /\bor\b/;
export const NOT = /\bnot\b/;

// Boolean and None literals
export const TRUE = /\bTrue\b/;
export const FALSE = /\bFalse\b/;
export const NONE = /\bNone\b/;

// Control flow statements
export const PASS = /\bpass\b/;
export const BREAK = /\bbreak\b/;
export const CONTINUE = /\bcontinue\b/;

/**
 * Combined keyword regex patterns for easier access
 */
export const keywords = {
  DEF,
  RETURN,
  IF,
  ELSE,
  ELIF,
  FOR,
  WHILE,
  IN,
  IS,
  AND,
  OR,
  NOT,
  TRUE,
  FALSE,
  NONE,
  PASS,
  BREAK,
  CONTINUE,
};

/**
 * Array of all keyword patterns with their names for iteration
 */
export const keywordList = [
  { name: "DEF", pattern: DEF },
  { name: "RETURN", pattern: RETURN },
  { name: "IF", pattern: IF },
  { name: "ELSE", pattern: ELSE },
  { name: "ELIF", pattern: ELIF },
  { name: "FOR", pattern: FOR },
  { name: "WHILE", pattern: WHILE },
  { name: "IN", pattern: IN },
  { name: "IS", pattern: IS },
  { name: "AND", pattern: AND },
  { name: "OR", pattern: OR },
  { name: "NOT", pattern: NOT },
  { name: "TRUE", pattern: TRUE },
  { name: "FALSE", pattern: FALSE },
  { name: "NONE", pattern: NONE },
  { name: "PASS", pattern: PASS },
  { name: "BREAK", pattern: BREAK },
  { name: "CONTINUE", pattern: CONTINUE },
];
