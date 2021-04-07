/*let filme1 = "Soul";
let filme2 = "A voz do silêncio";
let filme3 = "Simplesmente acontece";
*/

//para add mais um item!!
//filmes.push("Vingadores");

//arrays - estilo listas.
let filmes = ["300.jpg", 
"chefe.jpg", 
"leao.jpg"]

let nomes = ["300", "chefe", "leao"]
/*
console.log(filme1);
console.log(filme2);
console.log(filme3);
*/

/*console.log(filmes);
console.log(filmes.length);*/


//acessar o indice
/*console.log(filmes[0]);
console.log(filmes[1]);
console.log(filmes[2]);*/


//while para laço           for também é laço
/*
let quantidadeFilmes = 2;
while(quantidadeFilmes >= 0){
    console.log(filmes[quantidadeFilmes]);
    quantidadeFilmes--;
} 
*/
//length ajudou o coding, não precisamos alterar manualmente.
//length é pra retornar as numerações de laços de repetição, filme 1,2,3...
for(let i = 0; i < filmes.length; i++){
    //console.log(filmes[i]) para aparecer no console
    document.write("<div>");
    document.write("<img src='img/" + filmes[i] + "'>");
    document.write(nomes[i]);
    document.write("</div>");
}

