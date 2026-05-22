const products = [
  { name: "Beeldschermreiniger", category: "Woonkamer & Overige Vertrekken", number: "101", image: "images/101.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/glasreinigers/hg-beeldscherm-reiniger-125ml/5641590" },
  { name: "Brilreiniger (120 ml)", category: "Woonkamer & Overige Vertrekken", number: "102", image: "images/102.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/allesreinigers/hg-brilreiniger-fles-125ml/2483475" },
  { name: "Zilverpoets (125 ml)", category: "Woonkamer & Overige Vertrekken", number: "103", image: "images/103.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/onderhouds-restauratie-producten-voor-specifieke-oppervlakken/metaalreiniging-roestverwijderaars/metaalreinigers/hg-zilver-polish-125ml/2431943" },
  { name: "Zilverglans (125 ml)", category: "Woonkamer & Overige Vertrekken", number: "103", image: "images/103.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/onderhouds-restauratie-producten-voor-specifieke-oppervlakken/metaalreiniging-roestverwijderaars/metaalreinigers/hg-zilver-polish-125ml/2431943" },
  { name: "Koper reiniger (500 ml)", category: "Woonkamer & Overige Vertrekken", number: "104", image: "images/104.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/onderhouds-restauratie-producten-voor-specifieke-oppervlakken/metaalreiniging-roestverwijderaars/metaalreinigers/hg-koperreiniger-500ml/2431922" },
  { name: "Koper Glans Shampoo", category: "Woonkamer & Overige Vertrekken", number: "104" },
  { name: "Kachelruitjesreiniger (500 ml)", category: "Woonkamer & Overige Vertrekken", number: "105", image: "images/105.jpg", praxisUrl: "https://www.praxis.nl/verwarmingen-airco-s/kachels-haarden/schoorsteenvegen-onderhoud/onderhoudsproducten-voor-kachel-haard/hg-kachelruitreiniger-500ml/2433469" },
  { name: "Vlekverwijderaar Extreem Sterk (500 ml)", category: "Woonkamer & Overige Vertrekken", number: "106", image: "images/106.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/wassen-strijken/was-textiel-reinigingsmiddelen/textielreinigers/hg-vlekverwijderaar-extra-sterk-500ml/5544894" },
  { name: "Vlekkenspray Extreem Sterk (500 ml)", category: "Woonkamer & Overige Vertrekken", number: "106", image: "images/106.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/wassen-strijken/was-textiel-reinigingsmiddelen/textielreinigers/hg-vlekverwijderaar-extra-sterk-500ml/5544894" },
  { name: "Stofzuigerlucht verfrisser (180 g)", category: "Woonkamer & Overige Vertrekken", number: "107", image: "images/107.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/huishoudelijke-apparaten/stofzuigers-accessoires/stofzuigerzakken/hg-stofzuiger-luchtverfrisser-180gr/5229752" },
  { name: "Meubelglans (300 ml)", category: "Woonkamer & Overige Vertrekken", number: "108" },
  { name: "Meubelbeschermer (300 ml)", category: "Woonkamer & Overige Vertrekken", number: "108" },
  { name: "Meubelhersteller Donker Hout, Meubelline (250 ml)", category: "Woonkamer & Overige Vertrekken", number: "109", image: "images/109.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/hout-onderhoud-reparatie/olie-wasverwijderaars/meubelshampoo-olieverwijderaars/meubeline-hg-meubelhersteller-donker-hout-250ml/2432156" },
  { name: "Meubelhersteller licht hout, Meubeline (250 ml)", category: "Woonkamer & Overige Vertrekken", number: "110", eans: ["8711577190637", "8711577012434"], image: "images/110.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/hout-onderhoud-reparatie/olie-wasverwijderaars/meubelherstellers/hg-meubeline-renovatie-voor-lichte-houtsoorten-250ml/2478810" },
  { name: "Verzorgende Meubelolie", category: "Woonkamer & Overige Vertrekken", number: "111" },
  { name: "Natuursteen Crystalizer (250 ml)", category: "Woonkamer & Overige Vertrekken", number: "112" },
  { name: "4 In 1 Voor Leer (250 ml)", category: "Woonkamer & Overige Vertrekken", number: "113", image: "images/113.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/onderhouds-restauratie-producten-voor-specifieke-oppervlakken/leerverzorging-onderhoud/leerolie/hg-4-in-1-leer-afdichtingsmiddel-250ml/2432051" },
  { name: "Dieptereiniger voor leer (250 ml)", category: "Woonkamer & Overige Vertrekken", number: "114", image: "images/114.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/onderhouds-restauratie-producten-voor-specifieke-oppervlakken/leerverzorging-onderhoud/leerreinigers/hg-allesreiniger-dieptereiniger-voor-leer-0-25l/2432067" },
  { name: "Leerreiniger (300 ml)", category: "Woonkamer & Overige Vertrekken", number: "115", image: "images/115.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/onderhouds-restauratie-producten-voor-specifieke-oppervlakken/leerverzorging-onderhoud/leerreinigers/hg-leerreiniger-spray-300ml/5544884" },
  { name: "Stickerverwijderaar (300 ml)", category: "Woonkamer & Overige Vertrekken", number: "116", image: "images/116.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/oplosmiddelen-afbijtmiddelen-reinigers/oplosmiddelen/hg-stickeroplosser-300ml/2431828" },
  { name: "Hygiënische Matras Opfrisser (500 ml)", category: "Woonkamer & Overige Vertrekken", number: "117", image: "images/117.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/ontsmettingsmiddelen/hg-hygienische-matras-opfrisser-500ml/5553443" },
  { name: "Alle Nare Geurtjes Weg (500 ml)", category: "Woonkamer & Overige Vertrekken", number: "118", image: "images/118.jpg" },
  { name: "Kunststof Reiniger (500 ml)", category: "Woonkamer & Overige Vertrekken", number: "119", image: "images/119.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/onderhouds-restauratie-producten-voor-specifieke-oppervlakken/onderhoud-speciale-ondergronden/hg-allesreiniger-kunststof-intensief-0-5l/5341378" },
  { name: "Glasreiniger (500 ml)", category: "Woonkamer & Overige Vertrekken", number: "120", image: "images/120.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/glasreinigers/hg-glasreiniger-streeploze-spray-0-5l/2431875" },
  { name: "Marmerpolish (300 ml)", category: "Woonkamer & Overige Vertrekken", number: "201" },
  { name: "Luchtdrukreiniger Kiertjes en Gaatjes", category: "Woonkamer & Overige Vertrekken", number: "202" },
  { name: "Perslucht", category: "Woonkamer & Overige Vertrekken", number: "202" },
  { name: "Behanglijmverwijderaar", category: "Woonkamer & Overige Vertrekken", number: "203" },
  { name: "Behang Verwijderaar", category: "Woonkamer & Overige Vertrekken", number: "203" },
  { name: "Haarontstopper (450 ml)", category: "Badkamer & Toilet", number: "121", image: "images/121.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/rioolontstoppers-onderhoud/ontstoppingsgels/hg-haarontstopper-450ml/5654687" },
  { name: "Gelontstopper (1 l)", category: "Badkamer & Toilet", number: "122", image: "images/122.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/rioolontstoppers-onderhoud/ontstoppingsgels/hg-gelontstopper-1l/5696609" },
  { name: "Ontstopper (Super snel in 5 min) (1000 ml)", category: "Badkamer & Toilet", number: "123", image: "images/123.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/rioolontstoppers-onderhoud/ontstoppingsgels/hg-vloeibare-ontstopper-1l/2431550" },
  { name: "Vloeibare Ontstopper (500 ml)", category: "Badkamer & Toilet", number: "124", image: "images/124.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/rioolontstoppers-onderhoud/ontstoppingsgels/hg-vloeibare-ontstopper-500ml/5544892" },
  { name: "Afvoerreiniger Badkamer 6 St", category: "Badkamer & Toilet", number: "125" },
  { name: "Schimmel Vocht & Weerplekken Reiniger", category: "Badkamer & Toilet", number: "126", image: "images/126.jpg" },
  { name: "Schimmelreiniger Schuimspray Bewezen Effectief (500 ml)", category: "Badkamer & Toilet", number: "127", image: "images/127.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/schimmelreinigers/hg-schimmelreiniger-schuimspray-500ml/5544891" },
  { name: "Schimmelbeschermer (500 ml)", category: "Badkamer & Toilet", number: "128", image: "images/128.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/schimmelreinigers/hg-schimmelbeschermer-500ml/10370812" },
  { name: "Voegenreiniger (500 ml)", category: "Badkamer & Toilet", number: "129", image: "images/129.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/voegenreinigers/hg-voegenreiniger-kant-en-klaar-500ml/5294650" },
  { name: "Power Gel Brush Voegen (250 ml)", category: "Badkamer & Toilet", number: "130", image: "images/130.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/voegenreinigers/hg-allesreiniger-power-gel-brush-voegen-0-25l/10216928" },
  { name: "Alle Nare Geurtjes Weg (500 ml)", category: "Badkamer & Toilet", number: "131", image: "images/131.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/wassen-strijken/was-textiel-reinigingsmiddelen/textiel-ontgeurders/hg-allesreiniger-alle-nare-geurtjes-weg-0-5l/2431812" },
  { name: "Eco Toiletruimte Reiniger", category: "Badkamer & Toilet", number: "132" },
  { name: "Toiletruimte Reiniger Elke Dag", category: "Badkamer & Toilet", number: "133" },
  { name: "Toiletgel (eco) (500 ml)", category: "Badkamer & Toilet", number: "134", image: "images/134.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/schoonmaakmiddelen-voor-badkamer-toilet/toiletreinigers/hg-eco-toiletgel-500ml/10119762" },
  { name: "Toiletgel Extreem Sterk", category: "Badkamer & Toilet", number: "135" },
  { name: "Hygienische Toiletgel", category: "Badkamer & Toilet", number: "136" },
  { name: "Toilet Renovatiekit (500 ml)", category: "Badkamer & Toilet", number: "137", image: "images/137.jpg" },
  { name: "Kalkverwijderaar Eco", category: "Badkamer & Toilet", number: "138" },
  { name: "Kalkweg 3x Sterker (Schuimspray)", category: "Badkamer & Toilet", number: "139", image: "images/139.jpg" },
  { name: "Kalkweg (Schuimspray) (500 ml)", category: "Badkamer & Toilet", number: "140", image: "images/140.jpg" },
  { name: "Kalkweg Gekleurd Sanitair", category: "Badkamer & Toilet", number: "141" },
  { name: "Power Gel Brush Kalk", category: "Badkamer & Toilet", number: "142" },
  { name: "Kalkweg Concentraat (1 L)", category: "Badkamer & Toilet", number: "143" },
  { name: "Kalkweg Concentraat (500 ml)", category: "Badkamer & Toilet", number: "144" },
  { name: "Natuursteen Badkamerreiniger", category: "Badkamer & Toilet", number: "145" },
  { name: "Douche en Wasbak Spray (500 ml)", category: "Badkamer & Toilet", number: "146", image: "images/146.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/schoonmaakmiddelen-voor-badkamer-toilet/badkamerreinigers/hg-badkamerreiniger-douche-en-wasbak-spray-0-5l/2431477" },
  { name: "Power Foam Badkamer", category: "Badkamer & Toilet", number: "147" },
  { name: "Natuursteen Cleaner", category: "Badkamer & Toilet", number: "148" },
  { name: "Marmer Cleaner", category: "Badkamer & Toilet", number: "148" },
  { name: "Power foam Douche (self acting) (300 ml)", category: "Badkamer & Toilet", number: "149", image: "images/149.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/schoonmaakmiddelen-voor-badkamer-toilet/badkamerreinigers/hg-badkamerreiniger-power-foam-douche-0-3l/10216932" },
  { name: "Siliconenkitverwijderaar (100 ml)", category: "Badkamer & Toilet", number: "150", image: "images/150.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/oplosmiddelen-afbijtmiddelen-reinigers/oplosmiddelen/siliconenkitverwijderaar-hg-100ml/2431786" },
  { name: "Douchecabine Beschermer (250 ml)", category: "Badkamer & Toilet", number: "151", image: "images/151.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/schoonmaakmiddelen-voor-badkamer-toilet/badkamerreinigers/hg-douchecabine-beschermer-250ml/5037469" },
  { name: "Hygiënische Whirlpoolreiniger (1000 ml)", category: "Badkamer & Toilet", number: "152", image: "images/152.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/schoonmaakmiddelen-voor-badkamer-toilet/badkamerreinigers/hg-allesreiniger-hygienische-whirlpoolreiniger-1l/2743343" },
  { name: "Staalpolish (250 ml)", category: "Keuken", number: "204", image: "images/204.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/onderhouds-restauratie-producten-voor-specifieke-oppervlakken/metaalreiniging-roestverwijderaars/metaalreinigers/hg-staalpolish-250ml/2431901" },
  { name: "Afzuigkapfilter Ontvetter (500 ml)", category: "Keuken", number: "205", image: "images/205.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/ontvetters/huishoudontvetters/hg-afzuigkapfilter-ontvetter-500ml/5229746" },
  { name: "Tegen Stinkende Vuilnisbakken (500 g)", category: "Keuken", number: "206", image: "images/206.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/luchtverfrissers/hg-reiniger-voor-stinkende-vuilnisbakken-500gr/5594509" },
  { name: "Diepvriesontdooier (500 ml)", category: "Keuken", number: "207", image: "images/207.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/keukenreinigers/koelkast-reinigingsmiddelen/hg-diepvries-ontdooier-500ml/5143938" },
  { name: "Hygiënische Koelkastreiniger (500 ml)", category: "Keuken", number: "208", image: "images/208.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/keukenreinigers/koelkast-reinigingsmiddelen/hg-allesreiniger-hygienische-koelkastreiniger-frisse-geur-500ml/4743063" },
  { name: "Tegen Stinkende Vaatwassers (500 g)", category: "Keuken", number: "209", image: "images/209.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/keukenreinigers/afwasmiddelen/hg-reiniger-tegen-stinkende-vaatwasser-550gr/5553444" },
  { name: "Glasreiniger Concentraat (500 ml)", category: "Woonkamer & Overige Vertrekken", number: "210", image: "images/210.jpg" },
  { name: "Stucwerk Reiniger", category: "Keuken", number: "211" },
  { name: "Verfontvetter Concentraat", category: "Keuken", number: "212" },
  { name: "Vloerlijm Verwijderaar (750 ml)", category: "Keuken", number: "213", image: "images/213.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/oplosmiddelen-afbijtmiddelen-reinigers/oplosmiddelen/hg-vloerlijmverwijderaar-750ml/2743275" },
  { name: "Roestvrijstaal Beschermer (125 ml)", category: "Keuken", number: "214", image: "images/214.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/keukenreinigers/rvs-reinigers/hg-roestvrijstaal-beschermer-125ml/5073103" },
  { name: "Roestvrijstaal Reiniger (300 ml)", category: "Keuken", number: "215", image: "images/215.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/keukenreinigers/rvs-reinigers/hg-rvs-snelreiniger-300ml/4743037" },
  { name: "Vetweg Spray (500 ml)", category: "Keuken", number: "216", image: "images/216.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/ontvetters/huishoudontvetters/hg-allesreiniger-vetweg-0-5l/2431854" },
  { name: "Natuursteen Aanrechtblad Reiniger (500 ml)", category: "Keuken", number: "217", image: "images/217.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/keukenreinigers/keukenkast-aanrechtblad-reinigers/hg-keukenreiniger-natuursteen-aanrechtblad-500ml/4743079" },
  { name: "Natuursteen Aanrechtblad Beschermer (100 ml)", category: "Keuken", number: "218", image: "images/218.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/onderhouds-restauratie-producten-voor-specifieke-oppervlakken/natuursteen-marmer-onderhoud/hg-topprotector-natuursteen-100ml/2431461" },
  { name: "Power foam (self acting) (300 ml)", category: "Keuken", number: "219", image: "images/219.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/keukenreinigers/keukenkast-aanrechtblad-reinigers/hg-power-foam-keuken-reinigend-schuim-300ml/10216930" },
  { name: "Duo Ontstopper Extreem Sterk (2x500 ml)", category: "Keuken", number: "220", image: "images/220-a.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/rioolontstoppers-onderhoud/ontstoppingsgels/hg-duo-ontstopper-1l/4743131" },
  { name: "Duo Ontstopper Extreem Sterk (2x500 ml)", category: "Keuken", number: "220", image: "images/220-b.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/rioolontstoppers-onderhoud/ontstoppingsgels/hg-duo-ontstopper-1l/4743131" },
  { name: "Eco Ontstopper", category: "Keuken", number: "221" },
  { name: "Keukenontstopper", category: "Keuken", number: "222" },
  { name: "Afvoerreiniger Keuken", category: "Keuken", number: "223" },
  { name: "Afvoerstankverwijderaar (500 g)", category: "Keuken", number: "224", image: "images/224.jpg" },
  { name: "Ovenreiniger Eco (500 ml)", category: "Keuken", number: "225" },
  { name: "Oven Grillreiniger (500 ml)", category: "Keuken", number: "226" },
  { name: "Power Gel Brush Oven (250 ml)", category: "Keuken", number: "227" },
  { name: "Oven & Grill Vernieuwingskit", category: "Keuken", number: "228" },
  { name: "Magnetronreiniger (500 ml)", category: "Keuken", number: "229" },
  { name: "Airfryer Reiniger (250 ml)", category: "Keuken", number: "230", image: "images/230.jpg" },
  { name: "Frituurpan Reiniger", category: "Keuken", number: "231" },
  { name: "Eco Kookplaatreiniger", category: "Keuken", number: "232", image: "images/232.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/keukenreinigers/kookplaatreinigers/hg-allesreiniger-eco-kookplaatreiniger-0-5l/10119764" },
  { name: "Kookplaatreiniger (500 ml)", category: "Keuken", number: "233", image: "images/233.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/keukenreinigers/kookplaatreinigers/hg-kookplaatreiniger-500ml/2431849" },
  { name: "Kookplaat Polish (250 ml)", category: "Keuken", number: "234", image: "images/234.jpg" },
  { name: "Keramische Kookplaat Reiniger (250 ml)", category: "Keuken", number: "234" },
  { name: "Reiniger & Ontkalker Waterkoker", category: "Keuken", number: "235" },
  { name: "Koffiemachine Ontkalker Eco (500 ml)", category: "Keuken", number: "236" },
  { name: "Citroenzuur Ontkalker (500 ml)", category: "Keuken", number: "236" },
  { name: "Koffiemachine Ontkalker", category: "Keuken", number: "237" },
  { name: "Koffiemachine Ontkalker Melkzuur", category: "Keuken", number: "238" },
  { name: "Nespresso Ontkalker (500 ml)", category: "Keuken", number: "239" },
  { name: "Nespresso Reinigingscups", category: "Keuken", number: "240" },
  { name: "Reinigingstabletten Voor Koffiemachines", category: "Keuken", number: "241" },
  { name: "Groene Aanslagreiniger Concentraat", category: "Buiten", number: "242" },
  { name: "Hardhout Ontgrijzer", category: "Buiten", number: "243" },
  { name: "Hardhout Reiniger Diep", category: "Buiten", number: "243" },
  { name: "Tuinmeubelvernieuwer Hardhout (500 ml)", category: "Buiten", number: "244" },
  { name: "Tuinmeubel Reiniger (500 ml)", category: "Buiten", number: "245", image: "images/245.jpg" },
  { name: "Roestvlekken Verwijderaar (500 ml)", category: "Buiten", number: "246", image: "images/246.jpg" },
  { name: "Oxydatie Verwijderaar (500 ml)", category: "Buiten", number: "246", image: "images/246.jpg" },
  { name: "Zonnepanelen Reiniger (500 ml)", category: "Buiten", number: "247", image: "images/247.jpg" },
  { name: "Waterdicht Scherm", category: "Buiten", number: "248" },
  { name: "Zonneschermreiniger (500 ml)", category: "Buiten", number: "249", image: "images/249.jpg" },
  { name: "Terrastegel Reiniger", category: "Buiten", number: "250" },
  { name: "HGX tegen houtworm (500 ml)", category: "Buiten", number: "251", image: "images/251.jpg" },
  { name: "Laminaat, Vinyl en PVC Beschermer (1 L)", category: "Vloeren", number: "353" },
  { name: "Laminaatglans (1 L)", category: "Vloeren", number: "353" },
  { name: "Ontkalker (500 ml)", category: "Wasruimte & Textiel", number: "301", image: "images/301.jpg" },
  { name: "Tegen Stinkende Wasmachines", category: "Wasruimte & Textiel", number: "302" },
  { name: "Onderhoudsmonteur Voor (vaat)wasmachines", category: "Wasruimte & Textiel", number: "303" },
  { name: "Oxi vlekverwijderaar (500 gram)", category: "Wasruimte & Textiel", number: "304", image: "images/304.jpg" },
  { name: "Vlekweg Nr 1 (Koffie, Wijn, Inkt) (50 ml)", category: "Wasruimte & Textiel", number: "305", image: "images/305.jpg" },
  { name: "Vlekweg Nr 2 (viltstift, olie, vet, schoensmeer) (50 ml)", category: "Wasruimte & Textiel", number: "306", image: "images/306.jpg" },
  { name: "Vlekweg Nr 3 (Kaarsvet, Hars, Teer) (50 ml)", category: "Wasruimte & Textiel", number: "307", image: "images/307.jpg" },
  { name: "Vlekweg Nr 4 (Chocola, Melk, Saus, Bloed) (50 ml)", category: "Wasruimte & Textiel", number: "308", image: "images/308.jpg" },
  { name: "Vlekweg Nr 5 (Kauwgum, Make-up, Gras) (50 ml)", category: "Wasruimte & Textiel", number: "309", image: "images/309.jpg" },
  { name: "Vlekweg Nr 6 (Kleurstoffen, Balpen) (50 ml)", category: "Wasruimte & Textiel", number: "310", image: "images/310.jpg" },
  { name: "Vlekweg Nr 7 (Roest) (50 ml)", category: "Wasruimte & Textiel", number: "311", image: "images/311.jpg" },
  { name: "Waterdicht (katoen, linnen en wol) (300 ml)", category: "Wasruimte & Textiel", number: "313", image: "images/313.jpg" },
  { name: "Waterdicht 100% synthetisch textiel (300 ml)", category: "Wasruimte & Textiel", number: "312", image: "images/312.jpg" },
  { name: "HG 4-in-1 Beschermer Voor Textiel en Leer (300 ml)", category: "Wasruimte & Textiel", number: "314", image: "images/314.jpg" },
  { name: "Tegen Nare Geurtjes In Textiel", category: "Wasruimte & Textiel", number: "315" },
  { name: "Schoendeo (250 ml)", category: "Wasruimte & Textiel", number: "321" },
  { name: "Tegen Stinkend Wasgoed Eco", category: "Wasruimte & Textiel", number: "322" },
  { name: "Tegen Stinkend Wasgoed Wasmiddeltoevoeging (500 g)", category: "Wasruimte & Textiel", number: "323", image: "images/323.jpg" },
  { name: "Tegen Nare Geurtjes In Sportkleding", category: "Wasruimte & Textiel", number: "324" },
  { name: "Vlekken voorbehandeling (ECO)", category: "Wasruimte & Textiel", number: "325", image: "images/325.jpg" },
  { name: "Op Reis Wasje (200 ml)", category: "Wasruimte & Textiel", number: "326" },
  { name: "Autoreiniger en Beschermer (1 L)", category: "Schuur & Garage", number: "316", image: "images/316.jpg" },
  { name: "Auto Carwash Shampoo (1 L)", category: "Schuur & Garage", number: "316", image: "images/316.jpg" },
  { name: "Velgenreiniger", category: "Schuur & Garage", number: "317" },
  { name: "Bekledingsreiniger (500 ml)", category: "Schuur & Garage", number: "318", eans: ["8711577189761", "8711577003319"], image: "images/318.jpg", praxisUrl: "https://www.praxis.nl/fiets-auto-accessoires/auto-materialen-accessoires/auto-reinigingsmaterialen-producten/bekledingreiniger/hg-bekledingreiniger-auto-fles-500ml/2432203" },
  { name: "Olievlekkenreiniger", category: "Schuur & Garage", number: "319" },
  { name: "Roestverwijderaar (500 ml)", category: "Schuur & Garage", number: "320", image: "images/320.jpg" },
  { name: "Roestoplosser (500 ml)", category: "Schuur & Garage", number: "320", image: "images/320.jpg" },
  { name: "Tegel Cementsluierverwijderaar", category: "Vloeren", number: "327" },
  { name: "Tegel Cementrestenverwijderaar (1000 ml)", category: "Vloeren", number: "328", image: "images/328.jpg" },
  { name: "Tegel Impregnerende Beschermer", category: "Vloeren", number: "329" },
  { name: "Tegelbeschermer", category: "Vloeren", number: "330" },
  { name: "Tegelreiniger", category: "Vloeren", number: "331" },
  { name: "Tegelreiniger Glans", category: "Vloeren", number: "332" },
  { name: "Tegelreiniger Extra Sterk", category: "Vloeren", number: "333" },
  { name: "Voegenreiniger Concentraat (500 ml)", category: "Vloeren", number: "334", image: "images/334.jpg" },
  { name: "Wand en Vloervoegen Beschermer (250 ml)", category: "Vloeren", number: "335", image: "images/335.jpg" },
  { name: "Kleurverdieper", category: "Vloeren", number: "336" },
  { name: "Natuursteen Kleurverdieper (50 ml)", category: "Vloeren", number: "336" },
  { name: "Marmer Cementsluierverwijderaar", category: "Vloeren", number: "337" },
  { name: "Natuursteen Cementsluier Verwijderaar (1 L)", category: "Vloeren", number: "337" },
  { name: "Natuursteen Impregnerende Beschermer", category: "Vloeren", number: "338" },
  { name: "Natuursteen Shine Finish", category: "Vloeren", number: "339" },
  { name: "Marmer Wash & Shine", category: "Vloeren", number: "340" },
  { name: "Natuursteen Wash & Shine (1 L)", category: "Vloeren", number: "340" },
  { name: "Natuursteenreiniger Streeploos", category: "Vloeren", number: "341" },
  { name: "Natuursteen Shine Reiniger", category: "Vloeren", number: "342" },
  { name: "Natuursteenreiniger Extra Sterk", category: "Vloeren", number: "342" },
  { name: "Natuursteen Voedende Reiniger", category: "Vloeren", number: "343" },
  { name: "Olie Vlekken Absorbeerder", category: "Vloeren", number: "344" },
  { name: "Parketbeschermer Glans", category: "Vloeren", number: "345" },
  { name: "Parket en Hout Reiniger", category: "Vloeren", number: "347" },
  { name: "Parket Polish Remover (1 L)", category: "Vloeren", number: "348" },
  { name: "Hout Vloerolie", category: "Vloeren", number: "349" },
  { name: "Kunststof Beschermer", category: "Vloeren", number: "350" },
  { name: "Kunststofreiniger Glans", category: "Vloeren", number: "351" },
  { name: "Kunststofreiniger Extra Sterk", category: "Vloeren", number: "352" },
  { name: "Laminaat, Vinyl en PVC Reiniger", category: "Vloeren", number: "354" },
  { name: "Laminaat, Vinyl en PVC Reiniger Glans", category: "Vloeren", number: "355" },
  { name: "Laminaat, Vinyl en PVC Reiniger Extra Sterk (1000 ml)", category: "Vloeren", number: "356", image: "images/356.jpg", praxisUrl: "https://www.praxis.nl/onderhoud-schoonmaak/schoonmaakmiddelen/vloerreinigingsmiddelen/laminaatreinigers/hg-vloerreiniger-laminaat-vinyl-en-pvc-extra-sterk-1l/2431587" },
  { name: "Tapijtreiniger (1 L)", category: "Vloeren", number: "357" },
  { name: "Tapijt Reiniger (500 ml)", category: "Vloeren", number: "358", image: "images/358.jpg" },
  { name: "Schoonmaakazijn (1 liter)", category: "Vloeren", number: "359" },
  { name: "Schoonmaakazijn (5 L)", category: "Vloeren", number: "360" },
  { name: "Danny Seinen", role: "Manager", category: "Personeel Praxis 2240 Amersfoort", number: "2240-1", image: "images/2240-1.jpg" },
  { name: "Denise Oskam", role: "Assistent manager", category: "Personeel Praxis 2240 Amersfoort", number: "2240-2", birthday: "21-04-1995", image: "images/2240-2.jpg" },
  { name: "Richard van Viersen", role: "Bouw, Senior, Sleuteldrager", category: "Personeel Praxis 2240 Amersfoort", number: "2240-3", birthday: "02-12-1977", image: "images/2240-3.jpg" },
  { name: "Marion Venema", category: "Personeel Praxis 2240 Amersfoort", number: "2240-4", birthday: "18-01-1967", image: "images/2240-4.jpg" },
  { name: "Laura Schreiner", role: "Kassa medewerkster, Student", category: "Personeel Praxis 2240 Amersfoort", number: "2240-5", birthday: "31-03-2004", image: "images/2240-5.jpg" },
  { name: "Djalil Sjariefie", role: "Verkoopmedewerker", category: "Personeel Praxis 2240 Amersfoort", number: "2240-6", birthday: "25-08-1986", image: "images/2240-6.jpg" },
  { name: "Marcel de Heusden gezegd van der Sluyse", role: "Verkoopmedewerker", category: "Personeel Praxis 2240 Amersfoort", number: "2240-7", birthday: "03-06-1960", image: "images/2240-7.jpg" },
  { name: "Bram de Gelder", role: "Verkoopmedewerker", category: "Personeel Praxis 2240 Amersfoort", number: "2240-8", birthday: "29-05-2001", image: "images/2240-8.jpg" },
  { name: "Muhammed Atabey", role: "Verkoopmedewerker", category: "Personeel Praxis 2240 Amersfoort", number: "2240-9", birthday: "14-02-1999", image: "images/2240-9.jpg" },
  { name: "Nanda Felten", role: "Verkoopmedewerker, Kassamedewerker", category: "Personeel Praxis 2240 Amersfoort", number: "2240-10", birthday: "19-05-1972", image: "images/2240-10.jpg" },
  { name: "Daphne Susan", role: "Kassamedewerker, Verkoopondersteuning", category: "Personeel Praxis 2240 Amersfoort", number: "2240-11", birthday: "26-05-1972", image: "images/2240-11.jpg" },
  { name: "Danique Smit", role: "Kassamedewerker", category: "Personeel Praxis 2240 Amersfoort", number: "2240-12", birthday: "19-05-1998", image: "images/2240-12.jpg" },
  { name: "Matthijs uit den Boogaard", role: "Verkoopmedewerker, Sleuteldrager", category: "Personeel Praxis 2240 Amersfoort", number: "2240-13", birthday: "17-12-1994", image: "images/2240-13.jpg" },
  { name: "Albert Bokkers", role: "Verkoopmedewerker, Sleuteldrager, BHV", category: "Personeel Praxis 2240 Amersfoort", number: "2240-14", birthday: "12-07-1971", image: "images/2240-14.jpg" },
  { name: "Martijn Schaap", role: "Verkoopmedewerker", category: "Personeel Praxis 2240 Amersfoort", number: "2240-15" },
  { name: "Levi Bras", category: "Personeel Praxis 2240 Amersfoort", number: "2240-16" },
  { name: "Onbekend", category: "Personeel Praxis 2240 Amersfoort", number: "2240-17" },
  { name: "Onbekend", category: "Personeel Praxis 2240 Amersfoort", number: "2240-18" },
  { name: "Onbekend", category: "Personeel Praxis 2240 Amersfoort", number: "2240-19" },
  { name: "Onbekend", category: "Personeel Praxis 2240 Amersfoort", number: "2240-20" },
];
const searchInput = document.querySelector("#productSearch");
const clearButton = document.querySelector("#clearSearch");
const result = document.querySelector("#result");
const productList = document.querySelector("#productList");
const listTitle = document.querySelector("#list-title");
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

  if (category === "Personeel Praxis 2240 Amersfoort") {
    return "#007f83";
  }

  return "#ffcc00";
}

