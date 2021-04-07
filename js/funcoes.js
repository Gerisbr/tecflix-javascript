//array
let filmes = ["300.jpg","simplesmente.jpg","leao.jpg","chefe.jpg"];
let nomefilmes = ["300","simplesmente","leao","chefe"]
for(let i = 0; i < filmes.length; i++){
    document.write("<img src=img/" + filmes[i] + ">");
    document.write("<div>");

    document,write(nomefilmes[i]);
    document.write("</div");
}