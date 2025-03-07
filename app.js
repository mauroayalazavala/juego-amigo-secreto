// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Adición de una funcionalidad para facilitar la inserción de nombress
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;


}
// Almacenar los nombres de los amigos
let amigos = [];

// Agregar los amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validar campos
    if (nombreAmigo === "") {
        asignarTextoElemento('h3', 'No has escrito nada');
        return;
}

// Nombrar el arreglo
    amigos.push(nombreAmigo);

    // Actualizar lista
    actualizarLista();

    // Limpiar campos
    inputAmigo.value = "";
    inputAmigo.focus();

}

// Actualizar vista
function actualizarLista() {
    const listaAmigoUl =document.getElementById("listaAmigos");
    listaAmigoUl.innerHTML = "";
    
    amigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}
// Sortear amigo y validar
function sortearAmigo() {
    if (amigos.length === 0) {
        asignarTextoElemento('h3', 'No has creado la lista de amigos');
        return;     
    }
// Generar un indice aleatorio
    const indiceAleatoreo = Math.floor(Math.random() * amigos.length);

// Obtener nombre sorteado
    const amigoSorteado = amigos[indiceAleatoreo];

// Mostrar los resultados del sorteo
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
   
}

// Asignar eventos a los botones
document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
        document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
})

asignarTextoElemento();





