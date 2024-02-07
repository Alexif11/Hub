                // IKGA SOURCE https://discord.gg/ikgas V.5

const { Client, Intents } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const readline = require('readline-sync');
const m = require("moment-duration-format");
const exp = require('express'); 
const os = require('os');
const si = require('systeminformation');
const s = exp();
const express = require('express')
const app = express();
const port = 8000

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

const client = new Client({
  checkUpdate: false
});

client.on('ready', async () => {

  const num = parseFloat((Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1));
  const operator = Math.random() < 0.3 ? '+' : '-';

  setInterval(async () => {
    const moment = require('moment');
    const created = moment().format('YYYY-MM-DD HH:mm:ss ');

    const ikgasm1 = 'https://media.discordapp.net/attachments/1155965892853760030/1181783912985403472/c348de3b700f722339249721f97dc039.gif?ex=65a73b09&is=6594c609&hm=16416732c94b78b3ba9628faa38e0b03631e8a2a72c480dd3a0c3b3e3a3544b9&'; //รูปใหญ่
    const ikgasm2 = 'https://media.discordapp.net/attachments/1155965892853760030/1156600121069424732/4c172dbbad6d969caf0139f4c742f3b8.gif?ex=65a7e5cd&is=659570cd&hm=4602e66a1e684cca11e232ef206b81a2a282f947eb113670ac57480d0ceff384&'; // รูปเล็ก
    const ikgas2 = 'คิดถึงแฟ้ม'; // ข้อความตรง กำลังเล่น
    const ikga1 = '🌪🌪'; // ชื่อ ปุ่ม 1
    const ikga2 = 'https://youtu.be/R7cBD3mK3oA'; // ลิ้ง ปุ่ม 1
    const ikga3 = '🌈GI🌈'; // ชื่อ ปุ่ม 2
    const ikga4 = 'https://www.instagram.com/b2n_3x?igsh=bTVvN2hweDY3cGY2'; // ลิ้ง ปุ่ม 2
  

    try {
      const cpuInfo = await si.cpu();
      const mem = await si.mem();
      const totalRam = mem.total;
      const usedRam = mem.used;
      const cpuSpeed = cpuInfo.speed;

      const cpuText = (typeof cpuSpeed === 'number') ? `${cpuSpeed.toFixed(1)} GHz` : 'N/A';
      const ramText = (typeof totalRam === 'number' && typeof usedRam === 'number') ? `RAM: ${((usedRam / totalRam) * 100).toFixed(1)}%` : 'N/A';

      const r = new Discord.RichPresence()
        .setApplicationId('1159828579241177100')
        .setType('STREAMING')
        .setURL('https://youtu.be/Fc-dbtAOzx8')
        .setState(`${ikgas2}`)
        .setName(`YOUTUBE`)
        .setDetails(`CPU: ${cpuText} | ${ramText}`)
        .setAssetsSmallImage(`${ikgasm2}`) 
        .setAssetsLargeImage(`${ikgasm1}`)
        .setAssetsLargeText(`⌚ เวลา :${getTime()} นาที`)
        .setAssetsSmallText(`${cpuText}, ${ramText}`)
        .addButton(`${ikga1}`,`${ikga2}`)  
        .addButton(`${ikga3}`,`${ikga4}`)
        .setStartTimestamp(Date.now())
        .setEndTimestamp(Date.now());
      client.user.setActivity(r);
    } catch (err) {
      console.error('Error getting system information:', err.message);
    }
    }, 1 * 500);
    console.log(`${client.user.username} Is Ready!`);
    });
client.login(process.env['token']);

si.currentLoad().then(data => {
    // handle success
  }).catch(err => {
    // handle error
  });


async function getSystemInfo() {
    try {
      const cpuUsage = await si.currentLoad();
      const mem = await si.mem();
      if (cpuUsage && mem) {
        const ramUsage = (mem.active / mem.total) * 100;
        return {
          cpuUsage: cpuUsage.currentload, // This is the real current load in percentage
          ramUsage
        };
      } else {
        throw new Error('Failed to get CPU or memory information');
      }
    } catch (err) {
      console.error('Error getting system information:', err.message);
      return {
        cpuUsage: 0,
        ramUsage: 0
      };
    }
}


let endTime = new Date().setHours(24 + 6, 0, 0, 0), 
  today = new Date().setHours(0, 0, 0, 0),
  dayCount = Math.floor((today - new Date(2023, 0).getTime()) / (24 * 60 * 60 * 1000));

var date = new Date().getDate() + "/"+ (new Date().getMonth()+1)  + "/" + new Date().getFullYear();
var time = new Date().getHours() + ":"+ new Date().getMinutes();

let options = {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  };

function getDate() {
  return (new Date()).toLocaleString([], options).split(" ")[0].replaceAll(",", "");
}

function getTime() {
  return (new Date()).toLocaleString([], options).split(" ")[1].replaceAll(",", "");
}

