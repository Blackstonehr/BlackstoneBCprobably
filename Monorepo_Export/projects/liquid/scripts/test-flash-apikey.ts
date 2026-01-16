
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import path from 'path';

// Force load .env from root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY not found in .env');
  process.exit(1);
}

const MODEL_ID = 'gemini-1.5-flash';

async function callGeminiFlash() {
  console.log(`>>> Initializing Google Generative AI (API Key)...`);

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_ID });

  console.log(`>>> Sending request to model: ${MODEL_ID}...`);
  try {
    const result = await model.generateContent("Explain how to access the Gemini Flash API in 3 sentences.");
    const response = await result.response;
    const text = response.text();
    
    console.log('>>> Response received:');
    console.log('\n--- Model Output ---\n');
    console.log(text);
  } catch (error) {
    console.error('Error calling Gemini API:', error);
  }
}

callGeminiFlash();
