const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount");
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("d-none");
        createAccountForm.classList.remove("d-none");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("d-none");
        createAccountForm.classList.add("d-none");
    });
});

function checkLogin() {
    let loginMessage = document.getElementById("loginMessage");
    let homeBtn = document.getElementById("homeBtn");

    loginMessage.style.color = "green";
    loginMessage.textContent = "Авторизація пройшла успішно";
    loginForm.classList.add("d-none");
    homeBtn.classList.remove("d-none");
}

function checkSignUp() {
    let userNameSignUp = document.getElementById("userNameSignUp").value;
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if (userNameSignUp.length < 6) {
        message.style.color = "red";
        message.textContent = "Логін повинен містити не менше 6 символів";
        createAccountForm.reset();
    }

    if (password.length < 8) {
        message.style.color = "red";
        message.textContent = "Пароль повинен містити не менше 8 символів";
        createAccountForm.reset();
    }

    if (password !== cnfrmPassword) {
        message.style.color = "red";
        message.textContent = "Паролі не співпадають";
        createAccountForm.reset();
    }

    else {
        alert("Реєстрація пройшла успішно");
    }
}
loginForm.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
        method: 'POST',
        body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
};

