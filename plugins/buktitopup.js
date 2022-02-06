let handler = async(m, { conn, text }) => {
    let name = global.DATABASE.data.users[m.sender].name
    if (!text) throw 'Silahkan masukkan buktinya'
    const laporan = `*_Hallo Bos Ada Yang Mau Top Up Nih_*\n\nDari: ${name}\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}\n\nNOTE: Tunggu Dia Bayar Dulu Bos.`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(`✅ Bukti Anda Telah Terkirim\nMohon Tunggu Info Selanjutnya\n\nDan Pastikan Anda Telah Membayarnya\nJika Blm Ada Respon, Chat Ke Owner Ku Yah\n${global.pemilikasli}\nDan Kirim Bukti Pembayarannya Yah.`)
}
handler.command = /^(buktitopup)$/i

module.exports = handler