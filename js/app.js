// PARTIE 1
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

// PARTIE 2
// catégories d'absences

// récupère données JSON
const URL = 'http://localhost:63342/json/absence.json';
const recupDonnees = async function () {
  let reponse = await fetch(URL);
  if (reponse.ok) {
    let data = await reponse.json();
    constructMotif(data);
  }
}

// ajoute label Catégorie d'absence
const catAbsence = document.getElementById("catAbsence");
catAbsence.innerHTML = `
<label id="labelCatAbsence">Catégorie d'absence</label>
<select id="selectCatAbsence" name="catAbsence"></select>
`;

//  ajoute les options à la liste de catégories (récupère tableau json et ajout)
function constructMotif(objJson, textOption, option) {
  let tab = objJson['members'];
  const catAbsence = document.getElementById("selectCatAbsence");
  for (let i = 0; i < tab.length; i++) {
    textOption = tab[i].code;
    option = `<option>${textOption}</option>`;
    catAbsence.innerHTML += option;
  }
}

//test : fonction nouveau bouton
function ajoutBtn(type, attributs, texte) {
  let btn = document.createElement("type")
  for (let a in attributs) {
    btn.setAttribute(a, attributs[a]);
  }
  if (texte) {
    btn.innerHTML = texte;
  }
  return btn;
}

// bouton submit
const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  let nom = document.getElementById("Nom");
  let prenom = document.getElementById("Prénom");
  let formation = document.getElementById("choixFormation");
  let catAbsence = document.getElementById("selectCatAbsence");

  let pageValidation = "form-valide.html";
  window.location.href = pageValidation;
});

// retour promesse
document.addEventListener('DOMContentLoaded', function () {
  const start = async function () {
    await recupDonnees();
  }
  start();
});
