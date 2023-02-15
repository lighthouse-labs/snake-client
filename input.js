const stdin = process.stdin;

const setupInput = function() {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function() {
  stdin.on('data', (key) =>{
    if (key === '\u0003') {
      // console.log('press exit')
  
    }
    if (key === 'w') {
// "Move: up" - move up one square (unless facing down)
      conn.write("Move: up");
    }
    if (key === 'a') {
// "Move: left" - move left one square (unless facing right)
      conn.write("Move: left");
    }
    if (key === 's') {
// "Move: down" - move down one square (unless facing up)
      conn.write("Move: down");
    }
    if (key === 'd') {
// "Move: right" - move left one square (unless facing left)
      conn.write("Move: right");
    }
  });
};



module.exports = {
  setupInput,
}