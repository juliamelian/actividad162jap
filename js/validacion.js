
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");

    const alertSuccess = document.getElementById("alert-success");
    alertSuccess.classList.add("show");
    setTimeout(function() {
        alertSuccess.classList.remove("show");
    },3000);

    // Restablecer los valores de los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("terminos").checked = false;
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    const alertError = document.getElementById("alert-danger");
    alertError.classList.add("show");
    setTimeout(function() {
        alertError.classList.remove("show");
    }, 3000);
}

const registroBtn = document.getElementById("regBtn");
registroBtn.addEventListener("click", validarRegistro);


function validarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;


    if (
        nombre.trim() === "" ||
        apellido.trim() === "" ||
        email.trim() === "" ||
        password1.trim() === "" ||
        password2.trim() === "" ||
        !terminos
    ) {
        showAlertError();
        return;
    }

    if (password1.length < 6 ||password1 !== password2) {
        showAlertError();
        return;
    }

    showAlertSuccess();

}

