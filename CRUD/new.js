const read = require('./read')
const writeF = require('./writeJson.js')

let new_book = (title, author, genre, year, cost, price ) => {
     new_array = read() 
     id_new = new_array.length 
    new_array.push({ id: id_new, title: title, author: author, genre: genre, year: year, cost: cost, price: price})
    writeF.write(new_array)
}

module.exports = { new_book };