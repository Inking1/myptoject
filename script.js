let notes =[];
 function Ajouter() {
    const alpha = document.getElementsByName('text')[0]; 
    const warning = document.getElementById('nonvalider');
    const erreur = document.getElementById('casErreur');
    const valider = document.getElementById('valider');
    const val = parseFloat(alpha.value); 

    if (val < 0 || val > 20) {
        warning.style.display = 'block'; 
        erreur.style.display = 'none';  
        valider.style.display = 'none';  
       
    } else{
       notes.push(val);
    //    alert("Notes ajoutees");
       valider.style.display = "block"
       alpha.focus(); //donne la main a l'utilsateur de remettre les valeurs automatique 
       alpha.value = '';

        
    }

} 
//classList.toogle/.add(); pour ajouter un style ou bien fair appele de css
        function Afficher() {
            const erreur = document.getElementById('casErreur');
            const resultat = document.getElementById('Resultat');
            const non_valider = document.getElementById('nonvalider');
            erreur.style.display = "none"; 
            non_valider.style.display = 'none'
        
            if (notes.length === 0) {
              
                erreur.style.display = "block";
                resultat.style.display = "none";
                return;
            }
        
            let occurences = notes.length;
            let somme = 0;
            let max = notes[0]; 
            let notessup12 = []; 
            notes.join
            // notessuper = notes.filter(n>>n=>12) : vers le tableau et reconstruit les elements d tableau et put it f n et faire la condition 
            for (let i = 0; i < notes.length; i++) {
                somme += notes[i];
                if (notes[i] > max) {
                    max = notes[i]; 
                }
                if (notes[i] >= 12) {
                    notessup12.push(notes[i]); 
                }
            }
        
            let moyenne = (somme / occurences).toFixed(2); 
        
           
            resultat.style.display = 'block';
            resultat.innerHTML = `
                <h3>Nombre de notes : ${occurences}</h3>
                <h3>Moyenne des notes : ${moyenne}</h3>
                <h3>Meilleure note : ${max}</h3>
                <h3>Notes supérieures ou égales à 12 : ${notessup12.join(", ")}</h3>
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