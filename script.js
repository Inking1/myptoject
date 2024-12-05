
 function Ajouter() {
    const alpha = document.getElementsByName('text')[0]; 
    const warning = document.getElementById('nonvalider');
    const erreur = document.getElementById('casErreur');
    const val = parseFloat(alpha.value); 

    if (val < 0 || val > 20) {
        warning.style.display = 'block'; 
        erreur.style.display = 'none';  
       
    } else {
        warning.style.display = 'none'; 
        erreur.style.display = 'block'; 
    }
}


































function turnoff() { 
    const body= document.getElementsByTagName('body')[0] ;
    body.style.backgroundColor="rgb(18, 18, 46)"




}
function turnon() { 
     const body= document.getElementsByTagName('body')[0] ;
    body.style.backgroundColor="white"


}
const lamp = document.getElementById('lamp');
lamp.addEventListener("change", function () {
    if (lamp.checked) { 
        turnoff();
    } else { 
        turnon(); 
    }
});