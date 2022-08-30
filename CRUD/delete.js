const write = require('./writeJson.js')
const read = require('./read')

let deleteF = (id) => {
    data = read()
    let newArray = data.filter(elemento => elemento.id != id)
    write.write(newArray) // Ojo con esto, te conviene exportar directamente la función "write", es decir, no lo envuelvas en un objeto si es un elemento solo el que vas a exportar.

}

module.exports = { deleteF }
