const { Client, Intents } = require("discord.js");
const keepAliveServer =require("./keep_alive.js");
const si = require("systeminformation");
const moment = require("moment");
const exp = require("express");

const app = exp();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Bot is running smoothly"));
app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

const client = new Client({
  checkUpdate: false,
});

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);

  updatePresence();

  const presenceUpdateInterval = setInterval(() => {
    updatePresence();
  }, 1000 * 60);
});

client.login(process.env["token"]);

async function updatePresence() {
  try {
    const cpuInfo = await si.cpu();
    const mem = await si.mem();
    const cpuSpeed = cpuInfo.speed;
    const totalRam = mem.total;
    const usedRam = mem.used;

    const cpuText = cpuSpeed ? `${cpuSpeed.toFixed(1)} GHz` : "N/A";
    const ramText = totalRam && usedRam ? `RAM: ${((usedRam / totalRam) * 100).toFixed(1)}%` : "N/A";

    const presence = new Client.RichPresence()
      .setApplicationId("1159828579241177100")
      .setType("STREAMING")
      .setURL("https://youtu.be/Fc-dbtAOzx8")
      .setState("🐶 คิดถึงแฟ้มอ่ะ")
      .setName("YOUTUBE")
      .setDetails(`CPU: ${cpuText} | ${ramText}`)
      .setAssetsSmallImage("https://media.discordapp.net/attachments/1191267411698143314/1207278139756249138/882818659ff02a335e6410dbcc07a52a.gif")
      .setAssetsLargeImage("https://media.discordapp.net/attachments/1191267411698143314/1207278183863418900/tumblr_8341f5aedab6256f573ac27109f788cc_f745c965_640.gif")
      .setAssetsLargeText(`🌡️ ${temperature.toFixed(1)} °C | 🍃 ${Math.round(client.ws.ping)} m/s`)
      .setStartTimestamp(Date.now())
      .setEndTimestamp(Date.now())
      .addButton("📺 YOUTUBE", "https://youtu.be/Fl16Kw8OxeI")
      .addButton("📸 Instagram", "https://www.instagram.com/b2n_3x?igsh=bTVvN2hweDY3cGY2");

    client.user.setActivity(presence);
  } catch (err) {
    console.error("Error updating presence:", err.message);
  }
}
