const myForm = document.getElementById("my-form");
const name = document.getElementById("name");
// const email = document.getElementById("email")
const email = document.querySelector("#email");
const msg = document.getElementById("msg");

function onSubmit(e) {
  e.preventDefault();
  const reEmail = /(\w+?@\w+?\x2E.+)/
  if (name.value == "" || email.value == "") {
    msg.innerText = "Rellena todos los campos";
  } else if (reEmail.test(email.value) !== true) {
    msg.innerText = "Por favor inserte un correo correcto que contenga almenos un @";
  } else {
    msg.innerText = `Formulario enviado con éxito, ${name.value} ${email.value} `;
  }
  setTimeout(() => {
    msg.innerText = "";
  }, 3000);
}

myForm.addEventListener("submit", onSubmit);

//* EXPRESIONES REGULARES

let re;
re = /hello/i;

re = /^h/i;

re = /World$/i;

re = /^.ello$/i;

// re = /^h.llo$/i

const result = re.test(" ello");
console.log(result);
