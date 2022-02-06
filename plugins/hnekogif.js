let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
    if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    await m.reply('⚠️ _*TUNGGU SEBENTAR*_')
    try {
    let res = await fetch(API('amel', '/nekogif', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.sendButtonImg(m.chat, json.url, 'Awokawokawokawok Sange Kok Sama Kucing Stress!!', '© Nekohime', '➡️ NEXT', `${usedPrefix + command}`, m)
} catch (e) {
    console.log(e)
    throw '_*Internal Server Error*_'
}
}
handler.help = ['hnekogif']
handler.tags = ['Anime', 'Hentai']
handler.command = /^(hnekogif)$/i
handler.premium = true
handler.private = true

module.exports = handler