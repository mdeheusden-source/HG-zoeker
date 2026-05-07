const products = [
  { name: "Badkamerreiniger Extra Glans", category: "Badkamer", number: "202" },
  { name: "Douche & Wasbakspray", category: "Badkamer", number: "252" },
  { name: "Douchecabine Beschermer", category: "Badkamer", number: "256" },
  { name: "Power Foam Douche Reinigend Schuim", category: "Badkamer", number: "258" },
  { name: "Schimmelreiniger", category: "Badkamer", number: "235" },
  { name: "Schimmel-, Vocht- en Weerplekkenreiniger", category: "Badkamer", number: "234" },
  { name: "Kalkweg Concentraat", category: "Badkamer", number: "245" },
  { name: "Kalkweg Schuimspray", category: "Badkamer", number: "249" },
  { name: "Badkamer Ontkalker", category: "Badkamer", number: "244" },
  { name: "Sanitairglansreiniger", category: "Badkamer", number: "251" },
  { name: "Hygienische Toiletbrilreiniger", category: "Toilet", number: "240" },
  { name: "Toiletruimte Reiniger", category: "Toilet", number: "237" },
  { name: "Urinegeur Verwijderaar", category: "Toilet", number: "242" },
  { name: "Kookplaatreiniger", category: "Keuken", number: "355" },
  { name: "Oven-, Grill- en Barbecue Reiniger", category: "Keuken", number: "350" },
  { name: "Vetweg", category: "Keuken", number: "362" },
  { name: "Keukenreiniger", category: "Keuken", number: "357" },
  { name: "Koelkast Reiniger", category: "Keuken", number: "340" },
  { name: "Magnetronreiniger", category: "Keuken", number: 20019 },
  { name: "RVS Snelreiniger", category: "Keuken", number: "361" },
  { name: "Roestvrijstaal Reiniger", category: "Keuken", number: "360" },
  { name: "Airfryer Reiniger", category: "Keuken", number: "347" },
  { name: "Frituurpan Reiniger", category: "Keuken", number: "348" },
  { name: "Barbecue Reiniger", category: "Keuken", number: "350" },
  { name: "Ontkalker", category: "Ontkalken & Apparaten", number: "307" },
  { name: "Waterkokerreiniger en Ontkalker", category: "Ontkalken & Apparaten", number: "334" },
  { name: "Nespresso Ontkalker", category: "Ontkalken & Apparaten", number: "338" },
  { name: "Espresso Apparaat Reiniger", category: "Ontkalken & Apparaten", number: "335" },
  { name: "Koffiemachine Ontkalker", category: "Ontkalken & Apparaten", number: "337" },
  { name: "Wasmachinereiniger", category: "Ontkalken & Apparaten", number: "309" },
  { name: "Vaatwasmachinereiniger", category: "Ontkalken & Apparaten", number: "341" },
  { name: "Witgoed Reiniger", category: "Ontkalken & Apparaten", number: "309" },
  { name: "Afvoer Ontstopper", category: "Afvoer & Ontstoppen", number: "232" },
  { name: "Duo Ontstopper", category: "Afvoer & Ontstoppen", number: "331" },
  { name: "Vloeibare Ontstopper", category: "Afvoer & Ontstoppen", number: "231" },
  { name: "Haar Ontstopper", category: "Afvoer & Ontstoppen", number: "229" },
  { name: "Stinkende Afvoer Reiniger", category: "Afvoer & Ontstoppen", number: "332" },
  { name: "Tegelreiniger", category: "Vloeren", number: "131" },
  { name: "Tegelreiniger Extra Sterk", category: "Vloeren", number: "133" },
  { name: "Laminaatreiniger Glans", category: "Vloeren", number: "155" },
  { name: "Laminaatreiniger Extra Sterk", category: "Vloeren", number: "156" },
  { name: "Parketreiniger", category: "Vloeren", number: "147" },
  { name: "Parketreiniger Extra Sterk", category: "Vloeren", number: "148" },
  { name: "Vloerreiniger", category: "Vloeren", number: "106" },
  { name: "PVC Vloerreiniger", category: "Vloeren", number: "151" },
  { name: "Tapijtreiniger", category: "Vloeren", number: "158" },
  { name: "Parket Polish", category: "Vloeren", number: "145" },
  { name: "Laminaat Beschermfilm Met Glans", category: "Vloeren", number: "153" },
  { name: "Laminaat Beschermfilm Zonder Glans", category: "Vloeren", number: 20049 },
  { name: "Tegel Glanshersteller", category: "Vloeren", number: "132" },
  { name: "Voegenreiniger", category: "Voegen & Tegels", number: "103" },
  { name: "Voegenreiniger Kant en Klaar", category: "Voegen & Tegels", number: "227" },
  { name: "Voegenreiniger Concentraat", category: "Voegen & Tegels", number: "134" },
  { name: "Power Gel Brush Voegenreiniger", category: "Voegen & Tegels", number: "228" },
  { name: "Voegenkleurhersteller", category: "Voegen & Tegels", number: 20055 },
  { name: "Voegenbeschermer", category: "Voegen & Tegels", number: "135" },
  { name: "Cementsluierverwijderaar", category: "Voegen & Tegels", number: "127" },
  { name: "Cement- en Kalksluierverwijderaar", category: "Voegen & Tegels", number: "137" },
  { name: "Natuursteen Reiniger Voedend", category: "Natuursteen & Marmer", number: "143" },
  { name: "Natuursteen Glansreiniger", category: "Natuursteen & Marmer", number: "142" },
  { name: "Marmerreiniger", category: "Natuursteen & Marmer", number: "254" },
  { name: "Impregneermiddel Natuursteen", category: "Natuursteen & Marmer", number: "346" },
  { name: "Hardhoutreiniger", category: "Hout & Meubels", number: "118" },
  { name: "Houtreiniger", category: "Hout & Meubels", number: "119" },
  { name: "Teak Reiniger", category: "Hout & Meubels", number: 20065 },
  { name: "Teak Kleurhersteller", category: "Hout & Meubels", number: 20066 },
  { name: "Meubelreiniger", category: "Hout & Meubels", number: "211" },
  { name: "Meubel Polish", category: "Hout & Meubels", number: "213" },
  { name: "Meubelhersteller Donker Hout", category: "Hout & Meubels", number: "214" },
  { name: "Meubelhersteller Licht Hout", category: "Hout & Meubels", number: "212" },
  { name: "Leerreiniger", category: "Hout & Meubels", number: "219" },
  { name: "Leder Protector", category: "Hout & Meubels", number: "218" },
  { name: "Terrasreiniger", category: "Tuin & Buiten", number: "110" },
  { name: "Vlonderreiniger", category: "Tuin & Buiten", number: "118" },
  { name: "Groene Aanslagreiniger", category: "Tuin & Buiten", number: "110" },
  { name: "Sierpleisterreiniger", category: "Tuin & Buiten", number: "123" },
  { name: "Kunststofreiniger", category: "Tuin & Buiten", number: "223" },
  { name: "Rolluikenreiniger", category: "Tuin & Buiten", number: 20078 },
  { name: "Caravan Reiniger", category: "Tuin & Buiten", number: 20079 },
  { name: "Glasreiniger", category: "Glas & Ramen", number: "224" },
  { name: "Glasreiniger Concentraat", category: "Glas & Ramen", number: "225" },
  { name: "Vlekverwijderaar Extra Sterk", category: "Vlekken & Textiel", number: "310" },
  { name: "Textielvlekkenverwijderaar Speciaal Nr 1", category: "Vlekken & Textiel", number: "311" },
  { name: "Textielvlekkenverwijderaar Speciaal Nr 2", category: "Vlekken & Textiel", number: "312" },
  { name: "Textielvlekkenverwijderaar Speciaal Nr 3", category: "Vlekken & Textiel", number: "313" },
  { name: "Textielvlekkenverwijderaar Speciaal Nr 4", category: "Vlekken & Textiel", number: "314" },
  { name: "Textielvlekkenverwijderaar Speciaal Nr 6", category: "Vlekken & Textiel", number: "316" },
  { name: "Schoendeo", category: "Vlekken & Textiel", number: "325" },
  { name: "Wasmiddel Tegen Nare Geurtjes", category: "Vlekken & Textiel", number: "328" },
  { name: "Wasmiddel Tegen Stinkend Wasgoed", category: "Vlekken & Textiel", number: "327" },
  { name: "Wasmiddel Tegen Nare Geurtjes Op Sportkleding", category: "Vlekken & Textiel", number: "326" },
  { name: "Allesreiniger Alle Nare Geurtjes Weg", category: "Vlekken & Textiel", number: "322" },
  { name: "4-in-1 Beschermer Voor Textiel", category: "Vlekken & Textiel", number: "318" },
  { name: "Waterdicht Voor 100% Synthetisch Textiel", category: "Vlekken & Textiel", number: "319" },
  { name: "Koper Reiniger", category: "Metaal & Onderhoud", number: "217" },
  { name: "Zilver Reiniger", category: "Metaal & Onderhoud", number: "208" },
  { name: "Stickerverwijderaar", category: "Metaal & Onderhoud", number: "222" },
  { name: "Lijmverwijderaar", category: "Metaal & Onderhoud", number: "125" },
  { name: "Nicotine Aanslagreiniger", category: "Metaal & Onderhoud", number: 20099 },
  { name: "Auto Interieurreiniger", category: "Auto", number: "114" },
  { name: "Autoshampoo", category: "Auto", number: "111" },
  { name: "Ruitenontdooier", category: "Auto", number: "113" },
  { name: "Velgenreiniger", category: "Auto", number: "112" },
  { name: "Kunststofbeschermer", category: "Auto", number: 20104 },
  { name: "Insectenverwijderaar", category: "Ongediertebestrijding", number: 20105 },
  { name: "Mierenlokdoos", category: "Ongediertebestrijding", number: 20106 },
  { name: "Insectenspray", category: "Ongediertebestrijding", number: 20107 },
  { name: "Muizenval", category: "Ongediertebestrijding", number: 20108 },
  { name: "Houtwormmiddel", category: "Ongediertebestrijding", number: "122" },
];


