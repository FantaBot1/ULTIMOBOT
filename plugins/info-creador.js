let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭─「➻❥ *owner* ➻❥」
│➯ 𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿𝗶𝘁𝘆 𝗕𝗼𝘁
│➯Wa.me/51926933818 (CREADOR)
╰───────────────╯`.trim()   
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
'title': '',
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
handler.command = /^(owner|creator|creador|propietario)$/i
handler.register = true
export default handler
