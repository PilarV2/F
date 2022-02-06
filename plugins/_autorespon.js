let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `┌「 Undang Bot ke Grup 」
├ 7 Hari / Rp 5,000
├ 30 Hari / Rp 10,000
└────

Jangan Lupa Join: ${global.linkGC}
`.trim(), '© Nekohime', 'Pemilik Bot', '.owner', m)
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    // Hallo
    let hallo = /(halo|hallo)/i
    let ishalo = hallo.exec(m.text)
    if (ishalo && !m.fromMe) {
        m.reply(`Hallo juga 🥰`)
    }

    // Hai
    let hai = /(hai)/i
    let ishai = hai.exec(m.text)
    if (ishai && !m.fromMe) {
        m.reply(`Hai 🥰`)
    }

    
    // Kamu udah makan ?
    let udhmakan = /(kamu udh makan blm|kamu udah makan belom)/i
    let ismakan = udhmakan.exec(m.text)
    if (ismakan && !m.fromMe) {
        m.reply(`Udh`)
    }

    // Makan apa ?
    let makanapa = /(makan apa|sama apa|sma ap|mkn ap)/i
    let ismakanapa = makanapa.exec(m.text)
    if (ismakanapa && !m.fromMe) {
        m.reply(`Rendang`)
    }

    // Kamu jadi pacar aku
    let pacar = /(kamu mau ?(nggak|gk|gak) jadi pacar aku)/i
    let ispacar = pacar.exec(m.text)
    if (ispacar && !m.fromMe) {
        m.reply(`Mau 💕`)
    }

    // Bot on gk ?
    let ongk = /(Bot on ?(nggak|gk|nggak))/i
    let isongk = ongk.exec(m.text)
    if (isongk && !m.fromMe) {
        m.reply(`On dong 😄`)
    }

    // Bot off ?
    let onff = /(Bot ?(off|op|of))/i
    let isoff = onff.exec(m.text)
    if (isoff && !m.fromMe) {
        m.reply(`Gk, karena aku selalu menemani mu 😘`)
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}