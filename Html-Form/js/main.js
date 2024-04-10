// Variable Declaration

    const loginBtn = document.querySelector("#login");
    const registerBtn = document.querySelector("#register");
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");

// Login button function
// Change the color of sign in and sign up button, when we click on them.
loginBtn.addEventListener('click',() => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(225,225,225,0.2)";

    // Creating slide effect on sign in and up button to fill form..

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%"

// Adding opacity effect while slide to 0 and  1 for required button..
    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    // Adding animated border effect while sliding in column 1..
    document.querySelector('.col-1').style.borderRadius = "0 30% 20% 0";
})

// Register button function
// Change the color of sign in and sign up button, when we click on them.
registerBtn.addEventListener('click',() => {
    loginBtn.style.backgroundColor = "rgba(225,225,225,0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    // Creating slide effect on sign in and up button to fill form..

    loginForm.style.left = "150%";
    registerForm.style.left = "50%"

    // Adding opacity effect while slide to 0 and  1 for required button..
    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

    // Adding animated border effect while sliding in column 1..
    document.querySelector('.col-1').style.borderRadius = "0 20% 30% 0";
})