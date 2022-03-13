let handler = async(m, { conn, text }) => {
    const laporan = `*_Hallo Bos Ada Yang Mau Beli Prem Nih*_\nNomor : wa.me/${m.sender.split`@`[0]}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6289625556161@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(`✅ Bukti Anda Telah Terkirim\nMohon Tunggu Info Selanjutnya\n\nDan Pastikan Anda Telah Membayarnya\nJika Blm Ada Respon, Chat Ke Owner Ku Yah\n${global.pemilikasli}`)
}
handler.command = /^(buktiprem)$/i

module.exports = handler
