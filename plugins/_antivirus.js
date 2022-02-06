let handler = m => m

handler.all = async function (m, {isBotAdmin, isAdmin}) {
  let name = this.getName(m.sender)
    /* 
    otomatis membersihkan percakapan ketika terdapat pesan OVERSIZED
    https://github.com/adiwajshing/Baileys/blob/3507f8f/WAMessage/WAMessage.d.ts#L18605
    */
    if (m.messageStubType === 68) {
        this.sendMessage(m.chat, ('*VIRTEX TERDETEKSI, JANGAN SCROLL KEATAS! HAPUS CHAT INI BIAR GA EROR!!!*\n\n' + require('util').format(log)).padEnd(65536, '\n'), 'extendedTextMessage')
        this.sendMessage(m.chat `
        *「 ANTI VIRTEX 」*
        
        Terdeteksi *${name}* telah mengirim virtex!
        
        Maaf Kamu akan dikick dari grup ini!
        `.trim(), m)
        this.groupRemove(m.chat, [m.sender])
        if (!isBotAdmin) return m.reply('*Bot bukan admin, mana bisa kick orang _-*')
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
}

module.exports = handler