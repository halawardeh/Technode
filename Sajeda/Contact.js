function storeform(event){
    event.preventDefault();

    console.log("sajeda");

    let fname = document.getElementById("fname").value;
    sessionStorage.setItem("fname", fname);

    let lname = document.getElementById("lname").value;
    sessionStorage.setItem("lname", lname);
    

    let email = document.getElementById("email").value;
    localStorage.setItem("email", email);

    let phone = document.getElementById("email").value;
    sessionStorage.setItem("phone", phone);

    let message = document.getElementById("message").value;
    sessionStorage.setItem("message", message);

  
    let submit = document.getElementById("submit").value;
    sessionStorage.setItem("submit", submit);
    

    // confirmation();
}

// function confirmation(){
//        let confirm = document.getElementById("")  ;  
// }


const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', e => {
        accordion.classList.toggle('active');
        let accordionBtn = accordion.querySelector('button');
        if (accordionBtn.textContent === '+') {
            accordionBtn.textContent = '-';
        } else {
            accordionBtn.textContent = '+';
        }
    })
});
