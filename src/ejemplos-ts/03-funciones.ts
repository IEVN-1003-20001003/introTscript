

function sumar():void{
    console.log(3+7);
}

sumar();

function sumar2(a:number,b:number):number{ //permite el acceso de dos datos numéricos
    
    return (a+b);
}

const resultado = sumar2(4,76);
console.log(resultado);

interface Mascotas{ //se define una función como propiedad de la interfaz, posteriormente se establece el nombre y función de la misma.
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascotas,x:number):void{ //definición de la función
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:Mascotas={
    nombre: "Miaus",
    edad: 2,
    mostrarEdad():void{
        console.log('La edad es: ',this.edad);
    }
}

calcular(nuevaMascota,3);

