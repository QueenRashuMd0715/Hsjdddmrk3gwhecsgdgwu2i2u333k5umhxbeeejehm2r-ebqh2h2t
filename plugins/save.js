// CODED BY KALIYA-X


const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')
const searchlink = 'https://dark-yasiya-api.site' 
const downlink = 'https://dark-shan-yt.koyeb.app/download'
const apilink = 'https://www.dark-yasiya-api.site' 



cmd({
    pattern: "phub",
    alias: ["ph","porndown","pornhub"],
    react: "🔞",
    desc: "Download pornhub.com porn video",
    category: "download",
    use: '.phub Sri Lanka',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("Please give me few word !")
    
const phub_search = await fetchJson(`${apilink}/search/phub?q=${q}`)
if(phub_search.result.length < 0) return await reply("Not results found !")

const phub_info = await fetchJson(`${apilink}/download/phub?url=${phub_search.result[0].url}`)
    
  // GET FIRST VIDEO
  
const phubcaption =` 

*𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 PORN VIDEO DOWNLOADER 🔞*

     
🔮 *Title* - ${phub_info.result.video_title}
🔮 *Uploader* - ${phub_info.result.video_uploader}
🔮 *Duration* - ${phub_info.result.analyze_time}

> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*
`
await conn.sendMessage( from, { image: { url: phub_info.result.video_cover || '' }, caption: phubcaption }, { quoted: mek })

// SEND 240P QUALITY VIDEO
await conn.sendMessage(from, { document: { url: phub_info.result.format[0].download_url }, mimetype: "video/mp4", fileName: phub_info.result.video_title, caption: phub_info.result.video_title }, { quoted: mek });


} catch (error) {
console.log(error)
reply(error)
}
})



cmd({
    pattern: "apk1dhdhdxxnxjxushs",
    //alias: ["app","ps","playstore"],
    react: "🔞",
    desc: "Download App APK ",
    category: "download",
    use: '.apk < text >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("Please give me few word !")
    
const apk_search = await fetchJson(`${apilink}/search/apk?text=${q}`)
if(apk_search.result.data.length < 0) return await reply("Not results found !")

const apk_info = await fetchJson(`${apilink}/download/apk?id=${apk_search.result.data[0].id}`)
    
  // GET FIRST APK
  
const apkcaption =` 

       🔥   *APK DOWNLOADER*   🔥

     
🔮 *Name* - ${apk_info.result.name}
🔮 *Package* - ${apk_info.result.package}
🔮 *Size* - ${apk_info.result.size}
`
await conn.sendMessage( from, { image: { url: apk_info.result.image || '' }, caption: apkcaption }, { quoted: mek })

// SEND APK
await conn.sendMessage(from, { document: { url: apk_info.result.dl_link }, mimetype: "application/vnd.android.package-archive", fileName: apk_info.result.name , caption: apk_info.result.name }, { quoted: mek });


} catch (error) {
console.log(error)
reply(error)
}
})


cmd({
    pattern: "faceboohdhdbsjsnsjsuwjdufk",
    //alias: ["fb"],
    react: "🔞",
    desc: "Download facebook video",
    category: "download",
    use: '.fb < text >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("Please give me fb link !")
    

const fb_info = await fetchJson(`${apilink}/download/fbdl1?url=${q}`)
    
  // GET FB VIDEO
  
const fbcaption =` 

       🔥   *FB DOWNLOADER*   🔥

     
🔮 *Title* - ${fb_info.result.title}`

let sd = "SD VIDEO"
let hd = "HD VIDEO"
await conn.sendMessage( from, { image: { url: fb_info.result.image || '' }, caption: fbcaption }, { quoted: mek })

// SEND SD QUALITY VIDEO
await conn.sendMessage(from, { video: { url: fb_info.result.sd }, mimetype: "video/mp4", fileName: fb_info.result.title, caption: `${sd}` }, { quoted: mek });
// SEND HD QUALITY VIDEO
await conn.sendMessage(from, { video: { url: fb_info.result.hd }, mimetype: "video/mp4", fileName: fb_info.result.title, caption: `${hd}` }, { quoted: mek });

} catch (error) {
console.log(error)
reply(error)
}
})






cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, reply, q}) => {
try{

if(!q) return reply('Give me song name or url !')
    
const search = await fetchJson(`${searchlink}/search/yt?q=${q}`)
const data = search.result.data[0];
const url = data.url
    
const ytdl = await fetchJson(`${downlink}/ytmp3?url=${data.url}` + '&quality=3' )
    
let message = `‎‎           
*🎧𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 SONG DOWNLOADER 🎧*


 🎵 ‎Title: ${data.title}
 ⏱ Duration: ${data.timestamp}
 🌏 Uploaded: ${data.ago}
 🧿 Views: ${data.views}
 🤵 Author: ${data.author.name}
 📎 Url: ${data.url}
 
 > *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*`
  
await conn.sendMessage(from, { image: { url : data.thumbnail }, caption: message }, { quoted : mek })
await conn.sendMessage(from,{audio: {url: ytdl.data.download },mimetype:"audio/mpeg"},{ quoted: mek })
await conn.sendMessage(from,{document: {url: ytdl.data.download },mimetype:"audio/mpeg",fileName: data.title + ".mp3",caption:"> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*"},{ quoted: mek })

                        
    
} catch(e){
console.log(e)
reply(e)
}
});    


