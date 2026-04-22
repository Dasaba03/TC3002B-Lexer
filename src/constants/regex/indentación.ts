/**
 * Combined indentation regex patterns for easier access
 */


//provisionales les ahce falta cambio por que ni idea de como hacerlo gracias 
export const NEWLINE = /\n/;
export const INDENT = /[ ]{4}/; // Assuming 4 spaces for indentation
export const DEDENT = /(?<![ ]{4})/;

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