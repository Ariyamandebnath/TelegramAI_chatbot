const Telegram = require('node-telegram-bot-api');
const { Configuration, OpenAIApi } = require("openai");

const botToken = "write the telegram bot_token";
const open_AI_TOKEN = "Your api key";

const config = new OpenAIApi.Configuration({
    apiKey: open_AI_TOKEN,
});

const openAI = new OpenAIApi(config);

const bot = new Telegram(botToken, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome to Arin the Chat_bot.\nAsk me anything!!");
});

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;

    const reply = await openAI.createCompletion({
        max_tokens: 100,
        model: "ada", // use model as per your choice of affordability
        prompt: msg.text,
        temperature: 0.5,
    });

    bot.sendMessage(chatId, reply.data.choices[0].text);
});
