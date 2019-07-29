const cr = require('./secure/credentials.js');

const cmd = require('node-cmd');

cmd.get(
    'pwd',
    function (err, data, stderr) {
        console.log('the current working dir is : ', data)
    }
);

setInterval(function () {

    var current = new Date().toISOString();
    var execc = `git fetch && git pull && echo "initial text ${current}" >> data.txt && git add . && git commit -m "updated existing data.txt" && git push https://${cr.credentials.user}:${cr.credentials.password}@github.com/jpiovar/rpi.git`;
    cmd.run(execc);

}, 10000);
