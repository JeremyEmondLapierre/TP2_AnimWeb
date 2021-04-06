/**
 * Fonction initPage()
 *
 *Fonction d'initialisation de la page
 *
 *@Jérémy Emond-Lapierre
 *TIM 2020
 */


function initPage() {
    d = document;
    d.querySelector("#button1").addEventListener('mouseup', AllerPage1);
    d.querySelector("#button2").addEventListener('mouseup', AllerPage2);
    d.querySelector("#button3").addEventListener('mouseup', AllerPage3);
    d.querySelector("#button4").addEventListener('mouseup', AllerPage4);
    
    d.querySelector("#suivant1").addEventListener('mouseup', Suivant01);
}


/* Initialise la page */
initPage();
