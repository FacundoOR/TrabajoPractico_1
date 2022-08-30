const write = require('./writeJson.js')
const read = require('./read')

let edit_complete = (id, title, author, genre, year, cost, price) =>{
    
    data = read()
        let newArray = data.map((elemento) =>  {
        if(elemento.id == id) {   
            elemento.title = title
            elemento.author = author
            elemento.genre = genre
            elemento.year = year
            elemento.cost = cost
            elemento.price = price
            } 
        return elemento} )
      write.write(newArray)
} 

let edit_short = (id, param1, param2) =>{  
    
    data = read()  
        let newArray = data.map((elemento) =>  {
            if(elemento.id == id) {   
                   switch(param1){
                        case 'title':
                         elemento.title = param2  // Ojo la indentacion
                            break;
                        case 'author':
                            elemento.author = param2
                           break;
                        case 'genre':
                            elemento.genre = param2
                        break;
                        case 'year':
                            elemento.year = param2
                            break;
                        case 'cost':
                            elemento.cost = param2
                            break;
                        case 'price':
                           elemento.price = param2
                            break;
                    }
                } 
            return elemento} ) // Ojo la indentacion
          write.write(newArray)
    
}
             
module.exports = { edit_complete, edit_short }