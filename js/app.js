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

// test 1 catégories d'absence : accès via json
// récupère données JSON
const URL = 'http://localhost:63342/json/absence.json';

const recupDonnees = async function() {
  let reponse = await fetch(URL);
  if (reponse.ok) {
    let data = await reponse.json();
    console.log("data0")
    console.log(data);
    constructMotif(data);
  }
}

// test avec select
// function ajoutOption() {
//   // récupère nœud div #catAbsence
//   const catAbsence = document.getElementById("catAbsence");
//   // ajout balise select
//   const baliseSelect = document.createElement("select");
//   baliseSelect.setAttribute("id", "noeudSelect");
//   catAbsence.appendChild(baliseSelect);
//   const noeudSelect = document.getElementById("noeudSelect");
//   // récupère nœud du select et ajoute chaque option
//   // boucle pour ajouter les balises option
//   const optionAbs = document.createElement("option");
//   optionAbs.text = "test";
//   noeudSelect.add(optionAbs);
// }
//
// ajoutOption();

function constructMotif(objJson)
{

  const catAbsence = document.getElementById("catAbsence");
  const labelCatAbsence = `<label id="labelCatAbsence">Catégorie d'absence</label>`;
  catAbsence.innerHTML = labelCatAbsence;

  // TODO test afficher json en texte
  const idcategorie = document.getElementById("labelCatAbsence");
  let tab = objJson['members'];
  for (var i=0 ; i<tab.length; i++) {
      console.log(tab[i].code);
  }
}
// ajout label pour la section catégorie (bouton radio)
//const catAbsence = document.getElementById("catAbsence");
//const labelCatAbsence = `<label id="labelCatAbsence">Catégorie d'absence</label>`;
//catAbsence.innerHTML = labelCatAbsence;


// TODO test afficher json en texte
//const idcategorie = document.getElementById("labelCatAbsence");
//let data = recupDonnees();

//recupDonnees().then(()=> {
//  const listeCategories = JSON.stringify(recupDonnees());
//  console.log(listeCategories);
//  idcategorie.innerHTML = listeCategories;
//})


// test avec btn radio
//TODO btn radio
//fonction nouveau bouton
function ajoutBtn(type, attributs, texte) {
  let btn = document.createElement("type")
  for (let a in attributs) {
    btn.setAttribute(a, attributs[a]);
  }
  if(texte) {
    btn.innerHTML = texte;
  }
  return btn;
}

// const btnCategorie = ajoutBtn('input', 'type="radio"', "test");
// catAbsence.appendChild(btnCategorie)


// bouton submit
const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  const nom = document.getElementById("Nom");
  const prenom = document.getElementById("Prénom");
  const formation = document.getElementById("choixFormation");


  // let pageValidation = "form-valide.html" + encodeURI(nom.valueOf()) + encodeURIComponent(prenom) + encodeURI(formation);
  window.location.href = pageValidation;
});

document.addEventListener('DOMContentLoaded', function() {
  const start = async function() {
    await recupDonnees();
  }

  start();
});
