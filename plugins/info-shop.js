let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭「 𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿𝗶𝘁𝘆 𝗕𝗼𝘁 」
│➯➻❥ *✳️TIENDA-SHOP✨* ➻❥
│➯ *.minar gana xp* 🧿
│➯ *.minar2 gana Diamantes* 💎
│➯ *.minar3 gana Coins* 💰
│➯ *.claim reclama tu recompensa diaria exp* 🧿
│➯ *.darxp recompensa diaria exp* 🧿
│➯ *.coffer un cofre de recompensas diarias* ✨
│➯ *puedes comprar diamantes usando los comandos* 💥
│➯ *.bus <cantidad>* 💎
│➯ *.busyall te cobra Hades-Coins* 💰
│➯ *.bur <cantidad>* 🪙
│➯ *.buryall te cobra Tokens* 🪙
│➯ *.buy <cantidad>* 🧿
│➯ *.buyall te cobra experiencia* 🧿
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *🪙DINERO🪙* ➻❥」
│➯ *para ver todo tu dinero usa el comando*
│➯ *.bal*
︎╰───────────────╯`.trim()   
let buttonMessage= {
'document': { url: `https://instagram.com/superiority.kchero` },
'mimetype': `application/${document}`,
'fileName': `𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿𝗶𝘁𝘆 𝗕𝗼𝘁`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://instagram.com/superiority.kchero',
'mediaType': 2,
'previewType': 'pdf',
'title': '⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://instagram.com/superiority.kchero' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(shop|Shop)$/i
handler.register = true
export default handler
