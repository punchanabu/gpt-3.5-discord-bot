# GPT-3.5-discord-bot

## Introduction
   using GPT-3.5 from OpenAI api into a Discord bot. Just hit it with an `!ask` command along with your question or topic, and you'll get a response. 
## Features

- **Chatting**: Use `!ask` to start a conversation with the bot.

## Prerequisites

- You'll need Node.js installed on your machine.
- You'll also need a Discord bot token and an OpenAI GPT-3 API key.

## Installation

1. Clone the repository
   ```bash
      git clone https://github.com/punpunkeshin05/gpt-3.5-discord-bot/edit/main/README.md
   ```
2. Navigate to the project directory
   ```bash
      cd GPT-3.5-Discord-Bot
   ```
3. install a required package
   ```bash
      npm install
   ```
4. Add your Discord bot token and OpenAI API key to a .env file
   ```makefile
      DISCORD_BOT_TOKEN=your_discord_bot_token
      OPENAI_API_KEY=your_openai_api_key
   ```
5. Invite your bot to your discord server
5. Run the bot
   ```bash
      node index.js
   ```
## Usage
- You can type your prompt start with !ask in which your bot has the permission to read and send the message
   ```bash
      !ask What is the meaning of life?
   ```
