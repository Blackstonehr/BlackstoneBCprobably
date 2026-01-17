// /packages/core/engine/client.ts

import { GoogleGenAI } from "@google/genai";

// Initializes the client using the GEMINI_API_KEY environment variable.
// This is the single connection point for the LLM.
export const client = new GoogleGenAI({}); 
// NOTE: Requires 'npm install @google/genai'