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
      process.exit();
    }
  });
};

module.exports = {
  setupInput,
}