const { cmd, commands } = require('../lib/command');
const axios = require('axios');
const yts = require('yt-search');

cmd({
    pattern: "song07",
    alias: ["song2"],
    react: "🎵",
    desc: "download",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
    if (!q) return reply("*⚠️ Please provide a song title or URL*\n\n*Example:* .song Alan Walker - Faded");

    const query = String(q);
    const search = await yts(query);

    if (!search.videos || !search.videos.length) {
        return reply("❌ No results found! Please try another search.");
    }

    const deta = search.videos[0];
    const url = deta.url;

    let desc = `🎵 *Now Downloading:* ${deta.title}

🎧 *Duration:* ${deta.timestamp}
👁️ *Views:* ${deta.views}
📅 *Uploaded:* ${deta.ago}
👤 *Author:* ${deta.author.name}

⏳ *Please wait, processing your request...*`;

    await conn.sendMessage(from, { 
        image: { url: deta.thumbnail }, 
        caption: desc 
    }, { quoted: mek }).catch(() => reply("❌ Error sending thumbnail"));

    try {
        const response = await axios.get(`https://lakaofcapi-52b428c9b11a.herokuapp.com/download/ytmp3?url=${encodeURIComponent(url)}`);

        const downloadUrl = response.data.result.download_url;

        await conn.sendMessage(from, { 
            audio: { url: downloadUrl }, 
            mimetype: "audio/mpeg", 
            caption: "🎵 *Successfully Downloaded!*" 
        }, { quoted: mek });

        await conn.sendMessage(from, { 
            document: { url: downloadUrl }, 
            mimetype: "audio/mpeg", 
            fileName: `${deta.title}.mp3`, 
            caption: "📎 *Document Version*\n\n✨ *Thanks for using our service!*" 
        }, { quoted: mek });

    } catch (error) {
        reply("❌ Error downloading audio: " + error.message);
    }

} catch (e) {
    console.log(e);
    reply(`❌ Error: ${e.message}`);
}
});

cmd({
    pattern: "video07",
    alias: ["video2"],
    react: "🎥",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
    if (!q) return reply("*⚠️ Please provide a video title or URL*\n\n*Example:* .video Alan Walker - Faded");

    const query = String(q);
    const search = await yts(query);

    if (!search.videos || !search.videos.length) {
        return reply("❌ No results found! Please try another search.");
    }

    const deta = search.videos[0];
    const url = deta.url;

    let desc = `🎥 *Now Downloading:* ${deta.title}

⏱️ *Duration:* ${deta.timestamp}
👁️ *Views:* ${deta.views}
📅 *Uploaded:* ${deta.ago}
👤 *Author:* ${deta.author.name}

⏳ *Please wait, processing your request...*`;

    await conn.sendMessage(from, { 
        image: { url: deta.thumbnail }, 
        caption: desc 
    }, { quoted: mek }).catch(() => reply("❌ Error sending thumbnail"));

    try {
        const response = await axios.get(`https://lakaofcapi-52b428c9b11a.herokuapp.com/download/ytmp3?url=${encodeURIComponent(url)}`);

        const downloadUrl = response.data.result.download_url;

        await conn.sendMessage(from, { 
            video: { url: downloadUrl }, 
            mimetype: "video/mp4", 
            caption: "🎥 *Successfully Downloaded!*" 
        }, { quoted: mek });

        await conn.sendMessage(from, { 
            document: { url: downloadUrl }, 
            mimetype: "video/mp4", 
            fileName: `${deta.title}.mp4`, 
            caption: "📎 *Document Version*\n\n✨ *Thanks for using our service!*" 
        }, { quoted: mek });

    } catch (error) {
        reply("❌ Error downloading video: " + error.message);
    }

} catch (e) {
    console.log(e);
    reply(`❌ Error: ${e.message}`);
}
});
