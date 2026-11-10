const variable = "hola bro";
console.log(variable.toUpperCase(variable));

vrd = true;

console.log(typeof vrd);

const placaTexto = "  abc 123  ";
let placaTexto2 = placaTexto.trim().toUpperCase();
let placaTexto3 = placaTexto2.replace(" ","");
console.log(placaTexto2);
console.log(placaTexto3);
console.log(placaTexto.length);

const numero = 7;
const mensaje = numero % 2 === 0
    ?"par" 
    :"impar";
console.log(mensaje);

for (let index = 0  ; index < placaTexto2.length; index+=1) {
     
    console.log(placaTexto2[index]);
    if (index <= placaTexto2.length) console.log(placaTexto2 ,"tiene", index ,"letras");
    
        
}

function name(a,b) {
    return a+b;
    
}
console.log("6",7);


const recibos = [
  { casa: "A-101", estrato: 2, metros: 18 },
  { casa: "A-102", estrato: 4, metros: 25 },
  { casa: "B-201", estrato: 6, metros: 30 },
];
const VALOR_METRO = 3000;

function descuento(estrato) {
    switch (Number(estrato)) {
        case 1:
        
            return 1000;
        case 2:
            return 1000;
            break;
        case 3:
            return 500;

        case 4:
            return 500;
        

        default:
            1
        
            break;
}}

console.log(descuento(recibos.estrato));

const dia = "lunes";
switch (dia) {
    case "lunes":
        console.log(dia.toUpperCase());
        
        break;

    default:
        console.log("zzz");
        
        break;
}
function realizarOperacion(num1,num2,operacionCallback) {
    console.log("Operacion:", num1, "y", num2);
    operacionCallback(num1,num2)
}

function sumar(a,b) {
    console.log("Suma:", a+b);
}

function multiplicar(a,b) {
    console.log("Multiplicacion:", a*b);
}

realizarOperacion(8,7,sumar);

const pedido = new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve("pizza lowkey")
    }, 2000);
});

pedido.then(function(r){
    console.log(r);
})

const guardarsecreto = true

const secreto = new Promise(function(resolve,reject){
    setTimeout(function(){
        if (guardarsecreto==true){
            resolve("secreto safe");
        } else {
            reject("mlp");
        }

    },3000)  
})

secreto.then(function(rr){
    console.log(rr);
})
.catch(function(ee){
    console.log(ee);
    
})


const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));
const promise3 = Promise.reject("no")

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, "foo"].
});