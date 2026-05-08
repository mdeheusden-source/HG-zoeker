const products = [
  { name: "Beeldschermreiniger", category: "Woonkamer & Overige Vertrekken", number: "101" },
  { name: "Zilverpolish", category: "Woonkamer & Overige Vertrekken", number: "102" },
  { name: "Zilverspray", category: "Woonkamer & Overige Vertrekken", number: "103" },
  { name: "Koper Reiniger", category: "Woonkamer & Overige Vertrekken", number: "104" },
  { name: "Kachelruitjesreiniger", category: "Woonkamer & Overige Vertrekken", number: "105" },
  { name: "Vlekverwijderaar Extreem Sterk", category: "Woonkamer & Overige Vertrekken", number: "106" },
  { name: "Meubelhersteller", category: "Woonkamer & Overige Vertrekken", number: "107" },
  { name: "Meubelbeschermer", category: "Woonkamer & Overige Vertrekken", number: "108" },
  { name: "Meubelolie", category: "Woonkamer & Overige Vertrekken", number: "109" },
  { name: "4 In 1 Voor Leer", category: "Woonkamer & Overige Vertrekken", number: "113" },
  { name: "Dieptereiniger Voor Leer", category: "Woonkamer & Overige Vertrekken", number: "114" },
  { name: "Leerspray", category: "Woonkamer & Overige Vertrekken", number: "115" },
  { name: "Stickerverwijderaar", category: "Woonkamer & Overige Vertrekken", number: "116" },
  { name: "Hygiënische Matras Opfrisser", category: "Woonkamer & Overige Vertrekken", number: "117" },
  { name: "Alle Nare Geurtjes Weg", category: "Woonkamer & Overige Vertrekken", number: "118" },
  { name: "Kunststof Reiniger", category: "Woonkamer & Overige Vertrekken", number: "119" },
  { name: "Glasreiniger", category: "Woonkamer & Overige Vertrekken", number: "120" },
  { name: "Behangverwijderaar", category: "Woonkamer & Overige Vertrekken", number: "203" },
  { name: "Haarontstopper", category: "Badkamer & Toilet", number: "121" },
  { name: "Gelontstopper", category: "Badkamer & Toilet", number: "122" },
  { name: "Ontstopper Supersnel In 5 Minuten", category: "Badkamer & Toilet", number: "123" },
  { name: "Ontstopper Vloeibaar 500ml", category: "Badkamer & Toilet", number: "124" },
  { name: "Afvoerreiniger Badkamer 6 St", category: "Badkamer & Toilet", number: "125" },
  { name: "Schimmel Vocht & Weerplekken Reiniger", category: "Badkamer & Toilet", number: "126" },
  { name: "Schimmelreiniger Schuimspray Bewezen Effectief", category: "Badkamer & Toilet", number: "127" },
  { name: "Schimmelbeschermer 500 ml", category: "Badkamer & Toilet", number: "128" },
  { name: "Voegenreiniger Spray", category: "Badkamer & Toilet", number: "129" },
  { name: "Power Gel Brush", category: "Badkamer & Toilet", number: "130" },
  { name: "Alle Nare Geurtjes Weg", category: "Badkamer & Toilet", number: "131" },
  { name: "Eco Toiletruimte Reiniger", category: "Badkamer & Toilet", number: "132" },
  { name: "Toiletruimte Reiniger Elke Dag", category: "Badkamer & Toilet", number: "133" },
  { name: "Eco Toiletgel", category: "Badkamer & Toilet", number: "134" },
  { name: "Toiletgel Extreem Sterk", category: "Badkamer & Toilet", number: "135" },
  { name: "Toilet Renovatiekit", category: "Badkamer & Toilet", number: "137" },
  { name: "Kalkverwijderaar Eco", category: "Badkamer & Toilet", number: "138" },
  { name: "Kalkweg Extra Sterk", category: "Badkamer & Toilet", number: "139" },
  { name: "Kalkweg Spray", category: "Badkamer & Toilet", number: "140" },
  { name: "Kalkweg Gekleurd Sanitair", category: "Badkamer & Toilet", number: "141" },
  { name: "Power Gel Brush Kalk", category: "Badkamer & Toilet", number: "142" },
  { name: "Kalkweg Concentraat", category: "Badkamer & Toilet", number: "143" },
  { name: "Kalkweg", category: "Badkamer & Toilet", number: "144" },
  { name: "Natuursteen Badkamerreiniger", category: "Badkamer & Toilet", number: "145" },
  { name: "Douche En Wasbak Spray", category: "Badkamer & Toilet", number: "146" },
  { name: "Power Foam Badkamer", category: "Badkamer & Toilet", number: "147" },
  { name: "Marble Cleaner", category: "Badkamer & Toilet", number: "148" },
  { name: "Power Foam Douche", category: "Badkamer & Toilet", number: "149" },
  { name: "Siliconenkitverwijderaar", category: "Badkamer & Toilet", number: "150" },
  { name: "Douchecabine Beschermer", category: "Badkamer & Toilet", number: "151" },
  { name: "Hygiënische Whirlpoolreiniger", category: "Badkamer & Toilet", number: "152" },
  { name: "Tegen Stinkende Vuilnisbakken", category: "Keuken", number: "206" },
  { name: "Diepvriesontdooier", category: "Keuken", number: "207" },
  { name: "Hygiënische Koelkastreiniger", category: "Keuken", number: "208" },
  { name: "Tegen Stinkende Vaatwassers", category: "Keuken", number: "209" },
  { name: "Glasreiniger Concentraat", category: "Keuken", number: "210" },
  { name: "Stucwerk Reiniger", category: "Keuken", number: "211" },
  { name: "Verfontvetter Concentraat", category: "Keuken", number: "212" },
  { name: "Vloerlijm Verwijderaar", category: "Keuken", number: "213" },
  { name: "Roestvrijstaal Beschermer", category: "Keuken", number: "214" },
  { name: "Vetweg", category: "Keuken", number: "216" },
  { name: "Natuursteen Aanrechtblad Reiniger", category: "Keuken", number: "217" },
  { name: "Self Act Power Foam", category: "Keuken", number: "218" },
  { name: "Duo Ontstopper Extreem Sterk", category: "Keuken", number: "220" },
  { name: "Eco Ontstopper", category: "Keuken", number: "221" },
  { name: "Keukenontstopper", category: "Keuken", number: "222" },
  { name: "Afvoerreiniger Keuken", category: "Keuken", number: "223" },
  { name: "Afvoerstankverwijderaar", category: "Keuken", number: "224" },
  { name: "Oven En Grill Vernieuwingskit", category: "Keuken", number: "227" },
  { name: "Airfryer Reiniger", category: "Keuken", number: "228" },
  { name: "Kookplaatreiniger", category: "Keuken", number: "230" },
  { name: "Eco Kookplaatreiniger", category: "Keuken", number: "231" },
  { name: "Kookplaat Polish", category: "Keuken", number: "232" },
  { name: "Eco Koffiemachine Ontkalker", category: "Keuken", number: "236" },
  { name: "Koffiemachine Ontkalker", category: "Keuken", number: "237" },
  { name: "Melksysteem Ontkalker", category: "Keuken", number: "238" },
  { name: "Nespresso Reinigingscups", category: "Keuken", number: "240" },
  { name: "Reinigingstabletten Voor Koffiemachines", category: "Keuken", number: "241" },
  { name: "Groene Aanslagreiniger Concentraat", category: "Buiten", number: "242" },
  { name: "Hardhout Ontgrijzer", category: "Buiten", number: "243" },
  { name: "Tuinmeubel Reiniger", category: "Buiten", number: "245" },
  { name: "Roetvlekken Verwijderaar", category: "Buiten", number: "246" },
  { name: "Zonnepanelen Reiniger", category: "Buiten", number: "247" },
  { name: "Zonnescherm Reiniger", category: "Buiten", number: "249" },
  { name: "Terrastegel Reiniger", category: "Buiten", number: "250" },
  { name: "Tegen Houtworm", category: "Buiten", number: "251" },
  { name: "Ontkalker 500 ml", category: "Wasruimte & Textiel", number: "301" },
  { name: "Tegen Stinkende Wasmachines", category: "Wasruimte & Textiel", number: "302" },
  { name: "Onderhoudsmonteur Voor (vaat)wasmachines", category: "Wasruimte & Textiel", number: "303" },
  { name: "Vlekweg Special Nr 1 Koffie Wijn Inkt", category: "Wasruimte & Textiel", number: "305" },
  { name: "Vlekweg Speciaal Nr 2", category: "Wasruimte & Textiel", number: "306" },
  { name: "Vlekweg Speciaal Nr 5", category: "Wasruimte & Textiel", number: "307" },
  { name: "Vlekweg 7 Special Roest", category: "Wasruimte & Textiel", number: "311" },
  { name: "Waterdicht Katoen, Linnen En Wol", category: "Wasruimte & Textiel", number: "313" },
  { name: "Waterdicht Voor 100% Synthetisch Textiel", category: "Wasruimte & Textiel", number: "312" },
  { name: "HG 4-in-1 Beschermer Voor Textiel 300ml", category: "Wasruimte & Textiel", number: "314" },
  { name: "Tegen Nare Geurtjes In Textiel", category: "Wasruimte & Textiel", number: "315" },
  { name: "Schoendeo", category: "Wasruimte & Textiel", number: "321" },
  { name: "Tegen Stinkend Wasgoed Eco", category: "Wasruimte & Textiel", number: "322" },
  { name: "Tegen Stinkend Wasgoed Wasmiddeltoevoeging", category: "Wasruimte & Textiel", number: "323" },
  { name: "Tegen Nare Geurtjes In Sportkleding", category: "Wasruimte & Textiel", number: "324" },
  { name: "Vlekken Voorbehandeling Eco", category: "Wasruimte & Textiel", number: "325" },
  { name: "Op Reis Wasje", category: "Wasruimte & Textiel", number: "326" },
  { name: "Autoreiniger En Beschermer", category: "Schuur & Garage", number: "316" },
  { name: "Velgenreiniger", category: "Schuur & Garage", number: "317" },
  { name: "Bekledingreiniger", category: "Schuur & Garage", number: "318" },
  { name: "Olievlekkenreiniger", category: "Schuur & Garage", number: "319" },
  { name: "Tegel Cementsluierverwijderaar", category: "Vloeren", number: "327" },
  { name: "Tegel Cementrestenverwijderaar", category: "Vloeren", number: "328" },
  { name: "Tegel Impregnerende Beschermer", category: "Vloeren", number: "329" },
  { name: "Tegelbeschermer", category: "Vloeren", number: "330" },
  { name: "Tegelreiniger", category: "Vloeren", number: "331" },
  { name: "Tegelreiniger Glans", category: "Vloeren", number: "332" },
  { name: "Tegelreiniger Extra Sterk", category: "Vloeren", number: "333" },
  { name: "Voegenreiniger Concentraat", category: "Vloeren", number: "334" },
  { name: "Wand En Vloervoegen Beschermer", category: "Vloeren", number: "335" },
  { name: "Kleurverdieper", category: "Vloeren", number: "336" },
  { name: "Marmer Cementsluierverwijderaar", category: "Vloeren", number: "337" },
  { name: "Natuursteen Beschermer Zijdeglans", category: "Vloeren", number: "338" },
  { name: "Marble Shine Finish", category: "Vloeren", number: "339" },
  { name: "Marmer Wash & Shine", category: "Vloeren", number: "340" },
  { name: "Natuursteenreiniger Streeploos", category: "Vloeren", number: "341" },
  { name: "Marble Shine Reiniger", category: "Vloeren", number: "342" },
  { name: "Natuursteen Voedende Reiniger", category: "Vloeren", number: "343" },
  { name: "Parketbeschermer Glans", category: "Vloeren", number: "345" },
  { name: "Parket En Hout Reiniger", category: "Vloeren", number: "347" },
  { name: "Houtvloer Olie", category: "Vloeren", number: "349" },
  { name: "Kunststof Beschermer", category: "Vloeren", number: "350" },
  { name: "Kunststofreiniger Glans", category: "Vloeren", number: "351" },
  { name: "Kunststofreiniger Extra Sterk", category: "Vloeren", number: "352" },
  { name: "Laminaat Vinyl En PVC Beschermer", category: "Vloeren", number: "353" },
  { name: "Laminaat, Vinyl En PVC Reiniger", category: "Vloeren", number: "354" },
  { name: "Laminaat, Vinyl En PVC Reiniger Glans Ultra Clean Shine", category: "Vloeren", number: "355" },
  { name: "Laminaat, Vinyl En PVC Reiniger Extra Sterk", category: "Vloeren", number: "356" },
  { name: "Tapijtreiniger", category: "Vloeren", number: "357" },
  { name: "Tapijt Reiniger 500 ml", category: "Vloeren", number: "358" },
  { name: "Schoonmaakazijn 1 liter", category: "Vloeren", number: "359" },
];
const searchInput = document.querySelector("#productSearch");
const clearButton = document.querySelector("#clearSearch");
const result = document.querySelector("#result");
const productList = document.querySelector("#productList");
const countLabel = document.querySelector("#countLabel");