const searchInput = document.querySelector("#productSearch");
const clearButton = document.querySelector("#clearSearch");
const result = document.querySelector("#result");
const productList = document.querySelector("#productList");
const countLabel = document.querySelector("#countLabel");

function normalize(value) {
  return value.trim().toLocaleLowerCase("nl-NL");
}

function setResult(product, query) {
  result.classList.remove("idle", "empty");

  if (!query) {
    result.classList.add("idle");
    result.innerHTML = `
      <span class="result-label">Resultaat</span>
      <strong>Voer een product in</strong>
    `;
    return;
  }

  if (!product) {
    result.classList.add("empty");
    result.innerHTML = `
      <span class="result-label">Resultaat</span>
      <strong>Geen nummer gevonden</strong>
    `;
    return;
  }

  result.innerHTML = `
    <span class="result-label">${product.category} Â· ${product.name}</span>
    <strong>${product.number}</strong>
  `;
}

function renderList(items) {
  productList.innerHTML = "";
  countLabel.textContent = `${items.length} gevonden`;

  if (items.length === 0) {
    productList.innerHTML = `<p class="no-results">Geen producten gevonden.</p>`;
    return;
  }

  for (const product of items) {
    const row = document.createElement("button");
    row.className = "product-row";
    row.type = "button";
    row.innerHTML = `
      <span class="product-info">
        <span class="product-name">${product.name}</span>
        <span class="product-category">${product.category}</span>
      </span>
      <span class="product-number">${product.number}</span>
    `;
    row.addEventListener("click", () => {
      searchInput.value = product.name;
      updateSearch();
      searchInput.focus();
    });
    productList.append(row);
  }
}

function updateSearch() {
  const query = normalize(searchInput.value);
  const matches = query
    ? products.filter((product) =>
        `${normalize(product.name)} ${normalize(product.category)} ${product.number}`.includes(query),
      )
    : products;
  const exactMatch = products.find(
    (product) =>
      normalize(product.name) === query || String(product.number) === query,
  );
  const bestMatch = exactMatch || matches[0];

  setResult(bestMatch, query);
  renderList(matches);
}

searchInput.addEventListener("input", updateSearch);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  updateSearch();
  searchInput.focus();
});

updateSearch();


