import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "techtrack_ai", // Unique app ID
  name: "TechTrack_AI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
