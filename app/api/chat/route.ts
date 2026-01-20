import { GoogleGenerativeAI } from "@google/generative-ai";
import { getResumeContext } from "@/app/lib/resumeContext";

export const maxDuration = 30;

export async function POST(req: Request) {
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        console.error("Missing GOOGLE_API_KEY");
        return new Response("Server Configuration Error: Missing API Key", { status: 500 });
    }

    try {
        const { messages } = await req.json();
        const systemPrompt = getResumeContext();

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: systemPrompt,
        });

        // Convert messages to history format required by Gemini
        // Note: Gemini history excludes the latest message which is sent in sendMessage
        const history = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
        }));

        const chat = model.startChat({
            history,
        });

        const lastMessage = messages[messages.length - 1].content;
        const result = await chat.sendMessageStream(lastMessage);

        const encoder = new TextEncoder();
        const readable = new ReadableStream({
            async start(controller) {
                for await (const chunk of result.stream) {
                    const chunkText = chunk.text();
                    if (chunkText) {
                        controller.enqueue(encoder.encode(chunkText));
                    }
                }
                controller.close();
            },
        });

        return new Response(readable, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Cache-Control": "no-cache",
                "X-Accel-Buffering": "no",
            },
        });
    } catch (err) {
        console.error("API Error:", err);
        return new Response("Internal Server Error", { status: 500 });
    }
}
