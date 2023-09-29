// Se crean variables para los Query Selectors

const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnSumar = document.querySelector('#btnSumar');
const btnRestar = document.querySelector('#btnRestar');
const btnMultiplicar = document.querySelector('#btnMultiplicar');
const btnDividir = document.querySelector('#btnDividir');
const pResult = document.querySelector('#result');

// Se crean addEventListeners para la acción de cada botón

btnSumar.addEventListener('click', sumarInputValues);
btnRestar.addEventListener('click', restarInputValues);
btnMultiplicar.addEventListener('click', multiplicarInputValues);
btnDividir.addEventListener('click', dividirInputValues);

// Se crean las operaciones matemáticas para cada botón

function sumarInputValues() {
  const sumaInput = parseInt(input1.value, 10) + parseInt(input2.value, 10);
  pResult.innerText = "Resultado: " + sumaInput;
}

function restarInputValues() {
  const restaInput = parseInt(input1.value, 10) - parseInt(input2.value, 10);
  pResult.innerHTML = "Resultado: " + restaInput;
}

function multiplicarInputValues() {
  const multiplicacionInput = parseInt(input1.value, 10) * parseInt(input2.value, 10);
  pResult.innerHTML = "Resultado: " + multiplicacionInput;
}

function dividirInputValues() {
  const divisionInput = parseInt(input1.value, 10) / parseInt(input2.value, 10);
  pResult.innerHTML = "Resultado: " + divisionInput;
}