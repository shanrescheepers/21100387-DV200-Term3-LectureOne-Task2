// 1 __ we're not running in the browser, we're creating services on the backend, we're jsut running it as a node server whihc allows us to write it as js
function welcome(name) {
    console.log('㋡ ㋡ ㋡ WELCOME ' + name + ', CHEERS TO USING AND LEARNING NODE MODULES FOR THE VERY FIRST TIME ㋡ ㋡ ㋡');
}
welcome("Shanre");

// 2
const path = require('path');
var pathObj = path.parse(__dirname);
console.log(pathObj);
//

// 3
const os = require('os');
// these are methods hwo cool
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
// Free Memory
var free_mem_in_kb = freeMemory / 1024;
var free_mem_in_mb = free_mem_in_kb / 1024;
var free_mem_in_gb = free_mem_in_mb / 1024;

free_mem_in_mb = Math.floor(free_mem_in_mb);
free_mem_in_gb = Math.floor(free_mem_in_gb);
free_mem_in_mb = free_mem_in_mb % 1024;
//Total Memory
var total_mem_kb = totalMemory / 1024;
var total_mem_mb = totalMemory / 1024;
var total_mem_gb = totalMemory * 1024;

total_mem_mb = Math.floor(total_mem_mb);
total_mem_gb = Math.floor(total_mem_gb);
//Homework tryout: (Mike wants bytes and gigs to show in the terminal)
console.log("Free memory: " + free_mem_in_gb + " GB "
    + free_mem_in_mb + " MB " + freeMemory + " Bytes");
console.log("Free MB Memory: " + free_mem_in_mb
    + " MB");
console.log("Free GB Memory: " + free_mem_in_gb
    + " GB");
console.log("Total MB memory: " + total_mem_mb + " MB")
console.log("Total GB memory: " + total_mem_gb + " GB")
// Not contatting, but in a way similar but also different ;) ↓↓↓
console.log(`Total Device Memory = ${totalMemory} bytes`);
console.log(`Total Free Device Memory = ${freeMemory}`);


// Mike wants bytes and gigs to show in the terminal for the above, do this as practice Shanre.

//Image storing -- haven't done that. Must get that right

//4
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);
//
//4.1 async way of doing the above is the following. THE WAY TO DO IT (vir n .then om te gebeur)
// const fs = require('fs');
// fs.readdir('./', function (err, files) {
//     // function takes two arguments above
//     if (err) { console.log("404 Directory Not Found ", err) } else { console.log('File:', files) }
// });

//Listen Event
const eventEmitter = require('events');
const emitter = new eventEmitter();
//Listening for event ↓
emitter.on('sentMessage', (arg) => {
    //Function ↓ 
    console.log("The message has been sent", arg)
});
//To activate this ↑, it would actually come from frontend but let's emulate it here ↓
emitter.emit('sentMessage', { id: 1, message: 'Well Hello there message one' });

//
// emitter.on('sentGreeting', function () {
//     console.log("Hello there world")
// });

// setTimeout();
// clearTimeout();

// setinterval();
// clearInterval();
// window.setTimeout()

// var message = 'Haasit';
// console.log(global.message)

//MODULE 
console.log(module);

// CHILD PROCESSES - The Exec Function: creating new shell, executes command in buffered way, keeping it in memory, also accessable for a callback
// ls all folders + files in current diretior
const { exec } = require("child_process");

exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

// File System Function
const fs = require('fs');
const files = fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files)
    // console.log(files)
});
