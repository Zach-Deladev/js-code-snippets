//  Function to make navbar solid colour on scroll created by adding a css class to the navbar when the window is scolled a certain distance

const navbar = document.querySelector('#nav');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

// Function to turn burger menu in to a button to open and close the menu on smaller screens
const toggle = document.getElementsByClassName("toggle");
const item = document.querySelectorAll(".item");

for (let i = 0; i < item.length; i++){
     let eachItem = item[i];
       function toggleMenu() {
             if (eachItem.classList.contains("active") ){
                 eachItem.classList.remove("active");
            } else {
                 eachItem.classList.add("active");
             }
         }
         document.querySelector(".toggle").addEventListener("click", toggleMenu)
     };


//  Function to make login / registration page pop up when the user click the correct button in the navbar

const login = document.getElementById("loginBtn");
const signup = document.getElementById("regBtn");


login.addEventListener("click", e => {
    if( document.getElementById("popupReg").style.display = "block") {
        document.getElementById("popupReg").style.display = "none"
    }
    document.getElementById("popupLog").style.display = "block";
} )

signup.addEventListener("click", e => {

    if( document.getElementById("popupLog").style.display = "block") {
        document.getElementById("popupLog").style.display = "none"
    }
    document.getElementById("popupReg").style.display = "block";
} )

// Function to make the login / registration form pop up when the user clicks in anchor tag at the bottom of the form 

const signupLink = document.getElementById("signupLink");
const loginLink = document.getElementById("loginLink");

signupLink.addEventListener("click", e => {
    if( document.getElementById("popupLog").style.display = "block") {
        document.getElementById("popupLog").style.display = "none"
    }
    document.getElementById("popupReg").style.display = "block";
} )


loginLink.addEventListener("click", e => {
    if( document.getElementById("popupReg").style.display = "block") {
        document.getElementById("popupReg").style.display = "none"
    }
    document.getElementById("popupLog").style.display = "block";
} )


// // Login form validation


// Registration form validation 

// Grabs all inputs from form.
const inputs = document.querySelectorAll("input");

// Object containing Regex patterns for each input field

const patterns = {
    // UK mobile phone number, with optional +44 national code.
    telephone: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
    // Username must start with a letter and can contatin letters, numbers and underscores
    username: /^[A-Za-z][A-Za-z0-9_]{5,12}$/,
    // Password needs to be minimum 8 characters, contain at least one upper and lowercase letter and one number
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    // Email address e.g yourname@domain.com
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// Validation function - Two parameters, input field we are testing and regex to test against
function validate(field, regex){

   console.log(regex.test(field.value));

//    if statement to add a css class to input field if its valid or not
   if(regex.test(field.value)) {
    field.className = "valid"
   } else {
    field.className = "invalid"
   }
 
}

// Function that adds an event listener to each input field and then runs the validation function on each on to see if it is valid.
inputs.forEach((input) => {

    input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value])
    });
    });
    
// Registration form validation function 

const regForm = document.getElementById("regForm");

regForm.addEventListener("submit", (e)=> {
    let messages = []

    for (let i = 0; i < inputs.length; i ++) {
        if (inputs[i].classList.contains("invalid")){
            messages.push("All inputs need to be valid.");
            console.log(inputs[i])
        }
    }

    if (messages.length > 0 ) {
        e.preventDefault();
        console.log(messages)
    }
})










