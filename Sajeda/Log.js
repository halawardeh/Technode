const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});


let isLoggedIn = false;
if (  localStorage.getItem("isLoggedIn")) {
  
    isLoggedIn = true;
  
}
function login(event) {

  event.preventDefault();

<<<<<<< HEAD
=======

>>>>>>> 07ef37c9e964f6343ed4594d189d46d975947218
  // let user = document.getElementById("username").value;
  // let checkuser = localStorage.getItem("username");

  let userPassword = document.getElementById("password").value;
  console.log(userPassword);
  
  let checkPassword = localStorage.getItem("password");

  let email = document.getElementById("email").value;
  let checkemail = localStorage.getItem("email");
  console.log(email);
  

  let Invalide = document.getElementById("fncheck");

<<<<<<< HEAD
  if (( email === checkemail) && (userPassword === checkPassword)) {
    
    isLoggedIn = true;
    window.location.replace("home.html");
    
    
=======
  if (( email == checkemail) && (userPassword == checkPassword)) {
>>>>>>> 07ef37c9e964f6343ed4594d189d46d975947218

    sessionStorage.setItem("isLoggedIn", "true"); // Set login state
    window.location.replace("../Hala/index.html");
  } else {
    Invalide.innerHTML = "Invalid username or password";
  }
}


function signup(event) {
  event.preventDefault();

  let name = document.getElementById("username").value;
  localStorage.setItem("username", name);

  let email = document.getElementById("email").value;
  localStorage.setItem("email", email);

  let password = document.getElementById("password").value;
  localStorage.setItem("password", password);


  let submit = document.getElementById("signbutton").value;
  localStorage.setItem("signbutton", submit);

}



<<<<<<< HEAD

function signup(event){
=======
function signup(event) {
>>>>>>> 07ef37c9e964f6343ed4594d189d46d975947218
  event.preventDefault();

  let firstname = document.getElementById("firstName").value;
  localStorage.setItem("firstName", firstname);

  let Lastname = document.getElementById("lastName").value;
  localStorage.setItem("lastName", Lastname);

  let birthDate = document.getElementById("birthDate").value;
  localStorage.setItem("birthDate", birthDate);


  let password = document.getElementById("password").value;
  localStorage.setItem("password", password);

  let email = document.getElementById("email").value;
  localStorage.setItem("email", email);


  let city = document.getElementById("city").value;
  localStorage.setItem("city", city);


  let Gender = document.getElementById("Gender").value;
  localStorage.setItem("Gender", Gender);


  let submit = document.getElementById("signbutton").value;
  localStorage.setItem("signbutton", submit);

<<<<<<< HEAD
  window.alert("Thank you for registering with us");
 
=======
>>>>>>> 07ef37c9e964f6343ed4594d189d46d975947218
}




function namevalidation() {

  let vname = document.getElementById("firstName").value;
  let nameerror = document.getElementById("fncheck");
  let ragname = /^[a-zA-Z]+$/;
  if (!ragname.test(vname)) {
    // nameerror.innerHTML = "Numbers are not allowed"
    // return false;
    nameerror.innerHTML = "Numbers are not allowed";
  }
  else {
    nameerror.innerHTML = "";

  }
}


function lastnamevalidation() {

  let vlname = document.getElementById("lastName").value;
  let lnameerror = document.getElementById("lncheck");
  let raglname = /^[a-zA-Z]+$/;
  if (!raglname.test(vlname)) {
    // nameerror.innerHTML = "Numbers are not allowed"
    // return false;
    lnameerror.innerHTML = "Numbers are not allowed";
  }
  else {
    lnameerror.innerHTML = "";

  }
}



function emailvalidation() {

  let vemail = document.getElementById("email").value;
  let emailerror = document.getElementById("emailcheck");
  const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexemail.test(vemail)) {
    emailerror.innerHTML = "The email is not valid";
  }
  else {
    emailerror.innerHTML = "";

  }
}



function passwordvalidation() {
  let vpassword = document.getElementById("password").value;
  let passworderror = document.getElementById("passcheck");

  const regexpassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*.]).{8,}$/
  if (!regexpassword.test(vpassword)) {
    passworderror.innerHTML = "Invalid Password. Must be 8+ characters, 1 number, 1 special char";
  }
  else {
    passworderror.innerHTML = "";
  }
}



function confirmpassword() {
  let fpassword = document.getElementById("password").value;
  let spassword = document.getElementById("cpassword").value;
  let confpass = document.getElementById("cpasscheck");
  confpass.innerHTML = ""
  if (fpassword != spassword)
    confpass.innerHTML = "not the same Password";
}


function bdatevalidation() {
  let vdate = document.getElementById("birthDate").value;
  let dateerror = document.getElementById("dcheck");
  const regexdate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;

  if (!regexdate.test(vdate)) {
    dateerror.innerHTML = "The format should be dd/mm/yyyy";
  }
  else {
    dateerror.innerHTML = "";
  }
}




