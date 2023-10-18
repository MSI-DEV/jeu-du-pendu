console.log("Script chargé !")
// ------------------Create HTML (JAVASCRIPT)-------------------//
const monTableauRegles = document.createElement("div");
monTableauRegles.className = "container-regles";
      document.body.appendChild(monTableauRegles)
    
const regles = document.createElement("h2");
      monTableauRegles.appendChild(regles);
      
const reglesListe = document.createElement("ol");
      monTableauRegles.appendChild(reglesListe);

let fenetreJeu = document.createElement("div");
      fenetreJeu.className = "fenetre-jeu";
      document.body.appendChild(fenetreJeu);

let image = document.createElement("div");
      image.className = "image-pendu";
      fenetreJeu.appendChild(image);

let motsCaches = document.createElement("div");
      motsCaches.className = "mots-caches";
      fenetreJeu.appendChild(motsCaches)

    
let   mesLettres =["A","B","C","D","E","F","G","H","I","J","K","l","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
      mesLettres.className = "lettres";
      console.log(mesLettres);

let   affichage = [];


for (let index = 0; index < mesLettres.length; index++) {
      let mesBoutons = document.createElement("button")
      mesBoutons.className = "boutons";
      mesBoutons.innerText = mesLettres[index].toUpperCase();
      fenetreJeu.appendChild(mesBoutons);
      console.log(mesBoutons)

      mesBoutons.addEventListener("click", function() {
      console.log("Vous avez cliqué sur : ", mesBoutons.innerText);
      affichage.push(mesBoutons.innerText)
      console.log(affichage);
      motsCaches.innerText = affichage.join("");
})}

// ---------------------------Fonctionement Jeu Pendu-----------------//



const monTableauMots =["Pouvoir","Culture","Marseille","Sagesse","Recul","Formidable","Certification"];

      console.log(monTableauMots);

let numeroDeMotsCaches = Math.floor(Math.random()*monTableauMots.length);
      console.log(monTableauMots[numeroDeMotsCaches]);

      // mesButtons.forEach(mesButtons => {
      //       mesButtons.addEventListener("click", function() {
      //           console.log("Vous avez appuyé sur : ", unButton.innerText);
      //           if (saisies.length == 0)
      //   document.querySelector(".lettres").innerText = "";      
      //   document.querySelector(".lettres").innerText += eventClick.target.innerText
      //   saisies.push(eventClick.target.innerText)
        
      //       })
        
      //   })
      
      


