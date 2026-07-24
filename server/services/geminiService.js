import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Models to try in order
const MODELS = [
  "gemini-2.0-flash",
  "gemini-2.0-flash-001",
  "gemini-flash-latest",
];

export const generateLinkedInPost = async (prompt) => {
  let lastError = null;

  for (const model of MODELS) {
    try {
      console.log(`🤖 Trying model: ${model}`);

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
      });

      // Different SDK versions expose the text differently
      const text =
        response.text ||
        response.outputText ||
        response.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        throw new Error("No text returned from Gemini.");
      }

      console.log(`✅ Success using ${model}`);

      return text;
    } catch (error) {
      console.error(`❌ ${model} failed`);

      if (error.status) {
        console.error("Status:", error.status);
      }

      if (error.message) {
        console.error("Message:", error.message);
      }

      lastError = error;
    }
  }

  throw new Error(
    lastError?.message || "Failed to generate LinkedIn post using all available models."
  );
};