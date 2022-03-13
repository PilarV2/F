let { MessageType } = require('@adiwajshing/baileys');
let fs = require('fs');
const moment = require('moment-timezone')
let confirm = {};
let levelling = require('../lib/levelling');
let handler = async (m, { conn, usedPrefix }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  let drevil = global.DATABASE._data.users[m.sender].drevil;
  let sinterklas = global.DATABASE._data.users[m.sender].sinterklas;
  let heroacademy = global.DATABASE._data.users[m.sender].heroacademy;
  let farmerskin = global.DATABASE._data.users[m.sender].farmerskin;
  let estemata = global.DATABASE._data.users[m.sender].estemata;
  let darkabyss = global.DATABASE._data.users[m.sender].darkabyss;
  let name = m.fromMe ? conn.user : conn.contacts[m.sender];
  const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
  const fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": `*ZeusBotz*`,
                  "h": `ZeusBotz`,
                  'duration': '99999', 
                  'gifPlayback': 'true', 
                  'caption': `${ucapanWaktu}`,
                  'jpegThumbnail': fs.readFileSync("./src/logo.jpg"),
                         }
                        }
                     } 
  let txt = `List Skin *${name.vnmae || name.notify || name.name || '+' + name.jid.split`@`[0]}*\n
╭─❖「 *Normal* 」
│ 👩🏻‍🌾 Farmer: *${farmerskin == 0 ? 'Tidak Punya' : '' || farmerskin == 1 ? 'Punya' : ''}*
│ 🧝🏻‍♂️ Estemata: *${estemata == 0 ? 'Tidak Punya' : '' || estemata == 1 ? 'Punya' : ''}*
╰─────────────❖\n\n
╭─❖「 *Limited* 」
│ 🎅🏻 Santaclaus: *${sinterklas == 0 ? 'Tidak Punya' : '' || sinterklas == 1 ? 'Punya' : ''}*
│ 🦸🏻‍♂️ Hero Academy: *${heroacademy == 0 ? 'Tidak Punya' : '' || heroacademy == 1 ? 'Punya' : ''}*
│ 👩🏻‍🔬 Dr Evil: *${drevil == 0 ? 'Tidak Punya' : '' || drevil == 1 ? 'Punya' : ''}*
│ 🦹🏻 Dark Abyss: *${darkabyss == 0 ? 'Tidak Punya' : '' || darkabyss == 1 ? 'Punya' : ''}*
╰─────────────❖`;
  const buttons = [
    { buttonId: `.inv`, buttonText: { displayText: '☰ INV' }, type: 1 },
    { buttonId: `.menu`, buttonText: { displayText: '☰ MENU' }, type: 1 },
  ];

  const buttonMessage = {
    contentText: txt,
    footerText: '© ZeusBotz',
    buttons: buttons,
    headerType: 1,
  };
  return conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: fgif, contextInfo: { mentionedJid }});
};
handler.help = ['skin', 'listskin'];
handler.tags = ['rpg'];
handler.command = /^(skin|listskin)$/i;
module.exports = handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
