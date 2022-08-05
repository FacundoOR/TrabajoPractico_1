const fs = require("fs");
let data = fs.readFileSync('./taskData.json', 'utf8')

module.exports =  read = () => JSON.parse(data);