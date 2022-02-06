let handler = async (m, {usedPrefix}) => m.reply(`
╭─「 *SYARAT DAN KETENTUAN* 」
│➪ - Telpon Bot Blokir
│➪ - Telpon Owner Blokir Dan Ban
│➪ - Jika Ingin Masukan Bot Ke Grub Harus Izin Sama Owner [${usedPrefix}ijin] link grupnya
│➪ - Jika Bot Didalam Harus Jadikan Admin
│➪ - Jika Ada Bug Laporkan Ke Owner [${usedPrefix}bug]
│➪ - Jangan Menghina Bot
│➪ - Ingin Beli Premium [${usedPrefix}payprem]
│➪ - Moderator Harus Mengawasi Bot Jika Owner Sibuk
│➪ - Jangan Sebarkan Bokep Atau Fitur Prem Lainnya Ke Orang Lain :)
╰───────────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sk']
handler.tags = ['info']
handler.command = /^sk$/i

module.exports = handler
