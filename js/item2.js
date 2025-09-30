lista=["Gervronilson", "Estrada A", "Linha B", 1880, 18.5, true]

alert(lista)

/*Exibir elementos da lista percorrendo com laço d rptição  insrindo os dados no html */

for(var i=0;i<6;i++)
{
    document.write("<h2>"+lista[i]+"</h2>")
}

/*Adicionar elemento ao fim da lista */
lista.push("84500-000")
alert(lista)

/*remover o ultimo elemento da lista */
lista.pop()
alert(lista) 

/*Remover o primiero elemento da lista */
lista.shift()
alert(lista)

/*Adicionar item como primeiro elemento da lista */
lista.unshift("Gervronésio")
alert(lista)