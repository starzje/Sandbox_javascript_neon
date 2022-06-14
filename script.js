const dodaniTekst = document.getElementById("noviText");
const naslov = document.getElementById("naslov");
const number = document.getElementById("number");

function dodajNoviElement() {
  const noviElement = document.createElement("div");
  noviElement.classList.add("styling");
  const noviSadrzaj = document.createTextNode(`Dodao si novu stavku`);
  noviElement.appendChild(noviSadrzaj);
  document.body.insertBefore(noviElement, noviText);

  function zbrojiBrojeve() {
    return number.value * 6;
  }
  return (naslov.innerHTML = `Rezultat: ${
    number.value
  } * 6 = ${zbrojiBrojeve()}`);
}

function reset() {
  document.body.innerHTML = `         <h1 class="heading">
      Odaberi broj koji će se pomnožiti sa 6 i dodaj novi element u listu
    </h1>
    <input id="number" type="number" />
    <div id="naslov"></div>
    <div class="container">
      <button onclick="dodajNoviElement()" class="btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>Pomnoži i dodaj element
      </button>
      <button onclick="reset()" class="btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>resetiraj sve
      </button>
    </div>
    <div id="noviText"></div>`;
}
