let fs = require("fs")
let handler = async(m, {conn, command, usedPrefix, text}) => {
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
    message: 'ð° KERAJAAN MU', 
    orderTitle: `ð° KERAJAAN`,
    thumbnail: fs.readFileSync("./src/kerajaan.jpeg"),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }

let fail = 'format salah, comtoh: ' +usedPrefix+command+ ' namaraja|namakerajaan|@user'

let kingdom = global.DATABASE.data.users[m.sender]

let split = text.split`|`

let namaraja = split[0]

let namakerajaan = split[1]

let aliance = split[2]

if (kingdom.created == true) return m.reply('kingdom telah dibuat')

if (!namaraja || !namakerajaan || !aliance) return m.reply(fail)



global.DATABASE.data.users[m.sender] = {

created: true,

namaraja,

namakerajaan,

pasukan: 50,

populasi: 100,

levelkerajaan: 1,

levelistana: 1,

aliance,

coin: 1000,
}

conn.sendButton(m.chat, `
ð°kERAJAAN KAMU TELAH DIBUAT!!
ð° Nama Kerajaan: ${namakerajaan}
ð Nama Raja: ${namaraja}
ð° Istana Level: ${global.DATABASE.data.users[m.sender].levelistana}
ð¥ Populasi: ${global.DATABASE.data.users[m.sender].populasi}
ð® Pasukan: ${global.DATABASE.data.users[m.sender].pasukan}
ð Level: ${global.DATABASE.data.users[m.sender].levelkerajaan}
ð° Koin: ${global.DATABASE.data.users[m.sender].coin} *[ BERGUNA UNTUK UP LEVEL KERAJAAN ]*
ð³ï¸ Aliansi Kamu
${aliance}
Check Kerajaanmu
${usedPrefix}Mykingdom
`, 'Â© Nekohime', 'ð° KERAJAAN', '.mykingdom', ftrol,)
}

handler.help = ['kingdom name|name kingdom|@tag']
handler.tags = ['rpg']

module.exports = handler
handler.register = true

handler.command = /^kingdom$/i