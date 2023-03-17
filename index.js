//  Function to make navbar solid colour on scroll created by adding a css class to the navbar when the window is scolled a certain distance

const navbar = document.querySelector('#nav');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

// Function to turn burger menu into a button to open and close the menu on smaller screens
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

// Function to close popups if red X is clicked 


const closelogPop = document.getElementById("x-btn");

closelogPop.addEventListener("click", e => {
    if( document.getElementById("popupLog").style.display = "block") {
        document.getElementById("popupLog").style.display = "none";   
    }
} )


const closeregPop = document.getElementById("x-btn-reg");

closeregPop.addEventListener("click", e => {
    if( document.getElementById("popupReg").style.display = "block") {
        document.getElementById("popupReg").style.display = "none"; 
    } 
} )



//  Function to make login / registration page pop up when the user click the correct button in the navbar

const login = document.getElementById("loginBtn");
const signup = document.getElementById("regBtn");


login.addEventListener("click", e => {
    if( document.getElementById("popupReg").style.display = "block") {
        document.getElementById("popupReg").style.display = "none";
        document.getElementById("popupLog").style.display = "block";
    }
    
} )

signup.addEventListener("click", e => {

    if( document.getElementById("popupLog").style.display = "block") {
        document.getElementById("popupLog").style.display = "none";
        document.getElementById("popupReg").style.display = "block";
    }
    
} )

// Function to make the login / registration form pop up when the user clicks in anchor tag at the bottom of the form 

const signupLink = document.getElementById("signupLink");
const loginLink = document.getElementById("loginLink");

signupLink.addEventListener("click", e => {
    if( document.getElementById("popupLog").style.display = "block") {
        document.getElementById("popupLog").style.display = "none";
        document.getElementById("popupReg").style.display = "block";
    }
    
} )

loginLink.addEventListener("click", e => {
    if( document.getElementById("popupReg").style.display = "block") {
        document.getElementById("popupReg").style.display = "none";
        document.getElementById("popupLog").style.display = "block";
    }
    
} )


// Login form validation - this would usually be linked to database to match login credentials but for the purpose of this assigment a demo user and password has been made.
// This form will direct the user to their dashboard if successfully validated.
const logForm = document.getElementById("loginForm");

logForm.addEventListener("submit", (e)=> {
    let errs = []
    const loginEmail = document.getElementById("loginEmail").value;

    const loginPassword = document.getElementById("loginPassword").value;

    if (loginEmail == "hello@gmail.com"){
        document.forms.loginForm.email.classList.add("valid")
    } else {
        errs.push("invalid email")
    }

    if (loginPassword == "Hello123456"){
        document.forms.loginForm.password.classList.add("valid")
    } else {
        errs.push("invalid password")
    }

    if (errs.length > 0 ) {
        e.preventDefault();
        console.log(errs)
    }
})


// Registration form validation - this form checks if the users input matched the regular expressions and requirements need to sign up, then directs them to a thankyou page when validated.

// Grabs all inputs from  registration form.
const inputs = document.forms.regForm.querySelectorAll("input");

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

//    This if statement adds a valid class to the input field if the users input matches the regex requirements
//    This if statement also adds a invalid class to the input field if the users input does not meet the requirements.
   if(regex.test(field.value)) {
    field.className = "valid"
   } else {
    field.className = "invalid"
   }
 
}

// This function checks each input field on each key (keyup) entry to see if the users input matches the regex requirements
inputs.forEach((input) => {

    input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value])
    });
    });
    
// Registration form validation function - this function checks to see if any input fields have been given the class name of invalid and adds an error message to the messages array to prevent the form validating
//  If all inputs are valid the form validates and takes the user to the thankyou page.
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










