const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
  pattern: "alive3",
  desc: "alive",
  react: '📚',
  filename: __filename
}, async (bot, message, args, options) => {
  const { from, quoted, reply, pushname } = options;

  try {

    const menuText = `*👋 Hello ${pushname}*
    
     *꧁ྀི*𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃*ྀི꧂*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*𝑹𝒖𝒏𝑻𝒊𝒎𝒆 :* _${runtime(process.uptime())}_
*𝑹𝒂𝒎 𝑻𝒊𝒎𝒆 :* _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
*𝑩𝒐𝒕 𝑵𝒂𝒎𝒆 :* _𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃_
*𝑶𝒘𝒏𝒆𝒓 :* _CYBER RUSH MODZ ( Nipun Harshana )_
* 𝑹𝒆𝒑𝒐 :* _https://github.com/NipunHarshana1119/QUEEN-RASHU-MD-V1_

*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭╼╼╼╼╼╼╼╼╼╼*
*├➤ 1  • ʙᴏᴛ ꜱᴘᴇᴇᴅ*
*├➤ 2  • repo*
*╰╼╼╼╼╼╼╼╼╼╼*

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

    // Send Menu Message
 const sentMenuMessage = await bot.sendMessage(
  from,
  {
    image: { url: "https://i.ibb.co/BsjkCDP/9555.jpg" },
    caption: menuText,
    contextInfo: {
      mentionedJid: [],
      isForwarded: true,
      forwardingScore: 1,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363368882758119@newsletter",
        newsletterName: "ꪶ𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃ꫂ",
        serverMessageId: 999,
      },
    },
  },
  { quoted: message }
);

    const menuMessageId = sentMenuMessage.key.id;

    // Define responses for each option
    const menuResponses = {
      '1': { imageCaption: `*𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃 𝐒𝐏𝐄𝐄𝐃 : ${ping}ms*
      
      > *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*` },

      '2': { imageCaption: 
`*╭┉┉※𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐈𝐍𝐅𝐎※┉┉╮*

*☬ ʋҽɾƚισɳ              :* _v0.1_
*☬ ԃҽʋҽʅσρҽɾ        :* _Nipun Harshana_
*☬ ɾҽρσ υʂҽɾɳαɱҽ :* _NipunHarshana0_

*╭┉┉┉┉┉┉┉┉※ 𝐋𝐈𝐍𝐊𝐒 ※┉┉┉┉┉┉┉┉╮*

* *𝑩𝑶𝑻 𝑮𝑰𝑻𝑯𝑼𝑩*
> https://github.com/NipunHarshana0/QUEEN-RASHU-MD-V1
* *𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷 𝑮𝑹𝑶𝑼𝑷*
> https://chat.whatsapp.com/LmfWnYTjh605xVz5J1tgnq
* *𝑶𝑾𝑵𝑬𝑹 𝑪𝑶𝑵𝑻𝑨𝑪𝑻*
> wa.me/94727319036
* *𝒀𝑶𝑼𝑻𝑼𝑩𝑬 𝑪𝑯𝑨𝑵𝑵𝑬𝑳*
> https://youtube.com/@rashumodz_0715?si=5pg_wumwy6VzizMP

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*` },

      '6262771818': { imageCaption: 
`> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*` },

      'eydjs4': { imageCaption: 
`> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*` },

      '63y3jdj': { imageCaption: 
`> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*` },

      'rydudh6': { imageCaption: 
`> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*` },

      'fufjfj7': { imageCaption: 
`> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*` },

      'fjdjdndndjdh8': { imageCaption: 
`> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*` },

      '9dhdh': { imageCaption: 
`> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*` },

      '1xndndbdb0': { imageCaption: 
`> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*` },
    };

    // Listen for replies to the menu message
    bot.ev.on("messages.upsert", async event => {
      const newMessage = event.messages[0];
      if (!newMessage.message) return;

      const userReply = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const isReplyToMenu = newMessage.message.extendedTextMessage?.contextInfo?.stanzaId === menuMessageId;

if (isReplyToMenu) {
  const response = menuResponses[userReply];
  if (response) {
    // Send image response
    await bot.sendMessage(
  from,
  {
    image: { url: "https://i.ibb.co/BsjkCDP/9555.jpg" },
    caption: response.imageCaption,
    contextInfo: {
      mentionedJid: [],
      isForwarded: true,
      forwardingScore: 1,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363368882758119@newsletter",
        newsletterName: "ꪶ𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃ꫂ",
        serverMessageId: 999,
      },
    },
  },
  { quoted: newMessage }
);
  } else {
    // Handle invalid input
    await bot.sendMessage(from, {
      text: "*පිස්සෙක් වෙන්නෙ නැතුව තියෙන Number දෙක විතරක් Type කරන්න 😒💗*"
    }, { quoted: newMessage });
  }
}
    });
  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});
