let util = require('util')
let simple = require('./lib/simple')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.DATABASE._data.users[m.sender]
        if (typeof user !== 'object') global.DATABASE._data.users[m.sender] = {}
        if (user) {
          if (!isNumber(user.healt)) user.healt = 0
          if (!isNumber(user.level)) user.level = 0
          if (!isNumber(user.levelkerajaan)) user.levelkerajaan = 0
          if (!isNumber(user.exp)) user.exp = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          if (!isNumber(user.money)) user.money = 0
          
          if (!isNumber(user.diamond)) user.diamond = 0
          if (!isNumber(user.ruby)) user.ruby = 0
          if (!isNumber(user.iron)) user.iron = 0

          if (!isNumber(user.common)) user.common = 0
          if (!isNumber(user.uncommon)) user.uncommon = 0
          if (!isNumber(user.mythic)) user.mythic = 0
          if (!isNumber(user.legendary)) user.legendary = 0
          if (!isNumber(user.epic)) user.epic = 0
          if (!isNumber(user.legend)) user.legend = 0
          if (!isNumber(user.pet)) user.pet = 0
          if (!isNumber(user.petasan)) user.petasan = 0
      
          if (!isNumber(user.potion)) user.potion = 0
          if (!isNumber(user.sampah)) user.sampah = 0
          if (!isNumber(user.armor)) user.armor = 0
          
          if (!isNumber(user.dory)) user.dory = 0
          if (!isNumber(user.dorylastclaim)) user.dorylastclaim = 0
          if (!isNumber(user.kail)) user.kail = 0
          if (!isNumber(user.kaillastclaim)) user.kaillastclaim = 0
          if (!isNumber(user.emas)) user.emas = 0
          if (!isNumber(user.emaslastclaim)) user.emaslastclaim = 0
          if (!isNumber(user.minyak_bumi)) user.minyak_bumi = 0
          if (!isNumber(user.minyak_bumilastclaim)) user.minyak_bumilastclaim = 0
          if (!isNumber(user.perunggu)) user.perunggu = 0
          if (!isNumber(user.perunggulastclaim)) user.perunggulastclaim = 0
          if (!isNumber(user.crate_naga)) user.crate_naga = 0
          if (!isNumber(user.crate_nagalastclaim)) user.crate_nagalastclaim = 0
          if (!isNumber(user.hamburger)) user.hamburger = 0
          if (!isNumber(user.hamburgerlastclaim)) user.hamburgerlastclaim = 0
          if (!isNumber(user.lobster)) user.lobster = 0
          if (!isNumber(user.lobsterlastclaim)) user.lobsterlastclaim = 0
          if (!isNumber(user.apel)) user.apel = 0
          if (!isNumber(user.apellastclaim)) user.apellastclaim = 0
          if (!isNumber(user.roti)) user.roti = 0
          if (!isNumber(user.rotilastclaim)) user.rotilastclaim = 0
          if (!isNumber(user.jeruk)) user.jeruk = 0
          if (!isNumber(user.jeruklastclaim)) user.jeruklastclaim = 0
          if (!isNumber(user.jeruk)) user.jeruk = 0
          if (!isNumber(user.jeruklastclaim)) user.jeruklastclaim = 0
          if (!isNumber(user.mangga)) user.mangga = 0
          if (!isNumber(user.manggalastclaim)) user.manggalastclaim = 0
          if (!isNumber(user.anggur)) user.anggur = 0
          if (!isNumber(user.anggurlastclaim)) user.anggurlastclaim = 0
          if (!isNumber(user.perumahan)) user.perumahan = 0
          if (!isNumber(user.perumahanlastclaim)) user.perumahanlastclaim = 0
          if (!isNumber(user.ikan_buntal)) user.ikan_buntal = 0
          if (!isNumber(user.ikan_buntallastclaim)) user.ikan_buntallastclaim = 0
          if (!isNumber(user.ikan)) user.ikan = 0
          if (!isNumber(user.ikanlastclaim)) user.ikanlastclaim = 0
          if (!isNumber(user.batubata)) user.batubata = 0
          if (!isNumber(user.batubatalastclaim)) user.batubatalastclaim = 0
          if (!isNumber(user.pasir)) user.pasir = 0
          if (!isNumber(user.pasirlastclaim)) user.pasirlastclaim = 0
          if (!isNumber(user.batubata)) user.batubata = 0
          if (!isNumber(user.batubatalastclaim)) user.batubatalastclaim = 0
          if (!isNumber(user.semen)) user.semen = 0
          if (!isNumber(user.semenlastclaim)) user.semenlastclaim = 0
          if (!isNumber(user.rumah_indah)) user.rumah_indah = 0
          if (!isNumber(user.rumah_indahlastclaim)) user.rumah_indahlastclaim = 0
          if (!isNumber(user.rumah)) user.rumah = 0
          if (!isNumber(user.rumahlastclaim)) user.rumahlastclaim = 0
          if (!isNumber(user.rumah_bekas)) user.rumah_bekas = 0
          if (!isNumber(user.rumah_bekaslastclaim)) user.rumah_bekaslastclaim = 0
          if (!isNumber(user.kucing)) user.kucing = 0
          if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
          if (!isNumber(user.hiu)) user.hiu = 0
          if (!isNumber(user.hiulastclaim)) user.hiulastclaim = 0
          if (!isNumber(user.tropis)) user.tropis = 0
          if (!isNumber(user.tropislastclaim)) user.tropislastclaim = 0
          if (!isNumber(user.paus)) user.paus = 0
          if (!isNumber(user.pauslastclaim)) user.pauslastclaim = 0
          if (!isNumber(user.merak)) user.merak = 0
          if (!isNumber(user.meraklastclaim)) user.meraklastclaim = 0
          if (!isNumber(user.kambing)) user.kambing = 0
          if (!isNumber(user.kambinglastclaim)) user.kambinglastclaim = 0
          if (!isNumber(user.udang)) user.udang = 0
          if (!isNumber(user.udanglastclaim)) user.udanglastclaim = 0
          if (!isNumber(user.cumi)) user.cumi = 0
          if (!isNumber(user.cumilastclaim)) user.cumilastclaim = 0
          if (!isNumber(user.kepiting)) user.kepiting = 0
          if (!isNumber(user.kepitinglastclaim)) user.kepitinglastclaim = 0
          if (!isNumber(user.unta)) user.unta = 0
          if (!isNumber(user.untalastclaim)) user.untalastclaim = 0
          if (!isNumber(user.nuri)) user.nuri = 0
          if (!isNumber(user.nurilastclaim)) user.nurilastclaim = 0
          if (!isNumber(user.sapi)) user.sapi = 0
          if (!isNumber(user.sapilastclaim)) user.sapilastclaim = 0
          if (!isNumber(user.dagingunta)) user.dagingunta = 0
          if (!isNumber(user.daginguntalastclaim)) user.daginguntalastclaim = 0
          if (!isNumber(user.dagingsapi)) user.dagingsapi = 0
          if (!isNumber(user.dagingsapilastclaim)) user.dagingsapilastclaim = 0
          if (!isNumber(user.dagingayam)) user.dagingayam = 0
          if (!isNumber(user.dagingayamlastclaim)) user.dagingayamlastclaim = 0
          if (!isNumber(user.dagingkambing)) user.dagingkambing = 0
          if (!isNumber(user.dagingkambinglastclaim)) user.dagingkambinglastclaim = 0
          if (!isNumber(user.dagingburung)) user.dagingburung = 0
          if (!isNumber(user.dagingburunglastclaim)) user.dagingburunglastclaim = 0
          if (!isNumber(user.singa)) user.singa = 0
          if (!isNumber(user.singalastclaim)) user.singalastclaim = 0
          if (!isNumber(user.naga)) user.naga = 0
          if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0
          if (!isNumber(user.serigala)) user.serigala = 0
          if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0
          if (!isNumber(user.badak)) user.badak = 0
          if (!isNumber(user.badaklastclaim)) user.badaklastclaim = 0
          if (!isNumber(user.ayam)) user.ayam = 1
          if (!isNumber(user.ayamlastclaim)) user.ayamlastclaim = 0
          if (!isNumber(user.kuda)) user.kuda = 0
          if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
          if (!isNumber(user.rubah)) user.rubah = 0
          if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
          if (!isNumber(user.anjing)) user.anjing = 0
          if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
          if (!isNumber(user.gurita)) user.gurita = 0
          if (!isNumber(user.guritalastclaim)) user.guritalastclaim = 0
          if (!isNumber(user.lumba)) user.lumba = 0
          if (!isNumber(user.lumbalastclaim)) user.lumbalastclaim = 0
          if (!isNumber(user.orca)) user.orca = 0
          if (!isNumber(user.orcalastclaim)) user.orcalastclaim = 0
          if (!isNumber(user.panda)) user.panda = 0
          if (!isNumber(user.pandalastclaim)) user.pandalastclaim = 0
          if (!isNumber(user.banteng)) user.banteng = 0
          if (!isNumber(user.harimau)) user.harimau = 0
          if (!isNumber(user.gajah)) user.gajah = 0
          if (!isNumber(user.gajahlastclaim)) user.gajahlastclaim = 0
          if (!isNumber(user.harimaulastclaim)) user.harimaulastclaim = 0
          if (!isNumber(user.bantenglastclaim)) user.bantenglastclaim = 0
          if (!isNumber(user.buaya)) user.buaya = 0
          if (!isNumber(user.kerbau)) user.kerbau = 0
          if (!isNumber(user.kerbaulastclaim)) user.kerbaulastclaim = 0
          if (!isNumber(user.buayalastclaim)) user.buayalastclaim = 0
          if (!isNumber(user.babihutan)) user.babihutan = 0
          if (!isNumber(user.babi)) user.babi = 0
          if (!isNumber(user.babilastclaim)) user.babilastclaim = 0
          if (!isNumber(user.babihutanlastclaim)) user.babihutanlastclaim = 0
          if (!isNumber(user.monyet)) user.monyet = 0
          if (!isNumber(user.monyetlastclaim)) user.monyetlastclaim = 0
          if (!isNumber(user.coin)) user.coin = 0
          if (!isNumber(user.coinlastclaim)) user.coinlastclaim = 0
          if (!isNumber(user.populasi)) user.populasi = 0
          if (!isNumber(user.pasukan)) user.pasukan = 0
          if (!isNumber(user.rumahsakit)) user.rumahsakit = 0
          if (!isNumber(user.benteng)) user.benteng = 0
          if (!isNumber(user.troopcamp)) user.troopcamp = 0
          if (!isNumber(user.levelistana)) user.levelistana = 0
          if (!isNumber(user.kapak)) user.kapak = 0
          if (!isNumber(user.kapaklastclaim)) user.kapaklastclaim = 0
          if (!isNumber(user.lastkerjaojek)) user.lastkerjaojek = 0
          if (!isNumber(user.lastkerjadokter)) user.lastkerjadokter = 0
          if (!isNumber(user.lastkerjaojol)) user.lastkerjaojol = 0
          if (!isNumber(user.lastkerjakuli)) user.lastkerjakuli = 0
          if (!isNumber(user.lastkerjapilot)) user.lastkerjapilot = 0
          if (!isNumber(user.lastkerjamontir)) user.lastkerjamontir = 0
          if (!isNumber(user.stamina)) user.stamina = 0
          if (!isNumber(user.telur)) user.telur = 0
          if (!isNumber(user.telurlastclaim)) user.telurlastclaim = 0
          if (!isNumber(user.keju)) user.keju = 0
          if (!isNumber(user.kejulastclaim)) user.kejulastclaim = 0
          if (!isNumber(user.tomat)) user.tomat = 0
          if (!isNumber(user.tomatlastclaim)) user.tomatlastclaim = 0
          if (!isNumber(user.tiketemas)) user.tiketemas = 0
          if (!isNumber(user.tiketemaslastclaim)) user.tiketemaslastclaim = 0
          if (!isNumber(user.tiketbiasa)) user.tiketbiasa = 0
          if (!isNumber(user.tiketbiasalastclaim)) user.tiketbiasalastclaim = 0
          if (!isNumber(user.sinterklas)) user.sinterklas = 0
          if (!isNumber(user.heroacademy)) user.heroacademy = 0
          if (!isNumber(user.drevil)) user.drevil = 0
          if (!isNumber(user.elemenlevel)) user.elemenlevel = 0
          if (!isNumber(user.elemenpower)) user.elemenpower = 0
          if (!isNumber(user.eventregist)) user.eventregist = 0
          if (!isNumber(user.farmerskin)) user.farmerskin = 0
          if (!isNumber(user.darkabyss)) user.darkabyss = 0
          if (!isNumber(user.estemata)) user.estemata = 0
          if (!isNumber(user.staminaheal)) user.staminaheal = 0
          if (!isNumber(user.misievent1)) user.misievent1 = 0
          if (!isNumber(user.misievent2)) user.misievent2 = false
          if (!isNumber(user.misievent3)) user.misievent3 = false
          if (!isNumber(user.misievent4)) user.misievent4 = false
          if (!isNumber(user.claim_event)) user.claim_event = false

          if (!'Banneduser' in user) user.Banneduser = false
          if (!'BannedReason' in user) user.BannedReason = ''
          if (!isNumber(user.warn)) user.warn = 0

          if (!isNumber(user.afk)) user.afk = -1
          if (!'afkReason' in user) user.afkReason = ''
      
          if (!isNumber(user.anakmerak)) user.anakmerak = 0
          if (!isNumber(user.anakikan_buntal)) user.anakikan_buntal = 0
          if (!isNumber(user.anaknuri)) user.anaknuri = 0
          if (!isNumber(user.anaksapi)) user.anaksapi = 0
          if (!isNumber(user.anakkambing)) user.anakkambing = 0
          if (!isNumber(user.anaksinga)) user.anaksinga = 0
          if (!isNumber(user.anakkuda)) user.anakkuda = 0
          if (!isNumber(user.anakunta)) user.anakunta = 0
          if (!isNumber(user.anaknaga)) user.anaknaga = 0
          if (!isNumber(user.anakserigala)) user.anakserigala = 0
          if (!isNumber(user.anakrubah)) user.anakrubah = 0
          if (!isNumber(user.anakanjing)) user.anakanjing = 0
          if (!isNumber(user.anakayam)) user.anakayam = 0
          if (!isNumber(user.anakbadak)) user.anakbadak = 0
          if (!isNumber(user.anakhiu)) user.anakhiu = 0
          if (!isNumber(user.anakpaus)) user.anakpaus = 0
          if (!isNumber(user.anaktropis)) user.anaktropis = 0
          if (!isNumber(user.anakkucing)) user.anakkucing = 0
          if (!isNumber(user.anakgurita)) user.anakgurita = 0
          if (!isNumber(user.anakikan)) user.anakikan = 0
          if (!isNumber(user.anakorca)) user.anakorca = 0
          if (!isNumber(user.makananpet)) user.makananpet = 0
          //berburu
          if (!isNumber(user.anakpanda)) user.anakpanda = 0
          if (!isNumber(user.anakharimau)) user.anakharimau = 0
          if (!isNumber(user.anakgajah)) user.anakgajah = 0
          if (!isNumber(user.anakbuaya)) user.anakbuaya = 0
          if (!isNumber(user.anakkerbau)) user.anakkerbau = 0
          if (!isNumber(user.anakbanteng)) user.anakbanteng = 0
          if (!isNumber(user.anakbabi)) user.anakbabi = 0
          if (!isNumber(user.anakbabihutan)) user.anakbabihutan = 0
          if (!isNumber(user.anakmonyet)) user.anakmonyet = 0

          if (!isNumber(user.antispam)) user.antispam = 0
          if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
          
          if (!isNumber(user.eventlastclaim)) user.eventlastclaim = 0
    if (!isNumber(user.premlastclaim)) user.premlastclaim = 0
    if (!isNumber(user.modslastclaim)) user.modslastclaim = 0

          if (!isNumber(user.kayu)) user.kayu = 0
          if (!isNumber(user.batu)) user.batu = 0
          if (!isNumber(user.string)) user.string = 0
          if (!isNumber(user.sword)) user.sword = 0
          if (!isNumber(user.sworddurability)) user.sworddurability = 0
          if (!isNumber(user.pickaxe)) user.pickaxe = 0
          if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
          if (!isNumber(user.fishingrod)) user.fishingrod = 0
          if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0

          if (!isNumber(user.lastadventure)) user.lastadventure = 0
          if (!isNumber(user.lastfishing)) user.lastfishing = 0
          if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
          if (!isNumber(user.lastduel)) user.lastduel = 0
          if (!isNumber(user.lastmining)) user.lastmining = 0
          if (!isNumber(user.lasthunt)) user.lasthunt = 0
          if (!isNumber(user.lastweekly)) user.lastweekly = 0
          if (!isNumber(user.lastmonthly)) user.lastmontly = 0
          if (!isNumber(user.lastberburu)) user.lastberburu = 0
          if (!isNumber(user.pc)) user.pc = 0
          if (!('registered' in user)) user.registered = false
          if (!('premium' in user)) user.premium = false
          if (!('created' in user)) user.created = false
          if (!('elementcreated' in user)) user.elementcreated = false
          if (!('pasangan' in user)) user.pasangan = ''
          if (!('aliance' in user)) user.aliance = ""
          if (!('elemen' in user)) user.elemen = ""
          if (!('namaraja' in user)) user.namaraja = ""
          if (!('namakerajaan' in user)) user.namakerajaan = ""
          if (!user.role) user.role = 'Beginner'
          if (!user.registered) {
              if (!('name' in user)) user.name = this.getName(m.sender)
              if (!isNumber(user.age)) user.age = -1
              if (!isNumber(user.regTime)) user.regTime = -1
            }
            if (!('autolevelup' in user)) user.autolevelup = true
            if (!('ah' in user)) user.ah = []
            if (!('mission' in user)) user.mission = {}
        } else global.DATABASE._data.users[m.sender] = {
            healt: 100,
            premium: false,
            created: false,
            elementcreated: false,
            claim_event: false,
            level: 0,
            kapak: 0,
            petasan: 0,
            misievent1: 0,
            misievent2: false,
            misievent3: false,
            misievent4: false,
            farmerskin: 0,
            estemata: 0,
            kapaklastclaim: 0,
            levelistana: 0,
            staminaheal: 0,
            pc: 0,
            aliance: "",
            elemen: "",
            benteng: 0,
            rumahsakit: 0,
            troopcamp: 0,
            namaraja: "",
            eventregist: 0,
            elemenlevel: 0,
            elemenpower: 0,
            levelkerajaan: 0,
            populasi: 0,
            namakerajaan: "",
            pasukan: 0,
            kail: 0,
            kaillastclaim: 0,
            buaya: 0,
            stamina: 0,
            emas: 0,
            emaslastclaim: 0,
            lastkerjamontir: 0,
            lastkerjapilot: 0,
            perunggu: 0,
            perunggulastclaim: 0,
            minyak_bumi: 0,
            minyak_bumilastclaim: 0,
            crate_naga: 0,
            crate_nagalastclaim: 0,
            coin: 0,
            coinlastclaim: 0,
            sinterklas: 0,
            heroacademy: 0,
            drevil: 0,
            darkabyss: 0,
            lastkerjadokter: 0,
            lastkerjaojol: 0,
            lastkerjakuli: 0,
            anakbuaya: 0,
            buayalastclaim: 0,
            tomat: 0,
            tomatlastclaim: 0,
            keju: 0,
            kejulastclaim: 0,
            telur: 0,
            telurlastclaim: 0,
            harimau: 0,
            anakharimau: 0,
            harimaulastclaim: 0,
            banteng: 0,
            anakbanteng: 0,
            bantenglastclaim: 0,
            gajah: 0,
            anakgajah: 0,
            gajahlastclaim: 0,
            tiketemas: 0,
            tiketemaslastclaim: 0,
            tiketbiasa: 0,
            tiketbiasalastclaim: 0,
            babi: 0,
            anakbabi: 0,
            babilastclaim: 0,
            babihutan: 0,
            anakbabihutan: 0,
            babihutanlastclaim: 0,
            monyet: 0,
            anakmonyet: 0,
            monyetlastclaim: 0,
            ikan_buntal: 0,
            ikan_buntallastclaim: 0,
            anakikan_buntal: 0,
            anakgurita: 0,
            anakikan: 0,
            anakorca: 0,
            panda: 0,
            pandalastclaim: 0,
            anakpanda: 0,
            exp: 0,
            limit: 10,
            lastclaim: 0,
            eventlastclaim: 0,
			modslastclaim: 0,
			premlastclaim: 0,
            money: 0,
            dory: 0,
            dorylastclaim: 0,
            lastkerjaojek: 0,
            paus: 0,
            pauslastclaim: 0,
            gurita: 0,
            guritalastclaim: 0,
            diamond: 0,
            apel: 0,
            apellastclaim: 0,
            hamburger: 0,
            hamburgerlastclaim: 0,
            mangga: 0,
            manggalastclaim: 0,
            jeruk: 0,
            jeruklastclaim: 0,
            roti: 0,
            rotilastclaim: 0,
            anggur: 0,
            anggurlastclaim: 0,
            ruby: 0,
            pasir: 0,
            pasangan: '',
            batubata: 0,
            pasirlastclaim: 0,
            iron: 0,
            common: 0,
            uncommon: 0,
            mythic: 0,
            legendary: 0,
            pet: 0,
            epic: 0,
            legend: 0,
            rumah: 0,
            perumahan: 0,
            rumah_bekas: 0,
            rumah_indah: 0,
            rumahlastclaim: 0,
            perumahanlastclaim: 0,
            rumah_bekaslastclaim: 0,
            rumah_indahlastclaim: 0,
            semen: 0,
            semenlastclaim: 0,
            potion: 0,
            sampah: 0,
            armor: 0,
            kambing: 0,
            merak: 0,
            hiu: 0,
            paus: 0,
            tropis: 0,
            kucing: 0,
            udang: 0,
            cumi: 0,
            nuri: 0,
            kepiting: 0,
            unta: 0,
            sapi: 0,
            dagingunta: 0,
            dagingsapi: 0,
            dagingayam: 0,
            dagingburung: 0,
            dagingkambing: 0,
            sapilastclaim: 0,
            meraklastclaim: 0,
            dagingsapilastclaim: 0,
            daginguntalastclaim: 0,
            dagingburunglastclaim: 0,
            dagingayamlastclaim: 0,
            dagingkambinglastclaim: 0,
            kucinglastclaim: 0,
            udanglastclaim: 0,
            nurilastclaim: 0,
            kepitinglastclaim: 0,
            kambinglastclaim: 0,
            untalastclaim: 0,
            cumilastclaim: 0,
            badak: 0,
            badaklastclaim: 0,
            tropislastclaim: 0,
            hiulastclaim: 0,
            pauslastclaim: 0,
            ayam: 1,
            ayamlastclaim: 0,
            singa: 0,
            singalastclaim: 0,
            naga: 0,
            nagalastclaim: 0,
            serigala: 0,
            serigalalastclaim: 0,
            kuda: 0,
            kudalastclaim: 0,
            rubah: 0,
            rubahlastclaim: 0,
            anjing: 0,
            anjinglastclaim: 0,
            Banneduser: false,
            BannedReason: '',
            role: 'Beginner',
            warn: 0,
            afk: -1,
            afkReason: '',
            anakkucing: 0,
            anakmerak: 0,
            anakunta: 0,
            anaktropis: 0,
            anakhiu: 0,
            anakpaus: 0,
            anaknuri: 0,
            anaksapi: 0,
            anakkuda: 0,
            anakkambing: 0,
            anakrubah: 0,
            anakanjing: 0,
            makananpet: 0,
            antispam: 0,
            antispamlastclaim: 0,
            kayu: 0,
            batu: 0,
            string: 0,
            sword: 0,
            sworddurability: 0,
            pickaxe: 0,
            pickaxedurability: 0,
            fishingrod: 0,
            fishingroddurability: 0,
            lastadventure: 0,
            lastfishing: 0,
            lastdungeon: 0,
            lastduel: 0,
            lastmining: 0,
            lasthunt: 0,
            lastweekly: 0,
            lastberburu: 0,
            lastmonthly: 0,
            registered: false,
            name: this.getName(m.sender),
            age: -1,
            regTime: -1,
            autolevelup: true,
            ah: [],
            mission: {},
        }

        let chat = global.DATABASE._data.chats[m.chat]
        if (typeof chat !== 'object') global.DATABASE._data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = false
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('delete' in chat)) chat.delete = false
          if (!('antiLink' in chat)) chat.antiLink = false
          if (!('antivirtex' in chat)) chat.antivirtex = false
          if (!'antiToxic' in chat) chat.antiToxic = false
          if (!('viewonce' in chat)) chat.viewonce = false
        } else global.DATABASE._data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          delete: false,
          antiLink: false,
          antivirtex: false,
          antiToxic: false,
          viewonce: false,
        }
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (m.chat == 'status@broadcast') return
      if (typeof m.text !== 'string') m.text = ''
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.DATABASE.data && global.DATABASE.data.users && global.DATABASE.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Your Data
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Are you Admin?
      let DevMode = /true/i.test(global.DeveloperMode.toLowerCase())
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.DATABASE._data.chats || m.sender in global.DATABASE._data.users) {
            let chat = global.DATABASE._data.chats[m.chat]
            let user = global.DATABASE._data.users[m.sender]
            if (!['unbanchat.js', 'link.js', 'pengumuman.js', 'creator.js'].includes(name) && chat && chat.isBanned && !isROwner) return // Except this
            if (!['unbanuser.js', 'inv.js', 'link.js', 'creator.js', 'profile.js'].includes(name) && user && user.banned && !isROwner) {
              if (!opts['msgifbanned']) m.reply(`*ANDA TERBANNED* ${user.bannedReason ? `\nKarena *${user.bannedReason}*` : ''}

Hubungi: 
${global.owner.map((v, i) => '*Owner ' + (i + 1) + ':* wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*Moderator ' + (i + 1) + ':* wa.me/' + v).join('\n')}

Kuy join group Official *${conn.getName(this.user.jid)}*: 
${(global.linkGC).map((v, i) => '*Group ' + (i + 1) + '*\n' + v).join`\n\n`}
`.trim())
              return
            }
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 15 // XP Earning per command
          if (xp > 99999999999) m.reply('Ngecit -_-') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.limit && global.DATABASE._data.users[m.sender].limit < plugin.limit * 1) {
            this.send2Button(m.chat, `Limit anda habis, silahkan beli melalui di ${usedPrefix}buylimit`, '© Nekohime', 'Beli', '.buylimit', 'Beli Semua', 'buylimit all', m)
            continue // Limit habis
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
            chatUpdate,
            DevMode,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Terjadi kesalahan
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e.message ? e.message : e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), 'apikey')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
             if (m.limit) m.reply(+ m.limit + ' Limit terpakai') // Jadikan sebagai komentar jika kamu risih dengan pesan ini
          }
          break
        }
      }
    } finally {
      //console.log(global.DATABASE.data.users[m.sender])
      let user, stats = global.DATABASE.data.stats
      if (m) {
        if (m.sender && (user = global.DATABASE.data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
      if (DATABASE.data.chats[m.chat].read) await this.chatRead(m.chat).catch(() => { })
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.DATABASE._data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            let pp = './src/avatar_contact.png'
            try {
              pp = await this.getProfilePicture(user)
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(jid)).replace('@desc', groupMetadata.desc) :
                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
              this.sendFile(jid, pp, 'pp.jpg', text, null, false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user ```menjadi Admin 🔰````')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ``````menjadi Member 🙍‍♂️``````')
        text = text.replace('@user', '@' + participants[0].split('@')[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.remoteJid == 'status@broadcast') return
    if (m.key.fromMe) return
    let chat = global.DATABASE._data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.reply(m.key.remoteJid, `
Terdeteksi @${m.participant.split`@`[0]} telah menghapus pesan

Untuk mematikan fitur ini, ketik
*.disable delete*
`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    let { from } = json[2][0][1]
    let ids = 'call-id' in json[2][0][2][0][1] ? Object.entries(json[2][0][2][0][1]) : []
    let id = ids[0][1]
    let isOffer = json[2][0][2][0][0] == 'offer' || false
    let users = global.DATABASE.data.users
    let user = users[from] || {}
    if (user.whitelist) return
    switch (this.callWhitelistMode) {
      case 'mycontact':
        if (from in this.contacts && 'short' in this.contacts[from])
        return
        break
    }
      
    if (from && id && isOffer && json[2][0]) {
      var tag = this.generateMessageTag()
      var NodePayload = ["action", "call", ["call", {
        "from": this.user.jid,
        "to": from,
        "id": tag
      }, [["reject", { 
        "call-id": id, 
        "call-creator": from, 
        "count": "0" 
      }, null]]]]
      
      await this.send(`${tag},${JSON.stringify(NodePayload)}`)
    }
    await this.sendMessage(from, 'Maaf, Tolong jangan telfon BOT!!', MessageType.extendedText)
  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    proses: 'Maaf fitur ini sedang dalam perbaikan..',
    rowner: '🔰 Hanya *Owner* yang boleh !',
    owner: '🔰 Hanya *Owner Bot* yang bisa mengakses !',
    mods: '🔰 Hanya *Moderator* yang bisa mengakses !',
    premium: '[❗] *Hanya User Premium* !',
    group: '*Fitur ini hanya bisa digunakan di grup* !',
    private: '🙍‍♂️ *Fitur ini hanya bisa di Chat Pribadi* !',
    admin: '🔰 *Maaf anda bukan admin grup* !',
    botAdmin: '🔰 *Bot belum menjadi admin grup* !',
    unreg: 'Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar nama.umur*\n\nContoh: *#daftar Manusia.16*'
  }[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
const { text } = require('express')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
