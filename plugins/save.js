const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson} = require("../lib/functions");

cmd({
  pattern: 'pair1',
  //alias: ["paircode1","pp1","pc","pcode"],
  react: '🔢',
  desc: "pair",
  category: 'download',
  use: ".pair +94727319036",
  filename: __filename
}, async (context, message, extra, { 
  from, 
  prefix, 
  quoted, 
  q, 
  reply 
}) => {
  try {
    if (!q) {
      return await reply("*Please Your Phone Number 📞*\n`👇 Example :`\n\n.pair 94727319036\n\n> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*");
    }
    const response = await fetchJson("https://queen-rashu-sesion-7bdf00f2fa51.herokuapp.com/code?number=" + q);
    const code = response.code;
    extra.reply(code + "\n\n" + "*Copy Code...⌛*\n`peast with link device 📲\n\n> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*`");
  } catch (error) {
    console.log(error);
    reply(error);
  }
});
