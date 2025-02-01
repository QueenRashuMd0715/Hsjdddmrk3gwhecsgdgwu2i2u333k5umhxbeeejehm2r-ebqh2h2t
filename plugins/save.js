//Code එක Share නෙවෙයි මොනාකරත් කමක් නෑ Credit එකක් දෙන්න අමතක කරන්න එපා Friends.🌝
 
const axios = require('axios');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const { cmd, commands } = require('../command')
const config = require("../config")
const { updateEnv, readEnv } = require('../lib/database');

cmd({
    pattern: "alive00",
    alias: ["info2"],
    desc: "Chacke Bot Online or No.",
    react: "👋",
    category: "main",
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
    if (!isOwner) return reply("*This command is only for bot owner!*");

    const currentConfig = await readEnv();

    async function createImage(url) {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, {
            upload: conn.waUploadToServer
        });
        return imageMessage;
    }

    let settingsDetails = [];
    
    settingsDetails.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
            text: `💚 *I am QUEEN NETHU MD WA Bot* 💚\n\nButton Command තාම හදන ගමන් පුලුවන් ඉක්මනින් දෙන්නම්🤭☺️`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
            text: config.FOOTER
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `👋 Hello ${pushname}, I am alive now`,
            hasMediaAttachment: true,
            imageMessage: await createImage('https://files.catbox.moe/869fxv.jpg') // Replace with your image
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
                {
                    "name": "cta_url",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "SUPPORT YOUTUBE",
                        "url": "https://www.youtube.com/@SlNethuMax",
                    })
                },
                {
                    "name": "cta_url",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "SUPPORT WHATSAPP",
                        "url": "https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A",
                    })
                },
                {
                    "name": "cta_url",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "SUPPORT GITHUB",
                        "url": "https://github.com",
                    })
                }
            ]
        })
    });
      
                } catch(e) {
                    console.log(e)
                    reply(`An error occurred: ${e}`)
                }
                });

> *_Created by_* 👨🏼‍💻 :- *_Sl Nethu Max Yt_*
> Thenux-AI
