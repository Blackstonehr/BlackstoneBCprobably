import { VertexAI } from '@google-cloud/vertexai';

const PROJECT_ID = 'mercurial-shape-479510-k6';
const LOCATION = 'us-central1';
const MODEL_ID = 'gemini-1.5-flash-001';

async function callGeminiFlash() {
    console.log(`>>> Initializing Vertex AI for project ${PROJECT_ID} in ${LOCATION}...`);

    const vertex_ai = new VertexAI({
        project: PROJECT_ID,
        location: LOCATION,
    });

    const model = vertex_ai.preview.getGenerativeModel({
        model: MODEL_ID,
        generationConfig: {
            'maxOutputTokens': 2048,
            'temperature': 0.9,
            'topP': 1,
        },
    });

    const request = {
        contents: [{ role: 'user', parts: [{ text: 'Explain how to access the Gemini Flash API in 3 sentences.' }] }],
    };

    console.log(`>>> Sending request to model: ${MODEL_ID}...`);
    try {
        const result = await model.generateContent(request);
        const response = await result.response;

        console.log('>>> Response received:');
        console.log(JSON.stringify(response, null, 2));

        const text = response.candidates?.[0].content.parts[0].text;
        if (text) {
            console.log('\n--- Model Output ---\n');
            console.log(text);
        }
    } catch (error) {
        console.error('Error calling Gemini API:', error);
    }
}
callGeminiFlash();
