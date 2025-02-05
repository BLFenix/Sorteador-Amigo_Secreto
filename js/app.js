let NomesAmigos = [];
let AmigosSorteados = [];

function adicionar(){
    let nomeAmigo = (document.getElementById("nome-amigo")).value;
    let listAmigos = document.getElementById("lista-amigos");
    
    if (listAmigos.textContent == "") {
        listAmigos.textContent = nomeAmigo;
    }else {
        listAmigos.textContent += `, ${nomeAmigo}`;
    }

    NomesAmigos.push(nomeAmigo);

    (document.getElementById("nome-amigo")).value = "";
}

function sortear(){
    let listSorteio = document.getElementById("lista-sorteio");
    let nomeSorteado;
    for (let i = 0; i < NomesAmigos.length; i++) {
        do {
            nomeSorteado = NomesAmigos[parseInt(Math.floor(Math.random() * NomesAmigos.length))];
        } while (NomesAmigos[i] == nomeSorteado || AmigosSorteados.includes(nomeSorteado));
        
        AmigosSorteados.push(nomeSorteado);

        listSorteio.innerHTML += `${NomesAmigos[i]} --> ${nomeSorteado}<br>`;
    }

    
}

function reiniciar(){
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("lista-amigos").innerHTML = "";
    NomesAmigos = [];
    AmigosSorteados = [];
}