let { MessageType } = require('@adiwajshing/baileys');
let fs = require('fs');
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
  let elemenku = global.DATABASE.data.users[m.sender].elemen;
  let elemenlevel = global.DATABASE.data.users[m.sender].elemenlevel;
  let elemenpower = global.DATABASE.data.users[m.sender].elemenpower;
  let pp = fs.readFileSync("./src/elemen.jpg")
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  let elementku = global.DATABASE.data.users[m.sender]

  if (elementku.elementcreated == false) return m.reply('Anda Belum Membuat Elemen')
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
                    message: `🔮 INFO ELEMEN KAMU`, 
                    orderTitle: `ELEMEN`,
                    thumbnail: fs.readFileSync("./src/elemen.jpg"), //Gambarnye
                    sellerJid: '0@s.whatsapp.net' 
                    }
                    }
                    }
  let txt = `🔮 Element Kamu ${elemenku}
  Level Elemen: ${elemenlevel}
  Kekuatan Elemen: ${elemenpower}`;
  conn.send2Button(m.chat, txt, '© ZeusBotz', '☰ MENU', '/menu', '☰ INV', '.inv', ftrol)
};
handler.help = ['myelement', 'element'];
handler.tags = ['rpg'];
handler.command = /^(myelement|element)$/i;
module.exports = handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
