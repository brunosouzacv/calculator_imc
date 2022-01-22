// Variáveis

let age = document.getElementById("age");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let feminine = document.getElementById("feminine");
let masculine = document.getElementById("masculine");

// Adicionando evento de click e solicitando a função de validação do formulário

document.getElementById("button").addEventListener("click", validateForm);

// Função de validação do formulário

function validateForm() {
    
    if (age.value == '' || height.value == '' || weight.value == '' || (masculine.checked == false && feminine.checked == false)){
        alert("Todos os campos são obrigatórios!");
        document.getElementById("submit").removeEventListener("click", calculate_imc)
    } else {
        calculate_imc();
    }
}

// Função para calcular o IMC

function calculate_imc() {
    
    let arrayPerson = [age.value, height.value, weight.value];  //Criação de um array para armazenar o peso, altura e idade
    if (masculine.checked) {            //Se for masculino
        arrayPerson.push("masculine");
    } else if (feminine.checked) {      //Se for feminino
        arrayPerson.push("feminine");
    }

    let imc = Number(arrayPerson [2]) / (Number(arrayPerson [1]) / 100 * Number(arrayPerson[1]) / 100);  //Cálculo de IMC

    let result = '';

    if (imc < 18.5) {                               //Condições com o resultado do IMC
        result = "Você está abaixo do peso!";
    } else if (18.5 <= imc && imc <= 24.9) {
        result = "Você está com o peso ideal!";
    } else if (24.9 <= imc && imc <= 30) {
        result = "Você está com obesidade!";;
    } else if (imc > 30) {
        result = "Você está com obesidade extrema!";
    }

    let h1 = document.createElement("h1");  
    let h2 = document.createElement("h2");

    let t = document.createTextNode(result);
    let b = document.createTextNode("IMC: ");
    let r = document.createTextNode(parseFloat(imc).toFixed(2) + " kg/m²");

    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);

    document.body.appendChild(h1);
    document.body.appendChild(h2);

    document.getElementById("button").removeEventListener("click", calculate_imc);
    document.getElementById("button").removeEventListener("click", validateForm);
}

// Chamando a função para calcular o IMC

document.getElementById("button").addEventListener("click", calculate_imc);