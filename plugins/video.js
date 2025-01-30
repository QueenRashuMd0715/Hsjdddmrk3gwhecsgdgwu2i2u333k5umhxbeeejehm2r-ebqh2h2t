
const axios = require('axios');
const yts = require('yt-search');
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
  pattern: 'video',
  react: '🎥',
  desc: 'Search and download YouTube videos',
  category: 'media',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply(`*Example*: .video ප්‍රේමායුධ Song`);

    const searchResults = await yts(q);
    const video = searchResults.all[0];

    if (!video) return reply(`*No video found for ${q}*`);

    const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4`;
    const apiResponse = await axios.get(apiUrl, { params: { url: video.url } });

    if (apiResponse.data.success) {
      const { title, download_url } = apiResponse.data.result;

      await reply(`*╭╼╼╼ ● 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 ● ╼╼╼╮*\n\n* *QUEEN RASHU MD VIDEO DAWNLODER 🎥*\n\n*╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼ ✵*\n*│* Song Name : ${title}\n*│* Duration : ${yts.timestamp}\n*╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼ ✵*\n\n* *Auto Sending Your Seaching Video👇*\n\n*✵ ╼╼╼╼╼( ʀᴀꜱʜᴜ )╼╼╼╼╼ ✵*\n\n> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*`);

      await conn.sendMessage(m.chat, { video: { url: download_url }, mimetype: 'video/mp4', caption: `📹 *${title}*\n\n> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*` }, { quoted: m });
    } else {
      reply(`*Error downloading video! Please try again later.*`);
    }
  } catch (error) {
    console.error('Error during video command:', error);
    reply(`*An error occurred while processing your request.*`);
  }
});
