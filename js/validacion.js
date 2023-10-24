// CÓDIGO COPIADO DE https://getbootstrap.com/docs/5.0/forms/validation/
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    // Chequea que el checkbox de términos y condiciones esté marcado y si no, 
                    // muestra el mensaje de error fuera del modal y pinta el texto de rojo
                    if (!checkbox.checked) {
                        document.getElementById('error-message').style.display = 'block';
                        modal.classList.add("text-danger");
                    }
                }
                form.classList.add('was-validated')
            }, false)
        })
})()

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");
const form = document.getElementById("form");
const checkbox = document.getElementById("terminos");
const modal = document.getElementById("mostrarModal");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");


// Chequea que las passwords coincidan
password2.addEventListener("input", function () {
    if (password1.checkValidity() && password1.value === password2.value) {
        password2.setCustomValidity("");
    } else {
        password2.setCustomValidity("Debe ser igual a contraseña");
    }
})
password1.addEventListener("input", function () {
    if (password1.checkValidity() && password1.value === password2.value) {
        password2.setCustomValidity("");
    } else {
        password2.setCustomValidity("Debe ser igual a 'contraseña'");
    }
})

// Despliega el modal al hacer click en "términos y condiciones"
modal.addEventListener('click', function () {
    $('#miModal').modal('show');
});

// Restablece los campos al enviar el formulario 
form.addEventListener("submit", function (event) {
    if (form.checkValidity()) {
        form.reset();
        alert("Registro exitoso")
        form.classList.remove('was-validated');
        event.preventDefault();
        event.stopPropagation();
    }
});

// Oculta/muestra el mensaje de error fuera del modal al marcar/desmarcar el checkbox
checkbox.addEventListener("click", function () {
    if (!checkbox.checked) {
        // Muestra el mensaje de error fuera del modal
        document.getElementById('error-message').style.display = 'block';
        modal.classList.add("text-danger");
    } else {
        // Si el checkbox está marcado, oculta el mensaje de error y envía el formulario
        document.getElementById('error-message').style.display = 'none';
        modal.classList.remove("text-danger");
    }
})


