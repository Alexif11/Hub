
                // IKGA SOURCE https://discord.gg/ikgas V.3

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

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

// กำหนดข้อความในเม็ดม่วง

//---------------------------------

const text1 = "คิดถึงแฟ้มมมมม";

const text2 = "P9D";

const text3 = "1mill";
//--------------------------------


const texts = ["Youtube", "Instagram", "FiveM";];

const ing1 = "https://media.discordapp.net/attachments/1191267411698143314/1207278184307892244/tumblr_6b22a438a4aafc79300ee98eda9e29d5_43f62595_640.gif?ex=65df106d&is=65cc9b6d&hm=fbbee5ced79604e6c988598217cc3580f8b9090624255debfbf3cd024f51e101&";
const ing2 = "https://media.discordapp.net/attachments/1191267411698143314/1207278140188270642/86bb9a1f7af56acca41038cc1bc84ddc.gif?ex=65df1062&is=65cc9b62&hm=db5f697cf714375471ff854c291245aadc07652878e974da33272251b52085b1&";

const nameButtonone = "" || "📸 Instagram";
const linkButtonone = "" || "https://www.instagram.com/b2n_3x?igsh=bTVvN2hweDY3cGY2";
const nameButtonone = "📺 YOUTUBE";
const linkButtonone = "https://youtu.be/VgOzPNQ4-Qw";
const stateTexts = [
    `﹝ ${text1} ﹞`,
    `﹝ ${text2} ﹞`,
    `﹝ ${text3} ﹞`
];

app.get('/', (req, res) => {
    res.send('กำลังทำงาน');
});


client.on('ready', async () => {
	console.log(`🟣: ${client.user.username}`);

