let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Perintah ini untuk mencari kode pos berdasarkan kota/pencarian*\n\ncontoh:\n${usedPrefix + command} Lamongan`
    try {
    let res = await fetch(global.API('xteam', '/kodepos', { q: text }, 'APIKEY'))
    if (res.status != 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}. Provinsi: ${v.province}\nKota: ${v.city}\nKecamatan: ${v.subdistrict}\nPerkotaan: ${v.urban}\nKode Pos: ${v.postalcode}`).join('\n\n')
    m.reply(mes)
} catch (e) {
    console.log(e)
    throw '_*Error!*_'
}
}
handler.help = ['kodepos <kota>']
handler.tags = ['tools']
handler.command = /^kodepos$/i

handler.limit = true

module.exports = handler