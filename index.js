
const { Client, GatewayIntentBits, Partials } = require('discord.js');
require('dotenv').config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

const openaiApiKey = process.env.OPENAI_API_KEY;
const discordToken = process.env.DISCORD_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;
  console.log(`Received message: ${msg.content}`);

  if (msg.content.startsWith('!ask')) {
    const prompt = msg.content.slice(5).trim();
    console.log(`Prompt: ${prompt}`);

    if (!prompt) {
      msg.reply('Please ask a question after !ask.');
      return;
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 500,
        }),
      });

      const data = await response.json();

      if (data && data.choices && data.choices.length > 0) {
        console.log('Debug:', JSON.stringify(data.choices[0].message, null, 2));
        
        if (data.choices[0].message && data.choices[0].message.content) {
          const reply = data.choices[0].message.content.trim();
          msg.reply(reply || 'Sorry, I couldn\'t generate a response.');
        } else {
          console.error('Unexpected API response:', data);
          msg.reply("Error can't generate the prompt");
        }
      }
           
    } catch (error) {
      console.error(error);
      msg.reply("Error can't generate the prompt");
    }
  }
});

client.login(discordToken);
