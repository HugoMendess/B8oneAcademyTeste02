// Mostrar e esconder senha
let loginIcon = document.querySelector(".login__dropdow");


loginIcon.addEventListener("click", (e) =>{
    e.preventDefault(); // Previnindo o evento de submit do formulário

    let input = document.querySelector('.login__input-div');

    input.getAttribute('type') == 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');
    
});




/// Post para Login

const API_URL = "https://test-final.b8one.academy/login";


const btnPostData = document.querySelector(".login__submit");

btnPostData.addEventListener("click", postData);

async function postData(e){
  e.preventDefault();
  const getEmail = document.querySelector(".login__input").value;
  const getPassword = document.querySelector(".login__input-div").value;

  const loginResponse = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": getEmail,
      "password": getPassword
    })
  });

  const content = await loginResponse.json();

  content == true ? window.location.href = "dashboard.html" : validation(getEmail, getPassword);
}


function validation(email, password){
  const resultEmail = document.querySelector(".login__email-required");
  const resultPassword = document.querySelector(".login__password-required");
  const passStatus = (password === "Academy2022");
  const emailStatus = (email.length >= 1) && (email.search("@") != -1) && (email.search(" ") == -1) && (email.search(".") != - 1);
  console.log(emailStatus);
  console.log(passStatus);

    if(emailStatus == true && passStatus == false){
      console.log("Email existe, Senha Errada");
      resultEmail.style.display = "none";
      resultPassword.style.display = "block";
    } 
    else if(emailStatus == false && passStatus == false){
          console.log("Email não existe, Senha Errada");
          resultEmail.innerText = "E-mail ou senha estão incorretos";
          resultEmail.style.display = "block"; 
          resultPassword.style.display = "none";
        }

    else if(emailStatus == false || password == true){
          console.log("Email não existe, Senha Certa");
          resultEmail.innerText = " Este e-mail não existe, você tem outro?";
          resultEmail.style.display = "block";
          resultPassword.style.display = "none";
        }
        

    

      // (password === "Academy2022") ? resultPassword.style.display = "none" : resultPassword.style.display = "block";
}

