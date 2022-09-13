let nombres:string[]=['Mario','Dario','Juan']


console.log(nombres);

//nombres.push('Laura');

//console.log(nombres);

let datos:(boolean|number|string)[]=['Mario',23,true,'Lopez']

console.log(datos);

datos.push(200);
datos.push('Maria');
datos.push(false);
console.log(datos);
//........................................
//otro forma de crear arreglos
let arreglo: Array<number>=[1,2,3,4]
//const nombre1:string='datos1';
interface Alumno{
    matricula:number,
    nombre:string,
    edad:number,
    email:string,
   //opcional (?)
    materias?:string[]
}

const alumno:Alumno={
    matricula:19002097,
    nombre:'Alexis',
    edad:21,
    email:'zalexis864@gmail.com',
    materias:['Ingles']
}

alumno.nombre='Samuel';
console.log(alumno)