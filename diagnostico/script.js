/* Pregunta: ¿Cuál es la función de 'document.getElementById' en JavaScript? utilizar un elemento de tu codigo mediante su id*/
function checkAnswer() {
    /* Pregunta: ¿Qué hace 'prompt' y cómo se puede usar en lugar de 'alert'? al alert se muetra coomo una notificacion y el promt en la pantalla */
    let answer = prompt("Enter your answer:");

    /* Pregunta: ¿Cuál es el propósito de la instrucción 'if' en este fragmento de código? ejecutar lineas de codigo dependiendo si se cumple cierta condicion */
    if (answer.toLowerCase() === 'paris') {
        alert("Correct!");
    } else {
        alert("Try again!");
    }
}

/* Pregunta: ¿Cómo se puede manipular el DOM usando JavaScript para cambiar el contenido de un elemento? */
document.getElementById("question").innerText = "What is the capital of France?";

