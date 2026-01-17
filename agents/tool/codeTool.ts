import { runToolModel } from "../../../engine";
import { promises as fs } from "fs";

interface CodeToolParams {
  file: string;
  instruction: string;
  originalContent: string;
}

interface CodeToolOutput {
  success: boolean;
  data: {
    file: string;
    content: string;
  };
  logs: string[];
  reflection: {
    expected: string;
    actual: string;
    delta: string;
    next_steps: string[];
  };
}

/**
 * A stateless tool for modifying code. It reads a file, applies an instruction,
 * and returns the new content along with a reflection report.
 * It does NOT write to disk; that is a separate tool's responsibility.
 */
export async function codeTool(
  params: CodeToolParams
): Promise<CodeToolOutput> {
  const { file, instruction, originalContent } = params;

  const system = `You are an expert software engineer. Your task is to modify a file to satisfy an instruction.
You will be judged on your ability to produce the complete, correct, and minimal code required.
You must also reflect on your work, stating what you expected to change, what you actually changed, and the difference between them.`;

  const prompt = `
    File: ${file}
    Instruction: "${instruction}"

    Original Content:
    ---
    ${originalContent}
    ---

    Your task is to return the complete, updated file content and a reflection on your changes.
  `;

  const schema = {
    content: "The complete and updated file content as a single string.",
    reflection_expected: "A brief description of the changes you planned to make.",
    reflection_actual: "A brief description of the changes you actually made.",
  };

  const result = await runToolModel({ system, prompt, schema });

  const output: CodeToolOutput = {
    success: true,
    data: { file, content: result.content },
    logs: ["CodeTool executed successfully."],
    reflection: {
      expected: result.reflection_expected,
      actual: result.reflection_actual,
      delta: "TODO: Implement content diffing to generate delta.",
      next_steps: ["Write content to disk.", "Verify changes with a test or review."],
    },
  };

  return output;
}