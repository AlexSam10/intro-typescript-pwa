Interface Direccion{
    calle:string;
    pais:string;
    estado:string;
}


interface AlumnoUTL
    nombre:string;
    edad:number;
    direccion: Direccion;
}

const AlumnoUTL:{
    nombre:'Samuel',
    edad:21,
    direccion{
        calle:'Leon',
        pais:'MX',
        estado:'GTO',
    }
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.estado+', '+this.direccion.pais;
    }
}
const direccion=alumnoUTL.mostrarDireccion();
console.log(direccion);