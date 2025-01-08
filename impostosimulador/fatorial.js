function numeroFatorial(n){
let fatorial = n

if(n==0){
    fatorial = 1

}

while(n>1){
    n--
fatorial=fatorial*n

}
return fatorial
}

const n = numeroFatorial(prompt("CALCULAR FATORIAL DE:"))

alert("Fatorial = "+n)