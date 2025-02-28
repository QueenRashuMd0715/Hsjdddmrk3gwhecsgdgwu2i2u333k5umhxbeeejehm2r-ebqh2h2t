const axios = require('axios');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js');

cmd({
    pattern: "songpp",
    alias: ["ytdl3", "yta"],
    react: "🎵",
    desc: "Download Youtube song",
    category: "download",
    use: '.song < Yt url or Name >',
    filename: __filename
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
    try {
        if (!q) return await reply("⚠️ Please provide a YouTube URL or song name!");

        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("❌ No results found!");

        let yts = yt.results[0];
        let apiUrl = `https://manul-ofc-ytdl-paid-30a8f429a0a6.herokuapp.com/download/audio?url=${encodeURIComponent(yts.url)}`;

        let response = await fetch(apiUrl);
        let data = await response.json();

        if (!data.status || !data.downloadUrl) {
            return reply("❌ Failed to fetch download URL");
        }

        let downloadUrl = data.downloadUrl;

        let ytmsg = `╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷
┃▸╭─────────────────
┃▸┃ 🎵 *MUSIC DOWNLOADER*
┃▸└─────────────────···
╰──────────────────────┈⊷
╭━━❐━⪼
┇🎧 *Title:* ${yts.title}
┇⏱️ *Duration:* ${yts.timestamp}
┇👀 *Views:* ${yts.views}
┇👤 *Author:* ${yts.author.name}
┇🔗 *Link:* ${yts.url}
╰━━❑━⪼

*💫 High Quality Audio By Didula MD V2*`;

        await conn.sendMessage(from, { image: { url: yts.thumbnail }, caption: ytmsg }, { quoted: mek });
        await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
        await conn.sendMessage(from, {
            document: { url: downloadUrl },
            mimetype: "audio/mpeg",
            fileName: `${yts.title}.mp3`,
            caption: `🎵 *${yts.title}*\n\n*🌟 Created By:* Didula Rashmika\n*🤖 Bot:* Didula MD V2`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ An error occurred. Please try again later.");
    }
});
