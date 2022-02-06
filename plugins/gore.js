//created by Nekohime
let fetch = require('node-fetch');

let handler = async (m, { conn, text }) => {
  try {
    let res = await fetch('https://zenzapi.xyz/api/gore?apikey=5ff91b2511d7');
    let json = await res.json();
    //  if (!json.status) throw json
    let { title, thumb, author, comment, vote, view, tag, video1, video2 } = json.result;
    conn.sendFile(
      m.chat,
      thumb,
      'thumb.jpg',
      `
*Judul*: ${title}
*Author*: ${author}
*Komen*: ${comment}
*Vote*: ${vote}
*Viewers*: ${view}
*Tags*: ${tag}
    `.trim(),
      m
    );
    conn.sendFile(
      m.chat,
      video1,
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

handler.help = ['gore'];
handler.tags = ['internet'];
handler.command = /^gore$/i;

handler.fail = null;

module.exports = handler;
