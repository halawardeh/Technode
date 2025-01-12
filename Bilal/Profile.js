

let FName = document.getElementById("FName");
let LName = document.getElementById("LName");
let Email = document.getElementById("Email_1");
let Password = document.getElementById("Password");
let Birth_Date = document.getElementById("Birth-Date");
let City = document.getElementById("City");
let Male = document.getElementById("Male");
let Female = document.getElementById("Female");



let Overlay = document.getElementById('overlay');

let popupButton = document.getElementById('button-Form');

let popupMenu = document.getElementById('Form');



let Edit_FName = document.getElementById("Edit-Fname");
let Edit_LName = document.getElementById("Edit-Lname");
let Edit_Email = document.getElementById("Edit-Email");
let Edit_Password = document.getElementById("Edit-Password");
let Edit_CPassword = document.getElementById("Edit-C_Password");
let Edit_City = document.getElementById("Edit-City");
let Edit_Date = document.getElementById("Edit-Date");
let Value1 = document.getElementById("value-1");
let Value2 = document.getElementById("value-2");
let Save_Change = document.getElementById("Save_Change");
let Img_1 = document.getElementById("Img-1");
let ImagePro = document.getElementById('Image-Profile');

let PathImage;

function showImage() {
    debugger
    const file = document.getElementById("image").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = document.getElementById('Image-Profile');
            img.src = reader.result;
            img.width = 100;
            PathImage = reader.result;
        };
        reader.readAsDataURL(file);
    }
}



popupButton.addEventListener("click", function () {
    popupMenu.style.display = "flex";
    Overlay.style.display = "block";
});


Overlay.addEventListener("click", function () {
    popupMenu.style.display = "none";
    Overlay.style.display = "none";
});



popupButton.addEventListener('click', function () {


    Value1.checked = true;
    Value2.checked = false;

    Edit_FName.value = FName.value;
    Edit_LName.value = LName.value;
    Edit_Email.value = Email.value;
    Edit_Password.value = Password.value;
    Edit_CPassword.value = Password.value;
    Edit_City.value = City.value;
    Edit_Date.value = Birth_Date.value;


    if (Male.checked) {
        Value1.checked = true;
    }
    else {
        Value2.checked = true;
    }

})



Save_Change.addEventListener('click', function (event) {


    event.preventDefault();

    FName.value = Edit_FName.value;
    LName.value = Edit_LName.value;
    Email.value = Edit_Email.value;
    Password.value = Edit_Password.value;


    if (Edit_CPassword.value != Password.value) {
        window.alert('You must enter matching password');
        return;
    }


    City.value = Edit_City.value;
    Birth_Date.value = Edit_Date.value;


    if (Value1.checked) {
        Male.checked = true;
        localStorage.setItem('Gender', "Male");
    }
    else {
        Female.checked = true;
        localStorage.setItem('Gender', "Female");
    }

    window.alert("Data has been saved successfully");


    localStorage.setItem('Fname', FName.value);
    localStorage.setItem('Lname', LName.value);
    localStorage.setItem('Email', Email.value);
    localStorage.setItem('Password', Password.value);
    localStorage.setItem('City', City.value);
    localStorage.setItem('Birth_Date', Birth_Date.value);
    localStorage.setItem('Path',PathImage);

    popupMenu.style.display = "none";
    Overlay.style.display = "none";

})


window.onload = function () {

    FName.value = localStorage.getItem('Fname');
    LName.value = localStorage.getItem('Lname');
    Email.value = localStorage.getItem('Email');
    Password.value = localStorage.getItem('City');
    City.value = localStorage.getItem('Password');
    Birth_Date.value = localStorage.getItem('Birth_Date');

    if (localStorage.getItem('Gender') == "Male") {
        Male.checked = true;
    }
    else {
        Female.checked = true;
    }

    ImagePro.src = localStorage.getItem('Path');
}