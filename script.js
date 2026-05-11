const products = [
  { name: "Beeldschermreiniger", category: "Woonkamer & Overige Vertrekken", number: "101" },
  { name: "Brilreiniger 120 ml", category: "Woonkamer & Overige Vertrekken", number: "102" },
  { name: "Zilverpoets 125 ml", category: "Woonkamer & Overige Vertrekken", number: "103" },
  { name: "Zilverglans 125 ml", category: "Woonkamer & Overige Vertrekken", number: "103" },
  { name: "Koper Reiniger", category: "Woonkamer & Overige Vertrekken", number: "104" },
  { name: "Koper Glans Shampoo", category: "Woonkamer & Overige Vertrekken", number: "104" },
  { name: "Kachelruitjesreiniger", category: "Woonkamer & Overige Vertrekken", number: "105" },
  { name: "Vlekverwijderaar Extreem Sterk", category: "Woonkamer & Overige Vertrekken", number: "106" },
  { name: "Vlekkenspray Extreem Sterk 0,5 L", category: "Woonkamer & Overige Vertrekken", number: "106" },
  { name: "Stofzuiger Luchtverfrisser", category: "Woonkamer & Overige Vertrekken", number: "107" },
  { name: "Meubelglans 300 ml", category: "Woonkamer & Overige Vertrekken", number: "108" },
  { name: "Meubelbeschermer 300 ml", category: "Woonkamer & Overige Vertrekken", number: "108" },
  { name: "Meubelhersteller Donker Hout, Meubelline", category: "Woonkamer & Overige Vertrekken", number: "109" },
  { name: "Meubelhersteller Licht Hout, Meubelline", category: "Woonkamer & Overige Vertrekken", number: "110" },
  { name: "Verzorgende Meubelolie", category: "Woonkamer & Overige Vertrekken", number: "111" },
  { name: "Marble Crystalizer 250 ml", category: "Woonkamer & Overige Vertrekken", number: "112" },
  { name: "4 In 1 Voor Leer", category: "Woonkamer & Overige Vertrekken", number: "113" },
  { name: "Dieptereiniger Voor Leer", category: "Woonkamer & Overige Vertrekken", number: "114" },
  { name: "Leerspray", category: "Woonkamer & Overige Vertrekken", number: "115" },
  { name: "Stickerverwijderaar", category: "Woonkamer & Overige Vertrekken", number: "116" },
  { name: "Hygiënische Matras Opfrisser", category: "Woonkamer & Overige Vertrekken", number: "117" },
  { name: "Alle Nare Geurtjes Weg", category: "Woonkamer & Overige Vertrekken", number: "118" },
  { name: "Kunststof Reiniger", category: "Woonkamer & Overige Vertrekken", number: "119" },
  { name: "Glasreiniger", category: "Woonkamer & Overige Vertrekken", number: "120" },
  { name: "Marmerpolish 300 ml", category: "Woonkamer & Overige Vertrekken", number: "201" },
  { name: "Luchtdrukreiniger Kiertjes En Gaatjes", category: "Woonkamer & Overige Vertrekken", number: "202" },
  { name: "Perslucht", category: "Woonkamer & Overige Vertrekken", number: "202" },
  { name: "Behanglijmverwijderaar", category: "Woonkamer & Overige Vertrekken", number: "203" },
  { name: "Behang Verwijderaar", category: "Woonkamer & Overige Vertrekken", number: "203" },
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
  { name: "Hygienische Toiletgel", category: "Badkamer & Toilet", number: "136" },
  { name: "Toilet Renovatiekit", category: "Badkamer & Toilet", number: "137" },
  { name: "Kalkverwijderaar Eco", category: "Badkamer & Toilet", number: "138" },
  { name: "Kalkweg 3x Sterker", category: "Badkamer & Toilet", number: "139" },
  { name: "Kalkweg Spray", category: "Badkamer & Toilet", number: "140" },
  { name: "Kalkweg Gekleurd Sanitair", category: "Badkamer & Toilet", number: "141" },
  { name: "Power Gel Brush Kalk", category: "Badkamer & Toilet", number: "142" },
  { name: "Kalkweg Concentraat 1L", category: "Badkamer & Toilet", number: "143" },
  { name: "Kalkweg Concentraat 0,5 L", category: "Badkamer & Toilet", number: "144" },
  { name: "Natuursteen Badkamerreiniger", category: "Badkamer & Toilet", number: "145" },
  { name: "Douche En Wasbak Spray", category: "Badkamer & Toilet", number: "146" },
  { name: "Power Foam Badkamer", category: "Badkamer & Toilet", number: "147" },
  { name: "Marble Cleaner", category: "Badkamer & Toilet", number: "148" },
  { name: "Marmer Cleaner", category: "Badkamer & Toilet", number: "148" },
  { name: "Power Foam Douche", category: "Badkamer & Toilet", number: "149" },
  { name: "Siliconenkitverwijderaar", category: "Badkamer & Toilet", number: "150" },
  { name: "Douchecabine Beschermer", category: "Badkamer & Toilet", number: "151" },
  { name: "Hygiënische Whirlpoolreiniger", category: "Badkamer & Toilet", number: "152" },
  { name: "Staalpolish 250 ml", category: "Keuken", number: "204" },
  { name: "Afzuigkapfilter Ontvetter", category: "Keuken", number: "205" },
  { name: "Tegen Stinkende Vuilnisbakken", category: "Keuken", number: "206" },
  { name: "Diepvriesontdooier", category: "Keuken", number: "207" },
  { name: "Hygiënische Koelkastreiniger 0,5 L", category: "Keuken", number: "208" },
  { name: "Tegen Stinkende Vaatwassers", category: "Keuken", number: "209" },
  { name: "Glasreiniger Concentraat 500 ml", category: "Woonkamer & Overige Vertrekken", number: "210" },
  { name: "Stucwerk Reiniger", category: "Keuken", number: "211" },
  { name: "Verfontvetter Concentraat", category: "Keuken", number: "212" },
  { name: "Vloerlijm Verwijderaar", category: "Keuken", number: "213" },
  { name: "Roestvrijstaal Beschermer", category: "Keuken", number: "214" },
  { name: "Roestvrij Staal Snel Reiniger 300 ml", category: "Keuken", number: "215" },
  { name: "Vetweg Spray 500 ml", category: "Keuken", number: "216" },
  { name: "Natuursteen Aanrechtblad Reiniger", category: "Keuken", number: "217" },
  { name: "Topprotector 100 ml", category: "Keuken", number: "218" },
  { name: "Self Act Power Foam", category: "Keuken", number: "219" },
  { name: "Duo Ontstopper Extreem Sterk", category: "Keuken", number: "220" },
  { name: "Eco Ontstopper", category: "Keuken", number: "221" },
  { name: "Keukenontstopper", category: "Keuken", number: "222" },
  { name: "Afvoerreiniger Keuken", category: "Keuken", number: "223" },
  { name: "Afvoerstankverwijderaar", category: "Keuken", number: "224" },
  { name: "Ovenreiniger Eco 500 ml", category: "Keuken", number: "225" },
  { name: "Oven Grillreiniger 500 ml", category: "Keuken", number: "226" },
  { name: "Power Gel Brush Oven 250 ml", category: "Keuken", number: "227" },
  { name: "Oven & Grill Vernieuwingskit", category: "Keuken", number: "228" },
  { name: "Magnetronreiniger 500 ml", category: "Keuken", number: "229" },
  { name: "Airfryer Reiniger 250 ml", category: "Keuken", number: "230" },
  { name: "Frituurpan Reiniger", category: "Keuken", number: "231" },
  { name: "Eco Kookplaatreiniger", category: "Keuken", number: "232" },
  { name: "Kookplaatreiniger", category: "Keuken", number: "233" },
  { name: "Kookplaat Polish", category: "Keuken", number: "234" },
  { name: "Keramische Kookplaat Reiniger 250 ml", category: "Keuken", number: "234" },
  { name: "Reiniger & Ontkalker Waterkoker", category: "Keuken", number: "235" },
  { name: "Koffiemachine Ontkalker Eco 500 ml", category: "Keuken", number: "236" },
  { name: "Citroenzuur Ontkalker 500 ml", category: "Keuken", number: "236" },
  { name: "Koffiemachine Ontkalker", category: "Keuken", number: "237" },
  { name: "Koffiemachine Ontkalker Melkzuur", category: "Keuken", number: "238" },
  { name: "Nespresso Ontkalker 500 ml", category: "Keuken", number: "239" },
  { name: "Nespresso Reinigingscups", category: "Keuken", number: "240" },
  { name: "Reinigingstabletten Voor Koffiemachines", category: "Keuken", number: "241" },
  { name: "Groene Aanslagreiniger Concentraat", category: "Buiten", number: "242" },
  { name: "Hardhout Ontgrijzer", category: "Buiten", number: "243" },
  { name: "Hardhout Reiniger Diep", category: "Buiten", number: "243" },
  { name: "Tuinmeubelvernieuwer Hardhout 500 ml", category: "Buiten", number: "244" },
  { name: "Tuinmeubel Reiniger", category: "Buiten", number: "245" },
  { name: "Roestvlekken Verwijderaar 500 ml", category: "Buiten", number: "246" },
  { name: "Oxydatie Verwijderaar 500 ml", category: "Buiten", number: "246" },
  { name: "Zonnepanelen Reiniger", category: "Buiten", number: "247" },
  { name: "Waterdicht Scherm", category: "Buiten", number: "248" },
  { name: "Zonnescherm Reiniger", category: "Buiten", number: "249" },
  { name: "Terrastegel Reiniger", category: "Buiten", number: "250" },
  { name: "Tegen Houtworm", category: "Buiten", number: "251" },
  { name: "Laminaat, Vinyl En PVC Beschermer 1 L", category: "Vloeren", number: "353" },
  { name: "Laminaatglans 1 L", category: "Vloeren", number: "353" },
  { name: "Ontkalker 500 ml", category: "Wasruimte & Textiel", number: "301" },
  { name: "Tegen Stinkende Wasmachines", category: "Wasruimte & Textiel", number: "302" },
  { name: "Onderhoudsmonteur Voor (vaat)wasmachines", category: "Wasruimte & Textiel", number: "303" },
  { name: "Onbekend", category: "Wasruimte & Textiel", number: "304" },
  { name: "Vlekweg Special Nr 1 Koffie Wijn Inkt", category: "Wasruimte & Textiel", number: "305" },
  { name: "Vlekweg Speciaal Nr 2", category: "Wasruimte & Textiel", number: "306" },
  { name: "Onbekend", category: "Wasruimte & Textiel", number: "307" },
  { name: "Onbekend", category: "Wasruimte & Textiel", number: "308" },
  { name: "Vlekweg Speciaal Nr 5", category: "Wasruimte & Textiel", number: "309" },
  { name: "Vlekweg 6 Kleurstoffen, Balpen", category: "Wasruimte & Textiel", number: "310" },
  { name: "Vlekweg 7 Special Roest", category: "Wasruimte & Textiel", number: "311" },
  { name: "Waterdicht Katoen, Linnen En Wol", category: "Wasruimte & Textiel", number: "313" },
  { name: "Waterdicht Voor 100% Synthetisch Textiel", category: "Wasruimte & Textiel", number: "312" },
  { name: "HG 4-in-1 Beschermer Voor Textiel 300ml", category: "Wasruimte & Textiel", number: "314" },
  { name: "Tegen Nare Geurtjes In Textiel", category: "Wasruimte & Textiel", number: "315" },
  { name: "Schoendeo 0,25L", category: "Wasruimte & Textiel", number: "321" },
  { name: "Tegen Stinkend Wasgoed Eco", category: "Wasruimte & Textiel", number: "322" },
  { name: "Tegen Stinkend Wasgoed Wasmiddeltoevoeging", category: "Wasruimte & Textiel", number: "323" },
  { name: "Tegen Nare Geurtjes In Sportkleding", category: "Wasruimte & Textiel", number: "324" },
  { name: "Vlekken Voorbehandeling Eco", category: "Wasruimte & Textiel", number: "325" },
  { name: "Op Reis Wasje 200 ml", category: "Wasruimte & Textiel", number: "326" },
  { name: "Auto Carwash Shampoo 1L", category: "Schuur & Garage", number: "316" },
  { name: "Autoreiniger En Beschermer 1 L", category: "Schuur & Garage", number: "316" },
  { name: "Velgenreiniger", category: "Schuur & Garage", number: "317" },
  { name: "Bekledingreiniger", category: "Schuur & Garage", number: "318" },
  { name: "Olievlekkenreiniger", category: "Schuur & Garage", number: "319" },
  { name: "Roestverwijderaar 500 ml", category: "Schuur & Garage", number: "320" },
  { name: "Roestoplosser 500 ml", category: "Schuur & Garage", number: "320" },
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
  { name: "Natuursteen Kleurverdieper 50 ml", category: "Vloeren", number: "336" },
  { name: "Marmer Cementsluierverwijderaar", category: "Vloeren", number: "337" },
  { name: "Natuursteen Cementsluier Verwijderaar 1 L", category: "Vloeren", number: "337" },
  { name: "Natuursteen Impregnerende Beschermer", category: "Vloeren", number: "338" },
  { name: "Marble Shine Finish", category: "Vloeren", number: "339" },
  { name: "Marmer Wash & Shine", category: "Vloeren", number: "340" },
  { name: "Marble Wash & Shine 1 L", category: "Vloeren", number: "340" },
  { name: "Natuursteenreiniger Streeploos", category: "Vloeren", number: "341" },
  { name: "Marble Shine Reiniger", category: "Vloeren", number: "342" },
  { name: "Natuursteenreiniger Extra Sterk", category: "Vloeren", number: "342" },
  { name: "Natuursteen Voedende Reiniger", category: "Vloeren", number: "343" },
  { name: "Olie Vlekken Absorbeerder", category: "Vloeren", number: "344" },
  { name: "Parketbeschermer Glans", category: "Vloeren", number: "345" },
  { name: "Parket En Hout Reiniger", category: "Vloeren", number: "347" },
  { name: "Parket Polish Remover 1 L", category: "Vloeren", number: "348" },
  { name: "Hout Vloerolie", category: "Vloeren", number: "349" },
  { name: "Kunststof Beschermer", category: "Vloeren", number: "350" },
  { name: "Kunststofreiniger Glans", category: "Vloeren", number: "351" },
  { name: "Kunststofreiniger Extra Sterk", category: "Vloeren", number: "352" },
  { name: "Laminaat, Vinyl En PVC Reiniger", category: "Vloeren", number: "354" },
  { name: "Laminaat, Vinyl En PVC Reiniger Glans", category: "Vloeren", number: "355" },
  { name: "Laminaat, Vinyl En PVC Reiniger Extra Sterk", category: "Vloeren", number: "356" },
  { name: "Tapijtreiniger 1 L", category: "Vloeren", number: "357" },
  { name: "Tapijt Reiniger 500 ml", category: "Vloeren", number: "358" },
  { name: "Schoonmaakazijn 1 liter", category: "Vloeren", number: "359" },
  { name: "Schoonmaakazijn 5 L", category: "Vloeren", number: "360" },
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

function sortProducts(items) {
  return [...items].sort((firstProduct, secondProduct) => {
    const numberDifference = Number(firstProduct.number) - Number(secondProduct.number);

    if (numberDifference !== 0) {
      return numberDifference;
    }

    return firstProduct.name.localeCompare(secondProduct.name, "nl-NL", {
      sensitivity: "base",
      numeric: true,
    });
  });
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
      <button
        type="button"
        class="category-color"
        data-category="${product.category}"
        style="background: ${getCategoryColor(product.category)}"
        aria-label="Toon alle artikelen uit ${product.category}"
      ></button>
    </span>
  `;
}

function renderList(items, label = null) {
  productList.innerHTML = "";
  countLabel.textContent = label || `${items.length} gevonden`;
  const sortedItems = sortProducts(items);

  if (items.length === 0) {
    productList.innerHTML = `<p class="no-results">Geen producten gevonden.</p>`;
    return;
  }

  for (const product of sortedItems) {
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
result.addEventListener("click", (event) => {
  const colorButton = event.target.closest(".category-color");

  if (!colorButton) {
    return;
  }

  const category = colorButton.dataset.category;
  const categoryProducts = products.filter((product) => product.category === category);
  renderList(categoryProducts, `${categoryProducts.length} in groep`);
});
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  updateSearch();
  searchInput.focus();
});

updateSearch();


