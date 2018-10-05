const passwordInput = document.querySelector("#my-password");
const strength = document.querySelector("#strenght");
const details = document.querySelector("#details");

const lengthTip = details.querySelector("#addlength");
const lowercaseTip = details.querySelector("#addlow");
const uppercaseTip = details.querySelector("#addup");
const numberTip = details.querySelector("#addnumbers");
const specialCharacterTip = details.querySelector("#addchar");

function start_analyze() {

    //password value
    password = passwordInput.value;

    // if password value is not empty
    if (password !== ""){

        // Check if password is strong
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{2})(?=.*[!@#\$%\^&\*])(?=.{8,})");
        // Check if password is medium
        let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        if (strongRegex.test(password)){
            strength.style.backgroundColor = "#43a047";
        } else if (mediumRegex.test(password)){
            strength.style.backgroundColor = "#e57136";
        } else{
            strength.style.backgroundColor = "#e53935";
        }

        // Check if min 1 lowercase
        let lcheck = new RegExp ("^(?=.*[a-z])");

        if(!lcheck.test(password)) {
            lowercaseTip.style.display = "block";
        } else{
            lowercaseTip.style.display = "none";
        }

        // Check if min 1 uppercase
        let ucheck = new RegExp("^(?=.*[A-Z])");

        if(!ucheck.test(password)){
            uppercaseTip.style.display = "block";
        } else{
            uppercaseTip.style.display = "none";
        }

        // check if min 2 numbers
        let ncheck = new RegExp("^(?=.*[0-9]{2})");

        if(!ncheck.test(password)){
            numberTip.style.display = "block";
        } else{
            numberTip.style.display = "none";
        }

        // check if min 1 special character
        let scheck = new RegExp("^(?=.*[!@#\\$%\\^&\\*])");

        if(!scheck.test(password)){
            specialCharacterTip.style.display = "block";
        } else{
            specialCharacterTip.style.display = "none";
        }

        // check if min 8 characters
        let ccheck = new RegExp("^(?=.{8,})");

        if(!ccheck.test(password)){
            lengthTip.style.display = "block";
        } else{
            lengthTip.style.display = "none";
        }

        details.style.display = "block";
    } else{
        details.style.display = "none";
        strength.style.backgroundColor = "#f6f6f6";
    }
}

// If pressed enter call function start_analyze
passwordInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        start_analyze();
    }
});

// Listen for click events
document.addEventListener('click', function (event) {

    // If the clicked element isn't our show password checkbox, bail
    if (event.target.id !== 'show_password') return;

    // Get the password field
    var password = document.querySelector('#my-password');
    if (!password) return;

    // Check if the password should be shown or hidden
    if (event.target.checked) {
        // Show the password
        password.type = 'text';
    } else {
        // Hide the password
        password.type = 'password';
    }

}, false);