function isStaff(product) {
  return product.category.startsWith("Personeel");
}

function getDisplayImage(product) {
  if (!product.image || isStaff(product)) {
    return product.image;
  }

  return product.image.replace(/^images\//, "images/cutout/").replace(/\.(jpe?g)$/i, ".png");
}

function getImageFallback(product) {
  return product.image ? ` onerror="this.onerror=null;this.src='${product.image}'"` : "";
}

function getSearchText(product) {
  return `${normalize(product.name)} ${normalize(product.category)} ${product.number} ${(product.eans || []).join(" ")}`;
}

function hasExactCode(product, query) {
  return String(product.number) === query || (product.eans || []).includes(query);
}

function formatDisplayName(value) {
  return String(value).replace(
    /\((?=[^)]*\d)(?=[^)]*(?:ml|l|g|gram))[^)]*\)/gi,
    '<span class="no-break">$&</span>',
  );
}

function getNumberParts(number) {
  return String(number)
    .split("-")
    .map((part) => Number(part));
}

function sortProducts(items) {
  return [...items].sort((firstProduct, secondProduct) => {
    const firstNumberParts = getNumberParts(firstProduct.number);
    const secondNumberParts = getNumberParts(secondProduct.number);
    const partCount = Math.max(firstNumberParts.length, secondNumberParts.length);

    for (let index = 0; index < partCount; index += 1) {
      const numberDifference = (firstNumberParts[index] || 0) - (secondNumberParts[index] || 0);

      if (numberDifference !== 0) {
        return numberDifference;
      }
    }

    const numberTextDifference = String(firstProduct.number).localeCompare(String(secondProduct.number), "nl-NL", {
      numeric: true,
    });

    if (numberTextDifference !== 0) {
      return numberTextDifference;
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
      <strong>Nog geen resultaat</strong>
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

  const formattedName = formatDisplayName(product.name);
  const mainResult =
    searchMode === "number"
      ? `<strong class="product-result-name">${formattedName}</strong>`
      : `<strong>${product.number}</strong>`;
  const label =
    searchMode === "number"
      ? `${product.category} · nummer ${product.number}`
      : `${product.category} · ${formattedName}`;
  const roleMarkup = product.role ? `<span class="person-role">${product.role}</span>` : "";
  const birthdayMarkup = product.birthday
    ? `<span class="person-details">Geboortedatum: ${product.birthday}</span>`
    : "";
  const detailsMarkup = roleMarkup || birthdayMarkup
    ? `<span class="person-meta">${roleMarkup}${birthdayMarkup}</span>`
    : "";
  const imageMarkup = product.image
    ? `
      <span class="product-photo-card ${product.category.startsWith("Personeel") ? "person-photo-card" : ""}">
        <img src="${getDisplayImage(product)}" alt="${product.name}"${getImageFallback(product)} />
      </span>
    `
    : "";
  const praxisLinkMarkup = product.praxisUrl
    ? `
      <a class="praxis-result-link" href="${product.praxisUrl}" target="_blank" rel="noopener" aria-label="Bekijk ${product.name} bij Praxis">
        Praxis
      </a>
    `
    : "";

  result.innerHTML = `
    <span class="result-label">${label}</span>
    <span class="result-main">
      <span class="result-text">
        ${mainResult}
        ${detailsMarkup}
      </span>
      <span class="result-actions">
        ${praxisLinkMarkup}
        <button
          type="button"
          class="category-color"
          data-category="${product.category}"
          style="--category-color: ${getCategoryColor(product.category)}"
          aria-label="Toon alle artikelen uit ${product.category}"
        ></button>
      </span>
    </span>
    ${imageMarkup}
  `;
}

function setStaffSearchResult() {
  result.classList.remove("empty");
  result.classList.add("idle");
  result.innerHTML = `
    <span class="result-label">Personeel</span>
    <strong>Kies een collega</strong>
  `;
}

function selectProduct(product) {
  if (isStaff(product)) {
    setResult(product, "personeel");
    searchInput.value = "personeel";
    searchInput.focus();
    return;
  }

  searchInput.value = product.name;
  updateSearch();
  searchInput.focus();
}

function renderList(items, label = null, options = {}) {
  productList.innerHTML = "";
  listTitle.textContent = options.title || "Producten";
  countLabel.textContent = label || `${items.length} gevonden`;
  const sortedItems = sortProducts(items);

  if (items.length === 0) {
    productList.innerHTML = `<p class="no-results">Geen ${listTitle.textContent.toLocaleLowerCase("nl-NL")} gevonden.</p>`;
    return;
  }

  for (const product of sortedItems) {
    const row = document.createElement(options.numberOnlyClick ? "div" : "button");
    row.className = `product-row${options.numberOnlyClick ? " product-row-static" : ""}`;

    if (!options.numberOnlyClick) {
      row.type = "button";
    }

    const numberMarkup = options.numberOnlyClick
      ? `<button type="button" class="product-number" aria-label="Toon ${product.name}">${product.number}</button>`
      : `<span class="product-number">${product.number}</span>`;

    const thumbnailMarkup = product.image
      ? `<span class="product-thumb"><img src="${getDisplayImage(product)}" alt=""${getImageFallback(product)} /></span>`
      : `<span class="product-thumb product-thumb-empty"></span>`;

    row.innerHTML = `
      ${thumbnailMarkup}
      <span class="product-info">
        <span class="product-name">${formatDisplayName(product.name)}</span>
        <span class="product-category">${product.category}</span>
      </span>
      ${numberMarkup}
      <span class="product-chevron" aria-hidden="true">›</span>
    `;

    if (options.numberOnlyClick) {
      row.querySelector(".product-number").addEventListener("click", () => selectProduct(product));
    } else {
      row.addEventListener("click", () => selectProduct(product));
    }

    productList.append(row);
  }
}

function updateSearch() {
  const query = normalize(searchInput.value);
  const isStaffSearch = query === "personeel";
  const isNumberSearch = /^\d+(?:-\d+)?$/.test(query);
  const visibleProducts = products.filter((product) => !isStaff(product));

  if (isStaffSearch) {
    const staffProducts = products.filter((product) => isStaff(product));
    setStaffSearchResult();
    renderList(staffProducts, `${staffProducts.length} gevonden`, {
      title: "Personeel",
    });
    return;
  }

  const matches = query
    ? visibleProducts.filter((product) => getSearchText(product).includes(query))
    : visibleProducts;
  const exactMatch = visibleProducts.find(
    (product) => normalize(product.name) === query || hasExactCode(product, query),
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
  renderList(categoryProducts, `${categoryProducts.length} in groep`, {
    numberOnlyClick: true,
    title: category.startsWith("Personeel") ? "Personeel" : "Producten",
  });
});
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  updateSearch();
  searchInput.focus();
});

updateSearch();


