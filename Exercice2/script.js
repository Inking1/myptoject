function chek() {
    const inputs = document.getElementsByTagName('input');
    //const element = document.querySelectorAll("select , input ");
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const messageDiv = document.getElementsByClassName('message')[i];

        if (!input.checkValidity()) {
            messageDiv.innerHTML = input.title;
            messageDiv.style.color = "red";
        } else {
            messageDiv.innerHTML = "";
        }
    }

}
function check1(event){ 
    const element = document.querySelectorAll("select , input "); 
    for(i = 0; i <element.length ; i++){ 
        const temp = element[i]; 
        const messageDiv = document.getElementsByClassName('message')[i];
        if(!temp.checkValidity()){ 
            messageDiv.innerHTML = temp.title; 
            messageDiv.style.color="red"
            event.preventDefault();
            break;
        }else{ 
            messageDiv.innerHTML = ""
        }



    }
//querySelectorALL() katte t3iyet 3la dok les argument li 3etitiha 3ade katte tboklihom fach katte t7ethom fchi var
}
// la fonction qui annule les espace dans les  value