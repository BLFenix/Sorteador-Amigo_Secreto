let Amigos = [];
let Sorteados = [];

function adicionar(){
    let amigo = (document.getElementById("nome-amigo")).value;

    if (amigo == "") {
        alert("Erro! Nome nulo!");
        
    }else {
        if (Amigos.includes(amigo)) {
        alert("Erro! Nome já cadastrado!");
        }else{
            let listAmigos = document.getElementById("lista-amigos");
        
            if (listAmigos.textContent == "") {
                listAmigos.textContent = amigo;
            }else {
                listAmigos.textContent += `, ${amigo}`;
            }

            Amigos.push(amigo);

            (document.getElementById("nome-amigo")).value = "";
        }
    }
}

function sortear(){
    let listSorteio = document.getElementById("lista-sorteio");
    let sorteado;
    for (let i = 0; i < Amigos.length; i++) {
        do {
            sorteado = Amigos[parseInt(Math.floor(Math.random() * Amigos.length))];
        } while (Amigos[i] == sorteado || Sorteados.includes(sorteado));
        
        Sorteados.push(sorteado);

        listSorteio.innerHTML += `${Amigos[i]} --> ${sorteado}<br>`;
    }

    
}

function reiniciar(){
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("lista-amigos").innerHTML = "";
    Amigos = [];
    Sorteados = [];
}