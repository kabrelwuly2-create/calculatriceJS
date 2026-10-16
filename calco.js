let affiche = document.getElementById('afficheur');

//ecrire un nombre a l'ecran
let chiffres = document.querySelectorAll('.chiffre');

chiffres.forEach(chiffre => {

    chiffre.addEventListener('click', function(){
        nombre = chiffre.textContent;
        affiche.value += nombre;
    }) 

});

//enregistre chaque nombre et signe de l'operation
let pnombre = "";
let signechoisi = "";
let dnombre = 0;
let resultat = 0; 
let operateurs = document.querySelectorAll(".operateur");
operateurs.forEach((operateur) =>{
    operateur.addEventListener('click', function(){
        
        if(pnombre === ""){
            pnombre = affiche.value;
        }else{
            dnombre = affiche.value;
            pnombre = Number(pnombre);
            dnombre = Number(affiche.value);
            
            if(signechoisi === '+'){
                resultat = pnombre + dnombre;
                pnombre = resultat;
            }
             if(signechoisi === '-'){
                resultat = pnombre - dnombre;
                pnombre = resultat;
            }

             if(signechoisi === '*'){
                resultat = pnombre * dnombre;
                pnombre = resultat;
            }

             if(signechoisi === '/'){
                    //empercher la division par 0
                if(dnombre!== 0){
                resultat = pnombre / dnombre;
                affiche.value = resultat
            }else{
                affiche.value = "erreur"
            }

        }
    } 
        let signe = operateur.textContent;
        signechoisi = signe;
        affiche.value = ""; 
    })
    
});

//l'evenement du click sur egal
let egal = document.querySelector('.egal');
egal.addEventListener('click', function(){
    dnombre = affiche.value
    
    pnombre = Number(pnombre);
    dnombre = Number(dnombre);

    if(signechoisi === '+'){
        resultat = pnombre + dnombre;
        affiche.value = resultat;
    }
    if(signechoisi === '-'){
        resultat = pnombre - dnombre;
        affiche.value = resultat
    }
    if(signechoisi === '*'){
        resultat = pnombre * dnombre;
        affiche.value = resultat
    }
    if(signechoisi === '/'){

        //empercher la division par 0
        if(dnombre !== 0){
        resultat = pnombre / dnombre;
        affiche.value = resultat
        }else{
            affiche.value = "erreur"
        }
    }

})

//vider la calculatrice

let cancel = document.querySelector('.cancel');
cancel.addEventListener('click', function(){
     pnombre = "";
     dnombre = "";
     resultat = "";
     signechoisi = "";
     affiche.value = "";
})

let effacer = document.querySelector(".effacer");
effacer.addEventListener('click', function(){
    affiche.value = affiche.value.slice(0, -1);
})

//gestion des decimaux
 let decimal = document.querySelector('.decimal');
 decimal.addEventListener('click', function(){
    if(affiche.value === ""){
        affiche.value = "0."
    }else{
        if(!affiche.value.includes(".")){
            affiche.value += "."
        }
    }
 })


  

