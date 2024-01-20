# Arin the Chat_bot

Arin the Chat_bot is a simple Telegram bot powered by the OpenAI GPT-3.5 language model. You can interact with the bot by sending messages to it, and it will respond with generated text based on the input it receives.

## Getting Started

### Prerequisites

Before running the bot, make sure you have the following:

- [Node.js](https://nodejs.org/) installed on your machine
- [npm](https://www.npmjs.com/) (Node Package Manager) for installing dependencies
- Telegram bot token (get it from the [BotFather](https://core.telegram.org/bots#botfather))
- OpenAI API key (sign up for access on the [OpenAI platform](https://beta.openai.com/signup/))

### Installation

**1. Clone the repository:**

 ```bash
   git clone https://github.com/your-username/arin-chat-bot.git
   cd arin-chat-bot
 ```

**2. Install dependencies:**

  ```bash
npm install
  ```

**3. Update the configuration:**

Open the index.js file and replace the placeholder values for botToken and open_AI_TOKEN with your actual Telegram bot token and OpenAI API key.

### Usage
Run the bot using the following command:

`bash
node index.js
`
- The bot will be active and respond to messages on Telegram.

**Features**

- In the telegram bots window type ```/start```: Starts the conversation with the bot.

- Chat Interaction: The bot listens to all incoming messages and generates responses using the OpenAI GPT-3.5 language model.

**4. Configuration**

- ***max_tokens:*** Maximum number of tokens for OpenAI response.
- ***model:*** Choose the OpenAI model for text genera-tion.
- temperature Control the randomness of the generated text.

Adjust these parameters in the openAI.createCompletion function in the index.js file as needed.

