let fetch = require('node-fetch')

let timeout = 120000
let poin = 3000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakislam = conn.tebakislam ? conn.tebakislam : {}
    let id = m.chat
    if (id in conn.tebakislam) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakislam[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/Galang-Purnama/sc/main/tebakislam.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}bantuan untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakislam[id] = [
        await conn.sendButton(m.chat, caption, '© Nekohime', 'Bantuan', '.bantuan'),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakislam[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, '© Nekohime', 'Tebak Islam', '.tebakislam')
            delete conn.tebakislam[id]
        }, timeout)
    ]
}
handler.help = ['tebakislam']
handler.tags = ['game']
handler.command = /^tebakislam/i

module.exports = handler