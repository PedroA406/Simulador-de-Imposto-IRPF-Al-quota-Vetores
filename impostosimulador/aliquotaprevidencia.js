const buton = document.getElementById("clique")

buton.addEventListener("click", calcPrevidencia)





function calcPrevidencia(){
    var salario
    var desconto
    var liquido
    var pessoa


    
    salario=parseFloat(prompt("Digite seu salário:" ))

    if(salario <= 1412 ){
    
    desconto=(salario*0.075)
    liquido = salario - desconto

    alert("Seu salário após descontos de " +desconto+ ", será: "+liquido)
 
    } 

    if(salario >= 1412.01 && salario <= 2666.68){
    
    desconto=(salario*0.09)- 21.18
    liquido = salario - desconto

    alert("Seu salário após descontos de " +desconto+ ", será: "+liquido)
 
    } 

    if(salario >= 2666.69 && salario <= 4000.03){

    desconto=(salario*0.12) - 101.18
    liquido = salario - desconto

    alert("Seu salário após descontos de " +desconto+ ", será: "+liquido)
 
    } 
    if(salario >= 4000.04 && salario <= 7786.02){

    desconto=(salario*0.14) - 181.18
    liquido = salario - desconto

    alert("Seu salário após descontos de " +desconto+ ", será: "+liquido)
 
    } 

    return

}


const buton2 = document.getElementById("clique2")

buton2.addEventListener("click", calcPrevidencia2)

function calcPrevidencia2(){

    salario=parseFloat(prompt("Digite seu salário:" ))

    if(salario <= 1412 ){
    
        desconto=(salario*0.05) - 70.70
        liquido = salario - desconto
    
        alert("Seu salário após descontos de " +desconto+ ", será: "+liquido)
     
        } else{
            alert("Seu salário não se encaixa nessa alíquota!")
        }

}

const buton3 = document.getElementById("clique3")

buton3.addEventListener("click", calcPrevidencia3)

function calcPrevidencia3(){

    salario=parseFloat(prompt("Digite seu salário:" ))

    if(salario <= 1412 ){
    
        desconto=(salario*0.11) - 155.32
        liquido = salario - desconto
    
        alert("Seu salário após descontos de " +desconto+ ", será: "+liquido)
     
        } else{
            alert("Seu salároi não se encaixa nessa alíquota!")
        }

}

const buton4 = document.getElementById("clique4")

buton4.addEventListener("click", calcPrevidencia4)

function calcPrevidencia4(){

    salario=parseFloat(prompt("Digite seu salário:" ))

    if(salario <= 1412 ){
    
        desconto=(salario*0.12) - 169.44
        liquido = salario - desconto
    
        alert("Seu salário após descontos de " +desconto+ ", será: "+liquido)
     
        } else{
            alert("Seu salároi não se encaixa nessa alíquota!")
        }

}