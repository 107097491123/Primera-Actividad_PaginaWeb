let usuario = document.getElementById('usuario')
let email = document.getElementById('email')
let password = document.getElementById('password')
let profesion = document.getElementById('profesion')
let comentario = document.getElementById('comentario')
let form = document.getElementById('form')


function validar() {
    alert(`${usuario.value} ${email.value} ${password.value} ${profesion.value} ${comentario.value}`)
}

form.addEventListener('submit', validar)