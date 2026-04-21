import * as fs from "fs";
import * as path from "path";

/**
 * Read and return the parse source code
 */
const readTritonFile = (fileName: string): string => {
  const tritonPath = path.resolve(__dirname, `../input/${fileName}.py`);
  const sourceCode = fs.readFileSync(tritonPath, "utf-8");
  return sourceCode;
};

export default readTritonFile;
