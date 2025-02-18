const { 
    default: makeWASocket, 
    downloadContentFromMessage 
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const FileType = require('file-type');
const { cmd } = require('../command');

cmd({
    pattern: "vvv",
    react: "😁",
    alias: ["mattu", "dakkada", "mekada", "supiri"],
    desc: "To ViewOnceMessage",
    category: "convert",
    use: '.vv',
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        if (!quoted) return reply("```Please reply to a ViewOnce message```");

        const viewOnceMessage = quoted.message?.viewOnceMessageV2 || quoted.message?.viewOnceMessage;
        if (!viewOnceMessage) return reply("```This is not a ViewOnce message```");

        const mediaMessage = viewOnceMessage.message?.imageMessage || viewOnceMessage.message?.videoMessage;
        if (!mediaMessage) return reply("```ViewOnce message does not contain media```");

        let caption = mediaMessage.caption || "";
        const stream = await downloadContentFromMessage(mediaMessage, mediaMessage.mimetype.split('/')[0]);

        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        let type = await FileType.fromBuffer(buffer);
        let fileName = `media.${type.ext}`;
        fs.writeFileSync(fileName, buffer);

        let mediaType = mediaMessage.mimetype.startsWith('image') ? 'image' : 'video';
        let sendMedia = { [mediaType]: { url: fileName }, caption };

        await conn.sendMessage(from, sendMedia);
        await conn.sendMessage(from, { react: { text: `✅`, key: mek.key } });

    } catch (e) {
        console.error(e);
        reply("*There is an error☹️*");
    }
});