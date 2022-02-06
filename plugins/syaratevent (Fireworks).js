let handler = async m => m.reply(`Cara Mengikuti Event (Fireworks) Bot Nekohime
1. Mengumpulkan item dengan cara sportif
2. Event ini berlangsung secara bertahap
3. Minimal mengikuti event ini harus level 10
4. Dan jika sudah mengumpulkan harap tukar dengan tiket
5. akan mendapatkan skin (LIMITED EDITION)`.trim()) // Tambah sendiri kalo mau
handler.help = ['fireworkevent']
handler.tags = ['rpg']
handler.command = /^fireworkevent$/i

module.exports = handler


