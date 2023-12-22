//
function recupererDonnees() {
  var donneesForm = JSON.parse(localStorage.getItem('mesDonnees'));
  if (donneesForm) {
    document.getElementById("Nom");.value = donneesForm.nom;
    document.getElementById("Prénom").value = donneesForm.prenom;
    // document.getElementById("choixFormation") = donneesForm.formation;
    // document.getElementById("selectCatAbsence") = donneesForm.absence;
  } else {
    alert('Aucune donnée enregistrée dans le LocalStorage');
  }
}