function normalize(value) {
  return String(value)
    .trim()
    .toLocaleLowerCase("nl-NL")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getCategoryColor(category) {
  if (category === "Woonkamer & Overige Vertrekken") {
    return "#d72727";
  }

  if (category === "Badkamer & Toilet") {
    return "#1687d9";
  }

  if (category === "Keuken") {
    return "#ffcc00";
  }

  if (category === "Buiten") {
    return "#1fa34a";
  }

  if (category === "Schuur & Garage") {
    return "#808080";
  }

  if (category === "Wasruimte & Textiel") {
    return "#8b4bd9";
  }

  if (category === "Vloeren") {
    return "#8a5a2b";
  }

  return "#ffcc00";
}

function setResult(product, query, searchMode = "name") {
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

  const mainResult =
    searchMode === "number"
      ? `<strong class="product-result-name">${product.name}</strong>`
      : `<strong>${product.number}</strong>`;
  const label =
    searchMode === "number"
      ? `${product.category} - nummer ${product.number}`
      : `${product.category} - ${product.name}`;

  result.innerHTML = `
    <span class="result-label">${label}</span>
    <span class="result-main">
      ${mainResult}
      <span
        class="category-color"
        style="background: ${getCategoryColor(product.category)}"
        aria-label="Kleur voor productgroep ${product.category}"
      ></span>
    </span>
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
  const isNumberSearch = /^\d+$/.test(query);
  const matches = query
    ? products.filter((product) =>
        `${normalize(product.name)} ${normalize(product.category)} ${product.number}`.includes(query),
      )
    : products;
  const exactMatch = products.find(
    (product) => normalize(product.name) === query || String(product.number) === query,
  );
  const bestMatch = exactMatch || matches[0];

  setResult(bestMatch, query, isNumberSearch ? "number" : "name");
  renderList(matches);
}

searchInput.addEventListener("input", updateSearch);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  updateSearch();
  searchInput.focus();
});

updateSearch();


