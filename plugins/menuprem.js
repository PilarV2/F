let { MessageType } = require('@adiwajshing/baileys');
let handler = async (m, {usedPrefix}) => { let txt =`
╭─「 MENU PREM 」
│➪ ${usedPrefix}bokep
│➪ ${usedPrefix}bokepjav
│➪ ${usedPrefix}imghentai
│➪ ${usedPrefix}kodenuklir
│➪ ${usedPrefix}kodenuklir2
│➪ ${usedPrefix}jadibot
│➪ ${usedPrefix}blowanime
│➪ ${usedPrefix}cumsluts
│➪ ${usedPrefix}blowjob
│➪ ${usedPrefix}pussy
│➪ ${usedPrefix}hentaineko
│➪ ${usedPrefix}kitsune
│➪ ${usedPrefix}milf
│➪ ${usedPrefix}masturbasi
│➪ ${usedPrefix}gangbang
│➪ ${usedPrefix}bokep [1-20]
╰─────────────
`
const buttons = [
    { buttonId: `.payprem`, buttonText: { displayText: 'BELI PREM' }, type: 1 }
  ];

  const buttonMessage = {
    contentText: txt,
    footerText: '© Nekohime',
    buttons: buttons,
    headerType: 1,
  };
  return conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: m });
} // Tambah sendiri kalo mau
handler.help = ['menuprem']
handler.tags = ['info']
handler.command = /^menuprem$/i

module.exports = handler
