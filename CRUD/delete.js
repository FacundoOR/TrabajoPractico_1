const write = require('./writeJson.js')
const read = require('./read')

let deleteF = (id) => {
    data = read()
    let newArray = data.filter(elemento => elemento.id != id)
    write.write(newArray)

}

module.exports = { deleteF }
