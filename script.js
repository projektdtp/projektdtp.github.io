function pokazFormularz() {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("formularz").classList.remove("hidden");
}

function wroc() {
  document.getElementById("formularz").classList.add("hidden");
  document.getElementById("start").classList.remove("hidden");
}

function wyslijZapytanie() {
  const usluga = document.getElementById("usluga").value;
  const material = document.getElementById("material").value;
  const opis = document.getElementById("opis").value;
  const kontakt = document.getElementById("kontakt").value;

  const temat = "Zapytanie o wycenę druku 3D";
  const tresc =
    "Rodzaj usługi: " + usluga + "%0D%0A" +
    "Materiał: " + material + "%0D%0A" +
    "Opis: " + opis + "%0D%0A" +
    "Kontakt: " + kontakt;

  window.location.href =
    "mailto:projekt.dtp@gmail.com?subject=" + temat + "&body=" + tresc;
}