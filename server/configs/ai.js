import OpenAI from "openai";

const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL
});

process.env.OPENAI_MODEL


export default ai;
// const response = await ai.chat.completions.create({
//     model: "gemini-2.0-flash",
//     messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         {
//             role: "user",
//             content: "Explain to me how AI works",
//         },
//     ],
// });

// console.log(response.choices[0].message);