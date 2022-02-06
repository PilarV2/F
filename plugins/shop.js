let { MessageType } = require('@adiwajshing/baileys')
const potion = 500
const Spotion = 150 
const Bcommon = 200
const Scommon = 20
const Suncommon = 10
const Buncommon = 600
const Bmythic = 4000 
const Smythic = 500
const Blegendary = 95000 
const Slegendary = 300
const Bsampah = 10
const Ssampah = 2
const kuda = 690000
const Skuda = 10000
const makananpet = 25000
const Smakananpet = 1000
const dagingsapi = 500000
const Sdagingsapi = 15000
const kucing = 39000
const Skucing = 1300
const sapi = 190000
const Ssapi = 54000
const anjing = 69000
const Sanjing = 5000
const nuri = 699
const Snuri = 10
const cumi = 29100
const Scumi = 2000
const kepiting = 40900
const Skepiting = 3510
const udang = 35000
const Sudang = 2060
const unta = 950000
const Sunta = 35000
const kambing = 96100
const Skambing = 5600
const tropis = 38900
const Stropis = 4980
const ikan_buntal = 13099
const Sikan_buntal = 120
const batubata = 800
const Sbatubata = 49
const semen = 1509
const Ssemen = 379
const pasir = 121
const Spasir = 23
const kayu = 16490
const Skayu = 580
const apel = 10
const Sapel = 1
const mangga = 250
const Smangga = 25
const anggur = 295
const Sanggur = 34
const jeruk = 109
const Sjeruk = 29
const roti = 300
const Sroti = 37
const hiu = 1082654
const Shiu = 16449
const lumba = 199388298
const Slumba = 11739
const keju = 23678
const Skeju = 117
const selada = 2936
const Sselada = 137
const tomat = 1290
const Stomat = 112
const staminaheal = 230
const Sstaminaheal = 43
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    const _armor = global.DATABASE.data.users[m.sender].armor
    const armor = (_armor == 0 ? 50000 : '' || _armor == 1 ? 99999 : '' || _armor == 2 ? 299999 : '' || _armor == 3 ? 499999 : '' || _armor == 4 ? 699999 : '')
    const _sword = global.DATABASE.data.users[m.sender].sword
    const sword = (_sword == 0 ? 40000 : '' || _sword == 1 ? 79999 : '' || _sword == 2 ? 109999 : '' || _sword == 3 ? 299999 : '' || _sword == 4 ? 499999 : '')
    const _pickaxe = global.DATABASE.data.users[m.sender].pickaxe
    const pickaxe = (_pickaxe == 0 ? 30000 : '' || _pickaxe == 1 ? 49999 : '' || _pickaxe == 2 ? 89999 : '' || _pickaxe == 3 ? 129999 : '' || _pickaxe == 4 ? 199999 : '')
    const _kail = global.DATABASE.data.users[m.sender].kail
    const kail = (_kail == 0 ? 10000 : '' || _kail == 1 ? 28928 : '' || _kail == 2 ? 70187 : '' || _kail == 3 ? 128917 : '' || _kail == 4 ? 292722 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
${usedPrefix}shop <Buy|sell> <item> <jumlah>\n
Contoh penggunaan: *${usedPrefix}shop buy potion 1*\n\n
List Barang:\n\n
*Barang   |  Harga beli*\n
╭─❒ *Toko Kebutuhan*
│➪ 🧪 Potion:    ${potion} 💵
│➪ 💉 Stamina Heal: ${staminaheal} 💵
│➪ 📦 Common:    ${Bcommon} 💵
│➪ 📦 Uncommon:  ${Buncommon} 💵
│➪ 📦 Mythic:    ${Bmythic} 💵
│➪ 🎁 Legendary: ${Blegendary} 💵
│➪ ♻️ Sampah:    ${Bsampah} 💵
│➪ 🥼 Armor:     ${armor} 💵
│➪ 🍖 Makanan_hewan:   ${makananpet} 💵
│➪ ⚔️ Sword:   ${sword} 💵
│➪ ⛏️ Pickaxe:   ${pickaxe} 💵
│➪ 🎣 Kail Pancing:   ${kail} 💵
╰─────────────❒\n
╭─❒ *Toko Hewan*
│➪ 🐎 Kuda:    ${kuda} 💵
│➪ 🐈 Kucing:  ${kucing} 💵
│➪ 🐄 Sapi:    ${sapi} 💵
│➪ 🐕 Anjing:  ${anjing} 💵
│➪ 🦜 Nuri:    ${nuri} 💎
│➪ 🐪 Unta:    ${unta} 💵
│➪ 🐐 Kambing:    ${kambing} 💵
╰─────────────❒ \n
╭─❒ *Toko Seefood*
│➪ 🦑 Cumi-cumi:    ${cumi} 💵
│➪ 🦀 Kepiting:    ${kepiting} 💵
│➪ 🦐 Udang:    ${udang} 💵
╰─────────────❒\n
╭─❒ *Toko Ikan*
│➪ 🐠 Ikan Tropis:    ${tropis} 💵
│➪ 🐡 Ikan Buntal:    ${ikan_buntal} 💵
│➪ 🦈 Hiu: ${hiu} 💵
│➪ 🐬 Lumba-lumba: ${lumba} 💵
╰─────────────❒ \n
╭─❒ *Toko Material*
│➪ 🧱 Bata:    ${batubata} 💵
│➪ 🏖️ Pasir:    ${pasir} 💵
│➪ 🗻 Semen:    ${semen} 💵
│➪ 🪵 Kayu:    ${kayu} 💵
╰─────────────❒ \n
╭─❒ *Toko Buah*
│➪ 🍎 Apel:    ${apel} 🪙
│➪ 🥭 Mangga:    ${mangga} 💵
│➪ 🍇 Anggur:    ${anggur} 💵
│➪ 🍊 Jeruk:    ${jeruk} 💵
╰─────────────❒ \n
╭─❒ *Toko Makanan*
│➪ 🥩 Daging Sapi:   ${dagingsapi} 💵
│➪ 🍞 Roti:   ${roti} 💵
│➪ 🧀 Keju:   ${keju} 💵
╰─────────────❒ \n
╭─❒ *Toko Sayuran*
│➪ 🥬 Selada:   ${selada} 💵
│➪ 🍅 Tomat:   ${tomat} 💵
╰─────────────❒ \n\n

*Tempat Menjual Barang*\n
╭─❒ *Jual Barang*
│➪ 🧪 Potion:    ${Spotion} 💵
│➪ 💉 Stamina Heal: ${Sstaminaheal} 💵
│➪ 📦 Common:    ${Scommon} 💵
│➪ 📦 Uncommon:  ${Suncommon} 💵
│➪ 📦 Mythic:    ${Smythic} 💵
│➪ 🎁 Legendary: ${Slegendary} 💵
│➪ ♻️ Sampah:    ${Ssampah} 💵
│➪ 🍖 Makanan_hewan:  ${Smakananpet} 💵
│➪ 🥩 Daging Sapi:   ${Sdagingsapi} 💵
╰─────────────❒\n
╭─❒ *Jual Seefood*
│➪ 🦑 Cumi-cumi:    ${Scumi} 💵
│➪ 🦀 Kepiting:    ${Skepiting} 💵
│➪ 🦐 Udang:    ${Sudang} 💵
╰─────────────❒ \n
╭─❒ *Jual Hewan*
│➪ 🐎 Kuda:    ${Skuda} 💵
│➪ 🐈 Kucing:  ${Skucing} 💵
│➪ 🐄 Sapi:    ${Ssapi} 💵
│➪ 🐕 Anjing:  ${Sanjing} 💵
│➪ 🦜 Nuri:    ${Snuri} 💎
│➪ 🐪 Unta:    ${Sunta} 💵
│➪ 🐐 Kambing:    ${Skambing} 💵
╰─────────────❒\n
╭─❒ *Jual Ikan*
│➪ 🐠 Ikan Tropis:    ${Stropis} 💵
│➪ 🐡 Ikan Buntal:    ${Sikan_buntal} 💵
│➪ 🦈 Hiu: ${Shiu} 💵
│➪ 🐬 Lumba-lumba: ${Slumba} 💵
╰─────────────❒ \n
╭─❒ *Jual Material*
│➪ 🧱 Bata:    ${Sbatubata} 💵
│➪ 🏖️ Pasir:    ${Spasir} 💵
│➪ 🗻 Semen:    ${Ssemen} 💵
│➪ 🪵 Kayu:    ${Skayu} 💵
╰─────────────❒ \n
╭─❒ *Jual Buah*
│➪ 🍎 Apel:    ${Sapel} 🪙
│➪ 🥭 Mangga:    ${Smangga} 💵
│➪ 🍇 anggur:    ${Sanggur} 💵
│➪ 🍊 Jeruk:    ${Sjeruk} 💵
╰─────────────❒ \n
╭─❒ *Jual Makanan*
│➪ 🥩 Daging Sapi:   ${Sdagingsapi} 💵
│➪ 🍞 Roti:   ${Sroti} 💵
│➪ 🧀 Keju:   ${Skeju} 💵
╰─────────────❒\n
╭─❒ *Jual Sayuran*
│➪ 🥬 Selada:   ${Sselada} 💵
╰─────────────❒ \n\n
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(9999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.DATABASE._data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'stamina-heal':
                            if (global.DATABASE._data.users[m.sender].money >= potion * count) {
                                global.DATABASE._data.users[m.sender].money -= staminaheal * count
                                global.DATABASE._data.users[m.sender].staminaheal += count * 1
                                conn.send2Button(m.chat, `Succes membeli ${count} Stamina Heal 💉 dengan harga ${potion * count} money 💵\n\nGunakan Stamina Heal dengan ketik: *${usedPrefix}healstamina <jumlah>*`, '© Nekohime', 'Tambah Stamina', '/healstamina', 'Inv', '.inv', m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Stamina Heal 💉 dengan harga ${staminaheal * count} money 💵`,)
                        break
                    case 'kail':
                            if (global.DATABASE.data.users[m.sender].kail == 5) return conn.reply(m.chat, 'Kailmu sudah *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > kail) {
                                global.DATABASE.data.users[m.sender].kail += 1
                                global.DATABASE.data.users[m.sender].money -= kail * 1
                                conn.reply(m.chat, `Succes membeli kail seharga ${kail} money 💵` ,m)
                            } else conn.reply(m.chat, `Money mu tidak cukup untuk membeli kail seharga ${kail} money 💵`, m)
                        
                        break
                    case 'apel':
                            if (global.DATABASE._data.users[m.sender].coin >= apel * count) {
                                global.DATABASE._data.users[m.sender].apel += count * 1
                                global.DATABASE._data.users[m.sender].coin -= apel * count
                                conn.reply(m.chat, `Succes membeli ${count} apel dengan harga ${apel * count} coin 🪙`, m)
                            } else conn.reply(m.chat, `Coin anda tidak cukup untuk membeli ${count} apel dengan seharga ${apel * count} coin 🪙`, m)
                        
                        break
                    case 'keju':
                            if (global.DATABASE._data.users[m.sender].money >= apel * count) {
                                global.DATABASE._data.users[m.sender].keju += count * 1
                                global.DATABASE._data.users[m.sender].money -= apel * count
                                conn.reply(m.chat, `Succes membeli ${count} keju 🧀 dengan harga ${keju * count} money 💵`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} keju 🧀 dengan seharga ${keju * count} money 💵`, m)
                        
                        break
                    case 'hiu':
                            if (global.DATABASE._data.users[m.sender].money >= hiu * count) {
                                global.DATABASE._data.users[m.sender].hiu += count * 1
                                global.DATABASE._data.users[m.sender].money -= hiu * count
                                conn.reply(m.chat, `Succes membeli ${count} hiu dengan harga ${hiu * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} hiu dengan seharga ${hiu * count} money 💵`, m)
                        
                        break
                    case 'lumba-lumba':
                            if (global.DATABASE._data.users[m.sender].money >= lumba * count) {
                                global.DATABASE._data.users[m.sender].lumba += count * 1
                                global.DATABASE._data.users[m.sender].money -= lumba * count
                                conn.reply(m.chat, `Succes membeli ${count} lumba-lumba dengan harga ${lumba * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} lumba-lumba dengan seharga ${lumba * count} money 💵`, m)
                        
                        break
                    case 'roti':
                            if (global.DATABASE._data.users[m.sender].money >= roti * count) {
                                global.DATABASE._data.users[m.sender].roti += count * 1
                                global.DATABASE._data.users[m.sender].money -= roti * count
                                conn.reply(m.chat, `Succes membeli ${count} roti dengan harga ${roti * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} roti dengan seharga ${roti * count} money 💵`, m)
                        
                        break
                    case 'jeruk':
                            if (global.DATABASE._data.users[m.sender].money >= jeruk * count) {
                                global.DATABASE._data.users[m.sender].jeruk += count * 1
                                global.DATABASE._data.users[m.sender].money -= jeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} jeruk dengan harga ${jeruk * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} jeruk dengan seharga ${jeruk * count} money 💵`, m)
                        
                        break
                    case 'mangga':
                            if (global.DATABASE._data.users[m.sender].money >= mangga * count) {
                                global.DATABASE._data.users[m.sender].mangga += count * 1
                                global.DATABASE._data.users[m.sender].money -= mangga * count
                                conn.reply(m.chat, `Succes membeli ${count} mangga dengan harga ${mangga * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} mangga dengan seharga ${mangga * count} money 💵`, m)
                        
                        break
                    case 'anggur':
                            if (global.DATABASE._data.users[m.sender].money >= anggur * count) {
                                global.DATABASE._data.users[m.sender].anggur += count * 1
                                global.DATABASE._data.users[m.sender].money -= anggur * count
                                conn.reply(m.chat, `Succes membeli ${count} anggur dengan harga ${anggur * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} anggur dengan seharga ${anggur * count} money 💵`, m)
                        
                        break
                    case 'kambing':
                            if (global.DATABASE._data.users[m.sender].money >= kambing * count) {
                                global.DATABASE._data.users[m.sender].kambing += count * 1
                                global.DATABASE._data.users[m.sender].money -= kambing * count
                                conn.reply(m.chat, `Succes membeli ${count} kambing dengan harga ${kambing * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} kambing dengan seharga ${kambing * count} money 💵`, m)
                        
                        break
                    case 'bata':
                            if (global.DATABASE._data.users[m.sender].money >= batubata * count) {
                                global.DATABASE._data.users[m.sender].batubata += count * 1
                                global.DATABASE._data.users[m.sender].money -= batubata * count
                                conn.reply(m.chat, `Succes membeli ${count} batu bata dengan harga ${batubata * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} batu bata dengan seharga ${batubata * count} money `, m)
                        
                        break
                    case 'semen':
                            if (global.DATABASE._data.users[m.sender].money >= semen * count) {
                                global.DATABASE._data.users[m.sender].semen += count * 1
                                global.DATABASE._data.users[m.sender].money -= semen * count
                                conn.reply(m.chat, `Succes membeli ${count} semen dengan harga ${semen * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} semen dengan seharga ${semen * count} money 💵`, m)
                        
                        break
                    case 'pasir':
                            if (global.DATABASE._data.users[m.sender].money >= pasir * count) {
                                global.DATABASE._data.users[m.sender].pasir += count * 1
                                global.DATABASE._data.users[m.sender].money -= pasir * count
                                conn.reply(m.chat, `Succes membeli ${count} pasir dengan harga ${pasir * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} pasir dengan seharga ${pasir * count} money 💵`, m)
                        
                        break
                    case 'kayu':
                            if (global.DATABASE._data.users[m.sender].money >= kayu * count) {
                                global.DATABASE._data.users[m.sender].kayu += count * 1
                                global.DATABASE._data.users[m.sender].money -= kayu * count
                                conn.reply(m.chat, `Succes membeli ${count} kayu dengan harga ${kayu * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} kayu dengan seharga ${kayu * count} money 💵`, m)
                        
                        break
                    case 'ikan_tropis':
                            if (global.DATABASE._data.users[m.sender].money >= tropis * count) {
                                global.DATABASE._data.users[m.sender].tropis += count * 1
                                global.DATABASE._data.users[m.sender].money -= tropis * count
                                conn.reply(m.chat, `Succes membeli ${count} ikan tropis dengan harga ${tropis * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} ikan tropis dengan seharga ${tropis * count} money 💵`, m)
                        
                        break
                case 'ikan_buntal':
                            if (global.DATABASE._data.users[m.sender].money >= ikan_buntal * count) {
                                global.DATABASE._data.users[m.sender].ikan_buntal += count * 1
                                global.DATABASE._data.users[m.sender].money -= ikan_buntal * count
                                conn.reply(m.chat, `Succes membeli ${count} ikan buntal dengan harga ${ikan_buntal * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} ikan buntal dengan seharga ${buntal * count} money 💵`, m)
                        
                        break
                    case 'unta':
                            if (global.DATABASE._data.users[m.sender].money >= unta * count) {
                                global.DATABASE._data.users[m.sender].unta += count * 1
                                global.DATABASE._data.users[m.sender].money -= unta * count
                                conn.reply(m.chat, `Succes membeli ${count} unta dengan harga ${unta * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} unta dengan seharga ${unta * count} money 💵`, m)
                        
                        break
                    case 'cumi':
                            if (global.DATABASE._data.users[m.sender].money >= cumi * count) {
                                global.DATABASE._data.users[m.sender].cumi += count * 1
                                global.DATABASE._data.users[m.sender].money -= cumi * count
                                conn.reply(m.chat, `Succes membeli ${count} cumi-cumi dengan harga ${cumi * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} cumi-cumi dengan seharga ${cumi * count} money 💵`, m)
                        
                        break
                    case 'kepiting':
                            if (global.DATABASE._data.users[m.sender].money >= kepiting * count) {
                                global.DATABASE._data.users[m.sender].kepiting += count * 1
                                global.DATABASE._data.users[m.sender].money -= kepiting * count
                                conn.reply(m.chat, `Succes membeli ${count} kepiting dengan harga ${kepiting * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} kepiting dengan seharga ${kepiting * count} money 💵`, m)
                        
                        break
                    case 'udang':
                            if (global.DATABASE._data.users[m.sender].money >= udang * count) {
                                global.DATABASE._data.users[m.sender].udang += count * 1
                                global.DATABASE._data.users[m.sender].money -= udang * count
                                conn.reply(m.chat, `Succes membeli ${count} udang dengan harga ${udang * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} udang dengan seharga ${udang * count} money 💵`, m)
                        
                        break
                    case 'daging_sapi':
                            if (global.DATABASE._data.users[m.sender].money >= dagingsapi * count) {
                                global.DATABASE._data.users[m.sender].dagingsapi += count * 1
                                global.DATABASE._data.users[m.sender].money -= dagingsapi * count
                                conn.reply(m.chat, `Succes membeli ${count} daging sapi dengan harga ${dagingsapi * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} daging sapi dengan seharga ${dagingsapi * count} money 💵`, m)
                        
                        break
                    case 'sword':
                            if (global.DATABASE.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'Swordmu sudah *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > sword) {
                                global.DATABASE.data.users[m.sender].sword += 1
                                global.DATABASE.data.users[m.sender].money -= sword * 1
                                conn.reply(m.chat, `Succes membeli sword seharga ${sword} money 💵` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli sword seharga ${sword} money 💵`, m)
                        
                        break
                    case 'pickaxe':
                            if (global.DATABASE.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'pickaxemu sudah *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > pickaxe) {
                                global.DATABASE.data.users[m.sender].pickaxe += 1
                                global.DATABASE.data.users[m.sender].money -= pickaxe * 1
                                conn.reply(m.chat, `Succes membeli pickaxe seharga ${pickaxe} money 💵` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli pickaxe seharga ${pickaxe} money 💵`, m)
                        
                        break
                    case 'potion':
                            if (global.DATABASE._data.users[m.sender].money >= potion * count) {
                                global.DATABASE._data.users[m.sender].money -= potion * count
                                global.DATABASE._data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} money 💵\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money 💵`,)
                        break
                    case 'kucing':
                            if (global.DATABASE._data.users[m.sender].money >= kucing * count) {
                                global.DATABASE._data.users[m.sender].kucing += count * 1
                                global.DATABASE._data.users[m.sender].money -= kucing * count
                                conn.reply(m.chat, `Succes membeli ${count} kucing dengan harga ${kucing * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} kucing dengan seharga ${kucing * count} money 💵`, m)
                        
                        break
                    case 'nuri':
                            if (global.DATABASE._data.users[m.sender].diamond >= nuri * count) {
                                global.DATABASE._data.users[m.sender].nuri += count * 1
                                global.DATABASE._data.users[m.sender].diamond -= nuri * count
                                conn.reply(m.chat, `Succes membeli ${count} burung nuri dengan harga ${nuri * count} diamond 💎`, m)
                            } else conn.reply(m.chat, `Diamond anda tidak cukup untuk membeli ${count} burung nuri dengan seharga ${nuri * count} diamond 💎`, m)
                        
                        break
                    case 'makanan_hewan':
                            if (global.DATABASE._data.users[m.sender].money >= makananpet * count) {
                                global.DATABASE._data.users[m.sender].makananpet += count * 1
                                global.DATABASE._data.users[m.sender].money -= makananpet * count
                                conn.reply(m.chat, `Succes membeli ${count} makanan pet dengan harga ${makananpet * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} makanan pet dengan seharga ${makananpet * count} money 💵`, m)
                        
                        break
                    case 'anjing':
                            if (global.DATABASE._data.users[m.sender].money >= anjing * count) {
                                global.DATABASE._data.users[m.sender].anjing += count * 1
                                global.DATABASE._data.users[m.sender].money -= anjing * count
                                conn.reply(m.chat, `Succes membeli ${count} Anjing dengan harga ${anjing * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} Anjing dengan seharga ${anjing * count} money 💵`, m)
                        
                        break
                    case 'sapi':
                            if (global.DATABASE._data.users[m.sender].money >= sapi * count) {
                                global.DATABASE._data.users[m.sender].sapi += count * 1
                                global.DATABASE._data.users[m.sender].money -= sapi * count
                                conn.reply(m.chat, `Succes membeli ${count} sapi dengan harga ${sapi * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} sapi dengan seharga ${sapi * count} money 💵`, m)
                        
                        break
                    case 'kuda':
                            if (global.DATABASE._data.users[m.sender].money >= kuda * count) {
                                global.DATABASE._data.users[m.sender].kuda += count * 1
                                global.DATABASE._data.users[m.sender].money -= kuda * count
                                conn.reply(m.chat, `Succes membeli ${count} kuda dengan harga ${kuda * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} kuda dengan seharga ${kuda * count} money 💵`, m)
                        
                        break
                    case 'common':
                            if (global.DATABASE._data.users[m.sender].money >= Bcommon * count) {
                                global.DATABASE._data.users[m.sender].common += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} money 💵`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money 💵\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.DATABASE._data.users[m.sender].money >= Buncommon * count) {
                                global.DATABASE._data.users[m.sender].uncommon += count * 1
                                global.DATABASE._data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money 💵`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money 💵\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.DATABASE._data.users[m.sender].money >= Bmythic * count) {
                                    global.DATABASE._data.users[m.sender].mythic += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} money 💵`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money 💵\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.DATABASE._data.users[m.sender].money >= Blegendary * count) {
                                global.DATABASE._data.users[m.sender].legendary += count * 1
                                global.DATABASE._data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} money 💵`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money 💵\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.DATABASE._data.users[m.sender].money >= Bsampah * count) {
                                global.DATABASE._data.users[m.sender].sampah += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} money 💵`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} money 💵`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.DATABASE._data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.DATABASE._data.users[m.sender].money > armor) {
                                global.DATABASE._data.users[m.sender].armor += 1
                                global.DATABASE._data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Succes membeli armor seharga ${armor} money 💵` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} money 💵`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Spotion * count
                            global.DATABASE._data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} money 💵`.trim(), m)
                        } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'stamina-heal':
                        if (global.DATABASE._data.users[m.sender].staminaheal >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Sstaminaheal * count
                            global.DATABASE._data.users[m.sender].staminaheal -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Stamina Heal 💉 dengan harga ${Sstaminaheal * count} money 💵`.trim(), m)
                        } else conn.reply(m.chat, `Stamina heal 💉 kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Scommon * count
                            global.DATABASE._data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} money 💵`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Suncommon * count
                            global.DATABASE._data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money 💵`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Smythic * count
                            global.DATABASE._data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money 💵`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Slegendary * count
                            global.DATABASE._data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money 💵`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.DATABASE._data.users[m.sender].sampah >= count * 1) {
                            global.DATABASE._data.users[m.sender].sampah -= count * 1
                            global.DATABASE._data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money 💵`, m)
                        } else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
                        break
                    case 'kuda':
                            if (global.DATABASE._data.users[m.sender].kuda >= count * 1) {
                                global.DATABASE._data.users[m.sender].kuda -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skuda * count
                                conn.reply(m.chat, `Succes menjual ${count} kuda, dan anda mendapatkan ${Skuda * count} money 💵`, m)
                            } else conn.reply(m.chat, `Kuda anda tidak cukup`, m)
                            break
                    case 'sapi':
                            if (global.DATABASE._data.users[m.sender].sapi >= count * 1) {
                                global.DATABASE._data.users[m.sender].sapi -= count * 1
                                global.DATABASE._data.users[m.sender].money += Ssapi * count
                                conn.reply(m.chat, `Succes menjual ${count} sapi, dan anda mendapatkan ${Ssapi * count} money 💵`, m)
                            } else conn.reply(m.chat, `sapi anda tidak cukup`, m)
                            break
                        case 'makanan_hewan':
                            if (global.DATABASE._data.users[m.sender].makananpet >= count * 1) {
                                global.DATABASE._data.users[m.sender].makananpet -= count * 1
                                global.DATABASE._data.users[m.sender].money += Smakananpet * count
                                conn.reply(m.chat, `Succes menjual ${count} makanan pet, dan anda mendapatkan ${Smakananpet * count} money 💵`, m)
                            } else conn.reply(m.chat, `Makanan pet anda tidak cukup`, m)
                            break
                        case 'kucing':
                            if (global.DATABASE._data.users[m.sender].kucing >= count * 1) {
                                global.DATABASE._data.users[m.sender].kucing -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skucing * count
                                conn.reply(m.chat, `Succes menjual ${count} kucing, dan anda mendapatkan ${Skucing * count} money 💵`, m)
                            } else conn.reply(m.chat, `kucing anda tidak cukup`, m)
                            break
                        case 'nuri':
                            if (global.DATABASE._data.users[m.sender].nuri >= count * 1) {
                                global.DATABASE._data.users[m.sender].nuri -= count * 1
                                global.DATABASE._data.users[m.sender].diamond += Snuri * count
                                conn.reply(m.chat, `Succes menjual ${count} burung nuri, dan anda mendapatkan ${Snuri * count} diamond 💎`, m)
                            } else conn.reply(m.chat, `Burung nuri anda tidak cukup`, m)
                            break
                        case 'unta':
                            if (global.DATABASE._data.users[m.sender].unta >= count * 1) {
                                global.DATABASE._data.users[m.sender].unta -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sunta * count
                                conn.reply(m.chat, `Succes menjual ${count} unta, dan anda mendapatkan ${Sunta * count} money 💵`, m)
                            } else conn.reply(m.chat, `Unta anda tidak cukup`, m)
                            break
                        case 'kambing':
                            if (global.DATABASE._data.users[m.sender].kambing >= count * 1) {
                                global.DATABASE._data.users[m.sender].kambing -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skambing * count
                                conn.reply(m.chat, `Succes menjual ${count} kambing, dan anda mendapatkan ${Skambing * count} money 💵`, m)
                            } else conn.reply(m.chat, `Kambing anda tidak cukup`, m)
                            break
                        case 'daging_sapi':
                            if (global.DATABASE._data.users[m.sender].dagingsapi >= count * 1) {
                                global.DATABASE._data.users[m.sender].dagingsapi -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sdagingsapi * count
                                conn.reply(m.chat, `Succes menjual ${count} daging sapi, dan anda mendapatkan ${Sdagingsapi * count} money 💵`, m)
                            } else conn.reply(m.chat, `Daging sapi anda tidak cukup`, m)
                            break
                        case 'ikan_tropis':
                            if (global.DATABASE._data.users[m.sender].tropis >= count * 1) {
                                global.DATABASE._data.users[m.sender].tropis -= count * 1
                                global.DATABASE._data.users[m.sender].money += Stropis * count
                                conn.reply(m.chat, `Succes menjual ${count} ikan tropis, dan anda mendapatkan ${Stropis * count} money 💵`, m)
                            } else conn.reply(m.chat, `Ikan tropis anda tidak cukup`, m)
                            break
                        case 'ikan_buntal':
                            if (global.DATABASE._data.users[m.sender].ikan_buntal >= count * 1) {
                                global.DATABASE._data.users[m.sender].ikan_buntal -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sikan_buntal * count
                                conn.reply(m.chat, `Succes menjual ${count} ikan buntal, dan anda mendapatkan ${ikan_buntal * count} money 💵`, m)
                            } else conn.reply(m.chat, `Ikan buntal anda tidak cukup`, m)
                            break
                        case 'bata':
                            if (global.DATABASE._data.users[m.sender].batubata >= count * 1) {
                                global.DATABASE._data.users[m.sender].batubata -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sbatubata * count
                                conn.reply(m.chat, `Succes menjual ${count} batu bata, dan anda mendapatkan ${Sbatubata * count} money 💵`, m)
                            } else conn.reply(m.chat, `Batu bata anda tidak cukup`, m)
                            break
                        case 'pasir':
                            if (global.DATABASE._data.users[m.sender].pasir >= count * 1) {
                                global.DATABASE._data.users[m.sender].pasir -= count * 1
                                global.DATABASE._data.users[m.sender].money += Spasir * count
                                conn.reply(m.chat, `Succes menjual ${count} pasir, dan anda mendapatkan ${Spasir * count} money 💵`, m)
                            } else conn.reply(m.chat, `Pasir anda tidak cukup`, m)
                            break
                        case 'semen':
                            if (global.DATABASE._data.users[m.sender].semen >= count * 1) {
                                global.DATABASE._data.users[m.sender].semen -= count * 1
                                global.DATABASE._data.users[m.sender].money += Ssemen * count
                                conn.reply(m.chat, `Succes menjual ${count} semen, dan anda mendapatkan ${Ssemen * count} money 💵`, m)
                            } else conn.reply(m.chat, `Semen anda tidak cukup`, m)
                            break
                        case 'kayu':
                            if (global.DATABASE._data.users[m.sender].kayu >= count * 1) {
                                global.DATABASE._data.users[m.sender].kayu -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skayu * count
                                conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} money 💵`, m)
                            } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                            break
                        case 'apel':
                            if (global.DATABASE._data.users[m.sender].apel >= count * 1) {
                                global.DATABASE._data.users[m.sender].apel -= count * 1
                                global.DATABASE._data.users[m.sender].coin += Sapel * count
                                conn.reply(m.chat, `Succes menjual ${count} apel, dan anda mendapatkan ${Sapel * count} coin 💵`, m)
                            } else conn.reply(m.chat, `Apel anda tidak cukup`, m)
                            break
                        case 'mangga':
                            if (global.DATABASE._data.users[m.sender].mangga >= count * 1) {
                                global.DATABASE._data.users[m.sender].mangga -= count * 1
                                global.DATABASE._data.users[m.sender].money += Smangga * count
                                conn.reply(m.chat, `Succes menjual ${count} mangga, dan anda mendapatkan ${Smangga * count} money 💵`, m)
                            } else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
                            break
                        case 'anggur':
                            if (global.DATABASE._data.users[m.sender].anggur >= count * 1) {
                                global.DATABASE._data.users[m.sender].anggur -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sanggur * count
                                conn.reply(m.chat, `Succes menjual ${count} anggur, dan anda mendapatkan ${Sanggur * count} money 💵`, m)
                            } else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
                            break
                        case 'jeruk':
                            if (global.DATABASE._data.users[m.sender].jeruk >= count * 1) {
                                global.DATABASE._data.users[m.sender].jeruk -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sjeruk * count
                                conn.reply(m.chat, `Succes menjual ${count} jeruk, dan anda mendapatkan ${Sjeruk * count} money 💵`, m)
                            } else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
                            break
                        case 'roti':
                            if (global.DATABASE._data.users[m.sender].roti >= count * 1) {
                                global.DATABASE._data.users[m.sender].roti -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sroti * count
                                conn.reply(m.chat, `Succes menjual ${count} roti, dan anda mendapatkan ${Sroti * count} money 💵`, m)
                            } else conn.reply(m.chat, `Roti anda tidak cukup`, m)
                            break
                        case 'hiu':
                            if (global.DATABASE._data.users[m.sender].hiu >= count * 1) {
                                global.DATABASE._data.users[m.sender].hiu -= count * 1
                                global.DATABASE._data.users[m.sender].money += Shiu * count
                                conn.reply(m.chat, `Succes menjual ${count} hiu, dan anda mendapatkan ${Shiu * count} money 💵`, m)
                            } else conn.reply(m.chat, `Hiu anda tidak cukup`, m)
                            break
                        case 'lumba-lumba':
                            if (global.DATABASE._data.users[m.sender].lumba >= count * 1) {
                                global.DATABASE._data.users[m.sender].lumba -= count * 1
                                global.DATABASE._data.users[m.sender].money += Slumba * count
                                conn.reply(m.chat, `Succes menjual ${count} lumba-lumba, dan anda mendapatkan ${Slumba * count} money 💵`, m)
                            } else conn.reply(m.chat, `Lumba-lumba anda tidak cukup`, m)
                            break
                        case 'keju':
                            if (global.DATABASE._data.users[m.sender].keju >= count * 1) {
                                global.DATABASE._data.users[m.sender].keju -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skeju * count
                                conn.reply(m.chat, `Succes menjual ${count} keju 🧀, dan anda mendapatkan ${Skeju * count} money 💵`, m)
                            } else conn.reply(m.chat, `Keju 🧀 anda tidak cukup`, m)
                            break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(9999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'stamina-heal':
                            if (global.DATABASE._data.users[m.sender].money >= potion * count) {
                                global.DATABASE._data.users[m.sender].money -= staminaheal * count
                                global.DATABASE._data.users[m.sender].staminaheal += count * 1
                                conn.send2Button(m.chat, `Succes membeli ${count} Stamina Heal 💉 dengan harga ${potion * count} money 💵\n\nGunakan Stamina Heal dengan ketik: *${usedPrefix}healstamina <jumlah>*`, '© Nekohime', 'Tambah Stamina', '/healstamina', 'Inv', '.inv', m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money 💵`,)
                        break
                case 'keju':
                            if (global.DATABASE._data.users[m.sender].money >= keju * count) {
                                global.DATABASE._data.users[m.sender].keju += count * 1
                                global.DATABASE._data.users[m.sender].money -= keju * count
                                conn.reply(m.chat, `Succes membeli ${count} keju 🧀 dengan harga ${keju * count} money 💵`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} keju 🧀 dengan seharga ${keju * count} money 💵`, m)
                        
                        break
                case 'kail':
                            if (global.DATABASE.data.users[m.sender].kail == 5) return conn.reply(m.chat, 'Kailmu sudah *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > kail) {
                                global.DATABASE.data.users[m.sender].kail += 1
                                global.DATABASE.data.users[m.sender].money -= kail * 1
                                conn.reply(m.chat, `Succes membeli kail seharga ${kail} money 💵` ,m)
                            } else conn.reply(m.chat, `Money mu tidak cukup untuk membeli kail seharga ${kail} money 💵`, m)
                        
                        break
                case 'hiu':
                            if (global.DATABASE._data.users[m.sender].money >= hiu * count) {
                                global.DATABASE._data.users[m.sender].hiu += count * 1
                                global.DATABASE._data.users[m.sender].money -= hiu * count
                                conn.reply(m.chat, `Succes membeli ${count} hiu dengan harga ${hiu * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} hiu dengan seharga ${hiu * count} money 💵`, m)
                        
                        break
                    case 'lumba-lumba':
                            if (global.DATABASE._data.users[m.sender].money >= lumba * count) {
                                global.DATABASE._data.users[m.sender].lumba += count * 1
                                global.DATABASE._data.users[m.sender].money -= lumba * count
                                conn.reply(m.chat, `Succes membeli ${count} lumba-lumba dengan harga ${lumba * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} lumba-lumba dengan seharga ${lumba * count} money 💵`, m)
                        
                        break
                case 'roti':
                            if (global.DATABASE._data.users[m.sender].money >= roti * count) {
                                global.DATABASE._data.users[m.sender].roti += count * 1
                                global.DATABASE._data.users[m.sender].money -= roti * count
                                conn.reply(m.chat, `Succes membeli ${count} roti dengan harga ${roti * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} roti dengan seharga ${roti * count} money 💵`, m)
                        
                        break
                    case 'jeruk':
                            if (global.DATABASE._data.users[m.sender].money >= jeruk * count) {
                                global.DATABASE._data.users[m.sender].jeruk += count * 1
                                global.DATABASE._data.users[m.sender].money -= jeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} jeruk dengan harga ${jeruk * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} jeruk dengan seharga ${jeruk * count} money 💵`, m)
                        
                        break
                case 'apel':
                            if (global.DATABASE._data.users[m.sender].coin >= apel * count) {
                                global.DATABASE._data.users[m.sender].apel += count * 1
                                global.DATABASE._data.users[m.sender].coin -= apel * count
                                conn.reply(m.chat, `Succes membeli ${count} apel dengan harga ${apel * count} coin 🪙`, m)
                            } else conn.reply(m.chat, `Coin anda tidak cukup untuk membeli ${count} apel dengan seharga ${apel * count} coin 🪙`, m)
                        
                        break
                    case 'mangga':
                            if (global.DATABASE._data.users[m.sender].money >= mangga * count) {
                                global.DATABASE._data.users[m.sender].mangga += count * 1
                                global.DATABASE._data.users[m.sender].money -= mangga * count
                                conn.reply(m.chat, `Succes membeli ${count} mangga dengan harga ${mangga * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} mangga dengan seharga ${mangga * count} money 💵`, m)
                        
                        break
                    case 'anggur':
                            if (global.DATABASE._data.users[m.sender].money >= anggur * count) {
                                global.DATABASE._data.users[m.sender].anggur += count * 1
                                global.DATABASE._data.users[m.sender].money -= anggur * count
                                conn.reply(m.chat, `Succes membeli ${count} anggur dengan harga ${anggur * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} anggur dengan seharga ${anggur * count} money 💵`, m)
                        
                        break
                case 'bata':
                            if (global.DATABASE._data.users[m.sender].money >= batubata * count) {
                                global.DATABASE._data.users[m.sender].batubata += count * 1
                                global.DATABASE._data.users[m.sender].money -= batubata * count
                                conn.reply(m.chat, `Succes membeli ${count} batu bata dengan harga ${batubata * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} batu bata dengan seharga ${batubata * count} money 💵`, m)
                        
                        break
                    case 'semen':
                            if (global.DATABASE._data.users[m.sender].money >= semen * count) {
                                global.DATABASE._data.users[m.sender].semen += count * 1
                                global.DATABASE._data.users[m.sender].money -= semen * count
                                conn.reply(m.chat, `Succes membeli ${count} semen dengan harga ${semen * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} semen dengan seharga ${semen * count} money 💵`, m)
                        
                        break
                    case 'pasir':
                            if (global.DATABASE._data.users[m.sender].money >= pasir * count) {
                                global.DATABASE._data.users[m.sender].pasir += count * 1
                                global.DATABASE._data.users[m.sender].money -= pasir * count
                                conn.reply(m.chat, `Succes membeli ${count} pasir dengan harga ${pasir * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} pasir dengan seharga ${pasir * count} money 💵`, m)
                        
                        break
                    case 'kayu':
                            if (global.DATABASE._data.users[m.sender].money >= kayu * count) {
                                global.DATABASE._data.users[m.sender].kayu += count * 1
                                global.DATABASE._data.users[m.sender].money -= kayu * count
                                conn.reply(m.chat, `Succes membeli ${count} kayu dengan harga ${kayu * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} kayu dengan seharga ${kayu * count} money 💵`, m)
                        
                        break
                case 'ikan_tropis':
                            if (global.DATABASE._data.users[m.sender].money >= tropis * count) {
                                global.DATABASE._data.users[m.sender].tropis += count * 1
                                global.DATABASE._data.users[m.sender].money -= tropis * count
                                conn.reply(m.chat, `Succes membeli ${count} ikan tropis dengan harga ${tropis * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} ikan tropis dengan seharga ${tropis * count} money 💵`, m)
                        
                        break
                case 'ikan_buntal':
                            if (global.DATABASE._data.users[m.sender].money >= buntal * count) {
                                global.DATABASE._data.users[m.sender].buntal += count * 1
                                global.DATABASE._data.users[m.sender].money -= buntal * count
                                conn.reply(m.chat, `Succes membeli ${count} ikan buntal dengan harga ${buntal * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} ikan buntal dengan seharga ${buntal * count} money 💵`, m)
                        
                        break
                case 'kambing':
                            if (global.DATABASE._data.users[m.sender].money >= kambing * count) {
                                global.DATABASE._data.users[m.sender].kambing += count * 1
                                global.DATABASE._data.users[m.sender].money -= kambing * count
                                conn.reply(m.chat, `Succes membeli ${count} kambing dengan harga ${kambing * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} kambing dengan seharga ${kambing * count} money 💵`, m)
                        
                        break
                case 'unta':
                            if (global.DATABASE._data.users[m.sender].money >= unta * count) {
                                global.DATABASE._data.users[m.sender].unta += count * 1
                                global.DATABASE._data.users[m.sender].money -= unta * count
                                conn.reply(m.chat, `Succes membeli ${count} unta dengan harga ${unta * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} unta dengan seharga ${unta * count} money 💵`, m)
                        
                        break
                case 'cumi':
                            if (global.DATABASE._data.users[m.sender].money >= cumi * count) {
                                global.DATABASE._data.users[m.sender].cumi += count * 1
                                global.DATABASE._data.users[m.sender].money -= cumi * count
                                conn.reply(m.chat, `Succes membeli ${count} cumi-cumi dengan harga ${cumi * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} cumi-cumi dengan seharga ${cumi * count} money 💵`, m)
                        
                        break
                    case 'kepiting':
                            if (global.DATABASE._data.users[m.sender].money >= kepiting * count) {
                                global.DATABASE._data.users[m.sender].kepiting += count * 1
                                global.DATABASE._data.users[m.sender].money -= kepiting * count
                                conn.reply(m.chat, `Succes membeli ${count} kepiting dengan harga ${kepiting * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} kepiting dengan seharga ${kepiting * count} money 💵`, m)
                        
                        break
                    case 'udang':
                            if (global.DATABASE._data.users[m.sender].money >= udang * count) {
                                global.DATABASE._data.users[m.sender].udang += count * 1
                                global.DATABASE._data.users[m.sender].money -= udang * count
                                conn.reply(m.chat, `Succes membeli ${count} udang dengan harga ${udang * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} udang dengan seharga ${udang * count} money 💵`, m)
                        
                        break
                case 'daging_sapi':
                            if (global.DATABASE._data.users[m.sender].money >= dagingsapi * count) {
                                global.DATABASE._data.users[m.sender].dagingsapi += count * 1
                                global.DATABASE._data.users[m.sender].money -= dagingsapi * count
                                conn.reply(m.chat, `Succes membeli ${count} daging sapi dengan harga ${dagingsapi * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} daging sapi dengan seharga ${dagingsapi * count} money 💵`, m)
                        
                        break
                case 'sword':
                            if (global.DATABASE.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'Swordmu sudah *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > sword) {
                                global.DATABASE.data.users[m.sender].sword += 1
                                global.DATABASE.data.users[m.sender].money -= sword * 1
                                conn.reply(m.chat, `Succes membeli sword seharga ${sword} money 💵` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli sword seharga ${sword} money 💵`, m)
                        
                        break
                case 'pickaxe':
                            if (global.DATABASE.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'pickaxemu sudah *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > pickaxe) {
                                global.DATABASE.data.users[m.sender].pickaxe += 1
                                global.DATABASE.data.users[m.sender].money -= pickaxe * 1
                                conn.reply(m.chat, `Succes membeli pickaxe seharga ${pickaxe} money 💵` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli pickaxe seharga ${pickaxe} money 💵`, m)
                        
                        break
                case 'potion':
                        if (global.DATABASE._data.users[m.sender].money >= potion * count) {
                            global.DATABASE._data.users[m.sender].money -= potion * count
                            global.DATABASE._data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} money 💵\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money 💵`,m)
                    
                    break
                case 'makanan_hewan':
                            if (global.DATABASE._data.users[m.sender].money >= makananpet * count) {
                                global.DATABASE._data.users[m.sender].makananpet += count * 1
                                global.DATABASE._data.users[m.sender].money -= makananpet * count
                                conn.reply(m.chat, `Succes membeli ${count} makanan pet dengan harga ${makananpet * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} makanan pet dengan seharga ${makananpet * count} money 💵`, m)
                        
                        break
                case 'nuri':
                            if (global.DATABASE._data.users[m.sender].diamond >= nuri * count) {
                                global.DATABASE._data.users[m.sender].nuri += count * 1
                                global.DATABASE._data.users[m.sender].diamond -= nuri * count
                                conn.reply(m.chat, `Succes membeli ${count} burung nuri dengan harga ${nuri * count} diamond 💎`, m)
                            } else conn.reply(m.chat, `Diamond anda tidak cukup untuk membeli ${count} burung nuri dengan seharga ${nuri * count} diamond 💎`, m)
                        
                        break
                case 'anjing':
                            if (global.DATABASE._data.users[m.sender].money >= anjing * count) {
                                global.DATABASE._data.users[m.sender].anjing += count * 1
                                global.DATABASE._data.users[m.sender].money -= anjing * count
                                conn.reply(m.chat, `Succes membeli ${count} Anjing dengan harga ${anjing * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} Anjing dengan seharga ${anjing * count} money 💵`, m)
                        
                        break
                case 'sapi':
                            if (global.DATABASE._data.users[m.sender].money >= sapi * count) {
                                global.DATABASE._data.users[m.sender].sapi += count * 1
                                global.DATABASE._data.users[m.sender].money -= sapi * count
                                conn.reply(m.chat, `Succes membeli ${count} sapi dengan harga ${sapi * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} sapi dengan seharga ${sapi * count} money 💵`, m)
                        
                        break
                case 'kucing':
                            if (global.DATABASE._data.users[m.sender].money >= kucing * count) {
                                global.DATABASE._data.users[m.sender].kucing += count * 1
                                global.DATABASE._data.users[m.sender].money -= kucing * count
                                conn.reply(m.chat, `Succes membeli ${count} kucing dengan harga ${kucing * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} kucing dengan seharga ${kucing * count} money 💵`, m)
                        
                        break
                case 'kuda':
                            if (global.DATABASE._data.users[m.sender].money >= kuda * count) {
                                global.DATABASE._data.users[m.sender].kuda += count * 1
                                global.DATABASE._data.users[m.sender].money -= kuda * count
                                conn.reply(m.chat, `Succes membeli ${count} kuda dengan harga ${kuda * count} money 💵`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup untuk membeli ${count} kuda dengan seharga ${kuda * count} money 💵`, m)
                        
                        break
                case 'common':
                        if (global.DATABASE._data.users[m.sender].money >= Bcommon * count) {
                            global.DATABASE._data.users[m.sender].common += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} money 💵`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money 💵\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.DATABASE._data.users[m.sender].money >= Buncommon * count) {
                            global.DATABASE._data.users[m.sender].uncommon += count * 1
                            global.DATABASE._data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money 💵`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money 💵\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.DATABASE._data.users[m.sender].money >= Bmythic * count) {
                            global.DATABASE._data.users[m.sender].mythic += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} money 💵`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money 💵\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.DATABASE._data.users[m.sender].money >= Blegendary * count) {
                            global.DATABASE._data.users[m.sender].legendary += count * 1
                            global.DATABASE._data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} money 💵`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money 💵\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.DATABASE._data.users[m.sender].money >= Bsampah * count) {
                            global.DATABASE._data.users[m.sender].sampah += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} money 💵`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} money 💵`.trim(), m)
                    
                    break
                case 'armor':
                        if (global.DATABASE._data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.DATABASE._data.users[m.sender].money > armor * 1) {
                            global.DATABASE._data.users[m.sender].armor += 1
                            global.DATABASE._data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Succes membeli armor seharga ${armor} money 💵` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} money 💵`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(9999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'stamina-heal':
                        if (global.DATABASE._data.users[m.sender].staminaheal >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Sstaminaheal * count
                            global.DATABASE._data.users[m.sender].staminaheal -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Stamina Heal 💉 dengan harga ${Sstaminaheal * count} money 💵`.trim(), m)
                        } else conn.reply(m.chat, `Stamina heal 💉 kamu tidak cukup`.trim(), m)
                        break
                case 'keju':
                            if (global.DATABASE._data.users[m.sender].keju >= count * 1) {
                                global.DATABASE._data.users[m.sender].keju -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skeju * count
                                conn.reply(m.chat, `Succes menjual ${count} keju 🧀, dan anda mendapatkan ${Skeju * count} money 💵`, m)
                            } else conn.reply(m.chat, `Keju 🧀 anda tidak cukup`, m)
                case 'hiu':
                            if (global.DATABASE._data.users[m.sender].hiu >= count * 1) {
                                global.DATABASE._data.users[m.sender].hiu -= count * 1
                                global.DATABASE._data.users[m.sender].money += Shiu * count
                                conn.reply(m.chat, `Succes menjual ${count} hiu, dan anda mendapatkan ${Shiu * count} money 💵`, m)
                            } else conn.reply(m.chat, `Hiu anda tidak cukup`, m)
                            break
                        case 'lumba-lumba':
                            if (global.DATABASE._data.users[m.sender].lumba >= count * 1) {
                                global.DATABASE._data.users[m.sender].lumba -= count * 1
                                global.DATABASE._data.users[m.sender].money += Slumba * count
                                conn.reply(m.chat, `Succes menjual ${count} lumba-lumba, dan anda mendapatkan ${Slumba * count} money 💵`, m)
                            } else conn.reply(m.chat, `Lumba-lumba anda tidak cukup`, m)
                            break
                case 'jeruk':
                            if (global.DATABASE._data.users[m.sender].jeruk >= count * 1) {
                                global.DATABASE._data.users[m.sender].jeruk -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sjeruk * count
                                conn.reply(m.chat, `Succes menjual ${count} jeruk, dan anda mendapatkan ${Sjeruk * count} money 💵`, m)
                            } else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
                            break
                        case 'roti':
                            if (global.DATABASE._data.users[m.sender].roti >= count * 1) {
                                global.DATABASE._data.users[m.sender].roti -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sroti * count
                                conn.reply(m.chat, `Succes menjual ${count} roti, dan anda mendapatkan ${Sroti * count} money 💵`, m)
                            } else conn.reply(m.chat, `Roti anda tidak cukup`, m)
                            break
                case 'apel':
                            if (global.DATABASE._data.users[m.sender].apel >= count * 1) {
                                global.DATABASE._data.users[m.sender].apel -= count * 1
                                global.DATABASE._data.users[m.sender].coin += Sapel * count
                                conn.reply(m.chat, `Succes menjual ${count} apel, dan anda mendapatkan ${Sapel * count} coin 💵`, m)
                            } else conn.reply(m.chat, `Apel anda tidak cukup`, m)
                            break
                        case 'mangga':
                            if (global.DATABASE._data.users[m.sender].mangga >= count * 1) {
                                global.DATABASE._data.users[m.sender].mangga -= count * 1
                                global.DATABASE._data.users[m.sender].money += Smangga * count
                                conn.reply(m.chat, `Succes menjual ${count} mangga, dan anda mendapatkan ${Smangga * count} money 💵`, m)
                            } else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
                            break
                        case 'anggur':
                            if (global.DATABASE._data.users[m.sender].anggur >= count * 1) {
                                global.DATABASE._data.users[m.sender].anggur -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sanggur * count
                                conn.reply(m.chat, `Succes menjual ${count} anggur, dan anda mendapatkan ${Sanggur * count} money 💵`, m)
                            } else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
                            break
                case 'bata':
                            if (global.DATABASE._data.users[m.sender].batubata >= count * 1) {
                                global.DATABASE._data.users[m.sender].batubata -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sbatubata * count
                                conn.reply(m.chat, `Succes menjual ${count} batu bata, dan anda mendapatkan ${Sbatubata * count} money 💵`, m)
                            } else conn.reply(m.chat, `Batu bata anda tidak cukup`, m)
                            break
                        case 'pasir':
                            if (global.DATABASE._data.users[m.sender].pasir >= count * 1) {
                                global.DATABASE._data.users[m.sender].pasir -= count * 1
                                global.DATABASE._data.users[m.sender].money += Spasir * count
                                conn.reply(m.chat, `Succes menjual ${count} pasir, dan anda mendapatkan ${Spasir * count} money 💵`, m)
                            } else conn.reply(m.chat, `Pasir anda tidak cukup`, m)
                            break
                        case 'semen':
                            if (global.DATABASE._data.users[m.sender].semen >= count * 1) {
                                global.DATABASE._data.users[m.sender].semen -= count * 1
                                global.DATABASE._data.users[m.sender].money += Ssemen * count
                                conn.reply(m.chat, `Succes menjual ${count} semen, dan anda mendapatkan ${Ssemen * count} money 💵`, m)
                            } else conn.reply(m.chat, `Semen anda tidak cukup`, m)
                            break
                        case 'kayu':
                            if (global.DATABASE._data.users[m.sender].kayu >= count * 1) {
                                global.DATABASE._data.users[m.sender].kayu -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skayu * count
                                conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} money 💵`, m)
                            } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                            break
                case 'ikan_tropis':
                            if (global.DATABASE._data.users[m.sender].tropis >= count * 1) {
                                global.DATABASE._data.users[m.sender].tropis -= count * 1
                                global.DATABASE._data.users[m.sender].money += Stropis * count
                                conn.reply(m.chat, `Succes menjual ${count} ikan tropis, dan anda mendapatkan ${Stropis * count} money 💵`, m)
                            } else conn.reply(m.chat, `Ikan tropis anda tidak cukup`, m)
                            break
                        case 'ikan_buntal':
                            if (global.DATABASE._data.users[m.sender].buntal >= count * 1) {
                                global.DATABASE._data.users[m.sender].buntal -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sbuntal * count
                                conn.reply(m.chat, `Succes menjual ${count} ikan buntal, dan anda mendapatkan ${Sbuntal * count} money 💵`, m)
                            } else conn.reply(m.chat, `Ikan buntal anda tidak cukup`, m)
                            break
                case 'kambing':
                            if (global.DATABASE._data.users[m.sender].kambing >= count * 1) {
                                global.DATABASE._data.users[m.sender].kambing -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skambing * count
                                conn.reply(m.chat, `Succes menjual ${count} kambing, dan anda mendapatkan ${Skambing * count} money 💵`, m)
                            } else conn.reply(m.chat, `Kambing anda tidak cukup`, m)
                            break
                case 'unta':
                            if (global.DATABASE._data.users[m.sender].unta >= count * 1) {
                                global.DATABASE._data.users[m.sender].unta -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sunta * count
                                conn.reply(m.chat, `Succes menjual ${count} unta, dan anda mendapatkan ${Sunta * count} money 💵`, m)
                            } else conn.reply(m.chat, `Unta anda tidak cukup`, m)
                            break
                case 'cumi':
                            if (global.DATABASE._data.users[m.sender].cumi >= count * 1) {
                                global.DATABASE._data.users[m.sender].cumi -= count * 1
                                global.DATABASE._data.users[m.sender].money += Scumi * count
                                conn.reply(m.chat, `Succes menjual ${count} cumi-cumi, dan anda mendapatkan ${Scumi * count} money 💵`, m)
                            } else conn.reply(m.chat, `Cumi-cumi anda tidak cukup`, m)
                            break
                    case 'kepiting':
                            if (global.DATABASE._data.users[m.sender].kepiting >= count * 1) {
                                global.DATABASE._data.users[m.sender].kepiting -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skepiting * count
                                conn.reply(m.chat, `Succes menjual ${count} kepiting, dan anda mendapatkan ${Skepiting * count} money 💵`, m)
                            } else conn.reply(m.chat, `Kepiting anda tidak cukup`, m)
                            break
                case 'udang':
                            if (global.DATABASE._data.users[m.sender].udang >= count * 1) {
                                global.DATABASE._data.users[m.sender].udang -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sudang * count
                                conn.reply(m.chat, `Succes menjual ${count} udang, dan anda mendapatkan ${Sudang * count} money 💵`, m)
                            } else conn.reply(m.chat, `Udang anda tidak cukup`, m)
                            break
                case 'daging_sapi':
                            if (global.DATABASE._data.users[m.sender].dagingsapi >= count * 1) {
                                global.DATABASE._data.users[m.sender].dagingsapi -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sdagingsapi * count
                                conn.reply(m.chat, `Succes menjual ${count} daging sapi, dan anda mendapatkan ${Sdagingsapi * count} money 💵`, m)
                            } else conn.reply(m.chat, `Daging sapi anda tidak cukup`, m)
                            break
                case 'potion':
                    if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Spotion * count
                        global.DATABASE._data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} money 💵`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'nuri':
                            if (global.DATABASE._data.users[m.sender].nuri >= count * 1) {
                                global.DATABASE._data.users[m.sender].nuri -= count * 1
                                global.DATABASE._data.users[m.sender].diamond += Snuri * count
                                conn.reply(m.chat, `Succes menjual ${count} burung nuri, dan anda mendapatkan ${Snuri * count} diamond 💎`, m)
                            } else conn.reply(m.chat, `Burung nuri anda tidak cukup`, m)
                            break
                case 'makanan_hewan':
                            if (global.DATABASE._data.users[m.sender].makananpet >= count * 1) {
                                global.DATABASE._data.users[m.sender].makananpet -= count * 1
                                global.DATABASE._data.users[m.sender].money += Smakananpet * count
                                conn.reply(m.chat, `Succes menjual ${count} makanan pet, dan anda mendapatkan ${Smakananpet * count} money 💵`, m)
                            } else conn.reply(m.chat, `Makanan pet anda tidak cukup`, m)
                            break
                case 'sapi':
                            if (global.DATABASE._data.users[m.sender].sapi >= count * 1) {
                                global.DATABASE._data.users[m.sender].sapi -= count * 1
                                global.DATABASE._data.users[m.sender].money += Ssapi * count
                                conn.reply(m.chat, `Succes menjual ${count} sapi, dan anda mendapatkan ${Ssapi * count} money 💵`, m)
                            } else conn.reply(m.chat, `sapi anda tidak cukup`, m)
                            break
                case 'Anjing':
                            if (global.DATABASE._data.users[m.sender].anjing >= count * 1) {
                                global.DATABASE._data.users[m.sender].anjing -= count * 1
                                global.DATABASE._data.users[m.sender].money += Sanjing * count
                                conn.reply(m.chat, `Succes menjual ${count} Anjing, dan anda mendapatkan ${Sanjing * count} money 💵`, m)
                            } else conn.reply(m.chat, `Anjing anda tidak cukup`, m)
                            break
                case 'kuda':
                            if (global.DATABASE._data.users[m.sender].kuda >= count * 1) {
                                global.DATABASE._data.users[m.sender].kuda -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skuda * count
                                conn.reply(m.chat, `Succes menjual ${count} kuda, dan anda mendapatkan ${Skuda * count} money 💵`, m)
                            } else conn.reply(m.chat, `Kuda anda tidak cukup`, m)
                            break
                case 'kucing':
                            if (global.DATABASE._data.users[m.sender].kucing >= count * 1) {
                                global.DATABASE._data.users[m.sender].kucing -= count * 1
                                global.DATABASE._data.users[m.sender].money += Skucing * count
                                conn.reply(m.chat, `Succes menjual ${count} kucing, dan anda mendapatkan ${Skucing * count} money 💵`, m)
                            } else conn.reply(m.chat, `kucing anda tidak cukup`, m)
                            break
                case 'common':
                    if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Scommon * count
                        global.DATABASE._data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} money 💵`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Suncommon * count
                        global.DATABASE._data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money 💵`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Smythic * count
                        global.DATABASE._data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money 💵`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Slegendary * count
                        global.DATABASE._data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money 💵`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.DATABASE._data.users[m.sender].sampah >= count * 1) {
                        global.DATABASE._data.users[m.sender].sampah -= count * 1
                        global.DATABASE._data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money 💵`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                    case 'cumi':
                        if (global.DATABASE._data.users[m.sender].cumi >= count * 1) {
                            global.DATABASE._data.users[m.sender].cumi -= count * 1
                            global.DATABASE._data.users[m.sender].money += Scumi * count
                            conn.reply(m.chat, `Succes menjual ${count} cumi-cumi, dan anda mendapatkan ${Scumi * count} money 💵`, m)
                        } else conn.reply(m.chat, `Cumi-cumi anda tidak cukup`, m)
                        break
                case 'kepiting':
                        if (global.DATABASE._data.users[m.sender].kepiting >= count * 1) {
                            global.DATABASE._data.users[m.sender].kepiting -= count * 1
                            global.DATABASE._data.users[m.sender].money += Skepiting * count
                            conn.reply(m.chat, `Succes menjual ${count} kepiting, dan anda mendapatkan ${Skepiting * count} money 💵`, m)
                        } else conn.reply(m.chat, `Kepiting anda tidak cukup`, m)
                        break
            case 'udang':
                        if (global.DATABASE._data.users[m.sender].udang >= count * 1) {
                            global.DATABASE._data.users[m.sender].udang -= count * 1
                            global.DATABASE._data.users[m.sender].money += Sudang * count
                            conn.reply(m.chat, `Succes menjual ${count} udang, dan anda mendapatkan ${Sudang * count} money 💵`, m)
                        } else conn.reply(m.chat, `Udang anda tidak cukup`, m)
                        break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|pasar|toko|buy|beli|sell|jual)$/i
module.exports = handler