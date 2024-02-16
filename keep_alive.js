const http = require("http");

module.exports = (app, port) => {
  http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bot is alive and running!");
  }).listen(port);

  app.use((req, res, next) => {
    res.status(200);
    next();
  });
};
