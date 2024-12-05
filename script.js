let notes =[];
 function Ajouter() {
    const alpha = document.getElementsByName('text')[0]; 
    const warning = document.getElementById('nonvalider');
    const erreur = document.getElementById('casErreur');
    const val = parseFloat(alpha.value); 

    if (val < 0 || val > 20) {
        warning.style.display = 'block'; 
        erreur.style.display = 'none';  
       
    } else {
       notes.push(val);
       alert("Notes ajoutees");
       alpha.value = '';
        
    }

} 
function Afficher(){ 
    const erreur = document.getElementById('casErreur');
    const resultat = document.getElementById('resultat'); 

    


        if(notes.length == 0){ 
            erreur.style.display="block"
            return;
        }
        let occurences = notes.length; 
        let somme =0 ;
        let max = -66; 
        let notessup12=[]; 
        for( let i = 0 ; i < notes.length ; i++){ 
            if(notes[i] > max){ 
                max = notes[i] ;
            }
            if(notes[i]>=12){ 
                notessup12.push(notes[i]);
            }


        }
        let moyenne = (somme / occurences) ; 

        resultat.innerHTML = `
             <h3> Nombre de notes : ${occurences}</h3><br>
                <h3> Moyenne de notes:${moyenne}</h3><br>
                <h3> Meileur note :${max}</h3><br>
                <h3> Notes superieures ou egales a 12 :${notessup12(", ")}</h3>

        
        
        `;



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