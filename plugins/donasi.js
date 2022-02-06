let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Dana [081319859673]
│ • Telkomsel [081319859673]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281319859673
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
