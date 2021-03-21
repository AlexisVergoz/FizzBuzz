
window.onload = () => {
   
    let divNombre = document.querySelector("#nombre");



   
    for (let nombre = 1; nombre <= 200; nombre++) {
        
        let valeur;
        
            
            valeur = "fizzbuzz"
        } else {
            
            if (nombre % 3 === 0) {
                
                valeur = "fizz"
            } else {
                if (nombre % 5 === 0) {
                    
                    valeur = "buzz"
                } else {
                  
                    valeur = nombre
                }
            }
        }


       
        let texte = document.createElement("p");
        
        texte.innerText = valeur;
        
        divNombre.appendChild(texte);
    }
