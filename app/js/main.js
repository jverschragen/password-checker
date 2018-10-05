const passwordInput = document.querySelector("#my-password");
const details = document.querySelector("#details");

// // check if min 8 characters
// const ccheck = new RegExp(?=.{8,});

function start_analyze() {
    password = passwordInput.value;

    // Check if min 1 lowercase
    let lcheck = new RegExp ("^(?=.*[a-z])");

    // Check if min 1 uppercase
    let ucheck = new RegExp("^(?=.*[A-Z])");

    // check if min 2 numbers
    let ncheck = new RegExp("^(?=.*[0-9]{2})");

    // check if min 1 special character
    let scheck = new RegExp("^(?=.[!@#\\$%\\^&])");

    // check if min 8 characters
    let ccheck = new RegExp("^(?=.{8,})");


    details.style.display = "block";
}

passwordInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        start_analyze();
    }
});