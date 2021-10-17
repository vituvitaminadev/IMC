function calcularIMC(){
	const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(1 > altura > 2.2 | 30 > peso > 300){
        alert("O IMC é um medidor válido somente para adultos! Confira se digitou os dados corretamente!");
    }

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso/(altura**2)).toFixed(1);
        
        let classificacao = '';
        var peso_minimo = Math.round((altura ** 2) * 18.5);
        var peso_maximo = Math.round((altura ** 2) * 25);
        var faixa_peso = `Tente manter seu peso entre ${peso_minimo}kg e ${peso_maximo}kg.`; 

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II.';
        }else {
            classificacao = 'com obesidade grau III.';
        }

        resultado.textContent = `Olá, ${nome}! Com ${peso}kg e ${altura}m, seu IMC é ${valorIMC}. Atualmente, você está ${classificacao}\n ${faixa_peso}`;

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }
}