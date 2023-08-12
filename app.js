const os = require("node:os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log("total memory: " + totalMemory);
console.log("free  memory: " + freeMemory);

