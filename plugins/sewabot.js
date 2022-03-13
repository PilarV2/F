let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ 〘 SEWA 〙
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = 5k/grup (1 minggu)
║┊ ⌲ Sewa = 10k/grup (1 bulan)
║┊ ⌲ Sewa = 20k/grup (Permanen)
╰═ ┅ ═══════

╭═══ 〘 BELI PREMIUM 〙
║ ┅ ๑————————————๑
║┊ ⌲ Premium = 5k/minggu
║┊ ⌲ Premium = 20k/bulan
║┊ ⌲ Premium = _35k/permanen
╰═ ┅ ═══════

༅ KEUNTUNGAN SEWABOT

✧ Bot akan masuk gc
✧ Bisa Menyuruh Bot Buka/Tutup Group
✧ Kick Orang
✧ Add Orang
✧ Anti Link On
✧ Bisa Memasukkan Bot Ke dalam Grup

[❗] Jika Group Sepi 2 minggu, bot akan leave

◪ Jika Minat Hubungi owner kami
◪ Atau Masuk Group Official Bot
https://chat.whatsapp.com/HJ9pD2XJ8vq7whuAYOvT1Y

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `ZeusBotz`, 'Payment', '#payment', 'Owner', '#owner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot)?$/i

module.exports = handler
