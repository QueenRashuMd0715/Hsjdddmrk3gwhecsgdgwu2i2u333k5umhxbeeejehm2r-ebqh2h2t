const SUPUN_API = `https://manu-ofc-api-site-6bfcbe0e18f6.herokuapp.com/ytmp3-dl-fixed?url=`

cmd({
    pattern: "song",
    alias: ["audio"],
    desc: 'Download Song / Video',
    use: '.play Title',
    react: "🎧",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      
        
        if (!q) return reply('Please provide a title.');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
  ℹ️ *SUPUN-MD* 

 *Title:* ${data.title} 
 *Duration:* ${data.timestamp}
 *Views:* ${data.views} 
 *Description:* ${data.description} 
 *Uploaded On:* ${data.ago} 
 © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: 🔢

 *➀*  ᴀᴜᴅɪᴏ ꜰɪʟᴇ 🎶
 *➁*  ᴅᴏᴄᴜᴍᴇɴᴛ ꜰɪʟᴇ 📂

> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ
        `;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        // Fetch Audio from SUPUN_API
                        const audioData = await fetch(`${SUPUN_API}${data.url}`);
                        const audioJson = await audioData.json();
                        const audioDownloadUrl = audioJson.data[2].downloadUrl;  // Assuming you want 128kbps quality

                        // Send Audio
                        await conn.sendMessage(from, { 
                            audio: { url: audioDownloadUrl }, 
                            mimetype: "audio/mpeg", 
                            caption: "> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ" 
                        }, { quoted: mek });
                        break;
       
                    case '2':
                        // Fetch Audio from SUPUN_API
                        const docData = await fetch(`${SUPUN_API}${data.url}`);
                        const docJson = await docData.json();
                        const docDownloadUrl = docJson.data[2].downloadUrl;  // Assuming you want 128kbps quality

                        // Send Document
                        await conn.sendMessage(from, { 
                            document: { url: docDownloadUrl },
                            mimetype: "audio/mpeg", 
                            fileName: `${data.title}.mp3`, 
                            caption: "> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ" 
                        }, { quoted: mek });
                        break;
 
                    default:
                        reply("Invalid option. Please select a valid option 💗");
                }
            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('An error occurred while processing your request.');
    }
});
