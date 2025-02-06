
const fetch = require("node-fetch");
const { fetchJson } = require("../lib/functions");
const yts = require("yt-search");

function someFunction(param1, param2, param3, param4, param5) {
  return anotherFunction(param5 + 0x2b, param4);
}

const { downloadTiktok } = require('@mrnima/tiktok-downloader');
const { facebook } = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const { igdl } = require("ruhend-scraper");
const axios = require('axios');
const { cmd, commands } = require("../lib/command");
const apkdl = require('../lib/apkdl')
const xapilink = 'https://www.dark-yasiya-api.site'
const wiki = require('wikipedia');
const { Buffer } = require("buffer");
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage} = require('@whiskeysockets/baileys');

const Esana = require("@sl-code-lords/esana-news");
var api = new Esana();
const DYXT_NEWS = require("@dark-yasiya/news-scrap");
const newss = new DYXT_NEWS();

const apilink = 'https://dizer-adaderana-news-api.vercel.app/news'; 

const fetch = require("node-fetch");
const { fetchJson } = require("../lib/functions");
const yts = require("yt-search");

function someFunction(param1, param2, param3, param4, param5) {
  return anotherFunction(param5 + 0x2b, param4);
}


cmd({
    pattern: "ytsearch",
     alias: ["yeser", "yts1"],
    desc: "button test",
    react: "🎵",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q) return reply(`*Need title*`);
        let search = await yts(q);
        let videos = search.all;
        console.log(videos)
        if (!videos || videos.length === 0) {
          reply('No video found');
          return;
        }
        // Choose between 1 and 5 videos at random
        const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
        const selectedVideos = [];
        while (selectedVideos.length < numVideos) {
          const randomIndex = Math.floor(Math.random() * videos.length);
          const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
          selectedVideos.push(randomVideo);
        }
        let push = [];
        for (let i = 0; i < selectedVideos.length; i++) {
          let video = selectedVideos[i];
          let cap = `Title : ${video.title}`;
          let foot = `> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋᴀ-ᴍᴅ 👨‍💻`;
          const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: conn.waUploadToServer });
          push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: cap
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: foot
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: `Video ${i + 1}`,
              subtitle: '',
              hasMediaAttachment: true,
              ...mediaMessage
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: [
                {
                  "name": "cta_copy",
                  "buttonParamsJson": `{"display_text":"Copy Url","id":"1234","copy_code":"${video.url}"}`
                }
              ]
            })
          });
        }
        let sadee = `lakaofc`;
        let foot2 = `> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋᴀ-ᴍᴅ 👨‍💻`;
        const msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: sadee
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: foot2
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: false
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: push
                }),
                contextInfo: {
                      mentionedJid: ['94781121579@s.whatsapp.net'], 
                      forwardingScore: 999,
                      isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363380235298511@newsletter',
                      newsletterName: 'ʟᴀᴋᴀ-ᴍᴅ',
                      serverMessageId: 143
                    }
                    }
              })
            }
          }
        }, {quoted:mek});
        await conn.relayMessage(from, msg.message, {
          messageId: msg.key.id
        });
    console.log('Button Send Sucsses');
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
})
