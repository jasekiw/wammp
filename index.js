const { spawn } = require('child_process');
const readline = require('readline');


const apacheProcess = spawn('Apache24\\bin\\httpd.exe');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function promptQuit() {
  rl.question("type 'q' to stop the server\r\n", (answer) => {
    if(answer === 'q') {
      apacheProcess.kill('SIGINT');
      rl.close();
    }
    else
      promptQuit();

  });
}
promptQuit();