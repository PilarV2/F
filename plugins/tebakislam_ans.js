const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*bantuan/i.test(m.quoted.contentText)) return !0
    this.tebakislam = this.tebakislam ? this.tebakislam : {}
    if (!(id in this.tebakislam)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tebakislam[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakislam[id][1]))
        if (['.who', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.DATABASE.data.users[m.sender].exp += this.tebakislam[id][2]
            await this.sendButton(m.chat, `*Benar!* +${this.tebakislam[id][2]} XP`, '© Nekohime', 'Tebak Islam', '.tebakislam', m)
            clearTimeout(this.tebakislam[id][3])
            delete this.tebakislam[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler