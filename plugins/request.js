// By RC047 :V

let handler = async(m, { conn, text }) => {
    let name = global.DATABASE.data.users[m.sender].name
    if (!text) throw 'Silahkan masukkan request'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    const laporan = `*「 REQUEST 」*\nDari: ${name}\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply('✔️ Permintaan anda telah terkirim ke Owner Bot')
}
handler.help = ['request'].map(v => v + ' <apa>')
handler.tags = ['info']
handler.command = /^(req|request)$/i

module.exports = handler