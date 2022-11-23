class Usuario{
    #nombre;
    #apellido;
    #libros;
    #mascotas;

    constructor(nombre, apellido, libros, mascotas){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.libros = [];
        this.mascotas = [];

    }

addNombre(name){
    this.nombre = name;
}

addApellido(surname){
    this.apellido = surname;
}

getFullname(){
    console.log( `El nombre completo es ${this.nombre} ${this.apellido}`);
}
addMascota(mascota){
this.mascotas.push(mascota)
} 

countMascotas(){
return this.mascotas.length
}

addBook(obj){  //El objeto que le paso es del tipo Libro, el cual se encuentra en otra clase con sus props.
this.libros.push(obj)
}

printBook(){
    for (let i = 0; i <= this.libros.length; i++) {

        nameBook = this.nombreLibro[i] 
        aut = this.autor[i]   
    
       return console.log(`LIBRO : ${nameBook} 
        AUTOR: ${aut}`)
        
    }

// return console.log(`LIBRO : ${this.nombre} 
// AUTOR: ${this.autor}`)
}





}


class Libro{
    #nombre;
    #autor;
    constructor(nombre, autor){
        this.nombreLibro = nombre;
        this.autor = autor;
    }

newBook(name, author){
this.nombreLibro = name;
this.autor = author;
}       
}


console.log(' - Inicio - ')

const Blesh = new Usuario() //declaro nuevo user.

Blesh.addNombre('Leandro')
Blesh.addApellido('Blesio')

// console.log(`Nombre completo: ${Blesh.nombre} ${Blesh.apellido}`)
Blesh.getFullname()


Blesh.addMascota('Perro') //agrego elemntos al array
Blesh.addMascota('Oso')

console.log(Blesh.mascotas) 
 let cantidadMascotas = Blesh.countMascotas() //Asigno valor de metodo a variable.
 console.log(`Cantidad de mascotas: ${cantidadMascotas}`)


 //Declaracion de nuevos libros
const Libro1 = new Libro() 
const Libro2 = new Libro()


Libro1.nombreLibro = 'Como hacer amigos e influir sobre las personas' //asig. simple
Libro1.autor = 'Dale Carnegie'

Libro2.newBook('The Black Book', 'Alex Llantada') //asig x metodo.
console.log('-------')
//print libros

console.log(`LIBRO 1: ${Libro1.nombreLibro} 
AUTOR: ${Libro1.autor}`)
console.log(`LIBRO2: ${Libro2.nombreLibro} 
AUTOR: ${Libro2.autor}`)

Blesh.addBook(Libro1)
Blesh.addBook(Libro2)













