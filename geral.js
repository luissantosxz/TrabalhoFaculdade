document.getElementById("formulario").addEventListener("submit", enviarformulario);

function enviarformulario(evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    const mail = document.getElementById("email").value;
    const [ccharp, java, c, rust, python]= Array.from(document.getElementsByName("linguagens")).map((checkbox) => {
        return checkbox.checked;
    });
    const engines = Array.from(document.getElementsByName("engines")).map((radio) => {
        return radio.checked;
    });
    const experiencia = document.getElementById("experiencia").value;
    const salario = document.getElementById("salario").value;
    if(c == true && rust == true && Number(experiencia) >= 2){
        window.location.href = 'resultadoAprovado.html' + '?email=' + mail;
    } else{
        window.location.href = 'resultadoReprovado.html';
    }
}

