let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command }) => {
    let __timers = (new Date - global.DATABASE._data.users[m.sender].lastmining)
        let _timers = (172800000 - __timers) 
        let timers = clockString(_timers)
            if (global.DATABASE._data.users[m.sender].pickaxe > 0) {
        if (new Date - global.DATABASE._data.users[m.sender].lastmining > 172800000) {
            let rmining1 = `${Math.floor(Math.random() * 3)}`
            let rmining2 = `${Math.floor(Math.random() * 5)}`
            let rmining3 = `${Math.floor(Math.random() * 2)}`
            let rmining4 = `${Math.floor(Math.random() * 40)}`
            let rmining5 = `${Math.floor(Math.random() * 7)}`
            .trim()
    let user = global.DATABASE.data.users[m.sender]

let emas = (rmining1 * 1)
let besi = (rmining2 * 1) 
let minyak_bumi = (rmining3 * 1)
let batu = (rmining4 * 1)
let perunggu = (rmining5 * 1)

hslmng = `*「 Hasil Mining 」*

🥇 Emas = *${emas}*			
⛓️ Besi = *${besi}*
🪨 Batu = *${batu}*
🛢️ Minyak Bumi = *${minyak_bumi}*
🥉 Perunggu = *${perunggu}*
`
global.DATABASE.data.users[m.sender].emas += emas
global.DATABASE.data.users[m.sender].batu += batu
global.DATABASE.data.users[m.sender].iron += besi
global.DATABASE.data.users[m.sender].minyak_bumi += minyak_bumi
global.DATABASE.data.users[m.sender].perunggu += perunggu
global.DATABASE._data.users[m.sender].pickaxe -= 1
global.DATABASE.data.users[m.sender].healt -= 70
setTimeout(() => {
                     m.reply(`${hslmng}`)
                     }, 1800000) 

                     setTimeout(() => {
                     m.reply('Nah Sudah Dapat, Mohon Tunggu 30 menit Untuk Mendapatkan Hasilnya.')
                     }, 900000) 
                     
                     setTimeout(() => {
                     m.reply('_Sedang Mencari Goa..._')
                     }, 0) 
  user.lastmining = new Date * 1
    } else conn.sendButton(m.chat, `Istirahat Dulu Bro Baru Bisa Mining Lagi.\nIstirahat Selama: _*${timers}*_`, '© Nekohime', 'Hasil Mining', '.peti', m)
} else conn.sendButton(m.chat, `_*Beli Dulu Bro Pickaxenya*_`, '© Nekohime', 'Beli Pickaxe', '.beli pickaxe', m)
}
handler.help = ['mining', 'nambang']
handler.tags = ['rpg']
handler.command = /^(mining|nambang)$/i

module.exports = handler
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
