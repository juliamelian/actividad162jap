document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const terminos = document.getElementById("terminos");

  form.addEventListener("submit", function (e) {
      let isValid = true;

      if (nombre.value.trim() === "") {
          isValid = false;
          nombre.classList.add("is-invalid");
          nombre.setCustomValidity("Por favor, ingrese su nombre.");
      } else {
          nombre.classList.remove("is-invalid");
          nombre.setCustomValidity("");
      }

      if (apellido.value.trim() === "") {
          isValid = false;
          apellido.classList.add("is-invalid");
          apellido.setCustomValidity("Por favor, ingrese su apellido.");
      } else {
          apellido.classList.remove("is-invalid");
          apellido.setCustomValidity("");
      }

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email.value)) {
          isValid = false;
          email.classList.add("is-invalid");
          email.setCustomValidity("Ingrese un correo electrónico válido.");
      } else {
          email.classList.remove("is-invalid");
          email.setCustomValidity("");
      }

      if (password1.value.length < 6) {
          isValid = false;
          password1.classList.add("is-invalid");
          password1.setCustomValidity("La contraseña debe tener al menos 6 caracteres.");
      } else {
          password1.classList.remove("is-invalid");
          password1.setCustomValidity("");
      }

      if (password1.value !== password2.value) {
          isValid = false;
          password2.classList.add("is-invalid");
          password2.setCustomValidity("Las contraseñas no coinciden.");
      } else {
          password2.classList.remove("is-invalid");
          password2.setCustomValidity("");
      }

      if (!terminos.checked) {
          isValid = false;
          terminos.classList.add("is-invalid");
      } else {
          terminos.classList.remove("is-invalid");
      }

      if (!isValid) {
          e.preventDefault();
      }
  });

  // Validación en tiempo real 
  nombre.addEventListener("input", function () {
      if (nombre.value.trim() === "") {
          nombre.classList.add("is-invalid");
          nombre.setCustomValidity("Por favor, ingrese su nombre.");
      } else {
          nombre.classList.remove("is-invalid");
          nombre.setCustomValidity("");
      }
  });

  apellido.addEventListener("input", function () {
      if (apellido.value.trim() === "") {
          apellido.classList.add("is-invalid");
          apellido.setCustomValidity("Por favor, ingrese su apellido.");
      } else {
          apellido.classList.remove("is-invalid");
          apellido.setCustomValidity("");
      }
  });

  email.addEventListener("input", function () {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email.value)) {
          email.classList.add("is-invalid");
          email.setCustomValidity("Ingrese un correo electrónico válido.");
      } else {
          email.classList.remove("is-invalid");
          email.setCustomValidity("");
      }
  });

  password1.addEventListener("input", function () {
      if (password1.value.length < 6) {
          password1.classList.add("is-invalid");
          password1.setCustomValidity("La contraseña debe tener al menos 6 caracteres.");
      } else {
          password1.classList.remove("is-invalid");
          password1.setCustomValidity("");
      }
  });

  password2.addEventListener("input", function () {
      if (password1.value !== password2.value) {
          password2.classList.add("is-invalid");
          password2.setCustomValidity("Las contraseñas no coinciden.");
      } else {
          password2.classList.remove("is-invalid");
          password2.setCustomValidity("");
      }
  });

  terminos.addEventListener("change", function () {
      if (terminos.checked) {
          terminos.classList.remove("is-invalid");
      }
  });
});
