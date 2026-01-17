// /packages/core/agent/coderAgent.ts (Optimized and Corrected)

import { codeTool } from "../tool/codeTool"; // <--- ADDED: Critical Fix
import { AgentOutput, Task, FsInput } from "../task/types";
import { BaseAgent } from "./baseAgent";
import { FsAgent } from "./fsAgent";
import { ContextManager } from "../util/ContextManager";

// NOTE: CoderInput/CoderOutput are local to this agent, so they can stay here.
export interface CoderInput {
  file: string;
  instruction: string;
}

export interface CoderOutput {
  file: string;
  status: "written" | "skipped";
  reasoning: string;
  reflection: any;
}

export class CoderAgent extends BaseAgent {
    async execute(task: Task<CoderInput>): Promise<AgentOutput<CoderOutput>> {
        const fsAgent = new FsAgent();
        
        // 1. Get current file content
        // Uses the FsInput type from central types.ts
        const fileContent = await fsAgent.execute({ 
            type: "read", 
            input: { path: task.input.file } 
        } as Task<FsInput>); 
        const originalContent = fileContent.output.content || '';

        // 2. VPD Optimization: Use ContextManager to get a snippet
        const snippet = ContextManager.getSnippet(originalContent, task.input.instruction); 

        // 3. Execute the codeTool (which forces reflection)
        const toolOutput = await codeTool({ 
            file: task.input.file, 
            instruction: task.input.instruction, 
            originalContent: snippet // Send the optimized snippet!
        });

        // 4. Write the new content to disk
        await fsAgent.execute({
            type: "write",
            input: { path: task.input.file, content: toolOutput.data.content },
        } as Task<FsInput>);

        const reasoning = `Modified file '${task.input.file}' based on instruction, with reflection: ${toolOutput.reflection.actual}`;
        return { output: { file: task.input.file, status: "written", reasoning, reflection: toolOutput.reflection } };
    }
}