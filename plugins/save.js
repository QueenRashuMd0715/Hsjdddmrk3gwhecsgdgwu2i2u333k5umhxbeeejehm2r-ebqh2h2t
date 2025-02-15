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
} = require('@whiskeysockets/baileys');

const { cmd } = require('../command');
const { updateEnv, readEnv } = require('../lib/database');
const config = require("../config");

cmd({
    pattern: "alive1",
    desc: "Bot Settings Configuration",
    react: "👋",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
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

        const settingsDetails = [{
            body: proto.Message.InteractiveMessage.Body.create({
                text: `᮰ 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 ᮰`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
                text: config.FOOTER
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                title: `👋 Hello ${pushname}!\n\n*I AM ALIVE NOW*\n\n> *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*`,
                hasMediaAttachment: true,
                imageMessage: await createImage('https://i.ibb.co/g98HkMY/8188.jpg')
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                    {
                        "name": "cta_url",
                        "buttonParamsJson": JSON.stringify({
                            "display_text": "♤ 𝐎𝐖𝐍𝐄𝐑 ♤",
                            "url": "https://wa.me/94727319036"
                        })
                    },
                    {
                        "name": "cta_url",
                        "buttonParamsJson": JSON.stringify({
                            "display_text": "♤ 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 ♤",
                            "url": "https://whatsapp.com/channel/0029Vb2GOyk6rsQwJSBa7T2h"
                        })
                    },
                    {
                        "name": "cta_url",
                        "buttonParamsJson": JSON.stringify({
                            "display_text": "♤ 𝐁𝐎𝐓 𝐆𝐑𝐎𝐔𝐏 ♤",
                            "url": "https://chat.whatsapp.com/F3ZWEVVfOkf9tGAF4J9pDI"
                        })
                    },
                    {
                        "name": "cta_url",
                        "buttonParamsJson": JSON.stringify({
                            "display_text": "♤ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 ♤",
                            "url": "https://youtube.com/@rashumodz_0715?si=5pg_wumwy6VzizMP"
                        })
                    },
                    {
                        "name": "cta_url",
                        "buttonParamsJson": JSON.stringify({
                            "display_text": "♤ 𝐁𝐎𝐓 𝐖𝐄𝐁 ♤",
                            "url": "https://queen-rashu-sesion-7bdf00f2fa51.herokuapp.com/"
                        })
                    }
                ]
            })
        }];

        const msg = generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: 'Bot Settings Configuration\n\nSelect an option to modify'
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: config.FOOTER
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
                            cards: settingsDetails
                        })
                    })
                }
            }
        }, {});

        await conn.relayMessage(from, msg.message, {
            messageId: msg.key.id
        });

        const settingsHandler = async (msgUpdate) => {
            try {
                const message = msgUpdate.messages[0];

                if (message.message?.interactiveResponseMessage?.selectedId) {
                    const selectedOption = message.message.interactiveResponseMessage.selectedId;

                    const toggleSetting = async (setting) => {
                        const newValue = currentConfig[setting] === 'true' ? 'false' : 'true';
                        await updateEnv(setting, newValue);
                        reply(`✅ ${setting} updated to ${newValue}`);
                    };

                    switch (selectedOption) {
                        case 'mode_settings':
                            reply(`Current Mode: ${currentConfig.MODE}\nAvailable Modes:\n1. public\n2. private\n3. groups\n4. inbox\n\nReply with desired mode.`);
                            break;
                        case 'auto_voice':
                            await toggleSetting('AUTO_VOICE');
                            break;
                        case 'auto_sticker':
                            await toggleSetting('AUTO_STICKER');
                            break;
                        case 'auto_reply':
                            await toggleSetting('AUTO_REPLY');
                            break;
                        case 'auto_read':
                            await toggleSetting('AUTO_READ_STATUS');
                            break;
                        case 'auto_react':
                            await toggleSetting('AUTO_REACT');
                            break;
                        case 'reset_all':
                            reply('Resetting all settings to default...');
                            break;
                    }

                    conn.ev.off('messages.upsert', settingsHandler);
                }
            } catch (error) {
                console.error("Settings Handler Error:", error);
                reply(`❌ An error occurred: ${error.message}`);
            }
        };

        conn.ev.on('messages.upsert', settingsHandler);

    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});
