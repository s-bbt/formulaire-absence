// tableau pour combobox formation

let listeFormation = document.getElementById("optionFormation");

let tabFormation = [
  "Concepteur développeur d'applications",
  "Développeur web et web mobile",
  "Technicien d’équipement et d’exploitation en électricité",
  "Administrateur d’infrastructures sécurisées",
  "Technicien supérieur systèmes et réseaux",
  "Installateur dépanneur en informatique",
  "Technicien d'assistance en informatique",
  "Technicien d’après-vente en électroménager et audiovisuel à domicile",
  "Technicien des dispositifs d'assistance respiratoire à domicile",
  "Technicien de bureau d'études en électricité des bâtiments",
  "Electricien d’installation et de maintenance des systèmes automatisés",
  "Electricien d'équipement du bâtiment",
  "Habilitation électrique"
];

// TODO faire une boucle pour insérer chaque ligne du tableau dans un champ <option> + fonction dans le html ?

let nouvelleOption = document.createElement("option");

function ajoutComboFormation () {
  for (let i = 0; i<tabFormation.length; i++) {
    listeFormation.add(nouvelleOption);
    nouvelleOption.value = tabFormation.i;
    nouvelleOption.text = tabFormation.i;
    listeFormation.appendChild(tabFormation.i)
  }
}


// let option = `
// <option>
//   "Concepteur développeur d'applications"
// </option>
// <option>
// "Développeur web et web mobile"
// </option>
// `;
// listeFormation.add(option)



// TODO faire une fonction pour ajouter selected au champ quand cliqué

