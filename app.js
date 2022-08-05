const create  = require('./CRUD/new.js');
const edit = require('./CRUD/edit.js')
const read = require('./CRUD/read.js')
const deleteF = require('./CRUD/delete.js')


switch(process.argv[2]){

    case 'new':
        create.new_book(process.argv[3],process.argv[4],process.argv[5],process.argv[6],process.argv[7],process.argv[8])
        break;

    case 'read':
        console.log(read())
        break;

    case 'edit':
        if(process.argv[6]!= null){ 
            edit.edit_complete(process.argv[3],process.argv[4],process.argv[5],process.argv[6],process.argv[7],process.argv[8],process.argv[9])}
        else edit.edit_short(process.argv[3],process.argv[4], process.argv[5])    
        break;

    case 'delete':
        deleteF.deleteF(process.argv[3])
        break;

    default:
        console.log('No se encontró ese comando')
        break;
}