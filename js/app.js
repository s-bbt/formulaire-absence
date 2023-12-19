// tableau pour combobox formation
let selectFormations = `
<select name="formation" id="choixFormation">
<option>Concepteur développeur d'applications</option>
<option>Développeur web et web mobile</option>
<option>Technicien d’équipement et d’exploitation en électricité</option>
<option>Administrateur d’infrastructures sécurisées</option>
<option>Technicien supérieur systèmes et réseaux</option>
<option>Installateur dépanneur en informatique</option>
<option>Technicien d'assistance en informatique</option>
<option>Technicien d’après-vente en électroménager et audiovisuel à domicile</option>
<option>Technicien des dispositifs d'assistance respiratoire à domicile</option>
<option>Technicien de bureau d'études en électricité des bâtiments</option>
<option>Electricien d’installation et de maintenance des systèmes automatisés</option>
<option>Electricien d'équipement du bâtiment</option>
<option>Habilitation électrique</option>
</select>
`;

let listeFormation = document.getElementById("optionFormation");
listeFormation.innerHTML = selectFormations;

// TODO faire une fonction pour ajouter selected au champ quand cliqué

// partie 2 : catégories d'absences
// TODO ajouter les catégories d'absences au select/option (boucle)

let catAbsence = document.getElementById("catAbsence");
let labelAbsence = `
  <label>Catégorie d'absence</label>
  <select id="selectAbs"></select>
`;


// liste catégories
// let code01 = "Code 01 : Retard (absence non rémunérée)";
// let code04 = "Code 04 : Grève AFPA";
// let code05 = "Code 05 : Maladie";
// let code06 = "Code 06 : Absence légale"
// let code20 = "Code 20 - 21 - 30 - 31 - 40 - 41 : Accident";
// let code98 = "Code 98 : Absence autorisée non rémunérée";
// let code99 = "Code 99 : Absence non autorisée non rémunérée";
//
// let selectAbsence = `
// <select id="choixCatAbsence">
// <option>${code01}</option>
// <option>${code04}</option>
// <option>${code05}</option>
// <option>${code06}</option>
// <option>${code20}</option>
// <option>${code98}</option>
// <option>${code99}</option>
// </select>
// `
// absence.innerHTML = labelAbsence+selectAbsence;


// test 2 catégories d'absence : accès via json
fetch('js/absence.json')
  .then(response => response.json())
  .then(donnees => {
    for (let i = 0; i<donnees;i++) {
      const optionAbs = document.createElement("option");
      optionAbs.src = donnees[i].value;
    }
  selectAbs.appendChild(donnees)
  });



// bouton submit
const formulaire = document.querySelector("form");
formulaire.addEventListener("submit",
  (event) => {
    event.preventDefault();

    const nom = document.getElementById("Nom");
    const prenom = document.getElementById("Prénom");
    const formation = document.getElementById("choixFormation");


    // let pageValidation = "form-valide.html" + encodeURI(nom.valueOf()) + encodeURIComponent(prenom) + encodeURI(formation);
    window.location.href = pageValidation;
  });
