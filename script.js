
 function Ajouter() {
    const alpha = document.getElementsByTagName('input')[]; 
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



function Afficher(){ 
    const erreur = document.getElementById('casErreur'); 
    const res = document.getElementById('Resultat'); 
    const x = document.getElementById('input'); 
    const val = parseFloat(x.value) ;  
    let compteur = 0 ;
    let Somme = 0 ; 
    let max = -666 ;
      if(val > 0 || val < 20) { 
                compteur++; 
                Somme = Somme +val ; 
                if( max < val){ 
                    max = val ;
                } 
                erreur.style.display="none"; 
                res.style.display='block';
                /*let moyenne = somme / compteur ;  
                erreur.style.display = 'none';
      const resultmessage = ' Nombre de notes ajoutées : ${compteur}<br>Note maximale : ${max}<br>Moyenne : ${moyenne}` ';
      document.getElementById('Resultat').innerHTML = resultmessage; */
      
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