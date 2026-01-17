// /packages/core/agent/FsAgent.ts
// The File System Agent: Handles all I/O, replacing the 'fs' library directly.

// 1. Corrected Imports: All necessary types, BaseAgent class, and 'fs' library are present.
import { AgentOutput, Task, FsInput, FsOutput } from "../task/types";
import { BaseAgent } from "./baseAgent";
import { promises as fs } from "fs";

/**
 * Acts as the dedicated agent for all file system operations.
 * This abstracts I/O, allowing other agents (like coderAgent) to focus on logic.
 */
export class FsAgent extends BaseAgent {
  async execute(task: Task<FsInput>): Promise<AgentOutput<FsOutput>> {
    // FsInput is correctly inferred from the Task type
    const { type, path, content } = task.input; 

    try {
      if (type === "read") {
        // Uses the imported 'fs' library
        const fileContent = await fs.readFile(path, "utf8");
        return { output: { status: "success", content: fileContent } };
      } 
      
      else if (type === "write") {
        if (!content) {
            throw new Error("Content is required for 'write' operation.");
        }
        await fs.writeFile(path, content, "utf8");
        return { output: { status: "success" } };
      } 
      
      else if (type === "delete") {
        await fs.unlink(path);
        return { output: { status: "success" } };
      }

      throw new Error(`Unsupported FS operation type: ${type}`);

    } catch (error) {
        // FsOutput is correctly used for error handling
        return { output: { status: "error", content: (error as Error).message } };
    }
  }
}