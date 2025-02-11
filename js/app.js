let Amigos = [];
let Sorteados = [];

function adicionar(){
    let amigo = (document.getElementById("nome-amigo")).value;

    if (amigo == "") {
        alert("Erro! Nome nulo!");
        return;
    }
    
    if (Amigos.includes(amigo)) {
        alert("Erro! Nome já cadastrado!");
        return;
    }

    Amigos.push(amigo);
    modificarLista();
}

function modificarLista(){
    let listAmigos = document.getElementById("lista-amigos");
    listAmigos.innerHTML = ""; 

    for (let i = 0; i < Amigos.length; i++) {
        if (i == 0) {
            listAmigos.innerHTML = `<a onclick="removerAmigo(this.innerText)" class="amigos_nome">${Amigos[i]}</a>`;
        }else {
            listAmigos.innerHTML += `, <a onclick="removerAmigo(this.innerText)" class="amigos_nome">${Amigos[i]}</a>`;
        }
    }
    
    (document.getElementById("nome-amigo")).value = "";
}

function removerAmigo(nomeAmigo){
    (Amigos.includes(nomeAmigo)) ? (Amigos.splice((Amigos.indexOf(nomeAmigo)), 1)): 0;
    modificarLista();
}

function sortear(){
    let listSorteio = document.getElementById("lista-sorteio");
    let sorteado;

    if (Amigos.length < 4) {
        alert("É preciso um número mínimo de 4 pessoas para realizar o sorteio!");
    }else{
        for (let i = 0; i < Amigos.length; i++) {
            do {
                sorteado = Amigos[parseInt(Math.floor(Math.random() * Amigos.length))];
            } while (Amigos[i] == sorteado || Sorteados.includes(sorteado));
            
            Sorteados.push(sorteado);

            listSorteio.innerHTML += `${Amigos[i]} --> ${sorteado}<br>`;
        }
    } 
    Sorteados = [];
}

function reiniciar(){
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("lista-amigos").innerHTML = "";
    Amigos = [];
    Sorteados = [];
}
