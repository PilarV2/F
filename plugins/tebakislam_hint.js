let handler = async (m, { conn }) => {
    conn.tebakislam = conn.tebakislam ? conn.tebakislam : {}
    let id = m.chat
    if (!(id in conn.tebakislam)) throw false
    let json = conn.tebakislam[id][1]
    let clue = json.jawaban.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.tebakislam[id][0])
}
handler.command = /^bantuan$/i

module.exports = handler