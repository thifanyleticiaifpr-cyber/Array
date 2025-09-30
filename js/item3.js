var frutas=[]
var f

do{
   f = prompt("Digite a fruta: ")

   if(f!==null){
    frutas.push(f)
   }
    else if(f===" "){
        alert("Clique em cancelar para ver sua lista")
    }
   
}while(f!=null)
    alert(frutas)
for(var i=0; i<frutas.length-1;i++){ /*Complemento -1 significa que não vai mostrar o ultimo da lista  */
   document.write("<h2>"+frutas[i]+"</h2>")
}