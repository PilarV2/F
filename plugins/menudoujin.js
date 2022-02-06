const moment = require('moment-timezone')
let fs = require("fs")
let handler = async (m, { conn }) =>{
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [who]
    const jam = moment.tz('Asia/Jakarta').format('HH')

 let ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
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
    message: ucapanWaktu, 
    orderTitle: `Top Up`,
    thumbnail: fs.readFileSync("./src/logo.jpg"),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai *@${who.replace(/@.+/, '')}* 🥰\n\nSilakan dipilih menunya`,
                        "description": "*© Nekohime*",
                        "buttonText": "KLIK DISINI",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `DOUJIN 1`,
                                        "description": "\nMenampilkan doujin 1",
                                        "rowId": ".doujin 1"
                                    },{
                                      "title": `DOUJIN 2`,
                                      "description": "\nMenampilkan doujin 2",
                                      "rowId": ".doujin 2"
                                  },{
                                    "title": `DOUJIN 3`,
                                    "description": "\nMenampilkan doujin 3",
                                    "rowId": ".doujin 3"
                                },{
                                  "title": `DOUJIN 4`,
                                  "description": "\nMenampilkan doujin 4",
                                  "rowId": ".doujin 4"
                              },{
                                "title": `DOUJIN 5`,
                                "description": "\nMenampilkan doujin 5",
                                "rowId": ".doujin 5"
                            },{
                              "title": `DOUJIN 6`,
                              "description": "\nMenampilkan doujin 6",
                              "rowId": ".doujin 6"
                          },{
                            "title": `DOUJIN 7`,
                            "description": "\nMenampilkan doujin 7",
                            "rowId": ".doujin 7"
                        },{
                          "title": `DOUJIN 8`,
                          "description": "\nMenampilkan doujin 8",
                          "rowId": ".doujin 8"
                      },{
                        "title": `DOUJIN 9`,
                        "description": "\nMenampilkan doujin 9",
                        "rowId": ".doujin 9"
                    },{
                      "title": `DOUJIN 10`,
                      "description": "\nMenampilkan doujin 10",
                      "rowId": ".doujin 10"
                  },{
                    "title": `DOUJIN 11`,
                    "description": "\nMenampilkan doujin 1",
                    "rowId": ".doujin 11"
                },{
                  "title": `DOUJIN 12`,
                  "description": "\nMenampilkan doujin 12",
                  "rowId": ".doujin 12"
              },{
                "title": `DOUJIN 13`,
                "description": "\nMenampilkan doujin 13",
                "rowId": ".doujin 13"
            },{
              "title": `DOUJIN 14`,
              "description": "\nMenampilkan doujin 14",
              "rowId": ".doujin 14"
          },{
            "title": `DOUJIN 15`,
            "description": "\nMenampilkan doujin 15",
            "rowId": ".doujin 15"
        },
        {
          "title": `DOUJIN 16`,
          "description": "\nMenampilkan doujin 16",
          "rowId": ".doujin 16"
      },{
        "title": `DOUJIN 17`,
        "description": "\nMenampilkan doujin 17",
        "rowId": ".doujin 17"
    },{
      "title": `DOUJIN 18`,
      "description": "\nMenampilkan doujin 18",
      "rowId": ".doujin 18"
  },{
    "title": `DOUJIN 19`,
    "description": "\nMenampilkan doujin 19",
    "rowId": ".doujin 19"
},
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, { quoted: ftrol,  contextInfo: { mentionedJid }}), {waitForAck: true})
                }
handler.help = ['doujinmenu'];
handler.tags = ['Hentai'];
handler.command = /^(doujinmenu|menudoujin)$/i;

module.exports = handler