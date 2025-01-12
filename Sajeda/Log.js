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



function signup(event){
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



function signup(event){
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

  let honeNumber = document.getElementById("honeNumber").value;
  localStorage.setItem("honeNumber", honeNumber);
  p

  let submit = document.getElementById("signbutton").value;
  localStorage.setItem("signbutton", submit);
 
}




function namevalidation(){

  let vname= document.getElementById("firstName").value;
  let nameerror= document.getElementById("fncheck");
  let ragname= /^[a-zA-Z]$/;
  if(!ragname.test(vname)){
      // nameerror.innerHTML = "Numbers are not allowed"
      // return false;
      nameerror.innerHTML = "Numbers are not allowed";
     }
  else{
      nameerror.innerHTML = "";
    
  }
}



function lastnamevalidation(){

  let vlname= document.getElementById("lastName").value;
  let lnameerror= document.getElementById("lncheck");
  let raglname= /^[a-zA-Z]$/;
  if(!raglname.test(vlname)){
      // nameerror.innerHTML = "Numbers are not allowed"
      // return false;
      lnameerror.innerHTML = "Numbers are not allowed";
    }
  else{
      lnameerror.innerHTML = "";
     
  }
}



function emailvalidation(){
    
  let vemail= document.getElementById("email").value;
  let emailerror = document.getElementById("emailcheck");
  const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
  if (!regexemail.test(vemail)){
      emailerror.innerHTML= "The email is not valid";
  }
  else{
      emailerror.innerHTML = "";

  }
}



function passwordvalidation(){
  let vpassword = document.getElementById("password").value;
  let passworderror = document.getElementById("passcheck");

  const regexpassword =  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*.]).{8,}$/
  if(!regexpassword.test(vpassword)){
      passworderror.innerHTML = "Invalid Password. Must be 8+ characters, 1 number, 1 special char";
  }
  else{
      passworderror.innerHTML = "";}
}



function confirmpassword(){
  let fpassword = document.getElementById("password").value;
  let spassword = document.getElementById("cpassword").value;
  let confpass = document.getElementById("cpasscheck");
  confpass.innerHTML = ""
  if(fpassword != spassword)
      confpass.innerHTML = "not the same Password";
}




function checkphone(){
    let vphone = document.getElementById("phoneNumber").value;
    let phoneerror = document.getElementById("phonecheck");
    const phonePattern = /^[0-9]+$/; 

    if(!phonePattern.test(vphone)){
        phoneerror.innerHTML = "Please enter a valid phone number (only numbers are allowed)";
    }
    else{
        phoneerror.innerHTML = "";}

}



function bdatevalidation(){
  let vdate= document.getElementById("birthDate").value;
  let dateerror = document.getElementById("dcheck");
  const regexdate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;

  if(!regexdate.test(vdate)) {
      dateerror.innerHTML= "The format should be dd/mm/yyyy";}
  else{
      dateerror.innerHTML="";}
  }

