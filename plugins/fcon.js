let fs = require('fs');
let handler = async (m, {conn, args}) => {
    const fcon = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(m.chat ? 
        { remoteJid: "status@broadcast" } : {}) },
        message: { "contactMessage": { "title":"zul","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg')}}
       }
       conn.sendMessage(m.chat, `ini bwang`, 'conversation', { sendEphemeral: true, quoted: fcon })
}
handler.command = /^fakecon$/i

module.exports = handler