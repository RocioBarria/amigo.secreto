let amigos = [];

function agregarAmigo() {
    var amigoNombre = document.getElementById('amigo').value.trim();

    if (amigoNombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(amigoNombre);

    document.getElementById('amigo').value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    var listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 
    for (var i = 0; i < amigos.length; i++) {
        var li = document.createElement('li'); 
        li.textContent = amigos[i];
        listaAmigos.appendChild(li); 
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("Por favor, agregue al menos un amigo.");
        return;
    }

    var indiceAleatorio = Math.floor(Math.random() * amigos.length);

    var amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').textContent = "¡Tu amigo secreto es: " + amigoSorteado + "!";
}
