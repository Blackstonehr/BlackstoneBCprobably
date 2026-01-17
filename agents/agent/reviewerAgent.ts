// /packages/core/agent/reviewerAgent.ts (Optimized for Security/VPD)
// Note: This assumes you have the CodeToolOutput type available
import { runToolModel } from "../engine/engine";
import { AgentOutput, ReviewInput, Task } from "../task/types";
import { BaseAgent } from "./baseAgent";
import { ContextManager } from "../util/ContextManager"; 

export class ReviewerAgent extends BaseAgent {
  async execute(task: Task<ReviewInput>): Promise<AgentOutput<{ status: "approved" | "rejected"; reason: string }>> {
    if (task.type !== "review") {
      throw new Error(`ReviewerAgent can only handle 'review' tasks, but got '${task.type}'.`);
    }

    // --- VPD: Use snippet for token cost reduction (Original Code is not sent) ---
    const snippet = ContextManager.getSnippet(task.input.originalContent, task.input.instruction);

    const system = `You are an expert code reviewer and security auditor. 
MANDATE 1 (Security): You must enforce the **Contract-First Security**. Reject any code that introduces a new data model without the mandatory 'authRoleRequired' field.
MANDATE 2 (VPD): Prioritize reviewing the Coder's self-reflection.
Your task is to determine if the changes implement the instruction AND adhere to security standards.`;

    const prompt = `
      File: ${task.input.file}
      Instruction: "${task.input.instruction}"

      Coder's Self-Reflection (Check this first):
      - Expected Change: ${task.input.coderOutput.reflection.expected}
      - Actual Change: ${task.input.coderOutput.reflection.actual}

      Relevant Code Snippet (VPD - for context):
      ---
      ${snippet}
      ---
      
      Modified Content Snippet: (The Coder's output applied to the relevant lines)
      ---
      ${ContextManager.getSnippet(task.input.coderOutput.modifiedContent, task.input.instruction)}
      ---

      Does this change correctly implement the instruction AND pass the security mandate?
    `;

    const schema = {
      status: { type: "string", enum: ["approved", "rejected"] },
      reason: "A brief explanation for your decision, explicitly referencing security if rejected.",
    };

    const result = await runToolModel({ system, prompt, schema: schema as any });
    return { output: result };
  }
}