var Gerer = document.getElementById('Gerer');
var Travailler = document.getElementById('Travailler');
var Observer = document.getElementById('Observer');
var Historique = document.getElementById('Historique');


Gerer.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "visible";
    document.querySelector(".Travailler").style.visibility = "hidden";
    document.querySelector(".Observer").style.visibility = "hidden";
    document.querySelector(".Historique").style.visibility = "hidden";
    document.querySelector(".annee").style.visibility = "hidden";

}

Travailler.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "hidden";
    document.querySelector(".Travailler").style.visibility = "visible";
    document.querySelector(".Observer").style.visibility = "hidden";
    document.querySelector(".Historique").style.visibility = "hidden";
    document.querySelector(".annee").style.visibility = "hidden";

}

Observer.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "hidden";
    document.querySelector(".Travailler").style.visibility = "hidden";
    document.querySelector(".Observer").style.visibility = "visible";
    document.querySelector(".Historique").style.visibility = "hidden";
    document.querySelector(".annee").style.visibility = "hidden";

}

Historique.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "hidden";
    document.querySelector(".Travailler").style.visibility = "hidden";
    document.querySelector(".Observer").style.visibility = "hidden";
    document.querySelector(".Historique").style.visibility = "visible";
    document.querySelector(".annee").style.visibility = "visible";

}
