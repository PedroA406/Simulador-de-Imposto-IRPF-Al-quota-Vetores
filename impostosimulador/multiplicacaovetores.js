var A = []
var B = []

var i, j, k
document.write("VETOR A")
document.write("[")
for( i=1; i<4; i++){

A[i] = parseInt(prompt("Vetor [A], digite a posição"+[i]))

document.write(A[i]+", ")

}
document.write("]  ")
document.write("VETOR B")
document.write("[")
for (j=1; j<4; j++){
    B[j] = parseInt(prompt("Vetor [B], digite a posição"+[j]))
    document.write(B[j]+", ")
    }
    document.write("]  ")

var M;

for(k=1; k<4; k++){
    M=(A[k=1]*B[k=1]) + (A[k=2]*B[k=2]) + (A[k=3]*B[k=3])
    
document.write(" O Produto escalar entre os Vetores A e B é = "+M)
  
}
