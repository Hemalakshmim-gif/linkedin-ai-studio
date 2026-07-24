export const buildLinkedInPrompt = (data) => {
  const {
    title,
    description,
    techStack,
    features = "Not Provided",
    achievements = "None",
    tone = "Professional",
    audience = "General Audience",
    length = "Medium",
  } = data;

  return `
You are an expert LinkedIn content writer.

Generate a professional and engaging LinkedIn post.

Project Details:

Project Name:
${title}

Description:
${description}

Tech Stack:
${techStack}

Key Features:
${features}

Achievements:
${achievements}

Tone:
${tone}

Target Audience:
${audience}

Length:
${length}

-------------------------------------------------

Requirements:

1. Start with a powerful hook.
2. Explain the project naturally.
3. Mention the technologies used.
4. Mention important features.
5. Mention what was learned.
6. End with a question or call-to-action.
7. Add relevant emojis naturally.
8. Use short paragraphs.
9. Include bullet points when appropriate.
10. Add 5–8 relevant hashtags.
11. Return ONLY the LinkedIn post.

Do NOT write:
"Here is your LinkedIn post"

Do NOT use Markdown.

The output should be ready to paste directly into LinkedIn.
`;
};