const { cmd, commands } = require("../command");
const yts = require("yt-search");
const axios = require("axios");
const { fetchJson } = require("../lib/functions");

const commandDetails = {
  pattern: "song",
  desc: "Download Song",
  react: "🎵",
  use: ".song <YouTube URL>",
  category: "download",
  filename: __filename,
};

cmd(commandDetails, async (bot, message, args, { from, q, reply, sender }) => {
  try {
    if (!q) {
      return reply("❌ Please provide a title or URL. ❌");
    }

    const searchResults = await yts(q);
    if (!searchResults.videos.length) {
      return reply("❌ No results found. Try another keyword. ❌");
    }

    const video = searchResults.videos[0];
    const videoUrl = video.url;
    const videoTitle = video.title.length > 20 ? video.title.substring(0, 20) + "..." : video.title;

    const downloadMessage = `*╭╼╼╼╼╼╼╼╼ ● 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 ● ╼╼╼╼╼╼╼╼╮*
     
* *QUEEN RASHU MD SONG DOWNLOADER 🎧*

*╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼ ✵*
*│* Song Name : ${videoTitle}
*╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼ ✵*

* *Reply Required Format 👇*

*✵ ╼╼╼╼╼( ʀᴀꜱʜᴜ )╼╼╼╼╼ ✵*

*1 |: AUDIO  MP3 TYPE 🎶*
*2 |: AUDIO  DOC TYPE 📂*
*3 |: AUDIO VOICE MODE 🎤*

> *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 🌟*`;

    const messageContext = {
      image: { url: video.thumbnail },
      caption: downloadMessage,
    };

    const initialMessage = await bot.sendMessage(from, messageContext, { quoted: message });

    const fetchAudio = await fetchJson(`https://dark-shan-yt.koyeb.app/download/ytmp3?url=${videoUrl}`);
    if (!fetchAudio || !fetchAudio.data || !fetchAudio.data.download) {
      return reply("❌ Error fetching download link. Try again later. ❌");
    }
    const downloadLink = fetchAudio.data.download;

    bot.ev.on("messages.upsert", async (newMessageEvent) => {
      try {
        const newMessage = newMessageEvent.messages[0];
        if (!newMessage.message || !newMessage.message.extendedTextMessage) {
          return;
        }

        const userResponse = newMessage.message.extendedTextMessage.text.trim();
        const contextInfo = newMessage.message.extendedTextMessage.contextInfo;

        if (contextInfo && contextInfo.stanzaId === initialMessage.key.id) {
          let sendOptions;
          switch (userResponse) {
            case "1":
              sendOptions = {
                audio: { url: downloadLink },
                mimetype: "audio/mpeg",
                fileName: `${video.title}.mp3`,
              };
              break;

            case "2":
              sendOptions = {
                document: { url: downloadLink },
                mimetype: "audio/mpeg",
                fileName: `${video.title}.mp3`,
                caption: "> *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*",
              };
              break;

            case "3":
              sendOptions = {
                audio: { url: downloadLink },
                mimetype: "audio/mpeg",
                ptt: true,
              };
              break;

            default:
              return bot.sendMessage(from, { text: "❌ Invalid option. Reply with 1, 2, or 3." }, { quoted: newMessage });
          }

          await bot.sendMessage(from, sendOptions, { quoted: newMessage });
        }
      } catch (error) {
        console.error(error);
        bot.sendMessage(from, { text: `❌ Error: ${error.message} ❌` }, { quoted: message });
      }
    });
  } catch (error) {
    console.error(error);
    reply(`❌ Error: ${error.message} ❌`);
  }
});
