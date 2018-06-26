
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const phpInstalls = [];

const beginningTag = '###BEGIN_PHP_SNIPPET';
const endingTag = '###END_PHP_SNIPPET';

const template = fs.readFileSync('php_template.txt', "utf8");

fs.readdirSync('./').forEach(file => {
  const stats = fs.lstatSync(file);
  if(stats.isDirectory() && /^(php[0-9]{2})$/.test(file)) {
    phpInstalls.push(file);
  }
});

function promptInstall() {
  rl.question("Which php version do you want to switch to? ['" + phpInstalls.join("', '") + "']\r\n", (answer) => {
    const install = phpInstalls.find((install) => install === answer.trim());
    if(install) {
      console.log("switching to " + install);
      swapPhpVersion(install);
      rl.close();
    }
    else
      promptInstall();
  });
}


function swapPhpVersion(installFolder) {
  const configSection = template.replace(/PHPVER/g, installFolder);
  const httpConf = fs.readFileSync("Apache24/conf/httpd.conf", "utf8");
  const startConfigSection = httpConf.indexOf(beginningTag);
  const endConfigSection = httpConf.indexOf(endingTag) + endingTag.length;
  const firstHalfConfig = httpConf.substr(0, startConfigSection);
  const secondHalfConfig = httpConf.substr(endConfigSection);
  const newConfig = firstHalfConfig + configSection + secondHalfConfig;
  fs.writeFileSync("Apache24/conf/httpd.conf", newConfig, "utf8");
}


promptInstall();