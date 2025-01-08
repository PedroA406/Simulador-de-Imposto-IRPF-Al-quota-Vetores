var A = []


var i, j, k;
document.write("VETOR A = ")
document.write("[")
for( i=1; i<=10; i++){

A[i] = prompt("Vetor [A], digite a posição"+[i])

document.write(A[i]+", ")

}
document.write("] ")

var n = prompt("Localize o Elemento:")

for( j=1; j<=10; j++){
    if(A[j]==n){
    
    document.write(" o  "+n+"  está na posição = "+j)
   }
   else{
    document.write(" | | ")

    }


}


  
   //else{
   // alert(" não encontrado ")

   // }





