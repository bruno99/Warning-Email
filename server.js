const http = require('http');
const monitor = require('./services/monitor.js')
const hostname = process.env.HOSTNAME
const PORT = process.env.PORT
// Run server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Node js E-mail warning');
  });
  
  server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
    //monitor.monitor();
  });

  setInterval(() => { monitor.monitor(); }, 50000);
