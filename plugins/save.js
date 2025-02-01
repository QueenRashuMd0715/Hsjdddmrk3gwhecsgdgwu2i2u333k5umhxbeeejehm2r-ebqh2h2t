const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "song5",
    desc: "Download a specific song using the David Cyril Tech API",
    category: "download",
    use: ".song5 <YouTube URL>",
    react: "🎵",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply(`Please provide a YouTube URL.`);

        const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(q)}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.success) return reply("❌ Failed to fetch song details!");

        const songDetails = data.result;
        const songMsg = `*乂 THENU-MD SONG DOWNLOADER ◉◉►
┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓        
*📜 TITLE*: ➥ ${songDetails.title}\n
*📷 THUMBNAIL*: ➥ ${songDetails.thumbnail}\n
*🔊 QUALITY*: ➥ ${songDetails.quality}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*乂◉◉► SENDING AUDIO FILE...*`;

        await conn.sendMessage(from, {
                               
            image: { url: songDetails.thumbnail },
            caption: songMsg, },{quoted: mek });

        // Send the audio file directly
        await conn.sendMessage(from, {
            audio: { url: songDetails.download_url },
            mimetype: "audio/mpeg",
            caption: "Here is your audio file!",
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply(`${e}`);
    }
});
