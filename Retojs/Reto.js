const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20 },
{ id: 2, nombre: 'Juan', edad: 22 },
{ id: 3, nombre: 'María', edad: 21 },
];

const numero = estudiantes[0].id;
console.log(numero);

const existe = numero  === 1||2||3
    ?true 
    :false;
console.log(existe);

const promesa = new Promise((resolve,reject) => {
    if (existe) {
        resolve("existe ID")
    } else {
        reject("no existe ID")
    }
    
});

promesa
.then((res) => console.log("OK:",estudiantes[numero-1].nombre,"Edad",estudiantes[numero-1].edad, res))
.catch((error) => console.log("ERROR:", error))