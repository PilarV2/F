let { MessageType } = require('@adiwajshing/baileys');
let fs = require("fs");
let handler = async (m, {usedPrefix}) => {
    let img = "./src/logo.jpg"
    //FAKE TROLI       
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
    message: `Nekohime Bot`, 
    orderTitle: `Order Prem`,
    thumbnail: fs.readFileSync("./src/logo.jpg"), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let name = m.fromMe ? conn.user : conn.contacts[m.sender];
  let txt = `Hai *${name.vnmae || name.notify || name.name || '+' + name.jid.split`@`[0]}*\n\n•Pilih bayar untuk sewa bot 2 Minggu = Rp 12.000 💵\n•Pilih back untuk memilih harganya`;
    const buttons = [
      { buttonId: `.sewabot`, buttonText: { displayText: '⬅️ Back' }, type: 1 },
      { buttonId: `.listpembayaran`, buttonText: { displayText: '💷 Bayar' }, type: 1 },
    ];
  
    const buttonMessage = {
      contentText: txt,
      footerText: '© Nekohime',
      buttons: buttons,
      headerType: 1,
    };
    return conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: ftrol });
}
handler.command = /^(sewabot2minggu)$/i

module.exports = handler
