const fs = require('fs'),
  vm = require('vm'),
  path = require('path'),
  axios = require('axios'),
  fg = require('api-dylux'),
  xnxx = require('xnxx-dl'),
  yts = require('yt-search'),
  config = require('../config'),
  { File } = require('megajs'),
  cheerio = require('cheerio'),
  { Buffer } = require('buffer'),
  fetch = require('node-fetch'),
  apkdl = require('../lib/apkdl'),
  { igdl } = require('ruhend-scraper'),
  { cmd, commands } = require('../command'),
  { lookup } = require('mime-types'),
  apilink = 'https://www.dark-yasiya-api.site',
  { facebook } = require('@mrnima/facebook-downloader'),
  { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'),
  { downloadTiktok } = require('@mrnima/tiktok-downloader'),
  GOOGLE_API_KEY = 'AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI',
  GOOGLE_CX = 'baf9bdb0c631236e5',
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions')
let baseUrl
;(async () => {
  let _0x1f1ed3 = await fetchJson(
    'https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json'
  )
  baseUrl = _0x1f1ed3.api
})()
const yourName = '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*'
async function Insta(_0x371ef9) {
  const _0x468444 = [],
    _0x120d28 = {
      url: _0x371ef9,
      submit: '',
    },
    { data: _0x1b24a7 } = await axios('https://downloadgram.org/', {
      method: 'POST',
      data: _0x120d28,
    }),
    _0x307f2a = cheerio.load(_0x1b24a7)
  return (
    _0x307f2a('#downloadhere > a').each(function (_0x64d659, _0x58c966) {
      const _0x571f83 = _0x307f2a(_0x58c966).attr('href')
      if (_0x571f83) {
        _0x468444.push(_0x571f83)
      }
    }),
    _0x468444
  )
}
var needus = ''
if (config.LANG === 'SI') {
  needus = '*කරුණාකර මට Instagram url එකක් දෙන්න !!*'
} else {
  needus = '*Please give me Instagram url !!*'
}
var cantf = ''
if (config.LANG === 'SI') {
  cantf = '*මට මෙම වීඩියෝව සොයාගත නොහැක!*'
} else {
  cantf = '*I cant find this video!*'
}
cmd(
  {
    pattern: 'hgfhfhfhfhfhfhfhfhfhfhf',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0xaab12b,
    _0x8d23a9,
    _0x27009a,
    {
      from: _0x4d97c2,
      l: _0x1387d6,
      quoted: _0x2fafad,
      body: _0x31a958,
      isCmd: _0x3bd350,
      command: _0x5d0cf7,
      args: _0x1dc5b9,
      q: _0x10a615,
      isGroup: _0xa6c463,
      sender: _0x5953fd,
      senderNumber: _0x17d746,
      botNumber2: _0x974be6,
      botNumber: _0x4d4f52,
      pushname: _0x419500,
      isMe: _0x5309c1,
      isOwner: _0x4f6267,
      groupMetadata: _0x372fe5,
      groupName: _0x46e9ad,
      participants: _0x1b1c02,
      groupAdmins: _0x1b1bc4,
      isBotAdmins: _0x45161c,
      isAdmins: _0x3e5ce0,
      reply: _0x2173a0,
    }
  ) => {
    try {
      await _0xaab12b.sendMessage(_0x4d97c2, {
        react: {
          text: '\uD83D\uDCE5',
          key: _0x8d23a9.key,
        },
      })
      if (!_0x10a615) {
        return await _0xaab12b.sendMessage(
          _0x4d97c2,
          { text: 'Need apk link...' },
          { quoted: _0x8d23a9 }
        )
      }
      const _0x503fac = await apkdl.download(_0x10a615)
      let _0x408648 =
        '\uD83D\uDCDA Name : ' +
        _0x503fac.name +
        '\n\uD83D\uDCE6 Developer : ' +
        _0x503fac.package +
        '\n\u2B06️ Last update : ' +
        _0x503fac.lastup +
        '\n\uD83D\uDCE5 Size : ' +
        _0x503fac.size
      await _0xaab12b.sendMessage(
        _0x4d97c2,
        {
          image: { url: _0x503fac.icon },
          caption: _0x408648,
        },
        { quoted: _0x8d23a9 }
      )
      let _0x357a87 = await _0xaab12b.sendMessage(
        _0x4d97c2,
        {
          document: { url: _0x503fac.dllink },
          mimetype: 'application/vnd.android.package-archive',
          fileName: _0x503fac.name + '.' + 'apk',
          caption: '',
        },
        { quoted: _0x8d23a9 }
      )
      await _0xaab12b.sendMessage(_0x4d97c2, {
        react: {
          text: '\uD83D\uDCC1',
          key: _0x357a87.key,
        },
      })
      await _0xaab12b.sendMessage(_0x4d97c2, {
        react: {
          text: '\u2714',
          key: _0x8d23a9.key,
        },
      })
    } catch (_0x1ded09) {
      _0x2173a0('ERROR !!')
      console.log(_0x1ded09)
    }
  }
)
cmd(
  {
    pattern: 'pornhub',
    alias: ['phubdl'],
    desc: 'Search and download Pornhub videos',
    category: 'download',
    use: '.phub <search query>',
    filename: __filename,
  },
  async (
    _0x4d189c,
    _0x3bb29e,
    _0x4d4cda,
    { from: _0x5aa187, args: _0xe2929d, reply: _0x309491 }
  ) => {
    try {
      const _0x432505 = _0xe2929d.join(' ')
      if (!_0x432505) {
        return await _0x309491('Please provide a search query.')
      }
      await _0x4d189c.sendMessage(_0x5aa187, {
        react: {
          text: '\uD83D\uDD0D',
          key: _0x3bb29e.key,
        },
      })
      const _0x10e672 = await axios.get(
        'https://www.dark-yasiya-api.site/search/phub?q=' +
          encodeURIComponent(_0x432505)
      )
      if (
        !_0x10e672.data.status ||
        !_0x10e672.data.result ||
        _0x10e672.data.result.length === 0
      ) {
        return await _0x4d189c.sendMessage(
          _0x5aa187,
          { text: 'No videos found or API error.' },
          { quoted: _0x3bb29e }
        )
      }
      const _0xd95809 = _0x10e672.data.result.slice(0, 10)
      let _0x10a609 = '*🔞 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐏𝐑𝐎𝐍𝐇𝐔𝐁 𝐕𝐈𝐃𝐄𝐎 🔞*\n\n> *🔢 Please Reply With The Number You Want To Select*\n\n'
      _0xd95809.forEach((_0xc447aa, _0x5ba26d) => {
        _0x10a609 +=
          _0x5ba26d +
          1 +
          '. *' +
          _0xc447aa.title +
          '*\n\n\> LINK(' +
          _0xc447aa.url +
          ')\n\n'
      })
      _0x10a609 += '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*'
      const _0x2427a2 = await _0x4d189c.sendMessage(_0x5aa187, {
        text: _0x10a609,
        quoted: _0x3bb29e,
      })
      _0x4d189c.ev.on('messages.upsert', async (_0x448e26) => {
        const _0x52275c = _0x448e26.messages[0]
        if (!_0x52275c.message || !_0x52275c.message.extendedTextMessage) {
          return
        }
        const _0x4372b8 = _0x52275c.message.extendedTextMessage.text.trim(),
          _0x23f198 = _0x52275c.message.extendedTextMessage.contextInfo
        if (_0x23f198 && _0x23f198.stanzaId === _0x2427a2.key.id) {
          const _0x1958b8 = parseInt(_0x4372b8) - 1
          if (
            isNaN(_0x1958b8) ||
            _0x1958b8 < 0 ||
            _0x1958b8 >= _0xd95809.length
          ) {
            return await _0x4d189c.sendMessage(
              _0x5aa187,
              { text: 'Please enter a valid number corresponding to a video.' },
              { quoted: _0x52275c }
            )
          }
          const _0x3d2af1 = _0xd95809[_0x1958b8]
          try {
            const _0x282626 = await axios.get(
              'https://www.dark-yasiya-api.site/download/phub?url=' +
                encodeURIComponent(_0x3d2af1.url)
            )
            if (
              !_0x282626.data.status ||
              !_0x282626.data.result ||
              !_0x282626.data.result.format ||
              _0x282626.data.result.format.length === 0
            ) {
              return await _0x4d189c.sendMessage(
                _0x5aa187,
                { text: 'Failed to fetch download options.' },
                { quoted: _0x52275c }
              )
            }
            const _0x3d3389 = _0x282626.data.result.format
            let _0x1c515d =
              '*🔐 𝐏𝐑𝐎𝐍 𝐕𝐈𝐃𝐄𝐎 𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 𝐒𝐈𝐙𝐄 🔞*/n/n> *🔢 Please Reply With The Number You Went To Select*\n\n*' +
              _0x282626.data.result.video_title +
              '*\n\n'
            _0x3d3389.forEach((_0x4c3367, _0x234c35) => {
              _0x1c515d +=
                _0x234c35 + 1 + '. *' + _0x4c3367.resolution + 'p*\n\n'
            })
            _0x1c515d +=
              '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*'
            const _0x3d2aa7 = await _0x4d189c.sendMessage(_0x5aa187, {
              text: _0x1c515d,
              quoted: _0x52275c,
            })
            _0x4d189c.ev.on('messages.upsert', async (_0x568ef9) => {
              const _0x22ffa2 = _0x568ef9.messages[0]
              if (
                !_0x22ffa2.message ||
                !_0x22ffa2.message.extendedTextMessage
              ) {
                return
              }
              const _0x3e3a5b =
                  _0x22ffa2.message.extendedTextMessage.text.trim(),
                _0x3fd046 = _0x22ffa2.message.extendedTextMessage.contextInfo
              if (_0x3fd046 && _0x3fd046.stanzaId === _0x3d2aa7.key.id) {
                const _0x572f9c = parseInt(_0x3e3a5b) - 1
                if (
                  isNaN(_0x572f9c) ||
                  _0x572f9c < 0 ||
                  _0x572f9c >= _0x3d3389.length
                ) {
                  return await _0x4d189c.sendMessage(
                    _0x5aa187,
                    {
                      text: 'Please enter a valid number corresponding to a download option.',
                    },
                    { quoted: _0x22ffa2 }
                  )
                }
                const _0x55c0d0 = _0x3d3389[_0x572f9c]
                try {
                  const _0x3429ca = path.join(
                      __dirname,
                      _0x55c0d0.resolution + 'p.mp4'
                    ),
                    _0x2651f4 = fs.createWriteStream(_0x3429ca),
                    _0x20eeaf = await axios({
                      url: _0x55c0d0.download_url,
                      method: 'GET',
                      responseType: 'stream',
                    })
                  _0x20eeaf.data.pipe(_0x2651f4)
                  _0x2651f4.on('finish', async () => {
                    await _0x4d189c.sendMessage(
                      _0x5aa187,
                      {
                        video: { url: _0x3429ca },
                        caption:
                          '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                      },
                      { quoted: _0x22ffa2 }
                    )
                    await _0x4d189c.sendMessage(
                      _0x5aa187,
                      {
                        text: '*‼️ පොඩි පගයා 😫 වැල් බලලා අතේ ගහපම්කො පොඩි ජුන්ඩ්ඩක් ඇති 🔞 ට අඩු පගයා 🔥‼️*',
                      },
                      { quoted: _0x22ffa2 }
                    )
                    fs.unlinkSync(_0x3429ca)
                  })
                } catch (_0x592276) {
                  console.error('Video Download Error:', _0x592276)
                  await _0x309491(
                    'An error occurred while downloading the video.'
                  )
                }
              }
            })
          } catch (_0x2276a7) {
            console.error('Download Options Fetch Error:', _0x2276a7)
            await _0x309491(
              'An error occurred while fetching download options.'
            )
          }
        }
      })
    } catch (_0x2b954f) {
      console.error('Error', _0x2b954f)
      await _0x309491('An error occurred. Please try again.')
    }
  }
)
cmd(
  {
    pattern: 'GUKVTIOWQOIUEDUSGSAKJGDKJSAGDKJSAGDKJSAGDJKAGFKDJGSAFSAF',
    alias: ['fdddddddddddhghvhvhvhvhvhvhvhvhvhvhvhvhvhvhvhvhvhvhvhvhvhb'],
    desc: 'Download Facebook videos',
    category: 'download',
    filename: __filename,
  },
  async (_0x540e77, _0x57d96a, _0x1caeb4, _0x1e86ed) => {
    try {
      const { from: _0xa14a3e, q: _0x1ed946, reply: _0x34332f } = _0x1e86ed
      if (!_0x1ed946 || !_0x1ed946.startsWith('https://')) {
        return _0x34332f('Please provide a valid Facebook video URL.')
      }
      await _0x540e77.sendMessage(_0xa14a3e, {
        react: {
          text: '\u23F3',
          key: _0x57d96a.key,
        },
      })
      const _0x43be3b = await facebook(_0x1ed946)
      if (!_0x43be3b || !_0x43be3b.result) {
        return _0x34332f(
          'Failed to fetch Facebook video details. Please try again.'
        )
      }
      const _0x46343c =
          '\n    *ꜱᴜᴘᴜɴ ᴍᴅ ꜰʙ\u26AC*\u231Bᴅᴜʀᴀᴛɪᴏɴ*\n    *Duration*: ' +
          _0x43be3b.result.duration +
          '\n    \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n    \u2502 \xA9 \uD835\uDE4F\uD835\uDE64 \uD835\uDE59\uD835\uDE64\uD835\uDE6C\uD835\uDE63\uD835\uDE61\uD835\uDE64\uD835\uDE56\uD835\uDE59 \uD835\uDE68\uD835\uDE5A\uD835\uDE63\uD835\uDE59: \uD83D\uDD22\n    \u2502\n    \u2502 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ ꜰɪʟᴇ \uD83C\uDFAC      \n    \u2502\n    \u2502 _\u2780 *ꜱᴅ ꜱᴜᴘᴜɴ ᴍᴅ*\n    \u2502 _\u2781 *ʜᴅ ꜱᴜᴘᴜɴ ᴍᴅ*\n    \u2502 \n    \u2502ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴅᴏᴄᴜᴍᴇɴᴛ \uD83C\uDFA7\n    \u2502\n    \u2502 _\u2782 *ᴀᴜᴅɪᴏ*\n    \u2502 _\u2783 *ᴅᴏᴄᴜᴍᴇɴᴛ*\n    \u2502 _\u2784 *ᴠᴏɪᴄᴇ*\n    \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n    \n    > ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n    ',
        _0x1cc748 = await _0x540e77.sendMessage(
          _0xa14a3e,
          {
            image: { url: _0x43be3b.result.thumbnail },
            caption: _0x46343c,
          },
          { quoted: _0x57d96a }
        )
      _0x540e77.ev.on('messages.upsert', async (_0x591a25) => {
        const _0x393a37 = _0x591a25.messages[0]
        if (!_0x393a37.message) {
          return
        }
        const _0x3cc733 =
            _0x393a37.message.conversation ||
            _0x393a37.message.extendedTextMessage?.text,
          _0x36ae04 =
            _0x393a37.message.extendedTextMessage?.contextInfo.stanzaId ===
            _0x1cc748.key.id
        if (_0x36ae04) {
          await _0x540e77.sendMessage(_0xa14a3e, {
            react: {
              text: '\u2B07️',
              key: _0x393a37.key,
            },
          })
          const { links: _0x5a7017 } = _0x43be3b.result
          switch (_0x3cc733) {
            case '1':
              await _0x540e77.sendMessage(_0xa14a3e, {
                video: { url: _0x5a7017.SD },
                caption: 'ꜱᴜᴘᴜɴ ᴍᴅ SD video.',
              })
              break
            case '2':
              await _0x540e77.sendMessage(_0xa14a3e, {
                video: { url: _0x5a7017.HD },
                caption: 'ꜱᴜᴘᴜɴ ᴍᴅ HD video.',
              })
              break
            case '3':
              await _0x540e77.sendMessage(_0xa14a3e, {
                audio: { url: _0x5a7017.SD },
                mimetype: 'audio/mpeg',
              })
              break
            case '4':
              await _0x540e77.sendMessage(_0xa14a3e, {
                document: { url: _0x5a7017.SD },
                mimetype: 'audio/mpeg',
                fileName: 'Facebook_Audio.mp3',
                caption: 'Here is your audio as a document.',
              })
              break
            case '5':
              await _0x540e77.sendMessage(_0xa14a3e, {
                audio: { url: _0x5a7017.SD },
                mimetype: 'audio/mp4',
                ptt: true,
              })
              break
            default:
              _0x34332f('Invalid choice. Please reply with a valid number.')
          }
          await _0x540e77.sendMessage(_0xa14a3e, {
            react: {
              text: '\u2B06️',
              key: _0x393a37.key,
            },
          })
        }
      })
    } catch (_0x22ad81) {
      console.error(_0x22ad81)
      reply(
        'An error occurred while processing your request. Please try again.'
      )
    }
  }
)
cmd(
  {
    pattern: 'LIUSAGHDKJAGDXKJSAGDXJKASGXKJASGJKXGZAJXGZjkXGZkjgxKJzgxzx',
    desc: 'To download facebook videos.',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x1e267b,
    _0x5717db,
    _0x2fc7ce,
    {
      from: _0x24e5e2,
      quoted: _0x141107,
      body: _0x301eda,
      isCmd: _0x3dd24a,
      command: _0x4f2660,
      args: _0x200c52,
      q: _0x58a629,
      isGroup: _0x704ef4,
      sender: _0x488687,
      senderNumber: _0xf7852d,
      botNumber2: _0x4e50a7,
      botNumber: _0x4d4c5f,
      pushname: _0x153d16,
      isMe: _0x180843,
      isOwner: _0x50f4a9,
      groupMetadata: _0x5b644c,
      groupName: _0x29c88c,
      participants: _0x59074b,
      groupAdmins: _0x209fb5,
      isBotAdmins: _0x29f485,
      isAdmins: _0x5df160,
      reply: _0x5e4664,
    }
  ) => {
    try {
      await _0x1e267b.sendMessage(
        _0x24e5e2,
        { text: '\uD83D\uDCE5 *ꜱᴜᴘᴜɴ ᴍᴅ ιѕ ᴅᴏᴡɴʟᴏᴅɪɴɢ...* \uD83D\uDCE5' },
        { quoted: _0x5717db }
      )
      if (!_0x200c52[0]) {
        return _0x5e4664('*`Please give a waild Facebook link`*')
      }
      await _0x2fc7ce.react('\uD83D\uDD52')
      let _0x14ba22
      try {
        _0x14ba22 = await igdl(_0x200c52[0])
      } catch (_0x5009e2) {
        return _0x5e4664('*`Error obtaining data.`*')
      }
      let _0x28b0cf = _0x14ba22.data
      if (!_0x28b0cf || _0x28b0cf.length === 0) {
        return _0x5e4664('*`No resalt found.`*')
      }
      let _0x19127e
      try {
        _0x19127e =
          _0x28b0cf.find((_0x221aa8) => _0x221aa8.resolution === '720p (HD)') ||
          _0x28b0cf.find((_0x54cea7) => _0x54cea7.resolution === '360p (SD)')
      } catch (_0xc10989) {
        return _0x5e4664('*`Error data loss.`*')
      }
      if (!_0x19127e) {
        return _0x5e4664('*`No data found.`*')
      }
      await _0x2fc7ce.react('\u2705')
      let _0x1cb3b8 = _0x19127e.url,
        _0x504644 = '\xA9 2024 SUPUN FB DOWNLOAD HD.'
      try {
        await _0x1e267b.sendMessage(
          _0x2fc7ce.chat,
          {
            video: { url: _0x1cb3b8 },
            caption: _0x504644,
            fileName: 'fb.mp4',
            mimetype: 'video/mp4',
          },
          { quoted: _0x2fc7ce }
        )
      } catch (_0x157ca8) {
        return _0x5e4664('*`Error download video.`*')
        await _0x2fc7ce.react('\u274C')
      }
    } catch (_0x48710a) {
      console.log(_0x48710a)
      _0x5e4664('' + _0x48710a)
    }
  }
)
cmd(
  {
    pattern: 'REGTRETGREGREGREGFDVDSVDSFDSFCEDSEFEDSF',
    alias: ['DSFDSEFEDSEFDESFCESFCEWDSERXDERE'],
    desc: 'Download TikTok videos',
    category: 'download',
    filename: __filename,
  },
  async (_0x46ea88, _0x1a31d3, _0x39ff59, _0x107ae7) => {
    try {
      const { from: _0x5b2be0, q: _0x490c40, reply: _0x29c904 } = _0x107ae7
      if (!_0x490c40 || !_0x490c40.startsWith('https://')) {
        return _0x29c904('Please provide a valid TikTok URL.')
      }
      _0x39ff59.react('\u2B07️')
      const _0x30d2b7 = await downloadTiktok(_0x490c40)
      if (!_0x30d2b7 || !_0x30d2b7.result) {
        return _0x29c904(
          'Failed to fetch TikTok video details. Please try again.'
        )
      }
      const _0xa4fc62 =
          '\n    *ꜱᴜᴘᴜɴ ᴍᴅ ᴛɪᴋᴛᴏᴋ\u26AC*\u231Bᴛɪᴛʟᴇ*\n    *Title*: ' +
          _0x30d2b7.result.title +
          '\n    \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n    \u2502 \xA9 \uD835\uDE4F\uD835\uDE64 \uD835\uDE59\uD835\uDE64\uD835\uDE6C\uD835\uDE63\uD835\uDE61\uD835\uDE64\uD835\uDE56\uD835\uDE59 \uD835\uDE68\uD835\uDE5A\uD835\uDE63\uD835\uDE59: \uD83D\uDD22\n    \u2502\n    \u2502 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ ꜰɪʟᴇ \uD83C\uDFAC      \n    \u2502\n    \u2502 _\u2780 *ꜱᴅ* ꜱᴜᴘᴜɴ ᴍᴅ*\n    \u2502 _\u2781 *ʜᴅ* ꜱᴜᴘᴜɴ ᴍᴅ*\n    \u2502 \n    \u2502ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴅᴏᴄᴜᴍᴇɴᴛ \uD83C\uDFA7\n    \u2502\n    \u2502 _\u2782 *ᴀᴜᴅɪᴏ* ꜱᴜᴘᴜɴ ᴍᴅ*\n    \u2502 \n    \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n    \n    > ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n    ',
        _0x25840a = await _0x46ea88.sendMessage(_0x5b2be0, {
          image: { url: _0x30d2b7.result.image },
          caption: _0xa4fc62,
        })
      _0x46ea88.ev.on('messages.upsert', async (_0x3caea4) => {
        const _0x45c18b = _0x3caea4.messages[0]
        if (!_0x45c18b.message) {
          return
        }
        const _0x4dfd04 =
            _0x45c18b.message.conversation ||
            _0x45c18b.message.extendedTextMessage?.text,
          _0x3cfa57 =
            _0x45c18b.message.extendedTextMessage?.contextInfo.stanzaId ===
            _0x25840a.key.id
        if (_0x3cfa57) {
          _0x39ff59.react('\u2B07️')
          const { dl_link: _0x1a994a } = _0x30d2b7.result
          if (_0x4dfd04 === '1') {
            await _0x46ea88.sendMessage(_0x5b2be0, {
              video: { url: _0x1a994a.download_mp4_1 },
              caption: '> ꜱᴜᴘᴜɴ ᴍᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ SD video!',
            })
          } else {
            if (_0x4dfd04 === '2') {
              await _0x46ea88.sendMessage(_0x5b2be0, {
                video: { url: _0x1a994a.download_mp4_2 },
                caption: '> ꜱᴜᴘᴜɴ ᴍᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ HD video!',
              })
            } else {
              _0x4dfd04 === '3'
                ? await _0x46ea88.sendMessage(_0x5b2be0, {
                    audio: { url: _0x1a994a.download_mp3 },
                    mimetype: 'audio/mpeg',
                  })
                : _0x29c904('Invalid choice. Please reply with 1, 2, or 3.')
            }
          }
          _0x39ff59.react('\u2B06️')
        }
      })
    } catch (_0x1a67f6) {
      console.error(_0x1a67f6)
      reply('An error occurred. Please try again.')
    }
  }
)
cmd(
  {
    pattern: 'FDEWHFDHDFTHBDFSHDFSHGSFHBGXFHBGFXHBGFXBDFEWDSWCTRWQT',
    alias: ['CRTRYRETRVTRTRERTBHJDFXVCBVCNVFCNGFVH RHASRFDSDAFEWOFIUS;ODFNUOISDNFUUVCXHJVUYHDFGXH'],
    desc: 'Download Youtube song',
    category: 'download',
    use: '.song < Yt url or Name >',
    filename: __filename,
  },
  async (
    _0x3fdd72,
    _0x2a5744,
    _0x4c9043,
    {
      from: _0x396b14,
      prefix: _0x2328af,
      quoted: _0x47a294,
      q: _0x352c7b,
      reply: _0x5c12b4,
    }
  ) => {
    try {
      if (!_0x352c7b) {
        return await _0x5c12b4('Please give me Yt url or Name')
      }
      const _0xa0b5c3 = await ytsearch(_0x352c7b)
      if (_0xa0b5c3.results.length < 1) {
        return _0x5c12b4('Results is not found !')
      }
      let _0x125d17 = _0xa0b5c3.results[0]
      const _0x12c205 = await ytmp3(_0x125d17.url)
      let _0x166b5f =
        '\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2502*SONG DOWNLOADER* \uD83C\uDFB6\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2502 ℹ️ *SUPUN-MD* \n\u2502\n\u2502\u260D \u2981 *TITLE :* ' +
        _0x125d17.title +
        '\n\u2502\u260D \u2981 *AUTHOR :* ' +
        _0x125d17.author.name +
        '\n\u2502\u260D \u2981 *RUNTIME :* ' +
        _0x125d17.timestamp +
        '\n\u2502\u260D \u2981 *VIEWS :* ' +
        _0x125d17.views +
        '\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n'
      await _0x3fdd72.sendMessage(
        _0x396b14,
        {
          image: { url: _0x125d17.thumbnail || _0x125d17.image || '' },
          caption: '' + _0x166b5f,
        },
        { quoted: _0x2a5744 }
      )
      await _0x3fdd72.sendMessage(
        _0x396b14,
        {
          audio: { url: _0x12c205.download.url },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x2a5744 }
      )
      await _0x3fdd72.sendMessage(
        _0x396b14,
        {
          document: { url: _0x12c205.download.url },
          mimetype: 'audio/mpeg',
          fileName: _0x12c205.result.title + '.mp3',
          caption: '' + _0x12c205.result.title,
        },
        { quoted: _0x2a5744 }
      )
    } catch (_0x18677f) {
      console.log(_0x18677f)
      _0x5c12b4(_0x18677f)
    }
  }
)
cmd(
  {
    pattern: 'O;IYBGYSDASDHSAPODHAOSPHDOSAHDPOSAHDOPSADPOSAHDPOSAHDOPSAHDASD',
    alias: ['tFESDFSDFEDSFSDFOPJ8DPOSAID[POSAUDIOSAYDIUJASTYDIASYDIUASYIDUYSAOIY'],
    desc: '',
    category: 'download',
    use: '.tiktok < url >',
    filename: __filename,
  },
  async (
    _0x3de4f4,
    _0x20ad97,
    _0x22a551,
    { from: _0x447f09, quoted: _0x41e438, reply: _0x203fc4, q: _0x1416b4 }
  ) => {
    try {
      if (!_0x1416b4) {
        return await _0x203fc4('Please give me tiktok url')
      }
      if (!_0x1416b4.includes('tiktok.com')) {
        return await _0x203fc4('This url is invalid')
      }
      const _0x385af3 = await fetchJson(
          apilink + '/download/tiktok?url=' + _0x1416b4
        ),
        _0x5aab98 =
          '\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2502\uD83D\uDCE5*TIKTOK DOWNLOADER*\uD83D\uDCE5\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2502 ℹ️ *SUPUN-MD* \n\u2502\n\u2502\u260D \u2981 *Title* - ' +
          _0x385af3.result.title +
          '\n\u2502\u260D \u2981 *Author* - ' +
          _0x385af3.result.author +
          '\n\u2502\u260D \u2981 *Duration* - ' +
          _0x385af3.result.duration +
          '\n\u2502\u260D \u2981 *Views* - ' +
          _0x385af3.result.views +
          '\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n'
      await _0x3de4f4.sendMessage(
        _0x447f09,
        {
          image: { url: _0x385af3.result.cover || '' },
          caption: _0x5aab98,
        },
        { quoted: _0x20ad97 }
      )
      await _0x3de4f4.sendMessage(
        _0x447f09,
        {
          video: { url: _0x385af3.result.wmVideo },
          mimetype: 'video/mp4',
          caption: _0x385af3.result.title + 'WATERMARK VIDEO \u2705',
        },
        { quoted: _0x20ad97 }
      )
      await _0x3de4f4.sendMessage(
        _0x447f09,
        {
          video: { url: _0x385af3.result.hdVideo },
          mimetype: 'video/mp4',
          caption: _0x385af3.result.title + 'NO-WATERMARK VIDEO \u2705',
        },
        { quoted: _0x20ad97 }
      )
      await _0x3de4f4.sendMessage(
        _0x447f09,
        {
          audio: { url: _0x385af3.result.sound },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x20ad97 }
      )
    } catch (_0x4ad61e) {
      console.log(_0x4ad61e)
      _0x203fc4(_0x4ad61e)
    }
  }
)
cmd(
  {
    pattern: 'HKDJHSJIDHSJDHSAIJDHSAKDHSAKDSALHFDSVSDGDFG GFDFGSAMD',
    desc: 'Download apk.',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x6f6c6a,
    _0x3f65f5,
    _0x38d034,
    {
      from: _0x3f60e8,
      quoted: _0x319e21,
      body: _0x2fb7d1,
      isCmd: _0x37799b,
      command: _0x394a07,
      args: _0x448781,
      q: _0x5f48f0,
      isGroup: _0x2d7bb6,
      sender: _0x188746,
      senderNumber: _0x5a8dcd,
      botNumber2: _0x13a82,
      botNumber: _0x3ee698,
      pushname: _0x590fb8,
      isMe: _0xb9cec1,
      isOwner: _0x565989,
      groupMetadata: _0x39ff85,
      groupName: _0x498fbf,
      participants: _0x55d967,
      groupAdmins: _0x523e01,
      isBotAdmins: _0xb6c3ae,
      isAdmins: _0x171b1b,
      reply: _0x2304dd,
    }
  ) => {
    try {
      const _0x35ff28 = [2025],
        _0x512379 = {
          key: {
            fromMe: false,
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
          },
          message: {
            orderMessage: {
              itemCount:
                _0x35ff28[Math.floor(Math.random() * _0x35ff28.length)],
              status: 1,
              surface: 1,
              message:
                '\uD83D\uDC9A\uD835\uDC12\uD835\uDC14\uD835\uDC0F\uD835\uDC14\uD835\uDC0D-\uD835\uDC0C\uD835\uDC03 | \uD835\uDC12\uD835\uDC14\uD835\uDC0F\uD835\uDC14\uD835\uDC0D \uD835\uDC05\uD835\uDC04\uD835\uDC11\uD835\uDC0D\uD835\uDC00\uD835\uDC0D\uD835\uDC03\uD835\uDC0E\uD83D\uDC9A',
              orderTitle: '',
              sellerJid: '94718461889@s.whatsapp.net',
            },
          },
        }
      await _0x38d034.react('\uD83D\uDD04')
      const _0x5f8110 =
          'http://ws75.aptoide.com/api/7/apps/search/query=' +
          _0x5f48f0 +
          '/limit=1',
        _0x698d49 = await axios.get(_0x5f8110),
        _0x428613 = _0x698d49.data
      let _0x15e9d1 = _0x428613.datalist.list[0].size % 1000000,
        _0x4624d2 = '.' + _0x15e9d1,
        _0x5f3cb3 = _0x428613.datalist.list[0].size / 1000000,
        _0x5d0938 = _0x5f3cb3 - _0x4624d2,
        _0x59d11e =
          '\n*\uD83D\uDC26‍\uD83D\uDD25 SUPUN MD APK DOWNLOADER \uD83D\uDC26‍\uD83D\uDD25*\n*\u256D\u2500\u2500\uD83D\uDCE6 APK Details \uD83D\uDCE6\u2500\u2500\u25E6\u2022\u25E6\u25BA\u2022*\n*\u254E*\n*\u254E* *\uD83C\uDFF7️ Nᴀᴍᴇ :* ' +
          _0x428613.datalist.list[0].name +
          '\n*\u254E* *\uD83D\uDCE6 Sɪᴢᴇ :* ' +
          _0x5d0938 +
          'MB\n*\u254E* *\uD83D\uDD16 Pᴀᴄᴋᴀɢᴇ :* ' +
          _0x428613.datalist.list[0].package +
          '\n*\u254E* *\uD83D\uDCC6 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* ' +
          _0x428613.datalist.list[0].updated +
          '\n*\u254E* *\uD83D\uDC64 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* ' +
          _0x428613.datalist.list[0].developer.name +
          '\n*\u254E*\n*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25E6\u2022\u25E6\u25BA\u2022*\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ'
      await _0x6f6c6a.sendMessage(
        _0x3f60e8,
        {
          image: { url: _0x428613.datalist.list[0].icon },
          caption: _0x59d11e,
        },
        { quoted: _0x3f65f5 }
      )
      await _0x6f6c6a.sendMessage(
        _0x3f60e8,
        {
          document: { url: _0x428613.datalist.list[0].file.path_alt },
          fileName: _0x428613.datalist.list[0].name,
          mimetype: 'application/vnd.android.package-archive',
          caption: '> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ',
        },
        { quoted: _0x512379 }
      )
      await _0x38d034.react('\u2705')
    } catch (_0x1ddb3d) {
      console.log(_0x1ddb3d)
      _0x2304dd('' + _0x1ddb3d)
    }
  }
)
cmd(
  {
    pattern: 'GVFDGFRDGRFDGFDGFDGCEDFWEIKLOJDSLSJDKSHDKHSKDHSKDHKSHDS',
    alias: ['LUOIBYAIDYSAIODYSAIODYISAOYDKOSAHDKOSAHDKSAHDKASHDKASHKD'],
    desc: 'Download adult videos from pussyboy.net.',
    category: 'nsfw',
    filename: __filename,
  },
  async (
    _0x4c86cf,
    _0xe1d848,
    _0x29cc35,
    {
      from: _0x728712,
      quoted: _0x4f94b8,
      body: _0x53ad5e,
      isCmd: _0x5dc375,
      command: _0x15d619,
      args: _0x25a14d,
      query: _0x21d074,
      isGroup: _0x4611b9,
      sender: _0x591f73,
      senderNumber: _0x4d5994,
      botNumber2: _0x7d6d33,
      botNumber: _0x30d728,
      pushname: _0x1308d1,
      isMe: _0x3f16cc,
      isOwner: _0x529ad8,
      groupMetadata: _0x434b26,
      groupName: _0x534f88,
      participants: _0x50c522,
      groupAdmins: _0x2a73ed,
      isBotAdmins: _0x2bf692,
      isAdmins: _0x33221f,
      reply: _0x2d7539,
    }
  ) => {
    try {
      await _0x29cc35.react('\uD83D\uDD1E')
      const _0xb5302 = 'https://www.pussyboy.net/porn/' + _0x21d074 + '/',
        _0x103ba6 = await fetch(_0xb5302),
        _0x426d06 = await _0x103ba6.text(),
        _0x47b886 = cheerio.load(_0x426d06),
        _0x258d39 = _0x47b886(
          'body > div.container-xxl.videos > div.col-md-12.videos-detail > div.col-md-12.videos-details > div > video > source'
        ).attr('src')
      await _0x4c86cf.sendMessage(
        _0x728712,
        {
          video: { url: _0x258d39 },
          mimetype: 'video/mp4',
          caption: '> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ',
        },
        { quoted: _0xe1d848 }
      )
    } catch (_0x4a5630) {
      console.error(_0x4a5630)
      _0x2d7539('Error: ' + _0x4a5630.message)
    }
  }
)
cmd(
  {
    pattern: 'EWREWTWETREWT3ETREWTEWRTERWTEWTWTWET',
    alias: ['GYUTYURTYURTYFT4RFTESCWCRWERl'],
    desc: 'download tw videos',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x282665,
    _0xc06755,
    _0x5a54c6,
    {
      from: _0x1296b1,
      quoted: _0x4e888a,
      body: _0x1bb639,
      isCmd: _0x1bf94b,
      command: _0x1f1565,
      args: _0x7a6958,
      q: _0x24582f,
      isGroup: _0x5a0447,
      sender: _0x522913,
      senderNumber: _0x58efd3,
      botNumber2: _0x314258,
      botNumber: _0x544edc,
      pushname: _0x1df16a,
      isMe: _0x224d77,
      isOwner: _0x43e691,
      groupMetadata: _0x171183,
      groupName: _0x12f406,
      participants: _0x2fbe4b,
      groupAdmins: _0x52baee,
      isBotAdmins: _0x5d18cc,
      isAdmins: _0x50bf1f,
      reply: _0x59a376,
    }
  ) => {
    try {
      if (!_0x24582f && !_0x24582f.startsWith('https://')) {
        return _0x59a376('give me twitter url')
      }
      let _0x14976d = await fetchJson(
        baseUrl + '/api/twitterdl?url=' + _0x24582f
      )
      _0x59a376('*SUPUN-MD TWITTER VIDEO DOWNLOADING...\uD83D\uDCE5*')
      await _0x282665.sendMessage(
        _0x1296b1,
        {
          video: { url: _0x14976d.data.data.HD },
          mimetype: 'video/mp4',
          caption: '- HD\n\n > ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ',
        },
        { quoted: _0xc06755 }
      )
      await _0x282665.sendMessage(
        _0x1296b1,
        {
          video: { url: _0x14976d.data.data.SD },
          mimetype: 'video/mp4',
          caption: '- SD \n\n > ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ',
        },
        { quoted: _0xc06755 }
      )
      await _0x282665.sendMessage(
        _0x1296b1,
        {
          audio: { url: _0x14976d.data.data.audio },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0xc06755 }
      )
    } catch (_0x2215f6) {
      console.log(_0x2215f6)
      _0x59a376('' + _0x2215f6)
    }
  }
)
cmd(
  {
    pattern: 'xFDSFSDFSDnSFSDFGSDFSDFSDFSDFSDFxxEREWRTFEWREWRFEWSFDDSFDSFDSF',
    desc: 'Downloads a video from XNXX',
    use: '.xnxx <search_term>',
    category: 'downloads',
    filename: __filename,
  },
  async (
    _0x53f56b,
    _0x4ed416,
    _0x3925db,
    {
      from: _0xf0556c,
      quoted: _0x39d85a,
      body: _0x406b65,
      q: _0x29322c,
      reply: _0x16370a,
    }
  ) => {
    const _0x5108a1 = _0x29322c.trim()
    if (!_0x5108a1) {
      return _0x16370a('NAME FOR URL PLEASE  \u27A4')
    }
    _0x16370a(
      'අවවාදයයි..\u274C..අසබ්ය දර්ශන දැකිමෙන් ඔබෙ දරුවා ඉට යොමුවිය හැකිය\u2757...'
    )
    try {
      const _0x5b7552 = await xnxx.download(_0x5108a1)
      if (!_0x5b7552 || !_0x5b7552.link_dl) {
        return await _0x53f56b.sendMessage(_0xf0556c, {
          react: {
            text: '\u274C',
            key: _0x4ed416.key,
          },
        })
      }
      _0x16370a(
        'XNXX VIDEO Downloading  please waite \uD83D\uDE80\u2757\uD83D\uDCAF...'
      )
      const _0x5c3401 = _0x5b7552.link_dl
      await _0x53f56b.sendMessage(
        _0xf0556c,
        {
          video: { url: _0x5c3401 },
          caption: '> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ',
          mimetype: 'video/mp4',
        },
        await _0x53f56b.sendMessage(
          _0xf0556c,
          {
            document: { url: _0x5c3401 },
            caption: '> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ',
            mimetype: 'video/mp4',
          },
          { quoted: _0x4ed416 }
        )
      )
      await _0x53f56b.sendMessage(_0xf0556c, {
        react: {
          text: '\u2705',
          key: _0x4ed416.key,
        },
      })
    } catch (_0x37b725) {
      console.log(_0x37b725)
      await _0x53f56b.sendMessage(_0xf0556c, {
        react: {
          text: '\u274C',
          key: _0x4ed416.key,
        },
      })
      _0x16370a('Error: ' + _0x37b725.message)
    }
  }
)
module.exports = {}
cmd(
  {
    pattern: 'FFDSFDSGVDSBDFBXFCVCXFGSDGFSERFEWREWRDSADSDSADASREWQDS',
    desc: 'Search and send images from Google.',
    category: 'media',
    filename: __filename,
  },
  async (
    _0x276395,
    _0x2bf185,
    _0x1968d0,
    {
      from: _0x5178a5,
      quoted: _0x44a9c2,
      body: _0x413839,
      isCmd: _0x6cb265,
      command: _0x583ab9,
      args: _0x9a76f,
      q: _0x198c3b,
      isGroup: _0x47c234,
      sender: _0x163563,
      senderNumber: _0x58e386,
      botNumber2: _0x498a7c,
      botNumber: _0x3887b4,
      pushname: _0x59a190,
      isMe: _0x45804f,
      isOwner: _0x1c1c66,
      groupMetadata: _0x3dd132,
      groupName: _0x5bc0bc,
      participants: _0x23b4bd,
      groupAdmins: _0x3a3275,
      isBotAdmins: _0x4d77d8,
      isAdmins: _0x8c7605,
      reply: _0x1e731c,
    }
  ) => {
    try {
      if (!_0x198c3b) {
        return _0x1e731c('Please provide a search query for the image.')
      }
      const _0x5c70ee = encodeURIComponent(_0x198c3b),
        _0x222a32 =
          'https://www.googleapis.com/customsearch/v1?q=' +
          _0x5c70ee +
          '&cx=' +
          GOOGLE_CX +
          '&key=' +
          GOOGLE_API_KEY +
          '&searchType=image&num=5',
        _0x3d2771 = await axios.get(_0x222a32),
        _0x43cab0 = _0x3d2771.data
      if (!_0x43cab0.items || _0x43cab0.items.length === 0) {
        return _0x1e731c('No images found for your query.')
      }
      for (let _0x2c8a6d = 0; _0x2c8a6d < _0x43cab0.items.length; _0x2c8a6d++) {
        const _0x32ac67 = _0x43cab0.items[_0x2c8a6d].link,
          _0x3ee6b3 = await axios.get(_0x32ac67, {
            responseType: 'arraybuffer',
          }),
          _0x27f292 = Buffer.from(_0x3ee6b3.data, 'binary')
        await _0x276395.sendMessage(
          _0x5178a5,
          {
            image: _0x27f292,
            caption:
              '\n*\u26EC Image ' +
              (_0x2c8a6d + 1) +
              ' from your search! \u26EC*\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ',
          },
          { quoted: _0x2bf185 }
        )
      }
    } catch (_0x5ea143) {
      console.error(_0x5ea143)
      _0x1e731c('Error: ' + _0x5ea143.message)
    }
  }
)
cmd(
  {
    pattern: 'DWADWASDJYYIJSGDHJSAGDJSAGDJASD',
    alias: ['UYFIUDSHFUIDSYFJIDSHFJHDSFJHDSJFHDSJFHSDJFHJFH'],
    desc: 'Download instagram videos/photos.',
    category: 'download',
    use: '.ig <Instagram link>',
    filename: __filename,
  },
  async (
    _0x3ee6d1,
    _0x41d2ee,
    _0xcdba37,
    {
      from: _0x1ec1af,
      l: _0x402a1f,
      quoted: _0x1b425f,
      body: _0x2fc764,
      isCmd: _0x519632,
      command: _0x36c1cc,
      args: _0x433af1,
      q: _0x230749,
      isGroup: _0x5064c5,
      sender: _0x6a975f,
      senderNumber: _0xa7108,
      botNumber2: _0x243693,
      botNumber: _0x349a76,
      pushname: _0x57991b,
      isMe: _0x393a50,
      isOwner: _0x4df8a7,
      groupMetadata: _0x11a340,
      groupName: _0x5ad06f,
      participants: _0x35d2ac,
      groupAdmins: _0x440f43,
      isBotAdmins: _0xc10646,
      isAdmins: _0x3ac9e3,
      reply: _0x2ef4d7,
    }
  ) => {
    try {
      if (!_0x230749) {
        return await _0x2ef4d7(needus)
      }
      let _0x2f0024 = await fetchJson(
        'https://api.giftedtech.my.id/api/download/instadl?apikey=gifted&type=video&url=' +
          _0x230749
      )
      for (
        let _0x329601 = 0;
        _0x329601 < _0x2f0024.data.data.length;
        _0x329601++
      ) {
        if (_0x2f0024.data.data[_0x329601].type === 'image') {
          await _0x3ee6d1.sendMessage(
            _0x1ec1af,
            {
              image: { url: _0x2f0024.data.data[_0x329601].url },
              caption: config.FOOTER,
            },
            { quoted: _0x41d2ee }
          )
        } else {
          await _0x3ee6d1.sendMessage(
            _0x1ec1af,
            {
              video: { url: _0x2f0024.data.data[_0x329601].url },
              caption: config.FOOTER,
            },
            { quoted: _0x41d2ee }
          )
        }
      }
    } catch (_0x107c8c) {
      _0x2ef4d7(cantf)
      _0x402a1f(_0x107c8c)
    }
  }
)
cmd(
  {
    pattern: 'IUASDJISAHGDJSAHDSHAJDHSAJDHSAJDHSA',
    alias: ['YUTYTYTUTUTYUTUTUTUTUTUTUTUTUTUTUTUTUTUT'],
    desc: 'download gdrive files',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x5b7a0e,
    _0x5ce43b,
    _0x48bfc9,
    {
      from: _0x113087,
      quoted: _0xe74565,
      body: _0x2b0958,
      isCmd: _0x2ee866,
      command: _0x37505c,
      args: _0x2e2cac,
      q: _0x118818,
      isGroup: _0x20cd5c,
      sender: _0x1eee50,
      senderNumber: _0x1569e4,
      botNumber2: _0x3f4bbe,
      botNumber: _0x193ce0,
      pushname: _0x2f0ae4,
      isMe: _0x39f6f4,
      isOwner: _0xb10485,
      groupMetadata: _0x4aa5c7,
      groupName: _0x2c6ae8,
      participants: _0x397db9,
      groupAdmins: _0x3a0902,
      isBotAdmins: _0xbd8544,
      isAdmins: _0x2d432c,
      reply: _0x271179,
    }
  ) => {
    try {
      if (!_0x118818 && !_0x118818.startsWith('https://')) {
        return _0x271179('give me gdrive url')
      }
      let _0x10effc = await fetchJson(
        baseUrl + '/api/gdrivedl?url=' + _0x118818
      )
      _0x271179('*Downloading...*')
      await _0x5b7a0e.sendMessage(
        _0x113087,
        {
          document: { url: _0x10effc.data.download },
          fileName: _0x10effc.data.fileName,
          mimetype: _0x10effc.data.mimeType,
          caption: _0x10effc.data.fileName + '\n\n' + yourName,
        },
        { quoted: _0x5ce43b }
      )
    } catch (_0x4925d8) {
      console.log(_0x4925d8)
      _0x271179('' + _0x4925d8)
    }
  }
)
cmd(
  {
    pattern: 'DSKAHDKSAHDKHSAKDHSAKDHSAKDHSAKHDAS',
    alias: ['SDSAKJDHSAJKDHSAKHDSAHDSAHDSAHDKHAKDHAKDHKAHD'],
    desc: 'download mfire files',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x4b61cb,
    _0x578408,
    _0x328429,
    {
      from: _0xf08147,
      quoted: _0x1d896a,
      body: _0x49f951,
      isCmd: _0x3778e0,
      command: _0x522e98,
      args: _0xa85978,
      q: _0x590d2b,
      isGroup: _0x17b61a,
      sender: _0x145832,
      senderNumber: _0x473eca,
      botNumber2: _0x34aebd,
      botNumber: _0x17a52c,
      pushname: _0x58a8e8,
      isMe: _0x112f51,
      isOwner: _0xc0f7a5,
      groupMetadata: _0x51fb13,
      groupName: _0x17f5bf,
      participants: _0x39a64d,
      groupAdmins: _0x9dcf60,
      isBotAdmins: _0x865c51,
      isAdmins: _0x21a768,
      reply: _0x49da00,
    }
  ) => {
    try {
      if (!_0x590d2b && !_0x590d2b.startsWith('https://')) {
        return _0x49da00('give me mediafire url')
      }
      let _0x2e5710 = await fetchJson(
        baseUrl + '/api/mediafiredl?url=' + _0x590d2b
      )
      _0x49da00('*Downloading...*')
      await _0x4b61cb.sendMessage(
        _0xf08147,
        {
          document: { url: _0x2e5710.data.link_1 },
          fileName: _0x2e5710.data.name,
          mimetype: _0x2e5710.data.file_type,
          caption: _0x2e5710.data.name + '\n\n' + yourName,
        },
        { quoted: _0x578408 }
      )
    } catch (_0x3e2976) {
      console.log(_0x3e2976)
      _0x49da00('' + _0x3e2976)
    }
  }
)
cmd(
  {
    pattern: 'LKSDKJSHDKSAHKDHSAKDHADHAKHDKAHDADKADKAHKD',
    alias: ['UHFDSAGDJSADKJADAIDHAIDAIDKADKAHDKAHDKAKDAKDHAK'],
    desc: 'Download songs from Spotify',
    category: 'downloader',
    filename: __filename,
  },
  async (
    _0x1b930b,
    _0x229b88,
    _0x504681,
    { from: _0x2ac4ba, args: _0x2040e8, reply: _0x3e321e }
  ) => {
    try {
      if (!_0x2040e8[0]) {
        return _0x3e321e(
          'Please provide a Spotify song URL\nExample: .spotify https://open.spotify.com/track/...'
        )
      }
      const _0x10c8e3 = await _0x3e321e(
          '\uD83C\uDFB6 Downloading Spotify track... Please wait.\n> SUPUN MD'
        ),
        _0x51e0ce = await axios.get(
          'https://www.dark-yasiya-api.site/download/spotify',
          { params: { url: _0x2040e8[0] } }
        ),
        _0x2ba9df = _0x51e0ce.data.result,
        _0x4386ef =
          '\uD83C\uDFB5 *Spotify Song Download* \uD83C\uDFB5\n\n*Title:* ' +
          _0x2ba9df.title +
          '\n\n*Artist:* ' +
          _0x2ba9df.author +
          '\n\n\n> SUPUN-MD \uD83C\uDF1D\n\n\uD83D\uDCE5 Downloading...'
      await _0x1b930b.sendMessage(_0x2ac4ba, {
        image: { url: _0x2ba9df.thumbnail },
        caption: _0x4386ef,
      })
      await _0x1b930b.sendMessage(
        _0x2ac4ba,
        {
          audio: { url: _0x2ba9df.music },
          mimetype: 'audio/mpeg',
          fileName: _0x2ba9df.title + ' - ' + _0x2ba9df.author + '.mp3',
        },
        { quoted: _0x229b88 }
      )
      await _0x1b930b.sendMessage(_0x2ac4ba, { delete: _0x10c8e3.key })
    } catch (_0x2730bb) {
      console.error('Spotify Download Error:', _0x2730bb)
      _0x3e321e(
        'Failed to download the song. Please check the URL and try again.'
      )
    }
  }
)
cmd(
  {
    pattern: 'GJIDAjdhaKDHAMDMADHKAHDKADKAHDKAHKDHAKDAKDHAKDA',
    alias: ['megadl', 'meganz'],
    desc: 'urlneed',
    category: 'download',
    use: '.mega url',
    filename: __filename,
  },
  async (
    _0x59927f,
    _0x412f44,
    _0x32ff63,
    { from: _0x390dc7, q: _0x3bb7cd, reply: _0x4dc9f7 }
  ) => {
    if (!_0x3bb7cd) {
      return await _0x4dc9f7('*Please provide a mega.nz URL!*')
    }
    try {
      const _0x1b8c75 = File.fromURL(_0x3bb7cd)
      await _0x1b8c75.loadAttributes()
      const _0x40da44 = await _0x1b8c75.downloadBuffer()
      if (/mp4/.test(_0x1b8c75.name)) {
        await _0x59927f.sendMessage(
          _0x390dc7,
          {
            document: _0x40da44,
            mimetype: 'video/mp4',
            filename: '' + _0x1b8c75.name,
          },
          { quoted: _0x412f44 }
        )
      } else {
        if (/pdf/.test(_0x1b8c75.name)) {
          await _0x59927f.sendMessage(
            _0x390dc7,
            {
              document: _0x40da44,
              mimetype: 'application/pdf',
              filename: '' + _0x1b8c75.name,
            },
            { quoted: _0x412f44 }
          )
        } else {
          if (/zip/.test(_0x1b8c75.name)) {
            await _0x59927f.sendMessage(
              _0x390dc7,
              {
                document: _0x40da44,
                mimetype: 'application/zip',
                filename: '' + _0x1b8c75.name,
              },
              { quoted: _0x412f44 }
            )
          } else {
            if (/rar/.test(_0x1b8c75.name)) {
              await _0x59927f.sendMessage(
                _0x390dc7,
                {
                  document: _0x40da44,
                  mimetype: 'application/x-rar-compressed',
                  filename: '' + _0x1b8c75.name,
                },
                { quoted: _0x412f44 }
              )
            } else {
              if (/7z/.test(_0x1b8c75.name)) {
                await _0x59927f.sendMessage(
                  _0x390dc7,
                  {
                    document: _0x40da44,
                    mimetype: 'application/x-7z-compressed',
                    filename: '' + _0x1b8c75.name,
                  },
                  { quoted: _0x412f44 }
                )
              } else {
                if (/jpg|jpeg/.test(_0x1b8c75.name)) {
                  await _0x59927f.sendMessage(
                    _0x390dc7,
                    {
                      document: _0x40da44,
                      mimetype: 'image/jpeg',
                      filename: '' + _0x1b8c75.name,
                    },
                    { quoted: _0x412f44 }
                  )
                } else {
                  ;/png/.test(_0x1b8c75.name)
                    ? await _0x59927f.sendMessage(
                        _0x390dc7,
                        {
                          document: _0x40da44,
                          mimetype: 'image/png',
                          filename: '' + _0x1b8c75.name,
                        },
                        { quoted: _0x412f44 }
                      )
                    : await _0x59927f.sendMessage(
                        _0x390dc7,
                        {
                          document: _0x40da44,
                          mimetype: 'application/octet-stream',
                          filename: '' + _0x1b8c75.name,
                        },
                        { quoted: _0x412f44 }
                      )
                }
              }
            }
          }
        }
      }
      await _0x59927f.sendMessage(_0x390dc7, {
        react: {
          text: '\u2705',
          key: _0x412f44.key,
        },
      })
    } catch (_0x495ea0) {
      console.log(_0x495ea0)
      _0x4dc9f7('' + _0x495ea0)
    }
  }
)
cmd(
  {
    pattern: 'SSALDSAKHKSAHSIADOSADJSAKDKSADHIHDIASHGDAS',
    desc: 'Adult content search',
    use: '.xnxx <search_term>',
    react: '\uD83D\uDD1E',
    category: 'download',
    filename: __filename,
  },
  async (
    _0xea7704,
    _0x2e7614,
    _0x5638e9,
    {
      from: _0x1710c5,
      prefix: _0x19d073,
      l: _0x44a331,
      quoted: _0xd79b,
      body: _0x2b9862,
      isCmd: _0x593ffa,
      command: _0x59df1f,
      args: _0x4c7893,
      q: _0x57e7b6,
      isGroup: _0x49aabd,
      sender: _0x4aaaec,
      senderNumber: _0x4f5276,
      botNumber2: _0x517d5c,
      botNumber: _0x53f3a8,
      pushname: _0x22c6b1,
      isMe: _0x4bedad,
      isOwner: _0x191fd0,
      groupMetadata: _0x23cc81,
      groupName: _0x1141f8,
      participants: _0x4a196c,
      groupAdmins: _0x5e2a65,
      isBotAdmins: _0xe4efba,
      isAdmins: _0x1fc6f5,
      reply: _0x2cd03d,
    }
  ) => {
    const _0x4290f7 =
        '\n\uD83D\uDEA8 *EXPLICIT CONTENT WARNING* \uD83D\uDEA8\n\n\u26A0️ This command accesses adult content:\n\n*IMPORTANT GUIDELINES*:\n1. You must be 18+ years old\n2. Comply with local legal regulations\n3. Respect ethical content consumption\n4. Protect personal privacy\n5. Avoid harmful or exploitative material\n\n*Responsible Usage Principles*:\n- Consent is paramount\n- Respect human dignity\n- Be aware of potential psychological impacts\n\n*Legal Disclaimer*:\n- Content may be inappropriate\n- Potential legal restrictions apply\n- User discretion is strongly advised\n\n*INSTRUCTIONS*:\n- Reply with *CONFIRM* to proceed\n- Reply with *CANCEL* to exit\n\n*ADDITIONAL OPTIONS*:\n1. View Menu\n2. Get Ethical Guidelines\n3. Cancel Operation\n    ',
      _0x1a48a8 = await _0xea7704.sendMessage(
        _0x1710c5,
        {
          text: _0x4290f7,
          mentions: [_0x4aaaec],
        },
        { quoted: _0x2e7614 }
      ),
      _0x20ce1d = await new Promise((_0x43a396) => {
        const _0x40942a = async (_0x8a87cd) => {
          const _0xf32c54 = _0x8a87cd.messages[0]
          if (
            _0xf32c54.message?.extendedTextMessage?.contextInfo?.stanzaId ===
              _0x1a48a8.key.id &&
            _0xf32c54.key.participant === _0x4aaaec
          ) {
            const _0xbc4331 = _0xf32c54.message.extendedTextMessage.text.trim()
            switch (_0xbc4331.toUpperCase()) {
              case 'CONFIRM':
                _0xea7704.ev.off('messages.upsert', _0x40942a), _0x43a396(true)
                break
              case 'CANCEL':
                _0xea7704.ev.off('messages.upsert', _0x40942a), _0x43a396(false)
                break
              case '1':
                await _0xea7704.sendMessage(
                  _0x1710c5,
                  { text: 'Showing main menu...' },
                  { quoted: _0xf32c54 }
                )
                break
              case '2':
                await _0xea7704.sendMessage(
                  _0x1710c5,
                  {
                    text: '\n\uD83D\uDEE1️ *ETHICAL GUIDELINES* \uD83D\uDEE1️\n\n1. Respect consent\n2. Protect privacy\n3. Avoid exploitation\n4. Be mindful of psychological impacts\n5. Comply with legal regulations\n                            ',
                  },
                  { quoted: _0xf32c54 }
                )
                break
              case '3':
                _0xea7704.ev.off('messages.upsert', _0x40942a), _0x43a396(false)
                break
              default:
                await _0xea7704.sendMessage(
                  _0x1710c5,
                  {
                    text: 'Invalid option. Please choose 1, 2, 3, CONFIRM, or CANCEL.',
                  },
                  { quoted: _0xf32c54 }
                )
            }
          }
        }
        _0xea7704.ev.on('messages.upsert', _0x40942a)
        setTimeout(() => {
          _0xea7704.ev.off('messages.upsert', _0x40942a)
          _0x43a396(false)
        }, 30000)
      })
    if (!_0x20ce1d) {
      await _0xea7704.sendMessage(
        _0x1710c5,
        { text: '\u26D4 Operation cancelled. Exiting adult content search.' },
        { quoted: _0x2e7614 }
      )
      return
    }
    try {
      const _0x50b490 = _0x57e7b6?.trim()
      if (!_0x50b490) {
        return _0x2cd03d('*Please provide a search term*')
      }
      _0x2cd03d(
        '\uD83D\uDD0D Searching for content in SUPUN-MD WA BOT \u27A4...'
      )
      try {
        const _0x4d1226 = await xnxx.download(_0x50b490)
        if (!_0x4d1226 || !_0x4d1226.link_dl) {
          return _0xea7704.sendMessage(_0x1710c5, {
            react: {
              text: '\u274C',
              key: _0x2e7614.key,
            },
          })
        }
        _0x2cd03d('\u2B07️ Downloading content. Please wait \u27A4...')
        const _0x3aca6b = _0x4d1226.link_dl
        await _0xea7704.sendMessage(
          _0x1710c5,
          {
            video: { url: _0x3aca6b },
            caption:
              '\n\u26A0️ *ETHICAL CONSUMPTION REMINDER* \u26A0️\n\n- Respect content creators\n- Ensure consensual material\n- Be mindful of psychological impact\n- Practice responsible viewing\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n            ',
            mimetype: 'video/mp4',
          },
          await _0xea7704.sendMessage(
            _0x1710c5,
            {
              document: { url: _0x3aca6b },
              caption:
                '\n\u26A0️ *ETHICAL CONSUMPTION REMINDER* \u26A0️\n\n- Respect content creators\n- Ensure consensual material\n- Be mindful of psychological impact\n- Practice responsible viewing\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n            ',
              mimetype: 'video/mp4',
            },
            { quoted: _0x2e7614 }
          )
        )
        await _0xea7704.sendMessage(_0x1710c5, {
          react: {
            text: '\u2705',
            key: _0x2e7614.key,
          },
        })
      } catch (_0x2c30b7) {
        console.error('Download Error:', _0x2c30b7)
        _0x2cd03d('*Download Error:* ' + _0x2c30b7.message)
      }
    } catch (_0x3d43a4) {
      console.error('Unexpected Error:', _0x3d43a4)
      _0x2cd03d('*Unexpected Error:* ' + _0x3d43a4.message)
    }
  }
)
cmd(
  {
    pattern: 'FDGFDGJKSJSDJJSDJSJHSGSGSBSHHSMSJSJMSHSJNSJHSMHSNSHSNHJS',
    alias: 'ISIJKSJSUJXJHJIASKJASKAJSAJSAjsaJKSa',
    desc: 'To download songs.',
    category: 'download',
    filename: __filename,
  },
  async (_0x4bf2b0, _0x2b01e3, _0x270380, _0x1e2bd4) => {
    const {
      from: _0x191be6,
      quoted: _0x14c85e,
      body: _0x9afdda,
      isCmd: _0x4ab14e,
      command: _0x3fb630,
      args: _0x5356d1,
      q: _0x56c8f1,
      isGroup: _0x34b28b,
      sender: _0x83c28a,
      senderNumber: _0x35a0e9,
      botNumber: _0xf2b510,
      pushname: _0x155a09,
      isMe: _0x251b4c,
      isOwner: _0x485982,
      groupMetadata: _0x12d5c7,
      groupName: _0x4a781a,
      participants: _0x1c4d47,
      groupAdmins: _0x11f444,
      isBotAdmins: _0xeee989,
      isAdmins: _0x341f64,
      reply: _0xc73993,
    } = _0x1e2bd4
    try {
      if (!_0x56c8f1) {
        return await _0xc73993('Please give me Yt url or Name')
      }
      const _0x535806 = await ytsearch(_0x56c8f1)
      if (_0x535806.results.length < 1) {
        return _0xc73993('Results is not found !')
      }
      let _0x57f5a0 = _0x535806.results[0]
      const _0x209bf5 = await ytmp3(_0x57f5a0.url)
      let _0x29c4f7 =
        '\n \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n \u2502SUPUN-MD SONG DOWNLOADING \n \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2502 ℹ️ *SUPUN-MD* \n\u2502\n\u2502\u260D \u2981 *Title:* ' +
        _0x57f5a0.title +
        ' \n\u2502\u260D \u2981 *Duration:* ' +
        _0x57f5a0.timestamp +
        '\n\u2502\u260D \u2981 *Views:* ' +
        _0x57f5a0.views +
        ' \n\u2502\u260D \u2981 *Uploaded On:* ' +
        _0x57f5a0.ago +
        ' \n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2756\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2502 \xA9 \uD835\uDE4F\uD835\uDE64 \uD835\uDE59\uD835\uDE64\uD835\uDE6C\uD835\uDE63\uD835\uDE61\uD835\uDE64\uD835\uDE56\uD835\uDE59 \uD835\uDE68\uD835\uDE5A\uD835\uDE63\uD835\uDE59: \uD83D\uDD22\n\u2502\n\u2502 *\u2780*  ᴀᴜᴅɪᴏ ꜰɪʟᴇ \uD83C\uDFB6\n\u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\u2502 *\u2781*  ᴅᴏᴄᴜᴍᴇɴᴛ ꜰɪʟᴇ \uD83D\uDCC2\n\u2060\u2060\u2060\u2060\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2756\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n    '
      const _0x3e1365 = await _0x4bf2b0.sendMessage(
          _0x191be6,
          {
            image: { url: _0x57f5a0.thumbnail },
            caption: _0x29c4f7,
          },
          { quoted: _0x2b01e3 }
        ),
        _0x2eaebc = _0x3e1365.key.id
      _0x4bf2b0.ev.on('messages.upsert', async (_0x102ecb) => {
        const _0x450c49 = _0x102ecb.messages[0]
        if (!_0x450c49.message) {
          return
        }
        const _0x348201 =
            _0x450c49.message.conversation ||
            _0x450c49.message.extendedTextMessage?.text,
          _0x5ea0e3 = _0x450c49.key.remoteJid,
          _0x8de2e5 =
            _0x450c49.message.extendedTextMessage &&
            _0x450c49.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x2eaebc
        if (_0x8de2e5) {
          await _0x4bf2b0.sendMessage(_0x5ea0e3, {
            react: {
              text: '\u2B07️',
              key: _0x450c49.key,
            },
          })
          const _0x2775f9 = _0x209bf5.download.url
          await _0x4bf2b0.sendMessage(_0x5ea0e3, { delete: _0x3e1365.key })
          await _0x4bf2b0.sendMessage(_0x5ea0e3, {
            react: {
              text: '\u2B06️',
              key: _0x450c49.key,
            },
          })
          if (_0x348201 === '1') {
            await _0x4bf2b0.sendMessage(
              _0x5ea0e3,
              {
                audio: { url: _0x2775f9 },
                mimetype: 'audio/mpeg',
                contextInfo: {
                  externalAdReply: {
                    title: _0x57f5a0.title,
                    body: _0x57f5a0.videoId,
                    mediaType: 1,
                    sourceUrl: _0x57f5a0.url,
                    thumbnailUrl: _0x57f5a0.thumbnail,
                    renderLargerThumbnail: true,
                    showAdAttribution: true,
                  },
                },
              },
              { quoted: _0x450c49 }
            )
            await _0x4bf2b0.sendMessage(_0x5ea0e3, {
              react: {
                text: '\u2705',
                key: _0x450c49.key,
              },
            })
          } else {
            _0x348201 === '2' &&
              (await _0x4bf2b0.sendMessage(
                _0x5ea0e3,
                {
                  document: { url: _0x2775f9 },
                  mimetype: 'audio/mp3',
                  fileName: _0x57f5a0.title + '.mp3',
                  caption: '\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n ',
                },
                { quoted: _0x450c49 }
              ),
              await _0x4bf2b0.sendMessage(_0x5ea0e3, {
                react: {
                  text: '\u2705',
                  key: _0x450c49.key,
                },
              }))
          }
        }
      })
    } catch (_0x2e5ba4) {
      console.log(_0x2e5ba4)
      _0xc73993('' + _0x2e5ba4)
    }
  }
)
