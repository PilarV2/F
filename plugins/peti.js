let { MessageType } = require('@adiwajshing/baileys');

let confirm = {};
let levelling = require('../lib/levelling');
let handler = async (m, { conn, usedPrefix }) => {
  let emas = global.DATABASE.data.users[m.sender].emas;
  let besi = global.DATABASE.data.users[m.sender].iron;
  let batu = global.DATABASE.data.users[m.sender].batu;
  let minyak_bumi = global.DATABASE.data.users[m.sender].minyak_bumi;
  let perunggu = global.DATABASE.data.users[m.sender].perunggu;
  let name = m.fromMe ? conn.user : conn.contacts[m.sender];
  let txt = `Hasil Mining *${name.vnmae || name.notify || name.name || '+' + name.jid.split`@`[0]}*\n
🥇 Emas = *${emas}*			
⛓️ Besi = *${besi}*
🪨 Batu = *${batu}*
🛢️ Minyak Bumi = *${minyak_bumi}*
🥉 Perunggu = *${perunggu}*`;
  const buttons = [
    { buttonId: `.inv`, buttonText: { displayText: '☰ INV' }, type: 1 },
    { buttonId: `.menu`, buttonText: { displayText: '☰ MENU' }, type: 1 },
  ];

  const buttonMessage = {
    contentText: txt,
    footerText: '© Nekohime',
    buttons: buttons,
    headerType: 1,
  };
  return conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: m });
};
handler.help = ['peti'];
handler.tags = ['rpg'];
handler.command = /^(peti)$/i;
module.exports = handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
