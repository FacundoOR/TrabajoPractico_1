const read = require('./read')
const writeF = require('./writeJson.js')

let new_book = (title, author, genre, year, cost, price) => {
    new_array = read()
    id_new = new_array.length
    new_array.map((elemento) => { if (elemento.id == id_new) id_new = id_new + 1 }) // ".map" es un método que se encuentra en múltiples lenguajes de programación, y el objetivo es crear un nuevo array a partir de otro. En este caso tendrías que usar ".forEach": https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    new_array.push({ id: id_new, title: title, author: author, genre: genre, year: year, cost: cost, price: price })
    writeF.write(new_array)
}

module.exports = { new_book };