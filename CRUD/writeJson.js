const fs = require('fs')

function write(dataObjLit) {

    let newdata = JSON.stringify(dataObjLit, null, 2) //null, 2 para que el json quede bien acomodado
    fs.writeFileSync('./taskData.json', newdata)
}
module.exports = { write } // Ojo con esto, te conviene exportar directamente la función "write", es decir, no lo envuelvas en un objeto si es un elemento solo el que vas a exportar.