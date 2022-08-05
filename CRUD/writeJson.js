const fs = require('fs')

function write(dataObjLit) {

    let newdata = JSON.stringify(dataObjLit, null, 2) //null, 2 para que el json quede bien acomodado
    fs.writeFileSync('./taskData.json', newdata)
}
module.exports = { write }