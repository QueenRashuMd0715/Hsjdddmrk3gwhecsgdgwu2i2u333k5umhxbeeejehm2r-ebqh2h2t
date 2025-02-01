//queen rashu md

 Ubale Siya.....*/




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
    pattern: "rashu00",
    alias: ["setting2","s2"],
    desc: "Bot Settings Configuration",
    react: "⚙️",
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
            title: `Hello ${pushname}!`,
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
                        "display_text": "CHANEL",
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
                        text: '*𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃*\n\n*ᡕᠵ᠊ᡃ່࡚ࠢ࠘⸝່ࠡ᠊߯ᡁࠣ࠘᠊᠊ࠢ࠘气亠*'
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

    // Settings handler
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

                switch(selectedOption) {
                    case 'mode_settings':
                        reply(`Current Mode: ${currentConfig.MODE}
Available Modes:
1. public
2. private
3. groups
4. inbox

Reply with desired mode.`);
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
                        // Add your reset logic here
                        break;
                }

                              // Remove listener after processing
                              conn.ev.off('messages.upsert', settingsHandler);
                            }
                        } catch (error) {
                            console.error("Settings Handler Error:", error);
                            reply(`❌ An error occurred: ${error.message}`);
                        }
                    };
                
                    // Register the settings handler
                    conn.ev.on('messages.upsert', settingsHandler);
                
                } catch(e) {
                    console.log(e)
                    reply(`An error occurred: ${e}`)
                }
                })
