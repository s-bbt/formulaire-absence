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

// TODO créer méthode pour ajouter noeuds = select + options (boucle)
// test 2 catégories d'absence : accès via json
function recupDonnees() {
  // récupère données JSON
  fetch('js/absence.json')
    .then(response => response.json())
    .then(donnees => {
      console.log(donnees);
      // récupère nœud div #catAbsence
      const catAbsence = document.getElementById("catAbsence");
      // ajout balise select
      const baliseSelect = document.createElement("select");
      baliseSelect.setAttribute("id", "noeudSelect");
      catAbsence.appendChild(baliseSelect);
      // boucle pour ajouter les balises option
      // récupère nœud du select et ajoute chaque option
      const noeudSelect = document.getElementById("noeudSelect");
      const optionAbs = document.createElement("option");
      optionAbs.text = "test";
      noeudSelect.add(optionAbs);
      // for (let i = 0; i < donnees; i++) {
      // }
    });
}

recupDonnees();

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
