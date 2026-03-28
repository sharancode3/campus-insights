import { NextResponse } from "next/server";

type ChatRequest = {
  message?: string;
};

const HF_API_ENDPOINT = "https://router.huggingface.co/v1/chat/completions";
const HF_MODEL = process.env.HF_MODEL || "CohereLabs/tiny-aya-fire";
const HF_API_KEY =
  process.env.HF_API_KEY ||
  process.env.HUGGINGFACE_API_KEY ||
  process.env.HUGGING_FACE_API_KEY ||
  "";

const FALLBACK_REPLY =
  "I could not generate a live assistant reply right now. You can ask me about admissions, academics, facilities, placements, or student clubs.";

const PREDEFINED_RESPONSES: Array<{ keywords: string[]; reply: string }> = [
  {
    keywords: ["how do i apply", "how to apply", "apply now", "application process", "admission process"],
    reply:
      "You can apply through the Admissions section of the portal. Navigate to Admissions -> Apply Now and fill the online form.",
  },
  {
    keywords: ["placement statistics", "placement stat", "placements", "recruiter", "recruiters"],
    reply: "Our placement statistics and recruiter list are available in the Placements section.",
  },
  {
    keywords: ["academic calendar", "calendar", "semester dates", "exam schedule"],
    reply: "You can find the academic calendar under the Academics section of the portal.",
  },
  {
    keywords: ["campus facilities", "facilities", "labs", "library", "hostel", "sports complex"],
    reply:
      "Our campus offers modern labs, libraries, hostels, sports complexes, and innovation centers.",
  },
  {
    keywords: ["student clubs", "clubs", "extracurricular", "activities"],
    reply: "Student clubs and extracurricular activities are listed in the Clubs section of the website.",
  },
];

function getPredefinedResponse(message: string): string {
  const normalized = message.toLowerCase();
  const match = PREDEFINED_RESPONSES.find((entry) =>
    entry.keywords.some((keyword) => normalized.includes(keyword))
  );
  return match ? match.reply : "";
}

function parseAssistantReply(payload: unknown): string {
  if (!payload || typeof payload !== "object") {
    return "";
  }

  const data = payload as {
    choices?: Array<{
      message?: {
        content?: string;
      };
    }>;
  };

  const maybeReply = data.choices?.[0]?.message?.content;
  return typeof maybeReply === "string" ? maybeReply.trim() : "";
}

export async function POST(request: Request) {
  let message = "";

  try {
    const body = (await request.json()) as ChatRequest;
    message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    if (!HF_API_KEY) {
      const predefined = getPredefinedResponse(message);
      return NextResponse.json({ reply: predefined || FALLBACK_REPLY });
    }

    const response = await fetch(HF_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${HF_API_KEY}`,
      },
      body: JSON.stringify({
        model: HF_MODEL,
        messages: [
          {
            role: "system",
            content:
              "You are Campus Insights Assistant for a university website portal. Reply only in English, even if the user asks in another language. Never respond in Hindi or any non-English language unless the user explicitly asks for translation. Reply in 2-4 concise sentences, keep tone helpful and factual, and focus on admissions, academics, facilities, placements, campus life, and student support.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 220,
        temperature: 0.4,
      }),
    });

    if (!response.ok) {
      const predefined = getPredefinedResponse(message);
      return NextResponse.json({ reply: predefined || FALLBACK_REPLY });
    }

    const payload = (await response.json()) as unknown;
    const reply = parseAssistantReply(payload);

    if (reply) {
      return NextResponse.json({ reply });
    }

    const predefined = getPredefinedResponse(message);
    return NextResponse.json({ reply: predefined || FALLBACK_REPLY });
  } catch {
    const predefined = getPredefinedResponse(message);
    return NextResponse.json({ reply: predefined || FALLBACK_REPLY });
  }
}
