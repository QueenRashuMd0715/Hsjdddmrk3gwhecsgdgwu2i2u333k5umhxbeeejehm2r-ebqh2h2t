const { 
    BufferJSON, 
    WA_DEFAULT_EPHEMERAL, 
    generateWAMessageFromContent, 
    proto, 
    generateWAMessageContent, 
    generateWAMessage, 
    prepareWAMessageMedia, 
    downloadContentFromMessage, 
    areJidsSameUser, 
    getContentType 
} = require('@whiskeysockets/baileys')
const { cmd } = require('../command')
const { updateEnv, readEnv } = require('../lib/database');
const config = require("../config")

cmd({
    pattern: "alive1",
    //alias: ["setting2","s2"],
    desc: "Bot Settings Configuration",
    react: "👋",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
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
            text: `᮰ 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 ᮰`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
            text: config.FOOTER
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `👋 Hellow ${pushname}!\n\n*I AM ALIVE NOW*\n\n> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*`,
            hasMediaAttachment: true,
            imageMessage: await createImage('https://i.ibb.co/g98HkMY/8188.jpg') // Replace with your image
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
                {
                    "name": "cta_url",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "OWNER",
                        "url": "https://wa.me/94727319036",
                        "merchant_url": "https://wa.me/94727319036"
                    })
                },
                {
                    "name": "cta_url",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "CHANN",
                        "url": "https://wa.me/94727319036",
                        "merchant_url": "https://wa.me/94727319036"
                    })
                },
                {
                    "name": "cta_url",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": "YOUTUBE",
                        "url": "https://wa.me/94727319036",
                        "merchant_url": "https://wa.me/94727319036"
                    })
                },
                {
                    "name": "quick_reply",
                    "buttonParamsJson": JSON.stringify({
                        "display_text": ".REPO",
                        "id": ".repo"
                    })
                }
            ]
        })
    });

    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Bot Settings Configuration\n\nSelect an option to modify'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: config.FOOTER
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: settingsDetails
                    })
                })
            }
        }
    }, {});

    await conn.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
    });
