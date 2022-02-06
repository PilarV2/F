//created by Nekohime
let fetch = require('node-fetch');

let handler = async (m, { conn, text }) => {
  try {
    let res = await fetch('https://zenzapi.xyz/api/tikporn?apikey=5ff91b2511d7');
    let json = await res.json();
    //  if (!json.status) throw json
    let { title, thumb, desc, like, dislike, favorite, views, tags, video } = json.result;
    conn.sendFile(
      m.chat,
      thumb,
      'ppcouple.jpg',
      `
*Judul*: ${title}
*Deskripsi*: ${desc}
*Like*: ${like}
*Dislike*: ${dislike}
*Favorit*: ${favorite}
*Viewers*: ${views}
*Tags*: ${tags}
    `.trim(),
      m
    );
    conn.sendFile(
      m.chat,
      video,
      'video.mp4',
      `
    `.trim(),
      m
    );
  } catch (e) {
    console.log(e);
    throw '_*Error!*_';
  }
};

handler.help = ['tiktokporn'];
handler.tags = ['internet', 'premium'];
handler.command = /^tiktokporn$/i;

handler.fail = null;

module.exports = handler;
