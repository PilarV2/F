let { MessageType } = require('@adiwajshing/baileys');
let handler = async (m, {usedPrefix}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let content = `Hai @${who.replace(/@.+/, '')} \nSilahkan mau dibuka/ditutup grup.`
    const buttons = [
      { buttonId: `.groupsetting open`, buttonText: { displayText: 'BUKA' }, type: 1 },
      { buttonId: `.groupsetting close`, buttonText: { displayText: 'TUTUP' }, type: 1 },
    ];
  
    const buttonMessage = {
      contentText: content,
      footerText: `© ZeusBotz`,
      buttons: buttons,
      headerType: 1,
    };
    let mentionedJid = [who]
  return conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { contextInfo: { mentionedJid }})
}
handler.help = ['group']
handler.tags = ['group']
handler.command = /^(group)$/i
handler.admin = true
handler.botAdmin = true
handler.group = true

module.exports = handler
