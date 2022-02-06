let fs = require("fs")
let handler = async (m, { conn }) => {
    const ftrol = {
        key : {
        remoteJid: 'status@broadcast',
        participant : '0@s.whatsapp.net'
        },
        message: {
        orderMessage: {
        itemCount : 2022,
        status: 1,
        surface : 1,
        message: '🎉 SELAMAT', 
        orderTitle: `Regist Event`,
        thumbnail: fs.readFileSync("./src/logo.jpg"),
        sellerJid: '0@s.whatsapp.net' 
        }
        }
        }
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [who]
    if (global.DATABASE.data.users[m.sender].eventregist == 1) return conn.reply(m.chat, 'Anda Telah Meregist.', m)
      conn.sendButton(m.chat, `_*Selamat @${who.replace(/@.+/, '')} Anda Telah Meregist Untuk Event Tanggal 7 Febuari 🎉*_`, '© Nekohime', '☰ MENU', '.menu', ftrol, {contextInfo: { mentionedJid }});
      global.DATABASE._data.users[m.sender].eventregist += 1;
  };
  handler.help = ['registevent'];
  handler.tags = ['rpg'];
  handler.command = /^(registevent)$/i;
  
  module.exports = handler;