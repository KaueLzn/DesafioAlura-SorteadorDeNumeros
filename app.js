function sortear() {
    let qtdNumero = document.getElementById('quantidade').value;
    let inicio = document.getElementById('de').value;
    let fim = document.getElementById('ate').value;

    if (inicio <= fim) {
        if (qtdNumero <= (fim - inicio)+1) {
            let listaGerada = gerarNumeros(qtdNumero, inicio, fim);

            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaGerada} </label>`;
        
            alterarStatusBtn();
        } else {
            alert(`O intervalo do fim x inicio é ${fim - inicio+1}, enquanto a quantidade de números sorteados é de ${qtdNumero}`)
        }     
    } else {
        alert(`O numero final: ${fim} é menor que o numero inicial: ${inicio} `)
    } 

}


function gerarNumeros(repeticao, inicio, fim) {
    let listaNumeros = [];
    let valorMax = Math.floor(fim);
    let valorMin = Math.ceil(inicio)

    for (let i = 0; i < repeticao; i++) {

        numeroGerado = Math.floor(Math.random() * (valorMax - valorMin + 1) + valorMin);

        while (listaNumeros.includes(numeroGerado)) {
            numeroGerado = Math.floor(Math.random() * (valorMax - valorMin + 1) + valorMin);
        }
        console.log(numeroGerado);
        listaNumeros.push(numeroGerado);
    }

    return listaNumeros;
}


function reiniciar() {
    let qtdNumero = document.getElementById('quantidade');
    qtdNumero.value = "";
    let inicio = document.getElementById('de');
    inicio.value = "";
    let fim = document.getElementById('ate');
    fim.value = "";

    alterarStatusBtn();

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
}


function alterarStatusBtn(){
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}