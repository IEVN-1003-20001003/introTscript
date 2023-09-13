

interface Alumno{  //se define la interfaz
    matricula:number;
    nombre:string;
    email:string;
    edad:number;
}

const alumno:Alumno={
    nombre:'Miguel',
    email:'migueluis@gmail.com',
    edad:23,
    matricula:1234
}

let mascotas=['Perro','Gato','Perico']

console.table(mascotas);
mascotas[1]='Nuevo gato'; //reemplaza el dato
mascotas.push('Perico verde'); //también reemplaza
console.table(mascotas);

let nuevoArre:(number|string)[]=[]; //permite dar dos datos según su tipo de variable
nuevoArre.push('OAHL');
nuevoArre.push('42152');
