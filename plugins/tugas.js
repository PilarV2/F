let handler = async m => m.reply(`
Command Moderator
 
Tugas seorang *Moderator* adalah mengawasi bot dalam group
Jika ada yang melanggar rules bot, *Moderator* dapat melakukan beberapa perintah yang dapat digunakan oleh moderator
*Moderator* dapat memasukkan bot di group sesuka hati (no group rp) 

• *Wajib!!*
Moderator harus bisa menjelaskan pada user / pengguna baru tentang bagaimana cara menggunakan *Nekohime*

• #warn
Memberi peringatan kepada member yang melanggar rules bot
Jika member terkena warn 4 kali akan otomatis terkena ban!! 
• #jn
Commandnya sama kayak #join
• #banchat
Ban chat group (bot tidak dapat merespon jika group tersebut di ban chat
• #ban
Ban member (member tidak dapat menggunakan bot sebelum di unban owner) 

*Note*
*_jika moderator tidak bertanggung jawab atau tidak ada perkembangan atas tugasnya maka akan di turunkan oleh owner_*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['tugas']
handler.tags = ['Moderator']
handler.command = /^tugas$/i

module.exports = handler


