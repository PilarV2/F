let handler = async (m, { conn, args, usedPrefix }) => {
    try {
    let type = (args[0] || '').toLowerCase()
    let rubah = global.DATABASE.data.users[m.sender].rubah
    let kuda = global.DATABASE.data.users[m.sender].kuda
    let kucing = global.DATABASE.data.users[m.sender].kucing
    let anjing = global.DATABASE.data.users[m.sender].anjing
    let singa = global.DATABASE.data.users[m.sender].singa
    let serigala = global.DATABASE.data.users[m.sender].serigala
    let naga = global.DATABASE.data.users[m.sender].naga
    let ayam = global.DATABASE.data.users[m.sender].ayam
    let nuri = global.DATABASE.data.users[m.sender].nuri
    let sapi = global.DATABASE.data.users[m.sender].sapi
    let badak = global.DATABASE.data.users[m.sender].badak
    let unta= global.DATABASE.data.users[m.sender].unta
    let kambing= global.DATABASE.data.users[m.sender].kambing
    switch (type) {
        case 'unta':
            if (unta == 0) return m.reply('*Kamu belum memiliki Pet Kambing*')
            if (unta == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktuu = (new Date - global.DATABASE.data.users[m.sender].untalastclaim)
            let _waktuu = (600000 - __waktuu)
            let waktuu = clockString(_waktuu)
            if (new Date - global.DATABASE.data.users[m.sender].untalastclaim > 600000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 1
                    global.DATABASE.data.users[m.sender].anakunta += 100
                    global.DATABASE.data.users[m.sender].untalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (unta > 0) {
                        let naiklvl = ((unta * 1000) - 1)
                        if (global.DATABASE.data.users[m.sender].anakunta > naiklvl) {
                            global.DATABASE.data.users[m.sender].unta += 1
                            global.DATABASE.data.users[m.sender].anakunta -= (unta * 1000)
                            conn.reply(m.chat, `*Selamat Pet unta kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuu}* lagi`)
            break
        case 'kambing':
            if (kambing == 0) return m.reply('*Kamu belum memiliki Pet Kambing*')
            if (kambing == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktue = (new Date - global.DATABASE.data.users[m.sender].kambinglastclaim)
            let _waktue = (600000 - __waktue)
            let waktue = clockString(_waktue)
            if (new Date - global.DATABASE.data.users[m.sender].kambinglastclaim > 600000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 1
                    global.DATABASE.data.users[m.sender].anakkambing += 100
                    global.DATABASE.data.users[m.sender].kambinglastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (kambing > 0) {
                        let naiklvl = ((kambing * 1000) - 1)
                        if (global.DATABASE.data.users[m.sender].anakkambing > naiklvl) {
                            global.DATABASE.data.users[m.sender].kambing += 1
                            global.DATABASE.data.users[m.sender].anakkambing -= (kambing * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kambing kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktue}* lagi`)
            break
        case 'rubah':
            if (rubah == 0) return m.reply('*Kamu belum memiliki Pet Rubah*')
            if (rubah == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktur = (new Date - global.DATABASE.data.users[m.sender].rubahlastclaim)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - global.DATABASE.data.users[m.sender].rubahlastclaim > 600000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 1
                    global.DATABASE.data.users[m.sender].anakrubah += 100
                    global.DATABASE.data.users[m.sender].rubahlastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 1000) - 1)
                        if (global.DATABASE.data.users[m.sender].anakrubah > naiklvl) {
                            global.DATABASE.data.users[m.sender].rubah += 1
                            global.DATABASE.data.users[m.sender].anakrubah -= (rubah * 1000)
                            conn.reply(m.chat, `*Selamat Pet Rubah kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktur}* lagi`)
            break
            case 'naga':
            if (naga == 0) return m.reply('*Kamu belum memiliki Pet naga*')
            if (naga == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktud = (new Date - global.DATABASE.data.users[m.sender].nagalastclaim)
            let _waktud = (604800000 - __waktud)
            let waktud = clockString(_waktud)
            if (new Date - global.DATABASE.data.users[m.sender].nagalastclaim > 604800000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 100
                    global.DATABASE.data.users[m.sender].anaknaga += 2000
                    global.DATABASE.data.users[m.sender].nagalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (naga > 0) {
                        let naiklvl = ((naga * 100000) - 1)
                        if (global.DATABASE.data.users[m.sender].anaknaga > naiklvl) {
                            global.DATABASE.data.users[m.sender].naga += 1
                            global.DATABASE.data.users[m.sender].anaknaga -= (naga * 100000)
                            conn.reply(m.chat, `*Selamat Pet naga kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup minimal 100`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktud}* lagi`)
            break
        case 'serigala':
            if (serigala == 0) return m.reply('*Kamu belum memiliki Pet serigala*')
            if (serigala == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktuc = (new Date - global.DATABASE.data.users[m.sender].serigalalastclaim)
            let _waktuc = (86400000 - __waktuc)
            let waktuc = clockString(_waktuc)
            if (new Date - global.DATABASE.data.users[m.sender].serigalalastclaim > 86400000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 1
                    global.DATABASE.data.users[m.sender].anakserigala += 200
                    global.DATABASE.data.users[m.sender].serigalalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (serigala > 0) {
                        let naiklvl = ((serigala * 5000) - 1)
                        if (global.DATABASE.data.users[m.sender].anakserigala > naiklvl) {
                            global.DATABASE.data.users[m.sender].serigala += 1
                            global.DATABASE.data.users[m.sender].anakserigala -= (serigala * 5000)
                            conn.reply(m.chat, `*Selamat Pet serigala kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuc}* lagi`)
            break
        case 'badak':
            if (badak == 0) return m.reply('*Kamu belum memiliki Pet badak*')
            if (badak == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktub = (new Date - global.DATABASE.data.users[m.sender].badaklastclaim)
            let _waktub = (86400000 - __waktub)
            let waktub = clockString(_waktub)
            if (new Date - global.DATABASE.data.users[m.sender].badaklastclaim > 86400000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 1
                    global.DATABASE.data.users[m.sender].anakbadak += 200
                    global.DATABASE.data.users[m.sender].badaklastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (badak > 0) {
                        let naiklvl = ((badak * 5000) - 1)
                        if (global.DATABASE.data.users[m.sender].anakbadak > naiklvl) {
                            global.DATABASE.data.users[m.sender].badak += 1
                            global.DATABASE.data.users[m.sender].anakbadak -= (badak * 5000)
                            conn.reply(m.chat, `*Selamat Pet badak kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktub}* lagi`)
            break
        case 'kuda':
            if (kuda == 0) return m.reply('*Kamu belum memiliki Pet Kuda*')
            if (kuda == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktuk = (new Date - global.DATABASE.data.users[m.sender].kudalastclaim)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - global.DATABASE.data.users[m.sender].kudalastclaim > 600000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 1
                    global.DATABASE.data.users[m.sender].anakkuda += 100
                    global.DATABASE.data.users[m.sender].kudalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 1000) - 1)
                        if (global.DATABASE.data.users[m.sender].anakkuda > naiklvl) {
                            global.DATABASE.data.users[m.sender].kuda += 1
                            global.DATABASE.data.users[m.sender].anakkuda -= (kuda * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kuda kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuk}* lagi`)
            break
        case 'sapi':
            if (sapi == 0) return m.reply('*Kamu belum memiliki Pet sapi*')
            if (sapi == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktut = (new Date - global.DATABASE._data.users[m.sender].sapilastclaim)
            let _waktut = (600000 - __waktut)
            let waktut = clockString(_waktut)
            if (new Date - global.DATABASE._data.users[m.sender].sapilastclaim > 600000) {
                if (global.DATABASE._data.users[m.sender].makananpet > 0) {
                    global.DATABASE._data.users[m.sender].makananpet -= 1
                    global.DATABASE._data.users[m.sender].anaksapi += 100
                    global.DATABASE._data.users[m.sender].sapilastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (sapi > 0) {
                        let naiklvl = ((sapi * 1000) - 1)
                        if (global.DATABASE._data.users[m.sender].anaksapi > naiklvl) {
                            global.DATABASE._data.users[m.sender].sapi += 1
                            global.DATABASE._data.users[m.sender].anaksapi -= (sapi * 1000)
                            conn.reply(m.chat, `*Selamat Pet sapi kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktut}* lagi`)
            break
        case 'anjing':
            if (anjing == 0) return m.reply('*Kamu belum memiliki Pet anjing*')
            if (anjing == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktus = (new Date - global.DATABASE.data.users[m.sender].anjinglastclaim)
            let _waktus = (600000 - __waktus)
            let waktus = clockString(_waktus)
            if (new Date - global.DATABASE.data.users[m.sender].anjinglastclaim > 600000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 1
                    global.DATABASE.data.users[m.sender].anakanjing += 100
                    global.DATABASE.data.users[m.sender].anjinglastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 1000) - 1)
                        if (global.DATABASE.data.users[m.sender].anakanjing > naiklvl) {
                            global.DATABASE.data.users[m.sender].anjing += 1
                            global.DATABASE.data.users[m.sender].anakanjing -= (anjing * 1000)
                            conn.reply(m.chat, `*Selamat Pet anjing kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuk}* lagi`)
            break
        case 'singa':
            if (singa == 0) return m.reply('*Kamu belum memiliki Pet singa*')
            if (singa == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktup = (new Date - global.DATABASE.data.users[m.sender].singalastclaim)
            let _waktup = (86400000 - __waktup)
            let waktup = clockString(_waktup)
            if (new Date - global.DATABASE.data.users[m.sender].singalastclaim > 86400000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 1
                    global.DATABASE.data.users[m.sender].anaksinga += 200
                    global.DATABASE.data.users[m.sender].singalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (singa > 0) {
                        let naiklvl = ((singa * 5000) - 1)
                        if (global.DATABASE.data.users[m.sender].anaksinga > naiklvl) {
                            global.DATABASE.data.users[m.sender].singa += 1
                            global.DATABASE.data.users[m.sender].anaksinga -= (singa * 5000)
                            conn.reply(m.chat, `*Selamat Pet singa kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktup}* lagi`)
            break
        case 'ayam':
            if (ayam == 0) return m.reply('*Kamu belum memiliki Pet ayam*')
            if (ayam == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktua = (new Date - global.DATABASE.data.users[m.sender].ayamlastclaim)
            let _waktua = (600000 - __waktua)
            let waktua = clockString(_waktua)
            if (new Date - global.DATABASE.data.users[m.sender].ayamlastclaim > 600000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 1
                    global.DATABASE.data.users[m.sender].anakayam += 20
                    global.DATABASE.data.users[m.sender].ayamlastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (ayam > 0) {
                        let naiklvl = ((ayam * 200) - 1)
                        if (global.DATABASE.data.users[m.sender].anakayam > naiklvl) {
                            global.DATABASE.data.users[m.sender].ayam += 1
                            global.DATABASE.data.users[m.sender].anakayam -= (ayam * 200)
                            conn.reply(m.chat, `*Selamat Pet ayam kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktua}* lagi`)
            break
        case 'nuri':
            if (nuri == 0) return m.reply('*Kamu belum memiliki Pet Nuri*')
            if (nuri == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktun = (new Date - global.DATABASE._data.users[m.sender].nurilastclaim)
            let _waktun = (600000 - __waktun)
            let waktun = clockString(_waktun)
            if (new Date - global.DATABASE._data.users[m.sender].nurilastclaim > 600000) {
                if (global.DATABASE._data.users[m.sender].makananpet > 0) {
                    global.DATABASE._data.users[m.sender].makananpet -= 1
                    global.DATABASE._data.users[m.sender].anaknuri += 100
                    global.DATABASE._data.users[m.sender].nurilastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (nuri > 0) { 
                        let naiklvl = ((nuri * 1000) - 1)
                        if (global.DATABASE._data.users[m.sender].anaknuri > naiklvl) {
                            global.DATABASE._data.users[m.sender].nuri += 1
                            global.DATABASE._data.users[m.sender].anaknuri -= (nuri * 1000)
                            conn.reply(m.chat, `*Selamat Pet Nuri kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktun}* lagi`)
            break
        case 'kucing':
            if (kucing == 0) return m.reply('*Kamu belum memiliki Pet Kucing*')
            if (kucing == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktu = (new Date - global.DATABASE.data.users[m.sender].kucinglastclaim)
            let _waktu = (600000 - __waktu)
            let waktu = clockString(_waktu)
            if (new Date - global.DATABASE.data.users[m.sender].kucinglastclaim > 600000) {
                if (global.DATABASE.data.users[m.sender].makananpet > 0) {
                    global.DATABASE.data.users[m.sender].makananpet -= 1
                    global.DATABASE.data.users[m.sender].anakkucing += 100
                    global.DATABASE.data.users[m.sender].kucinglastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (kucing > 0) { 
                        let naiklvl = ((kucing * 1000) - 1)
                        if (global.DATABASE.data.users[m.sender].anakkucing > naiklvl) {
                            global.DATABASE.data.users[m.sender].kucing += 1
                            global.DATABASE.data.users[m.sender].anakkucing -= (kucing * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kucing kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktu}* lagi`)
            break
        default:
            return conn.reply(m.chat, `${usedPrefix}feed [kucing | rubah | kuda]\nContoh penggunaan: *${usedPrefix}feed kucing*`, m)
    }
} catch (e) {
    console.log(e)
    throw '_*Error!*_'
}
}
handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}