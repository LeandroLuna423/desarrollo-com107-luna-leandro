//JavaScript:
//Ejercicio 1

let listaNum = [];
for(let i = 0; i < 10; i++){
  listaNum.push(Math.floor(Math.random() * 100) + 1);
}

listaNum.sort((a, b) => a - b);

let lista = document.createElement("ul");
document.getElementById("id_numeros").appendChild(lista);

listaNum.forEach((num) => {
  let numLista = document.createElement("li");
  numLista.textContent = num;
  lista.appendChild(numLista);
});

//Ejercicio 2
const division = [2, 4, 6, 8, 10];
const resultado = division.map(num => num ** 2);
console.log(resultado);

//Ejercicio 3
const alumno = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
const alumno6 = alumno.filter(alumno => alumno.length >= 6);
console.log(alumno6);

//Ejercicio 4
function obtenerPares(numeros) {
    const pares = numeros.filter(num => num % 2 === 0);
    return pares;
  }
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosPares = obtenerPares(numeros);
  console.log(numerosPares);

