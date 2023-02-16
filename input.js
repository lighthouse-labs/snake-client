
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('press exit');
    process.exit();
  }
  let currentDirection = 'start';
  if (key === 'w') {
    // "Move: up" - move up one square (unless facing down)
    currentDirection === 'up'
    if(currentDirection !== 'down'){
      connection.write("Move: up");
    }
  }
  if (key === 'a') {
    // // "Move: left" - move left one square (unless facing right)
    currentDirection === 'left'
    if(currentDirection !== 'right'){
      connection.write("Move: left");
    }
  }
  if (key === 's') {
    // // "Move: down" - move down one square (unless facing up)
    currentDirection === 'down'
    if(currentDirection !== 'up'){
    connection.write("Move: down");
    }
  }
  if (key === 'd') {
    // // "Move: right" - move left one square (unless facing left)
    currentDirection === 'right'
    if(currentDirection !== 'left'){
    connection.write("Move: right");
    }
  }
};




module.exports = {
  setupInput,
};
