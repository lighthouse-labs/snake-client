const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (message)=>{
    console.log(message);

  });

  conn.on("connect", ()=>{
    console.log('Successfully connected to game server');
    conn.write("Name: MGK");
    const up = conn.write("Move: up");
    const down = conn.write("Move: down");
    const left = conn.write("Move: left");
    const right = conn.write("Move: right");

 
  });

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

  return conn;
};

module.exports = {
  //connect: connect,
  connect,
};