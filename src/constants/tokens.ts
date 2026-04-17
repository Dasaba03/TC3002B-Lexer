/**
 * This file defines the various token types that the lexer will recognize in the source code.
 */
enum TOKENS {
    IDENTIFIER = "IDENTIFIER",
    NUMBER = "NUMBER",
    STRING = "STRING",
    OPERATOR = "OPERATOR",
    KEYWORD = "KEYWORD",
    PUNCTUATION = "PUNCTUATION",
    COMMENT = "COMMENT",
    WHITESPACE = "WHITESPACE",
    EOF = "EOF"   
}

export { TOKENS };