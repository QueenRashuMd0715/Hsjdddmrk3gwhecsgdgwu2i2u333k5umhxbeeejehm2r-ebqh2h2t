const axios = require("axios");
const fetch = require("node-fetch");
const {
  sleep
} = require("../lib/functions");
const {
  cmd,
  commands
} = require('../command');
cmd({
  pattern: "help",
  desc: "bbh.",
  category: "loading System",
  react: '👋',
  filename: __filename
}, async (client, message, args, { from, reply }) => {
  try {
    const sentMessage = await client.sendMessage(from, { text: '> *𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐇𝐄𝐋𝐏 👋*' });
    const heartSequence = ['Loading Start. . . ', 'Nipun Harshana', '▰▰▰▱▱▱▱▱▱▱▱▱ 10%', '▰▰▰▰▱▱▱▱▱▱▱▱ 20%', '▰▰▰▰▰▱▱▱▱▱▱▱ 30%', '▰▰▰▰▰▰▱▱▱▱▱▱ 40%', '▰▰▰▰▰▰▰▱▱▱▱▱ 50%', '▰▰▰▰▰▰▰▰▱▱▱▱ 60%', '▰▰▰▰▰▰▰▰▰▱▱▱ 70%', '▰▰▰▰▰▰▰▰▰▰▱▱ 80%', '▰▰▰▰▰▰▰▰▰▰▰▱ 90%', '▰▰▰▰▰▰▰▰▰▰▰▰ 100%', 'COMPLETE LOADING ☘️👋','*‼️ආ පැටිටෝ කෝමද 😁*', '*𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 Help 🔧*\n\n~‼️ 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 ‼️~\n\n*🔐 .st*\n> Change Bot Setting\n*🔐 .menu*\n> Bot Command List\n*🔐 .alive/alive1/alive2*\n> Bot Online Test\n*🔐 .ping*\n> Bot Speed Test\n*🔐 .system*\n> Bot Setting Check\n*🔐 .repo*\n> Bot Github\n*🔐 .pair*\n> Session Id (WhatsApp Link)\n*🔐 .botupdate*\n> Bot New Updateing\n*🔐 .restart*\n> Bot Restarting\n\n*ᡕᠵ᠊ᡃ່࡚ࠢ࠘⸝່ࠡ᠊߯ᡁࠣ࠘᠊᠊ࠢ࠘气亠 °           °     °   °*\n\n> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*'];

    for (const heart of heartSequence) {
      await new Promise(resolve => setTimeout(resolve, 500));
      await client.relayMessage(from, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14,
          editedMessage: {
            conversation: heart
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    reply("❌ *Error!* " + error.message);
  }
});

/
