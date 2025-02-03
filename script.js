console.log("Hey Sadhv Thalli")
const togglePasswordButton = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const spinner = document.getElementById("spinner");

togglePasswordButton.addEventListener("click", () => {
    spinner.style.display = "block";
    togglePasswordButton.textContent = "loading...";
    setTimeout(()=> {
        if(passwordInput.type === "password"){
            passwordInput.type = "text";
            togglePasswordButton.textContent = "Hide Password";
            togglePasswordButton.classList.remove("show-password");
            togglePasswordButton.classList.add("hide-password");
        } else {
            passwordInput.type = "password";
            togglePasswordButton.textContent = "Show Password";
            togglePasswordButton.classList.remove("hide-password");
            togglePasswordButton.classList.add("show-password")
        }
        spinner.style.display = "none";
    }, 1000)
    
})