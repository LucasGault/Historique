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
var DoubleBechage = document.getElementById('DoubleBechage');
var Sarclage = document.getElementById('Sarclage');
var Desherbage = document.getElementById('Desherbage');
var Amendement = document.getElementById('Amendement');
var TraitementPurin = document.getElementById('TraitementPurin');

var H2019 = document.getElementById('H2019');
var H2018 = document.getElementById('H2018');
var H2017 = document.getElementById('H2017');
var H2016 = document.getElementById('H2016');
var TP21 = document.getElementById('Tparcelle2-1');
var TP32 = document.getElementById('Tparcelle3-2');
var Carotte = document.getElementById('Carotte');
var Radis = document.getElementById('Radis');
var Oignon = document.getElementById('Oignon');



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
    // document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Semer").style.visibility = "hidden";

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
    // document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Semer").style.visibility = "hidden";

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
    // document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Semer").style.visibility = "hidden";

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
    // document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Semer").style.visibility = "hidden";

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

Semer.onclick = function(){
    document.querySelector(".Semer").style.visibility = "visible";
}

Carotte.onclick = function(){
    alert('Des carottes ont été planter !');
}
Radis.onclick = function(){
    alert('Des radis ont été planter !');
}
Oignon.onclick = function(){
    alert('Des choux de bruxelle ont été planter !');
}

DoubleBechage.onclick = function(){
    alert('Un Double-Bêchage a été effectué !');
}
Sarclage.onclick = function(){
    alert('Un Sarclage a été effectué !');
}
Desherbage.onclick = function(){
    alert('Un Désherbage a été effectué !');
}
Amendement.onclick = function(){
    alert('Un Amendement de la terre a été effectué !');
}
TraitementPurin.onclick = function(){
    alert('Un Traitement avec un purin a été effectué !');
}