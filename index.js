
                // IKGA SOURCE https://discord.gg/ikgas V.3

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    readyStatus: false,
    checkUpdate: false
});
const express = require('express')
const keepAliveServer =require("./keep_alive.js");
const app = express();
const port = 8000

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

// กำหนดข้อความในเม็ดม่วง

//---------------------------------

const text1 = "คิดถึงแฟ้มมมมม"

const text2 = "คิดถึง";

const text3 = "คิดฮ้อด"
//--------------------------------


const texts = ["Youtube", "Instagram", "FiveM"];

const ing1 = "https://media.discordapp.net/attachments/1191267411698143314/1207278183863418900/tumblr_8341f5aedab6256f573ac27109f788cc_f745c965_640.gif?ex=65df106d&is=65cc9b6d&hm=8ee137ceedb9494baa55cf2f9d65014fbfacf25fb74c00589ceb3d21f64f5c79&;
const ing2 = "https://media.discordapp.net/attachments/1191267411698143314/1207278139756249138/882818659ff02a335e6410dbcc07a52a.gif?ex=65df1062&is=65cc9b62&hm=fa74c2af06d7faf8848002e1530f5a3f8808bd6bf3863fd1825dafa0c35ccf66&";

const nameButtonone = "" || "GI";
const linkButtonone = "" || "https://www.instagram.com/b2n_3x?igsh=bTVvN2hweDY3cGY2";

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

	let currentStateIndex = 0;

	const temperature = getTemperature();
	const user = new Discord.RichPresence()
		.setApplicationId('1192342443413213234')
		.setType('STREAMING')
		.setURL('https://youtu.be/ft76te2PcfE')
		.setName('คิดถึงแฟ้มอ่ะ')
		.setStartTimestamp(Date.now())
		.setAssetsLargeText(`🌡️ ${temperature.toFixed(1)} °C | 🍃 ${Math.round(client.ws.ping)} m/s`)
		.setAssetsLargeImage(ing1)
		.setAssetsSmallImage(ing2)
		.addButton(nameButtonone, linkButtonone);

	client.user.setActivity(user);

	setInterval(() => {
		const nextState = stateTexts[currentStateIndex];
		currentStateIndex = (currentStateIndex + 1) % stateTexts.length;
