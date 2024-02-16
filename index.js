const { Client, Intents } = require("discord.js-selfbot-v13");
const si = require("systeminformation");
const exp = require("express");
const keepAliveServer =require("./keep_alive.js");
const fetch = require("node-fetch");

const app = exp();
const port = process.env.PORT || 8000; 

app.get("/", (req, res) => res.send("Bot is running smoothly"));
app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  checkUpdate: false,
});

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);

  updatePresence(); 

  const presenceUpdateInterval = setInterval(() => {
    updatePresence();
  }, 1000 * 60); 
});

client.on("messageCreate", async (message) => {
  if (message.content === "!quote") {
    getQuote(message.channel);
  }
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
      .setState("🎮 Playing")
      .setName("📺 YOUTUBE")
      .setDetails(`💻 CPU: ${cpuText} | ${ramText}`)
      .setAssetsSmallImage("https://media.discordapp.net/attachments/1191267411698143314/1207278139756249138/882818659ff02a335e6410dbcc07a52a.gif")
      .setAssetsLargeImage("https://media.discordapp.net/attachments/1191267411698143314/1207278183863418900/tumblr_8341f5aedab6256f573ac27109f788cc_f745c965_640.gif")
      .setAssetsLargeText(`⌚ Time: ${getTime()} minutes`)
      .setAssetsSmallText(`${cpuText}, ${ramText}`)
      .addButton("🔗 Watch on YouTube", "https://youtu.be/R7cBD3mK3oA")
      .addButton("📸 Instagram", "https://www.instagram.com/b2n_3x?igsh=bTVvN2hweDY3cGY2")
      .setStartTimestamp(Date.now())
      .setEndTimestamp(Date.now());

    client.user.setActivity(presence);
  } catch (err) {
    console.error("Error updating presence:", err.message);
  }
}

async function getQuote(channel) {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    channel.send(`"${data.content}" - ${data.author}`);
  } catch (error) {
    console.error("Error fetching quote:", error.message);
    channel.send("Sorry, I couldn't fetch a quote at the moment.");
  }
}

function getTime() {
  const options = {
    timeZone: "Asia/Bangkok",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  return new Date().toLocaleString([], options);
}
