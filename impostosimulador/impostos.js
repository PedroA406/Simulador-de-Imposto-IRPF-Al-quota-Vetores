const buton = document.getElementById("clique")

buton.addEventListener("click", impostosalario)




function impostosalario(){
    var salario
    var desconto

    salario=parseFloat(prompt("Digite seu salário:" ))

    if(salario <= 2259.20 ){
    
        desconto=(salario*0.075)-169.44
        
    
        alert("VOCÊ ESTÁ INSENTO DE IMPOSTOS")
     
    } 


    if(salario >= 2259.21 && salario <= 2826.65){
    
        desconto=(salario*0.075)-169.44
       
    
        alert("O imposto retido na fonte do seu selário será de  R$" +desconto)
     
    } 

    if(salario >= 2826.66 && salario <= 3751.05){
    
        desconto=(salario*0.15)-381.44
        
    
        alert("O imposto retido na fonte do seu selário será de  R$" +desconto)
     
    } 

    if(salario >= 3751.06 && salario <= 4664.68){
    
        desconto=(salario*0.225)-662.77
        
    
        alert("O imposto retido na fonte do seu selário será de  R$" +desconto)
     
    } 

    if(salario > 4664.68){
    
        desconto=(salario*0.275)-896
    
    
        alert("O imposto retido na fonte do seu selário será de  R$" +desconto)
     
    } 



    

    return 

}

const buton2 = document.getElementById("clique2")

buton2.addEventListener("click", impostoInvestimento)

function impostoInvestimento(){
    var investimento
    var dias
    var imposto

    investimento=parseFloat(prompt("Digite a rentabilidade do seu investimento:" ))
    dias = parseInt(prompt("Digite a quantidade de dias da aplicação:" ))

    if(dias <= 180){
    
        imposto = (investimento * 0.225)
       
        alert("O imposto retido na fonte do seu Investimento será  R$" +imposto)
     
    } 

    if(dias >= 181 && dias <= 360){
    
        imposto = (investimento * 0.20)
       
        alert("O imposto retido na fonte do seu Investimento será  R$" +imposto)
     
    } 
    
    if(dias >= 361 && dias <= 720){
    
        imposto = (investimento * 0.175)
       
        alert("O imposto retido na fonte do seu Investimento será  R$" +imposto)
     
    } 
    if(dias > 720){
    
        imposto = (investimento * 0.15)
       
        alert("O imposto retido na fonte do seu Investimento será  R$" +imposto)
     
    } 


    return 

}
