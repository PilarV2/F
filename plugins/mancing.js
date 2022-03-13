let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command }) => {
    let __timers = (new Date - global.DATABASE._data.users[m.sender].lastfishing)
        let _timers = (86400000 - __timers) 
        let timers = clockString(_timers)
            if (global.DATABASE._data.users[m.sender].kail > 0) {
        if (new Date - global.DATABASE._data.users[m.sender].lastfishing > 86400000) {
            let randomaku1 = `${Math.floor(Math.random() * 3)}`
            let randomaku2 = `${Math.floor(Math.random() * 3)}`
            let randomaku4 = `${Math.floor(Math.random() * 3)}`
            let randomaku3 = `${Math.floor(Math.random() * 3)}`
            let randomaku5 = `${Math.floor(Math.random() * 3)}`
            let randomaku6 = `${Math.floor(Math.random() * 3)}`
            let randomaku7 = `${Math.floor(Math.random() * 3)}`
            let randomaku8 = `${Math.floor(Math.random() * 3)}`
            let randomaku9 = `${Math.floor(Math.random() * 2)}`
            let randomaku10 = `${Math.floor(Math.random() * 2)}`
            let randomaku11 = `${Math.floor(Math.random() * 3)}`
            let randomaku12 = `${Math.floor(Math.random() * 2)}`
            .trim()
    let user = global.DATABASE.data.users[m.sender]

let rbrb1 = (randomaku1 * 1)
let rbrb2 = (randomaku2 * 1) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1)
let rbrb5 = (randomaku5 * 1)
let rbrb6 = (randomaku6 * 1)
let rbrb7 = (randomaku7 * 1)
let rbrb8 = (randomaku8 * 1)
let rbrb9 = (randomaku9 * 1)
let rbrb10 = (randomaku10 * 1)
let rbrb11 = (randomaku11 * 1)
let rbrb12 = (randomaku12 * 1)

nekohime1 = `${rbrb1}`
nekohime2 = `${rbrb2}`
nekohime3 = `${rbrb3}`
nekohime4 = `${rbrb4}`
nekohime5 = `${rbrb5}`
nekohime6 = `${rbrb6}`
nekohime7 = `${rbrb7}`
nekohime8 = `${rbrb8}`
nekohime9 = `${rbrb9}`
nekohime10 = `${rbrb10}`
nekohime11 = `${rbrb11}`
nekohime12 = `${rbrb12}`

hsl123 = `
*《 Hasil Memancing Kali Ini 》*

 *🦀 = [ ${nekohime1} ]*			*🐠 = [ ${nekohime7} ]*
 *🦞 = [ ${nekohime2} ]*			 *🐟 = [ ${nekohime8} ]*
 *🦐 = [ ${nekohime3} ]*			 *🐬 = [ ${nekohime9} ]*
 *🦑 = [ ${nekohime4} ]*			 *🐳 = [ ${nekohime10} ]*
 *🐙 = [ ${nekohime5} ]*			 *🦈 = [ ${nekohime11} ]*
 *🐡 = [ ${nekohime6} ]*			*🐋 = [${nekohime12} ]*
`
global.DATABASE.data.users[m.sender].kepiting += rbrb1
global.DATABASE.data.users[m.sender].lobster += rbrb2
global.DATABASE.data.users[m.sender].udang += rbrb3
global.DATABASE.data.users[m.sender].cumi += rbrb4
global.DATABASE.data.users[m.sender].gurita += rbrb5
global.DATABASE.data.users[m.sender].ikan_buntal += rbrb6
global.DATABASE.data.users[m.sender].tropis += rbrb7
global.DATABASE.data.users[m.sender].ikan += rbrb8
global.DATABASE.data.users[m.sender].lumba += rbrb9
global.DATABASE.data.users[m.sender].paus += rbrb10
global.DATABASE.data.users[m.sender].hiu += rbrb11
global.DATABASE.data.users[m.sender].orca += rbrb12
global.DATABASE.data.users[m.sender].kail -= 1
setTimeout(() => {
                     m.reply(`${hsl123}`)
                     }, 20000) 
               
                     setTimeout(() => {
                     m.reply(`*Perfect*`)
                      }, 18000)
                    
                     setTimeout(() => {
                     m.reply('Strike')
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply('Menunggu')
                     }, 14000) 
                     
                     setTimeout(() => {
                     m.reply('_Sedang Memancing..._')
                     }, 0) 
  user.lastfishing = new Date * 1
    } else conn.sendButton(m.chat, `*Sepertinya Anda Sudah Kecapekan*\n*Silahkan Istirahat Dulu sekitar ${timers}*\n*Untuk bisa melanjutkan Memancing*`, '© ZeusBotz', 'Kolam', '.kolam', m)
} else conn.sendButton(m.chat, `_*Beli Dulu Bro Kailnya*_`, '© ZeusBotz', 'Beli Kail', '.beli kail', m)
}
handler.help = ['mancing', 'fishing']
handler.tags = ['rpg']
handler.command = /^(mancing|fishing)$/i

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
