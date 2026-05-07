const products = [
  { name: "Badkamerreiniger Extra Glans", category: "Badkamer", number: 20001 },
  { name: "Douche & Wasbakspray", category: "Badkamer", number: 20002 },
  { name: "Douchecabine Beschermer", category: "Badkamer", number: 20003 },
  { name: "Power Foam Douche Reinigend Schuim", category: "Badkamer", number: 20004 },
  { name: "Schimmelreiniger", category: "Badkamer", number: 20005 },
  { name: "Schimmel-, Vocht- en Weerplekkenreiniger", category: "Badkamer", number: 20006 },
  { name: "Kalkweg Concentraat", category: "Badkamer", number: 20007 },
  { name: "Kalkweg Schuimspray", category: "Badkamer", number: 20008 },
  { name: "Badkamer Ontkalker", category: "Badkamer", number: 20009 },
  { name: "Sanitairglansreiniger", category: "Badkamer", number: 20010 },
  { name: "Hygiënische Toiletbrilreiniger", category: "Toilet", number: 20011 },
  { name: "Toiletruimte Reiniger", category: "Toilet", number: 20012 },
  { name: "Urinegeur Verwijderaar", category: "Toilet", number: 20013 },
  { name: "Kookplaatreiniger", category: "Keuken", number: 20014 },
  { name: "Oven-, Grill- en Barbecue Reiniger", category: "Keuken", number: 20015 },
  { name: "Vetweg", category: "Keuken", number: 20016 },
  { name: "Keukenreiniger", category: "Keuken", number: 20017 },
  { name: "Koelkast Reiniger", category: "Keuken", number: 20018 },
  { name: "Magnetronreiniger", category: "Keuken", number: 20019 },
  { name: "RVS Snelreiniger", category: "Keuken", number: 20020 },
  { name: "Roestvrijstaal Reiniger", category: "Keuken", number: 20021 },
  { name: "Airfryer Reiniger", category: "Keuken", number: 20022 },
  { name: "Frituurpan Reiniger", category: "Keuken", number: 20023 },
  { name: "Barbecue Reiniger", category: "Keuken", number: 20024 },
  { name: "Ontkalker", category: "Ontkalken & Apparaten", number: 20025 },
  { name: "Waterkokerreiniger en Ontkalker", category: "Ontkalken & Apparaten", number: 20026 },
  { name: "Nespresso Ontkalker", category: "Ontkalken & Apparaten", number: 20027 },
  { name: "Espresso Apparaat Reiniger", category: "Ontkalken & Apparaten", number: 20028 },
  { name: "Koffiemachine Ontkalker", category: "Ontkalken & Apparaten", number: 20029 },
  { name: "Wasmachinereiniger", category: "Ontkalken & Apparaten", number: 20030 },
  { name: "Vaatwasmachinereiniger", category: "Ontkalken & Apparaten", number: 20031 },
  { name: "Witgoed Reiniger", category: "Ontkalken & Apparaten", number: 20032 },
  { name: "Afvoer Ontstopper", category: "Afvoer & Ontstoppen", number: 20033 },
  { name: "Duo Ontstopper", category: "Afvoer & Ontstoppen", number: 20034 },
  { name: "Vloeibare Ontstopper", category: "Afvoer & Ontstoppen", number: 20035 },
  { name: "Haar Ontstopper", category: "Afvoer & Ontstoppen", number: 20036 },
  { name: "Stinkende Afvoer Reiniger", category: "Afvoer & Ontstoppen", number: 20037 },
  { name: "Tegelreiniger", category: "Vloeren", number: 20038 },
  { name: "Tegelreiniger Extra Sterk", category: "Vloeren", number: 20039 },
  { name: "Laminaatreiniger Glans", category: "Vloeren", number: 20040 },
  { name: "Laminaatreiniger Extra Sterk", category: "Vloeren", number: 20041 },
  { name: "Parketreiniger", category: "Vloeren", number: 20042 },
  { name: "Parketreiniger Extra Sterk", category: "Vloeren", number: 20043 },
  { name: "Vloerreiniger", category: "Vloeren", number: 20044 },
  { name: "PVC Vloerreiniger", category: "Vloeren", number: 20045 },
  { name: "Tapijtreiniger", category: "Vloeren", number: 20046 },
  { name: "Parket Polish", category: "Vloeren", number: 20047 },
  { name: "Laminaat Beschermfilm Met Glans", category: "Vloeren", number: 20048 },
  { name: "Laminaat Beschermfilm Zonder Glans", category: "Vloeren", number: 20049 },
  { name: "Tegel Glanshersteller", category: "Vloeren", number: 20050 },
  { name: "Voegenreiniger", category: "Voegen & Tegels", number: 20051 },
  { name: "Voegenreiniger Kant en Klaar", category: "Voegen & Tegels", number: 20052 },
  { name: "Voegenreiniger Concentraat", category: "Voegen & Tegels", number: 20053 },
  { name: "Power Gel Brush Voegenreiniger", category: "Voegen & Tegels", number: 20054 },
  { name: "Voegenkleurhersteller", category: "Voegen & Tegels", number: 20055 },
  { name: "Voegenbeschermer", category: "Voegen & Tegels", number: 20056 },
  { name: "Cementsluierverwijderaar", category: "Voegen & Tegels", number: 20057 },
  { name: "Cement- en Kalksluierverwijderaar", category: "Voegen & Tegels", number: 20058 },
  { name: "Natuursteen Reiniger Voedend", category: "Natuursteen & Marmer", number: 20059 },
  { name: "Natuursteen Glansreiniger", category: "Natuursteen & Marmer", number: 20060 },
  { name: "Marmerreiniger", category: "Natuursteen & Marmer", number: 20061 },
  { name: "Impregneermiddel Natuursteen", category: "Natuursteen & Marmer", number: 20062 },
  { name: "Hardhoutreiniger", category: "Hout & Meubels", number: 20063 },
  { name: "Houtreiniger", category: "Hout & Meubels", number: 20064 },
  { name: "Teak Reiniger", category: "Hout & Meubels", number: 20065 },
  { name: "Teak Kleurhersteller", category: "Hout & Meubels", number: 20066 },
  { name: "Meubelreiniger", category: "Hout & Meubels", number: 20067 },
  { name: "Meubel Polish", category: "Hout & Meubels", number: 20068 },
  { name: "Meubelhersteller Donker Hout", category: "Hout & Meubels", number: 20069 },
  { name: "Meubelhersteller Licht Hout", category: "Hout & Meubels", number: 20070 },
  { name: "Leerreiniger", category: "Hout & Meubels", number: 20071 },
  { name: "Leder Protector", category: "Hout & Meubels", number: 20072 },
  { name: "Terrasreiniger", category: "Tuin & Buiten", number: 20073 },
  { name: "Vlonderreiniger", category: "Tuin & Buiten", number: 20074 },
  { name: "Groene Aanslagreiniger", category: "Tuin & Buiten", number: 20075 },
  { name: "Sierpleisterreiniger", category: "Tuin & Buiten", number: 20076 },
  { name: "Kunststofreiniger", category: "Tuin & Buiten", number: 20077 },
  { name: "Rolluikenreiniger", category: "Tuin & Buiten", number: 20078 },
  { name: "Caravan Reiniger", category: "Tuin & Buiten", number: 20079 },
  { name: "Glasreiniger", category: "Glas & Ramen", number: 20080 },
  { name: "Glasreiniger Concentraat", category: "Glas & Ramen", number: 20081 },
  { name: "Vlekverwijderaar Extra Sterk", category: "Vlekken & Textiel", number: 20082 },
  { name: "Textielvlekkenverwijderaar Speciaal Nr 1", category: "Vlekken & Textiel", number: 20083 },
  { name: "Textielvlekkenverwijderaar Speciaal Nr 2", category: "Vlekken & Textiel", number: 20084 },
  { name: "Textielvlekkenverwijderaar Speciaal Nr 3", category: "Vlekken & Textiel", number: 20085 },
  { name: "Textielvlekkenverwijderaar Speciaal Nr 4", category: "Vlekken & Textiel", number: 20086 },
  { name: "Textielvlekkenverwijderaar Speciaal Nr 6", category: "Vlekken & Textiel", number: 20087 },
  { name: "Schoendeo", category: "Vlekken & Textiel", number: 20088 },
  { name: "Wasmiddel Tegen Nare Geurtjes", category: "Vlekken & Textiel", number: 20089 },
  { name: "Wasmiddel Tegen Stinkend Wasgoed", category: "Vlekken & Textiel", number: 20090 },
  { name: "Wasmiddel Tegen Nare Geurtjes Op Sportkleding", category: "Vlekken & Textiel", number: 20091 },
  { name: "Allesreiniger Alle Nare Geurtjes Weg", category: "Vlekken & Textiel", number: 20092 },
  { name: "4-in-1 Beschermer Voor Textiel", category: "Vlekken & Textiel", number: 20093 },
  { name: "Waterdicht Voor 100% Synthetisch Textiel", category: "Vlekken & Textiel", number: 20094 },
  { name: "Koper Reiniger", category: "Metaal & Onderhoud", number: 20095 },
  { name: "Zilver Reiniger", category: "Metaal & Onderhoud", number: 20096 },
  { name: "Stickerverwijderaar", category: "Metaal & Onderhoud", number: 20097 },
  { name: "Lijmverwijderaar", category: "Metaal & Onderhoud", number: 20098 },
  { name: "Nicotine Aanslagreiniger", category: "Metaal & Onderhoud", number: 20099 },
  { name: "Auto Interieurreiniger", category: "Auto", number: 20100 },
  { name: "Autoshampoo", category: "Auto", number: 20101 },
  { name: "Ruitenontdooier", category: "Auto", number: 20102 },
  { name: "Velgenreiniger", category: "Auto", number: 20103 },
  { name: "Kunststofbeschermer", category: "Auto", number: 20104 },
  { name: "Insectenverwijderaar", category: "Ongediertebestrijding", number: 20105 },
  { name: "Mierenlokdoos", category: "Ongediertebestrijding", number: 20106 },
  { name: "Insectenspray", category: "Ongediertebestrijding", number: 20107 },
  { name: "Muizenval", category: "Ongediertebestrijding", number: 20108 },
  { name: "Houtwormmiddel", category: "Ongediertebestrijding", number: 20109 },
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
    <span class="result-label">${product.category} · ${product.name}</span>
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
