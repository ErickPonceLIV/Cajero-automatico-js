const accounts = [
  {mail: "mapache@gmail.com",saldo: 900,password: "asdfg",cuenta: "0001",usuario: "Mapache",},
  {mail: "oveja@hotmail.com",saldo: 500,password: "password",cuenta: "0002",usuario: "Oveja",},
  {mail: "nutria@outlook.com.mx",saldo: 700,password: "qwerty",cuenta: "0003",usuario: "Nutria",},
  {mail: "cabra@gmail.com",saldo: 700,password: "123456",cuenta: "0004",usuario: "Cabra",}
]

const form = document.querySelector("#login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();  
validateCredentials()
});

function validateCredentials() {
  const user = document.querySelector('#userInput').value;
  const pass = document.querySelector('#inputPassword').value;

  let accessGranted = false; // Variable para rastrear si el acceso es concedido
  
  for (let i = 0; i < accounts.length; i++) {
      if (user === accounts[i].mail && pass === accounts[i].password) {
          accessGranted = true;
          
          // Guardar datos en localStorage
          localStorage.setItem('user', user);
          localStorage.setItem('pass', pass);
          localStorage.setItem('username', accounts[i].usuario);
          localStorage.setItem('saldo', accounts[i].saldo);
          localStorage.setItem('cuenta', accounts[i].cuenta);
          
          // Redirigir a la página de inicio
          window.location.href = "./Pages/home.html";
          
          break; // Si se encuentra una coincidencia, sal del bucle
      }
  }

  if (!accessGranted) {
      const errorMessage = document.querySelector("#errorMsg");
      errorMessage.innerText = 'Usuario o contraseña incorrectos';
  } else{
    Event.stopPropagation(); // Evita que se propague el evento de validación
  }
}

