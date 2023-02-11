const btnLoginHeader = document.querySelector("#btnLog");
const btnRegisterHeader = document.querySelector("#btnReg");
const btnRegisterReg = document.querySelector("#btn-register");
const btnLoginReg = document.querySelector("#btn-login");
const btnRegisterLog = document.querySelector("#btn-register-log");
const btnLoginLog = document.querySelector("#btn-login-log");
const btnExitReg = document.querySelector("#exit-button-reg");
const btnExitLog = document.querySelector("#exit-button-log");
const registerForm = document.querySelector("#register");
const loginForm = document.querySelector("#login");

btnLoginHeader.addEventListener("click", function() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    console.log("btnLoginHeader");
  });

btnLoginReg.addEventListener("click", function() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    console.log("btnLogin");
  });


  btnRegisterHeader.addEventListener("click", function() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    console.log("btnRegisterHeader");
  });

  btnRegisterReg.addEventListener("click", function() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    console.log("btnRegister");
  });
  


  btnLoginLog.addEventListener("click", function() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    console.log("btnLogin");
  });

  btnRegisterLog.addEventListener("click", function() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    console.log("btnRegister");
  });
  

  btnExitReg.addEventListener("click", function() {
   
    registerForm.style.display = "none";
  
  });
  
  btnExitLog.addEventListener("click", function() {
    loginForm.style.display = "none";
  
    
  });
  