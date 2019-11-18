//fonctionalité 1 +1.bis:
// je crée ma variable que je vais incrémenter
let footerClick = 0;
// j'ajoute un élément ratacher a un TagName de la ligne 159
document.getElementsByTagName("footer")[0];
// j'ajoute mon évenement et j'incrémente ma variable à chaque fois que l'évenement se produit
document.addEventListener("click", function(){
  footerClick ++;
	console.log(`Click ${footerClick}`);
});

//fonctionalité 2 :
