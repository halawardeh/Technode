const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});


function login(event){

    event.preventDefault();

    let user = document.getElementById("username").value;
    let checkuser = localStorage.getItem("username");

    let userPassword = document.getElementById("password").value;
    let checkPassword = localStorage.getItem("password");

    let email = document.getElementById("email").value;
    let checkemail = localStorage.getItem("email");

    let Invalide = document.getElementById("fncheck");

    if ( (user === checkuser || email === checkemail) && (userPassword === checkPassword))
      
            window.location.replace("home.html");
        
    else 
        Invalide.innerHTML = "Invalide username or password";
}

