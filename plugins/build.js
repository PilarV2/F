let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _buildbenteng = global.DATABASE.data.users[m.sender].benteng
    const buildbenteng = (_buildbenteng == 0 ? 5000 : '' || _buildbenteng == 1 ? 33973 : '' || _buildbenteng == 2 ? 47923 : '' || _buildbenteng == 3 ? 79308 : '' || _buildbenteng == 4 ? 92726 : '')
    const _buildistana = global.DATABASE.data.users[m.sender].levelistana
    const buildistana = (_buildistana == 0 ? 7100 : '' || _buildistana == 1 ? 59973 : '' || _buildistana == 2 ? 87923 : '' || _buildistana == 3 ? 109308 : '' || _buildistana == 4 ? 1292326 : '' || _buildistana == 5 ? 1594526 : '' || _buildistana == 6 ? 189364 : '')
    const _buildkamp = global.DATABASE.data.users[m.sender].troopcamp
    const buildkamp = (_buildkamp == 0 ? 100 : '' || _buildkamp == 1 ? 9973 : '' || _buildkamp == 2 ? 17923 : '' || _buildkamp == 3 ? 22308 : '' || _buildkamp == 4 ? 29216 : '' || _buildkamp == 5 ? 30283 : '' || _buildkamp == 6 ? 35928 : '')
    const _buildrs = global.DATABASE.data.users[m.sender].troopcamp
    const buildrs = (_buildrs == 0 ? 100 : '' || _buildrs == 1 ? 9973 : '' || _buildrs == 2 ? 17923 : '' || _buildrs == 3 ? 22308 : '' || _buildrs == 4 ? 29216 : '' || _buildrs == 5 ? 30283 : '')
    let type = (args[0] || '').toLowerCase()
    const Kchat = `
List Upgrade Kerjaan:
🏰 Istana: ${buildistana} Coin 🪙
🏯 Benteng: ${buildbenteng} Coin 🪙
🏕️ Kamp Pasukan: ${buildkamp} Coin 🪙
`.trim()
    try {
        if (/build|upgrade/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'benteng':
                    if (global.DATABASE.data.users[m.sender].benteng == 8) return conn.reply(m.chat, '🏯 Benteng Kamu Sudah *Level Max*', m)
                            if (global.DATABASE._data.users[m.sender].coin >= buildbenteng) {
                                global.DATABASE._data.users[m.sender].benteng += 1
                                global.DATABASE._data.users[m.sender].coin -= buildbenteng
                                conn.reply(m.chat, `Sukses Membangun Benteng 🏯.`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${buildbenteng} koin 🪙....`, m)
                        
                        break
                    case 'istana':
                    if (global.DATABASE.data.users[m.sender].levelistana == 6) return conn.reply(m.chat, '🏰 Istana Kamu Sudah *Level Max*', m)
                            if (global.DATABASE._data.users[m.sender].coin >= buildistana) {
                                global.DATABASE._data.users[m.sender].levelistana += 1
                                global.DATABASE._data.users[m.sender].coin -= buildistana
                                conn.reply(m.chat, `Sukses Meningkatkan level istana 🏰.`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${buildistana} koin 🪙....`, m)
                        
                        break
                    case 'kamp-pasukan':
                    if (global.DATABASE.data.users[m.sender].troopcamp == 5) return conn.reply(m.chat, '🏕️ Kamp Pasukan Kamu Sudah *Level Max*', m)
                            if (global.DATABASE._data.users[m.sender].coin >= buildkamp) {
                                global.DATABASE._data.users[m.sender].troopcamp += 1
                                global.DATABASE._data.users[m.sender].coin -= buildkamp
                                conn.reply(m.chat, `Sukses Meningkatkan Kamp Pasukan 🏕️.`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${buildkamp} koin 🪙....`, m)
                        
                        break
                    case 'rumah-sakit':
                    if (global.DATABASE.data.users[m.sender].troopcamp == 7) return conn.reply(m.chat, '🏥 Rumah Sakit Kamu Sudah *Level Max*', m)
                            if (global.DATABASE._data.users[m.sender].coin >= buildrs) {
                                global.DATABASE._data.users[m.sender].rumahsakit += 1
                                global.DATABASE._data.users[m.sender].coin -= buildrs
                                conn.reply(m.chat, `Sukses Meningkatkan Rumah Sakit 🏥.`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${buildrs} koin 🪙....`, m)
                        
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
                conn.sendMessage(jid, 'build.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['build (apa)']
handler.tags = ['rpg']

handler.command = /^(build|upgrade)$/i
module.exports = handler