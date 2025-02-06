const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const pdfUrl = 'https://i.ibb.co/TtgNkGp/20240921-191933.png';
const ooo = "```"

cmd({
    pattern: "menu000",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
fun: '',
other: '',
fun: '',
ai: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*៚❍* ${commands[i].pattern}\n`;
 }
}

let menumsg = `
👋 HELLO ${pushname},

*╭─「 ᴇꜱʜᴜ-ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ」*
*│⚡ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴  -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*│⚡ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴    -* ${runtime(process.uptime())}
*│⚡ 𝙳𝙴𝚅𝙰𝙻𝙾𝙿𝙴𝚁  - ᴇꜱʜᴀɴ*
*│⚡ 𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼   -* ${os.hostname()}
*│⚡ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽    - 2.0.0*
*│⚡ 𝙳𝙴𝚅𝙰𝙻𝙾𝙿𝙴𝚁  - ꜱᴜɴɴʏ.ʟᴋ
*│⚡ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴    -Qᴜᴜɴ ᴇꜱʜᴜ-ᴍᴅ*
*╰────━━━━━──────●●►*
╭────────────────●●►
│👨‍💻 *MENU LIST*
│   ───────
│ *1 DOWNLOAD MENU ⬇️*
│ *2 GROUP MENU 🔎*
│ *3 OWNER MENU 🔄*
│ *4 CONVERT MENU 👨‍💻*
│ *5 OTHER MENU👥*
│ *6 SEARCH MENU ⛩️*
│ *7 FUN MENU 📄*
╰───────────●●►

*ꜱᴇʟᴇᴄᴛ ᴀ ᴄᴀᴛᴀɢᴀʀʏ ɪɴ ʀᴇᴘʟʏ ᴛʜᴇ ɴᴜᴍᴇʀ✅*`

let downloadmenu = `
👻 ${ooo}ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 👻\n\n${menu.download}
`
 let groupmenu = `
👻 ${ooo}ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 👻\n\n${menu.group}
`
let ownermenu = `
👻 ${ooo}ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 👻\n\n${menu.owner}
`
let convertmenu = `
👻 ${ooo}ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 👻\n\n${menu.convert}
`
 let othermenu = `
👻 ${ooo}ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 👻\n\n${menu.other}
`
let searchmenu = `
👻 ${ooo}ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 👻\n\n${menu.search}
`  
let funmenu = `
👻 ${ooo}ꜰᴜɴ ᴄᴏᴍᴍᴀɴᴅꜱ${ooo} 👻\n\n${menu.fun}
`     
// Send the initial message and store the message ID
const sentMsg = await conn.sendMessage(from, {image: {url: config.BOT_IMG },caption: menumsg },{quoted: mek})
const messageID = sentMsg.key.id; // Save the message ID for later reference


// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '1') {
            // Handle option 1 (Audio File
  const sentMsg = await conn.sendMessage(from, {
    document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: downloadmenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
        }
            }
})
// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '2') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: groupmenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
        }
            }
})
// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '3') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: ownermenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
        }
            }
})
// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '4') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: convertmenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
            }
    }
            })
 // Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '5') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: othermenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
    }
    }
        })
 // Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '6') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: searchmenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
            }
    }
           })
 // Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '👾', key: mek.key } });


        if (messageType === '7') {
            // Handle option 1 (Audio File)
const sentMsg = await conn.sendMessage(from, {
document: { url: pdfUrl }, // Path to your PDF file
    fileName: config.FILENAME, // Filename for the document
    mimetype: "application/pdf",
    fileLength: 99999999999999,
    caption: funmenu,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        },
        externalAdReply: {
            title: config.TITLE,
            body: config.BODY,
            thumbnailUrl: config.BOT_IMG, // Use the URL directly here
            sourceUrl: config.WEBURL,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
});
            }
            }
})


} catch (e) {
console.log(e);
reply(`${e}`);
}
});


