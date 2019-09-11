var Gerer = document.getElementById('Gerer');
var Travailler = document.getElementById('Travailler');
var Observer = document.getElementById('Observer');
var Historique = document.getElementById('Historique');
var Semer = document.getElementById('Semer');
var Transplanter = document.getElementById('Transplanter');
var Recolter = document.getElementById('Recolter');
var Arracher = document.getElementById('Arracher');
var Maladie = document.getElementById('Maladie');
var Ravageur = document.getElementById('Ravageur');
var H2019 = document.getElementById('H2019');
var H2018 = document.getElementById('H2018');
var H2017 = document.getElementById('H2017');
var H2016 = document.getElementById('H2016');
var TP21 = document.getElementById('Tparcelle2-1');
var TP32 = document.getElementById('Tparcelle3-2');


Gerer.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "visible";
    document.querySelector(".Travailler").style.visibility = "hidden";
    document.querySelector(".Observer").style.visibility = "hidden";
    document.querySelector(".Historique").style.visibility = "hidden";
    // document.querySelector(".annee").style.visibility = "hidden";
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";
    document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Gll").style.visibility = "visible";
    document.querySelector(".Tll").style.visibility = "hidden";
    document.querySelector(".O").style.visibility = "hidden";
    document.querySelector(".H").style.visibility = "hidden";
    
}

Travailler.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "hidden";
    document.querySelector(".Travailler").style.visibility = "visible";
    document.querySelector(".Observer").style.visibility = "hidden";
    document.querySelector(".Historique").style.visibility = "hidden";
    // document.querySelector(".annee").style.visibility = "hidden";
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";
    document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Gll").style.visibility = "hidden";
    document.querySelector(".Tll").style.visibility = "visible";
    document.querySelector(".O").style.visibility = "hidden";
    document.querySelector(".H").style.visibility = "hidden";

}

Observer.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "hidden";
    document.querySelector(".Travailler").style.visibility = "hidden";
    document.querySelector(".Observer").style.visibility = "visible";
    document.querySelector(".Historique").style.visibility = "hidden";
    // document.querySelector(".annee").style.visibility = "hidden";
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";
    document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Gll").style.visibility = "hidden";
    document.querySelector(".Tll").style.visibility = "hidden";
    document.querySelector(".O").style.visibility = "visible";
    document.querySelector(".H").style.visibility = "hidden";

}

Historique.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "hidden";
    document.querySelector(".Travailler").style.visibility = "hidden";
    document.querySelector(".Observer").style.visibility = "hidden";
    document.querySelector(".Historique").style.visibility = "visible";
    // document.querySelector(".annee").style.visibility = "visible";
    document.querySelector(".H2019").style.visibility = "visible";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";
    document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Gll").style.visibility = "hidden";
    document.querySelector(".Tll").style.visibility = "hidden";
    document.querySelector(".O").style.visibility = "hidden";
    document.querySelector(".H").style.visibility = "visible";

}
H2019.onclick = function(){
    document.querySelector(".H2019").style.visibility = "visible";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";
}
H2018.onclick = function(){
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "visible";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";
}
H2017.onclick = function(){
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "visible";
    document.querySelector(".H2016").style.visibility = "hidden";
}
H2016.onclick = function(){
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "visible";
}
Recolter.onclick = function(){
    // document.querySelector(".RecolterC").style.visibility = "visible";
    alert("Les carottes ont été récolter")
}

Arracher.onclick = function(){
    alert("Les carottes ont été arracher !");
}

Transplanter.onclick = function(){
    document.querySelector(".Transplanter").style.visibility = "visible";
}

TP21.onclick = function(){
    alert("Les Carottes on été transplanté sur la parcelle 2-1");
}
TP32.onclick = function(){
    alert("Les carottes on été transplanté sur la parcelle 3-2");
}

Maladie.onclick = function(){
    alert("Alterniatiose détecté !");
}
Ravageur.onclick = function(){
    alert("Puceron Aperçu !");
}