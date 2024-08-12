function checkPasswordMatch() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");

    if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity(''); 
    } else {
        confirmPassword.setCustomValidity("Passwords do not match");
    }
}