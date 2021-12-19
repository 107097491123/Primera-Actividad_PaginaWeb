let usuario = document.getElementById('usuario')
let email = document.getElementById('email')
let password = document.getElementById('password')
let profesion = document.getElementById('profesion')
let comentario = document.getElementById('comentario')
let form = document.getElementById('form')


function validar() {
    let mensaje = `
     Usuario: ${usuario.value}\n
     Email: ${email.value}\n 
     password ${password.value}\n 
     profesion ${profesion.value}\n 
     comentario: ${comentario.value}`

     alert(mensaje)   
}

form.addEventListener('submit', validar)