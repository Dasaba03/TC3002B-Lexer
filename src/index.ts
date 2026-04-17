import { TOKENS } from "./constants/tokens";
import * as fs from "fs";
import parseSourceCode from "./parse";


// Read file
const sourceCode = fs.readFileSync("source.py", "utf-8");

// Tokenize file
const tokens = parseSourceCode(sourceCode);
