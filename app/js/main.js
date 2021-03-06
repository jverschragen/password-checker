const passwordInput = document.querySelector("#my-password");
const strength = document.querySelector("#strenght");
const details = document.querySelector("#details");

const lengthTip = details.querySelector("#addlength");
const lowercaseTip = details.querySelector("#addlow");
const uppercaseTip = details.querySelector("#addup");
const numberTip = details.querySelector("#addnumbers");
const specialCharacterTip = details.querySelector("#addchar");

const headerTitle = strength.querySelector(".header__title");
const headerSubtitle = strength.querySelector(".header__subtitle");

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
            headerTitle.innerHTML = "Erg sterk";
            headerSubtitle.innerHTML = "Gefeliciteerd! Je wachtwoord is veilig";

            strength.style.backgroundColor = "#43a047";
            strength.style.color = "#fff";

        } else if (mediumRegex.test(password)){
            headerTitle.innerHTML = "Matig";
            headerSubtitle.innerHTML = "Je wachtwoord is niet zo sterk. We raden aan het te veranderen door de tips hieronder te volgen.";

            strength.style.backgroundColor = "#e57136";
            strength.style.color = "#fff";
        } else{
            headerTitle.innerHTML = "Zwak";
            headerSubtitle.innerHTML = "Je wachtwoord is veel te zwak. We raden aan het te veranderen door de tips hieronder te volgen.";

            strength.style.backgroundColor = "#e53935";
            strength.style.color = "#fff";
        }

        // Check if min 1 lowercase
        let lowercaseCheck = new RegExp ("^(?=.*[a-z])");

        if(!lowercaseCheck.test(password)) {
            lowercaseTip.style.display = "block";
        } else{
            lowercaseTip.style.display = "none";
        }

        // Check if min 1 uppercase
        let uppercaseCheck = new RegExp("^(?=.*[A-Z])");

        if(!uppercaseCheck.test(password)){
            uppercaseTip.style.display = "block";
        } else{
            uppercaseTip.style.display = "none";
        }

        // check if min 2 numbers
        let numberCheck = new RegExp("^(?=.*[0-9]{2})");

        if(!numberCheck.test(password)){
            numberTip.style.display = "block";
        } else{
            numberTip.style.display = "none";
        }

        // check if min 1 special character
        let specialCharacterCheck = new RegExp("^(?=.*[!@#\\$%\\^&\\*])");

        if(!specialCharacterCheck.test(password)){
            specialCharacterTip.style.display = "block";
        } else{
            specialCharacterTip.style.display = "none";
        }

        // check if min 8 characters
        let lengthCheck = new RegExp("^(?=.{8,})");

        if(!lengthCheck.test(password)){
            lengthTip.style.display = "block";
        } else{
            lengthTip.style.display = "none";
        }

        details.style.display = "block";
    } else{
        details.style.display = "none";

        headerTitle.innerHTML = "Hoe veilig is mijn wachtwoord?";
        headerSubtitle.innerHTML = "Controleer of je wachtwoord veilig genoeg is.";

        strength.style.backgroundColor = "#f6f6f6";
        strength.style.color = "#000";
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
    if (!passwordInput) return;

    // Check if the password should be shown or hidden
    if (event.target.checked) {
        // Show the password
        passwordInput.type = 'text';
    } else {
        // Hide the password
        passwordInput.type = 'password';
    }

}, false);