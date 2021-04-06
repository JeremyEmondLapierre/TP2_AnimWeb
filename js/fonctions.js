/**
 * Fonction AllerPage1()
 *
 *Fonction permettant d'aller à la page 1 avec les boutons au bas de la page
 *
 *@Jérémy Emond-Lapierre
 *TIM 2020
 */
function AllerPage1() {
    d.querySelector("#slider").classList.remove("swipe1");
    d.querySelector("#slider").classList.remove("swipe2");
    d.querySelector("#slider").classList.remove("swipe3");
    document.querySelector('#slider').style.transform = "translateX(0vw)";
    document.querySelector("#button1").classList.toggle("actif");
    document.querySelector("#button2").classList.remove("actif");
    document.querySelector("#button3").classList.remove("actif");
    document.querySelector("#button4").classList.remove("actif");

}

/**
 * Fonction AllerPage2()
 *
 *Fonction permettant d'aller à la page 2 avec les boutons au bas de la page
 *
 *@Jérémy Emond-Lapierre
 *TIM 2020
 */
function AllerPage2() {
    d.querySelector("#slider").classList.remove("swipe1");
    d.querySelector("#slider").classList.remove("swipe2");
    d.querySelector("#slider").classList.remove("swipe3");
    document.querySelector('#slider').style.transform = "translateX(-100vw)";
    document.querySelector("#button1").classList.remove("actif");
    document.querySelector("#button2").classList.toggle("actif");
    document.querySelector("#button3").classList.remove("actif");
    document.querySelector("#button4").classList.remove("actif");

}
/**
 * Fonction AllerPage3()
 *
 *Fonction permettant d'aller à la page 3 avec les boutons au bas de la page
 *
 *@Jérémy Emond-Lapierre
 *TIM 2020
 */
function AllerPage3() {
    d.querySelector("#slider").classList.remove("swipe1");
    d.querySelector("#slider").classList.remove("swipe2");
    d.querySelector("#slider").classList.remove("swipe3");
    document.querySelector('#slider').style.transform = "translateX(-200vw)";
    document.querySelector("#button1").classList.remove("actif");
    document.querySelector("#button2").classList.remove("actif");
    document.querySelector("#button3").classList.toggle("actif");
    document.querySelector("#button4").classList.remove("actif");
}

/**
 * Fonction AllerPage4()
 *
 *Fonction permettant d'aller à la page 4 avec les boutons au bas de la page
 *
 *@Jérémy Emond-Lapierre
 *TIM 2020
 */
function AllerPage4() {
    d.querySelector("#slider").classList.remove("swipe1");
    d.querySelector("#slider").classList.remove("swipe2");
    d.querySelector("#slider").classList.remove("swipe3");
    document.querySelector('#slider').style.transform = "translateX(-300vw)";
    document.querySelector("#button1").classList.remove("actif");
    document.querySelector("#button2").classList.remove("actif");
    document.querySelector("#button3").classList.remove("actif");
    document.querySelector("#button4").classList.toggle("actif");
}

/**
 * Fonction Suivant01()
 *
 *Fonction permettant d'aller à la page 2 avec le bouton suivant
 *
 *@Jérémy Emond-Lapierre
 *TIM 2020
 */
function Suivant01() {
    d.querySelector("#slider").classList.toggle("swipe1");
    d.querySelector("#button1").classList.remove("actif");
    d.querySelector("#button2").classList.toggle("actif");
    d.querySelector("#suivant2").addEventListener('mouseup', Suivant02);

}

/**
 * Fonction Suivant02()
 *
 *Fonction permettant d'aller à la page 3 avec le bouton suivant
 *
 *@Jérémy Emond-Lapierre
 *TIM 2020
 */
function Suivant02() {
    d.querySelector("#slider").classList.toggle("swipe2");
    d.querySelector("#slider").classList.remove("swipe1");
    d.querySelector("#button2").classList.remove("actif");
    d.querySelector("#button3").classList.toggle("actif");
    d.querySelector("#suivant3").addEventListener('mouseup', Suivant03);
}

/**
 * Fonction Suivant03()
 *
 *Fonction permettant d'aller à la page 4 avec le bouton suivant
 *
 *@Jérémy Emond-Lapierre
 *TIM 2020
 */
function Suivant03() {
    d.querySelector("#slider").classList.toggle("swipe3");
    d.querySelector("#slider").classList.remove("swipe2");
    d.querySelector("#button3").classList.remove("actif");
    d.querySelector("#button4").classList.toggle("actif");

    document.querySelector('.utilisateurValeur').innerHTML = document.querySelector("#utilisateur").value;
    document.querySelector('.mdpValeur').innerHTML = document.querySelector("#mdp").value;
    document.querySelector('.paysValeur').innerHTML = document.querySelector("#pays").value;
    document.querySelector('.provinceValeur').innerHTML = document.querySelector("#prov").value;
    document.querySelector('.villeValeur').innerHTML = document.querySelector("#ville").value;
    document.querySelector('.adresseValeur').innerHTML = document.querySelector("#adresse").value;
    document.querySelector('.postalValeur').innerHTML = document.querySelector("#postal").value;
    document.querySelector('.telValeur').innerHTML = document.querySelector("#tel").value;

}
