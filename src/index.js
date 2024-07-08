/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		// const { GoogleGenerativeAI } = require("@google/generative-ai");

		// const openai = new OpenAI({
		// 	apiKey: env.OPENAI_API_KEY,
		// 	baseURL: "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai"
		// });
		// console.log("process GOOGLE AI API KEY:");
		// console.log(process.env.GOOGLE_AI_API_KEY);
		console.log("GOOGLE AI API KEY:");
		console.log(env.GOOGLE_AI_API_KEY);

		// try {
		// 	// Access your API key as an environment variable (see "Set up your API key" above)
		// 	// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
		// 	const genAI = new GoogleGenerativeAI(env.GOOGLE_AI_API_KEY);
		// 	const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
		// 	// const chatCompletion = await openai.chat.completions.create({
		// 	// 	model: "gpt-3.5-turbo-0613",
		// 	// 	messages: [{ role: "user", content: "What is a neuron?" }],
		// 	// 	max_tokens: 100,
		// 	// });

		// 	// const response = chatCompletion.choices[0].message;

		// 	// return new Response(JSON.stringify(response));

		// 	const prompt = "Write a story about a AI and magic"
		// 	const result = await model.generateContent(prompt);
		// 	const response = await result.response;
		// 	const text = response.text();
		// 	// return new Response(JSON.stringify(text));
		// 	return new Response(text);

		// } catch (e) {
		// 	return new Response(e);
		// }
		return new Response("GOOGLE AI API KEY");
	},
};