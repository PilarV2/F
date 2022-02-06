let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let { buttonsMessage, contactsArray, image, MimeType } = MessageType
let fs = require('fs')
//LU SIAPA?
//JANGAN COLONG ANJG
let handler = async (m, { conn, text, usedPrefix, participants }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `🏰 INFO KERAJAANMU`, 
    orderTitle: `KERJAAN`,
    thumbnail: fs.readFileSync("./src/kerajaan.jpeg"), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }

let imgk = fs.readFileSync('./src/kerajaan.jpeg')

let kingdom = global.DATABASE.data.users[m.sender]

if (kingdom.created == false) return m.reply('kingdom belum dibuat')


let kerajaan = global.DATABASE.data.users[m.sender].namakerajaan
let levelistana = global.DATABASE.data.users[m.sender].levelistana
let trops = global.DATABASE.data.users[m.sender].pasukan
let lvl = global.DATABASE.data.users[m.sender].levelkerajaan
let populasi = global.DATABASE.data.users[m.sender].populasi
let name = global.DATABASE.data.users[m.sender].namaraja
let aliance = global.DATABASE.data.users[m.sender].aliance
let koin = global.DATABASE.data.users[m.sender].coin

let benteng = global.DATABASE.data.users[m.sender].benteng
let rs = global.DATABASE.data.users[m.sender].rumahsakit
let kamp = global.DATABASE.data.users[m.sender].troopcamp

let batu = global.DATABASE.data.users[m.sender].batu
let kayu = global.DATABASE.data.users[m.sender].kayu
let besi = global.DATABASE.data.users[m.sender].iron

let caption = `
_[ ❕ ]KERAJAAN KAMU_
INFO KERAJAAN @${who.replace(/@.+/, '')}
🏰 Nama Kerajaan: ${kerajaan}
👑 Nama King: ${name}
🏰 Istana Level: ${levelistana}
👥 Populasi: ${populasi}
👮 Pasukan: ${trops}
🎋 level: ${lvl}\n
💹 Ekonomi SDA:
💰 Koin: ${koin}
🌳 Kayu: ${kayu}
⛓️ Besi: ${besi}
🪨 Batu: ${batu}\n
🏗️ Fasilitas:
🏕️ Kamp pasukan: ${kamp == 0 ? 'tidak punya kamp pasukan' : '' || kamp == 1 ? 'Kamp Pasukan Mini' : '' || kamp == 2 ? 'Kamp Pasukan Sedang' : '' || kamp == 3 ? 'Kamp Pasukan Besar' : ''|| kamp == 4 ? 'Kamp Pasukan Skuadlonil' : ''|| kamp == 5 ? 'Kamp Pasukan Skuadron' : ''}
🏥 Rumah sakit: ${ rs == 0 ? 'tidak punya rumah sakit' : '' || rs == 1 ? 'Tenda Perawatan' : ''|| rs == 2 ? 'Puskesmas Kecil' : ''|| rs == 3 ? 'Puskemas Sedang' : ''|| rs == 4 ? 'Rumah Sakit Kecil' : ''|| rs == 5 ? 'Rumah Sakit Sedang' : ''|| rs == 6 ? 'Rumah Sakit Besar' : ''|| rs == 7 ? 'Rumah Sakit ChakraWala' : ''}
🏯 Benteng level: ${ benteng == 0 ? 'Tidak punya benteng' : '' || benteng == 1 ? 'Benteng Kayu' : '' || benteng == 2 ? 'Benteng Perunggu' : '' || benteng == 3 ? 'Benteng Beton' : '' || benteng == 4 ? 'Benteng Besi' : '' || benteng == 5 ? 'Benteng Emas' : '' || benteng == 6 ? 'Benteng Diamond' : '' || benteng == 7 ? 'Benteng Emerald' : '' || benteng == 8 ? 'Benteng Aluminium' : '' }
🏳️ Teman Aliansi:
${aliance}
⚔️ Untuk Berperang:
🏰Bangun Dan level up kerajaan
${usedPrefix}build <type>
♨️Untuk Mengambil Sumber daya:
${usedPrefix}getsda
`.trim()


conn.sendFile( m.chat, imgk, 'kerajaan.jpg', caption, ftrol, false, { contextInfo: { mentionedJid }})
}

handler.help = ['mykingdom','mykrjn','kerajaanku']
handler.tags = ['rpg']
handler.command = /^(mykingdom|kerajaanku)/i

handler.owner = false
handler.register = false

module.exports = handler
