
// Elementos de la tabla de datos del usuario

//  1. Recuperar los datos del localStorage
const user = localStorage.getItem('username')
const balance = localStorage.getItem('saldo')
const account = localStorage.getItem('cuenta')

// 2. Capturar los elementos de HTML
const userTag = document.querySelector('#saludo');
const balanceTag = document.querySelector('#balance')
const accountTag = document.querySelector('#account')


// 3. Mostrar los elementos datos capturados del localStorage en la interfaz 
userTag.textContent = "Hola " + user;
balanceTag.textContent = "Tu saldo es de: $" + balance + "MXN"
accountTag.textContent= "Cuenta: " + account


// Elementos del formulario 

/// Elementos del input del deposito de saldo
const inputBalance = document.querySelector('#depositarSaldo');
const btnBalance = document.querySelector('#depositarBtn');

btnBalance.addEventListener('click', event => {
  event.preventDefault();
  
  const saldo = localStorage.getItem("saldo");
  let nuevoSaldo = Number(saldo) + Number(inputBalance.value);
  
  if (nuevoSaldo <= 990) { // Verifica que el saldo no exceda 990
    localStorage.setItem('saldo', nuevoSaldo);
    balanceTag.textContent = "Tu saldo es de: $" + nuevoSaldo;
  } else {
    alert("No puedes depositar más de 990 en tu saldo actual.");
  }
});

// Elementos del input de retiro
const withdrawBalance = document.querySelector("#retirarSaldo");
const btnWithdraw = document.querySelector("#retirarBtn");

btnWithdraw.addEventListener('click', event => {
  event.preventDefault();
  
  const saldo = localStorage.getItem('saldo');
  let nuevoSaldo = Number(saldo) - Number(withdrawBalance.value);
  
  if (nuevoSaldo >= 10) { // Verifica que el saldo no sea menor que 10
    localStorage.setItem('saldo', nuevoSaldo);
    balanceTag.textContent = "Tu saldo es de: $" + nuevoSaldo;
  } else {
    alert("No puedes retirar más dinero si tienes solo $10 en tu saldo actual.");
  }
});