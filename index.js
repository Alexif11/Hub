// IKGA SOURCE https://discord.gg/ikgas V.5

const { Client, Intents } = require("discord.js-selfbot-v13");
const keepAliveServer =require("./keep_alive.js");
const Discord = require("discord.js-selfbot-v13");
const readline = require("readline-sync");
const m = require("moment-duration-format");
const exp = require("express");
const os = require("os");
const si = require("systeminformation");
const s = exp();
const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("ทำงานเรียบร้อยแล้ว"));
app.listen(port, () =>
  console.log(`Your app is listening at http://localhost:${port}`),
);

const client = new Client({
  checkUpdate: false,
});

client.on("ready", async () => {
  const num = parseFloat(
    (Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1),
  );
  const operator = Math.random() < 0.3 ? "+" : "-";

  setInterval(async () => {
    const moment = require("moment");
    const created = moment().format("YYYY-MM-DD HH:mm:ss ");

    const ikgasm1 =
      "https://media.discordapp.net/attachments/1191267411698143314/1217917579507531967/42eee9d63261fa391e334f299d2898eb.gif?ex=6605c522&is=65f35022&hm=db35f782746eb158919d754151fe9529593ef1502eb96371d2c860a4baa4a199&"; //รูปใหญ่
    const ikgasm2 =
      "https://media.discordapp.net/attachments/1191267411698143314/1207278140188270642/86bb9a1f7af56acca41038cc1bc84ddc.gif?ex=660d34e2&is=65fabfe2&hm=37c29fbf61281b6214f98d5d57319519d7aa37b7103bf1b1556a90ef0320d358&="; // รูปเล็ก
    const ikgas2 = "🐶you're gon' hold that💜"; // ข้อความตรง กำลังเล่น
    const ikga1 = "📺 YOUTUBE"; // ชื่อ ปุ่ม 1
    const ikga2 = "https://youtu.be/zzd4ydafGR0"; // ลิ้ง ปุ่ม 1
    const ikga3 = "📸 Instagram"; // ชื่อ ปุ่ม 2
    const ikga4 = "https://www.instagram.com/b2n_3x?igsh=bTVvN2hweDY3cGY2"; // ลิ้ง ปุ่ม 2

    try {
      const cpuInfo = await si.cpu();
    const mem = await si.mem();
    const cpuSpeed = cpuInfo.speed;
    const totalRam = mem.total;
    const usedRam = mem.used;

    const cpuText = cpuSpeed ? `${cpuSpeed.toFixed(1)} GHz` : "N/A";
    const ramText = totalRam && usedRam ? `RAM: ${((usedRam / totalRam) * 100).toFixed(1)}%` : "N/A";

      const r = new Discord.RichPresence()
        .setApplicationId("1159828579241177100")
        .setType("STREAMING")
        .setURL("https://youtu.be/Fc-dbtAOzx8")
        .setState(`${ikgas2}`)
        .setName(`รักอ่ะ`)
        .setDetails(`CPU: ${cpuText} | ${ramText}`)
        .setAssetsSmallImage(`${ikgasm2}`)
        .setAssetsLargeImage(`${ikgasm1}`)
        .setAssetsLargeText(`⌚ เวลา :${getTime()} นาที`)
        .setAssetsSmallText(`${cpuText}, ${ramText}`)
        .addButton(`${ikga1}`, `${ikga2}`)
        .addButton(`${ikga3}`, `${ikga4}`)
        .setStartTimestamp(Date.now())
        .setEndTimestamp(Date.now());
      client.user.setActivity(r);
    } catch (err) {
      console.error("Error getting system information:", err.message);
    }
  }, 1 * 500);
  console.log(`${client.user.username} Is Ready!`);
});
client.login(process.env["token"]);

si.currentLoad()
  .then((data) => {
    // handle success
  })
  .catch((err) => {
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
        ramUsage,
      };
    } else {
      throw new Error("Failed to get CPU or memory information");
    }
  } catch (err) {
    console.error("Error getting system information:", err.message);
    return {
      cpuUsage: 0,
      ramUsage: 0,
    };
  }
}

let endTime = new Date().setHours(24 + 6, 0, 0, 0),
  today = new Date().setHours(0, 0, 0, 0),
  dayCount = Math.floor(
    (today - new Date(2024, 0).getTime()) / (24 * 60 * 60 * 1000),
  );

var date =
  new Date().getDate() +
  "/" +
  (new Date().getMonth() + 1) +
  "/" +
  new Date().getFullYear();
var time = new Date().getHours() + ":" + new Date().getMinutes();

let options = {
  timeZone: "Asia/Bangkok",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
};

function getDate() {
  return new Date()
    .toLocaleString([], options)
    .split(" ")[0]
    .replaceAll(",", "");
}

function getTime() {
  return new Date()
    .toLocaleString([], options)
    .split(" ")[1]
    .replaceAll(",", "");
