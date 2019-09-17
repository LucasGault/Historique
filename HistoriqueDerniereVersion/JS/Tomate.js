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

    document.querySelector(".Re").style.visibility = "hidden";
    document.querySelector(".Se").style.visibility = "hidden";
    document.querySelector(".Tr").style.visibility = "hidden";
    document.querySelector(".Ar").style.visibility = "hidden";

    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";

    document.querySelector(".Ma").style.visibility = "hidden";
    document.querySelector(".Ra").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";

    document.querySelector(".Action").style.visibility = "hidden";

    document.querySelector(".T21").style.visibility = "hidden";
    document.querySelector(".T32").style.visibility = "hidden";
    document.querySelector(".Maladie").style.visibility = "hidden";
    document.querySelector(".Ravageur").style.visibility = "hidden";

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
    document.querySelector(".Re").style.visibility = "hidden";
    document.querySelector(".Se").style.visibility = "hidden";
    document.querySelector(".Tr").style.visibility = "hidden";
    document.querySelector(".Ar").style.visibility = "hidden";

    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";

    document.querySelector(".Ma").style.visibility = "hidden";
    document.querySelector(".Ra").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";

    document.querySelector(".Action").style.visibility = "hidden";

    document.querySelector(".T21").style.visibility = "hidden";
    document.querySelector(".T32").style.visibility = "hidden";
    document.querySelector(".Maladie").style.visibility = "hidden";
    document.querySelector(".Ravageur").style.visibility = "hidden";

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
    document.querySelector(".Re").style.visibility = "hidden";
    document.querySelector(".Se").style.visibility = "hidden";
    document.querySelector(".Tr").style.visibility = "hidden";
    document.querySelector(".Ar").style.visibility = "hidden";


    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";

    document.querySelector(".Ma").style.visibility = "hidden";
    document.querySelector(".Ra").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";

    document.querySelector(".Action").style.visibility = "hidden";

    document.querySelector(".T21").style.visibility = "hidden";
    document.querySelector(".T32").style.visibility = "hidden";
    document.querySelector(".Maladie").style.visibility = "hidden";
    document.querySelector(".Ravageur").style.visibility = "hidden";

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
    document.querySelector(".Re").style.visibility = "hidden";
    document.querySelector(".Se").style.visibility = "hidden";
    document.querySelector(".Tr").style.visibility = "hidden";
    document.querySelector(".Ar").style.visibility = "hidden";

    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";

    document.querySelector(".Ma").style.visibility = "hidden";
    document.querySelector(".Ra").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "visible";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";

    document.querySelector(".Action").style.visibility = "hidden";

    document.querySelector(".T21").style.visibility = "hidden";
    document.querySelector(".T32").style.visibility = "hidden";
    document.querySelector(".Maladie").style.visibility = "hidden";
    document.querySelector(".Ravageur").style.visibility = "hidden";

}
H2019.onclick = function(){
    document.querySelector(".H2019").style.visibility = "visible";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "visible";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";
}
H2018.onclick = function(){
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "visible";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "visible";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";
}
H2017.onclick = function(){
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "visible";
    document.querySelector(".H2016").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "visible";
    document.querySelector(".H6").style.visibility = "hidden";
}
H2016.onclick = function(){
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "visible";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "visible";
}
Recolter.onclick = function(){
    // document.querySelector(".RecolterC").style.visibility = "visible";
    document.querySelector(".Re").style.visibility = "visible";
    document.querySelector(".Se").style.visibility = "hidden";
    document.querySelector(".Tr").style.visibility = "hidden";
    document.querySelector(".Ar").style.visibility = "hidden";

    document.querySelector(".Action").style.visibility = "hidden";

    document.querySelector(".T21").style.visibility = "hidden";
    document.querySelector(".T32").style.visibility = "hidden";


}

Arracher.onclick = function(){
    // alert("Les tomates ont été arracher !");
    document.querySelector(".Re").style.visibility = "hidden";
        document.querySelector(".Se").style.visibility = "hidden";
        document.querySelector(".Tr").style.visibility = "hidden";
        document.querySelector(".Ar").style.visibility = "visible";
        document.querySelector(".Action").style.visibility = "hidden";

    document.location.href="TomateAr.html";
    document.querySelector(".T21").style.visibility = "hidden";
    document.querySelector(".T32").style.visibility = "hidden";
}


Transplanter.onclick = function(){
    document.querySelector(".Transplanter").style.visibility = "visible";
    document.querySelector(".Re").style.visibility = "hidden";
    document.querySelector(".Se").style.visibility = "hidden";
    document.querySelector(".Tr").style.visibility = "visible";
    document.querySelector(".Ar").style.visibility = "hidden";

    document.querySelector(".Action").style.visibility = "hidden";

}

TP21.onclick = function(){
    // alert("Les Carottes on été transplanté sur la parcelle 2-1");
    document.querySelector(".T21").style.visibility = "visible";
    document.querySelector(".T32").style.visibility = "hidden";

}
TP32.onclick = function(){
    // alert("Les carottes on été transplanté sur la parcelle 3-2");
    document.querySelector(".T21").style.visibility = "hidden";
    document.querySelector(".T32").style.visibility = "visible";

}

Maladie.onclick = function(){
    document.querySelector(".Ma").style.visibility = "visible";
    document.querySelector(".Ra").style.visibility = "hidden";
    // alert("Alterniatiose détecté !");
    document.querySelector(".Maladie").style.visibility = "visible";
    document.querySelector(".Ravageur").style.visibility = "hidden";


}
Ravageur.onclick = function(){
    document.querySelector(".Ma").style.visibility = "hidden";
    document.querySelector(".Ra").style.visibility = "visible";
    // alert("Puceron Aperçu !");
    document.querySelector(".Maladie").style.visibility = "hidden";
    document.querySelector(".Ravageur").style.visibility = "visible";
}

DoubleBechage.onclick = function(){
    document.querySelector(".Action").style.visibility = "visible";

}
Sarclage.onclick = function(){
    document.querySelector(".Action").style.visibility = "visible";

}
Desherbage.onclick = function(){
    document.querySelector(".Action").style.visibility = "visible";

}
Amendement.onclick = function(){
    document.querySelector(".Action").style.visibility = "visible";

}
TraitementPurin.onclick = function(){
    document.querySelector(".Action").style.visibility = "visible";
}

Semer.onclick = function(){
    document.querySelector(".Action").style.visibility = "visible";
}