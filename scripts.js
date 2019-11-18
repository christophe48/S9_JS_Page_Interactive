//fonctionalité 1 + 1.bis:
// je crée ma variable que je vais incrémenter
let footerClick = 0;
// Le document est rattacher à élément avec un TagName de la ligne 159
// j'ajoute un Event à mon élément et j'incrémente ma variable à chaque fois que l'évenement se produit

document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerClick ++;
	console.log(`Click ${footerClick}`);
});

//fonctionalité 2 :
// Je crée une variable me permettant de rattacher mon document à élément avec l'id NavbarHeader de la ligne 11
let navbar = document.getElementById("navbarHeader");
let hamburger = document.querySelector("span.navbar-toggler-icon")

// Il existe une fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle". Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")
function Collapse() {
  navbar.classList.toggle("collapse");
};

hamburger.addEventListener("click",Collapse);



// Fonctionnalité 3 :
// Commence par bien pointer sur la première card en entier (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé).
let firstCard = document.getElementsByClassName("card")[0];
// Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console).
let editCard = firstCard.getElementsByClassName("btn")[1];
// Une fois que ça c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !
function red() {
  firstCard.style.color = 'red';
};
editCard.addEventListener("click",red);

//Fonctionnalité 4 :
//Reprend le code de la fonctionnalité 3 et adapte-le pour qu'il marche sur la 2ème card (et en remplaçant le rouge par du vert).
let secondCard = document.getElementsByClassName("card")[1];
let editSecondCard = secondCard.getElementsByClassName("btn")[1];

function green() {
  if (secondCard.style.color === 'green') {
  secondCard.style.color = '' ;
  } else {
    secondCard.style.color = 'green'
};}

editSecondCard.addEventListener("click",green);


//Fonctionnalité 5 :


var navbar2 = document.querySelector("div.navbar")
var link = document.querySelector("link")

console.log(navbar2)


function Nucleaire() {
  if (link.disabled !== true) {
  link.disabled = true;
} else {
  link.disabled = false;
}
}

navbar2.addEventListener("dblclick",Nucleaire);
