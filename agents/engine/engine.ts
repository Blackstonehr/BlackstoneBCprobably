// /packages/core/engine/engine.ts (VPD Optimized)

import { client } from "./client";

interface ToolModelOptions<T extends Record<string, any>> {
  system?: string;
  prompt: string;
  schema: T;
  modelName?: string; // <--- NEW DYNAMIC PARAMETER
}

/**
 * Runs a generative model with a specific schema designed for tool reflection.
 * This is the new core function for all tool-based LLM calls.
 */
export async function runToolModel<T extends Record<string, any>>(
  options: ToolModelOptions<T>
): Promise<T> {
  const { system, prompt, schema, modelName } = options;
  
  // Dynamic Model Selection: Use the provided model, otherwise default to a fast, cheap one.
  const modelToUse = modelName || "gemini-2.5-flash"; // Default to fast/cheap for general tasks

  const model = client.getGenerativeModel({
    model: modelToUse, 
    systemInstruction: system,
  });

  const generationConfig = {
    temperature: 0, 
    responseMimeType: "application/json",
    responseSchema: { type: "object", properties: schema },
  };

  try {
    const result = await model.generateContent(prompt, generationConfig);
    const response = result.response;
    const text = response.text();

    return JSON.parse(text) as T;
  } catch (error) {
    console.error("Error running model:", error);
    throw new Error(
      `Tool model execution failed: ${(error as Error).message}`
    );
  }
}