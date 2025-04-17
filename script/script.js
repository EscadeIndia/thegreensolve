
  let currentStep = 1;
  const totalSteps = 6;

  function nextStep() {
    if (currentStep >= totalSteps) return;

    document.getElementById(`step${currentStep}`).classList.remove("active");
    document.getElementById(`side-step-${currentStep}`).classList.remove("active");

    currentStep++;

    document.getElementById(`step${currentStep}`).classList.add("active");
    document.getElementById(`side-step-${currentStep}`).classList.add("active");
  }

  function prevStep() {
if (currentStep <= 1) return;

document.getElementById(`step${currentStep}`).classList.remove("active");
document.getElementById(`side-step-${currentStep}`).classList.remove("active");

currentStep--;

document.getElementById(`step${currentStep}`).classList.add("active");
document.getElementById(`side-step-${currentStep}`).classList.add("active");
}

const subcategories = {
    Chemicals: ["Manganese", "Mercury", "Nickel sulphate","Tetrafluoroethylene","Zirconium","Battery Lithium","Battery NIMH",
      "Butadiene","Chromium","Ink with blobassesd oil","Iron Nickek Chrmium","Lacquer","Lithium Chloride",
      "Lithium Floride","Lithium Hexafluorophosphate","Lithium Hydroxide","Lithium Manganese Oxide","Mandalite"
    ],
    Electronics: ["Battery, Li-ion", "Ballery, NiMH", "Cable, ribbon cable","Cable, unspecified","Printed wiring board, desktop computer",
      "Printed wiring board,unspecified","Printed wiring board, laptop"
    ],
    Foam: ["EVA(Ethylene-vinyl acetate)", "PE(Polyethylene)","PS(Polyethylene slab)","PU(Polyurethane flexible)",
      "UF(urea formaldehyde in situ)","UF(urea formaldehyde slab rigid)","Foam glass","Foam glass electricity certified",
      "Polymer"
    ],
    Glass: ["Glass(general)", "Glass fiber", "Perilite Expanded","Perlite Natural"],
    Coating: ["Sol-gel silica based", "Solventborne", "Wood stain/varnish","Floropolymer(PTFE)","Powder coating",
      "Sealant","Silicon polyster","Acrylic varnish","Ceramic glaze","Coating, double","Water borne"
    ],
    Insulation: ["Mineral wood", "Paper wool", "Rock wool","Sheep wool","Tube Elastomere","PS(polystyrene slab)","Fiber glass mat(glass wool)",
      "Flax Retting Fiber","Flax Retting Husks"
    ],
    Metals: ["Aluminum", "Tin", "Titanium","Vanadium","Yitrium","Zinc","Aluminum Cast","Aluminum Extruded",
      "Aluminum Extrusion","Aluminum Foil","Aluminum Sheet","Brass","Bronze","Carbon Steel","Copper","Gold",
      "Iron","Lead","Molybdenum","Nickel","Silver","Steel","Platinum"
    ],
    Minerals: ["Gemstones", "Quartz"],
    Papers: ["Cardboard", "Bagasse pulp", "Bamboo pulp","Graphic paper","Packaging paper and board","Paper pulp",
      "Tissue paper","Wallpaper","Wood Containing Lightweight Supercalendered","Wood free coated","Wood free uncoated"
    ],
    Plastics: ["Phenolic  resins", "Polyster fiber finished", "Silicone polydimethylsilioxane","Epoxy resin liquid", "Nylon", "Expoxy resin insulator(AI203)","Epoxy resin insulator(SO2)", "(UPR) Unstaturated polystester resin",
     "(UPVC) Unplansticized polyvinyl chloride firm","(PVC) Pipe", "(PVC) Sheet", "(TPU)Thermoplastic plyurethane","Plystyrene(PS)", "PS(Polystyrene expanded)", "(PU)Polyurethane rigid","PTFE (Polytetraflouroethylene)", "(PVA) Plyvinyl acetate", "(PMMA) Polymethyle methacrylate acrylic sheet",
      "(PP) Polypropylene", "(PP) Plypropylene injection moulding", "(PP) Plypropylene orientated film","(PET) Polyethylene terephthalate", "(HDPE) Polythylene high density", "(HDPE) High density pipe","(HDPE) resin", "(HIPS) Polystyrene high impact"
    ],
    Rubber: ["(NR) Natural rubber", "(BR) Polybutadiene rubber","(NBR) Nitrile rubber","(PU) Polyurethane thermoset","SBR (styrene Butadiene rubber)","TPE (thermoplastic elastomer)","TPU (thermoplastic polyurethane)",
      "Butyle acetate","Butyle acrylate","Faomed rubber","Polychloroprene","Rubber","Silicone rubber"
    ],
    Stone: ["Cement", "Stone", "Concrete(ready mix)"],
    Textile: ["PEt (polyethyletrephtalate febrics)", "PLA (polylactic acid fabric)", "PP (polypropylene fabric, not wooven)",
      "Polytrimethylene terepthalate fabric","Polyurethane fabric","(PVC) Tarpaulin","Acrylic fabric","Aramid fabric","Carbon fiber fabric",
      "Elastane spandex fabric","Glass fiber polyamide injection moulding fabric","Glass fiber polysester risin fabric","Membrane water froop breathable",
      "Polyester fabric non wooven needle punched fabric","Polyester fabric woven","Leather PU(polyurethane sysnthetic)","Cow leather","Goat leather",
      "Pig leather","Wool (aplpaca fabric)","Sheep wool fleece greasy","Wool fabric","Bamboo fabric","Banana fabric","Carpet",
      "Felt under lay","Flax fiber fabrics","Juth fabric woven","Lyocell fabric","Modal fabric","Silk fabric","Linen fabric","Paper thread",
      "sheep wool","Cotton"
    ],
    Wood: ["Ash wood milled untreated", "Cork raw", "Fiber board hard","Fiber board soft", "Japanese cedar", "Oak wood", "Pine wood", "Plywood", "Teak", "Teak air dried", "Teak klin dried", "Walnut wood", "Wood cleft",
      "Wood millet","Wood wool"
    ],
    Miscellaneous: ["Ceramic glaze", "Ceramic biscuit","Straw"]
  };

  document.getElementById('materialCategory').addEventListener('change', function () {
    const selectedCategory = this.value;
    const subSelect = document.getElementById('materialSubcategory');
    subSelect.innerHTML = '<option value="">Subcategory</option>'; // reset options

    if (subcategories[selectedCategory]) {
      subcategories[selectedCategory].forEach(sub => {
        const opt = document.createElement('option');
        opt.value = sub;
        opt.textContent = sub;
        subSelect.appendChild(opt);
      });
    }
  });


  function updateUnits() {
    const source = document.getElementById("energySource").value;
    const unitSelect = document.getElementById("energyUnit");

    // Clear existing unit options
    unitSelect.innerHTML = "<option value=''>Unit</option>";

    let units = [];

    switch (source) {
      case "Grid electricity":
        units = ["kWh"];
        break;
      case "Petrol/Gasoline":
      units = ["liters", "kWh"];
      break;
      case "Diesel":
      units = ["liters", "kWh"];
      break;
      case "LPG":
      units = ["liters", "kWh"];
        break;
      case "Natural gas":
        units = ["cubic metres", "kWh"];
        break;
      case "Coal":
        units = ["kg", "kWh"]; 
        break;
    }

    units.forEach(unit => {
      const option = document.createElement("option");
      option.value = unit;
      option.textContent = unit;
      unitSelect.appendChild(option);
    });
  }

  const subcategoryMap = {
    'Plastics': ['Phenolic resins', 'Polyester fiber finished', 'Silicon polydimethylsilioxane', 'Epoxy resin liquid', 'Nylon', 'Expoxy resin insulator(AI203)', 'Epoxy resin insulator(SO2)', '(UPR) Unstaturated polystester resin',
      '(UPVC) Unplansticized polyvinyl chloride firm', '(PVC) Pipe', '(PVC) Sheet', '(TPU)Thermoplastic plyurethane', 'Plystyrene(PS)', 'PS(Polystyrene expanded)', '(PU)Polyurethane rigid', 'PTFE (Polytetraflouroethylene)', '(PVA) Plyvinyl acetate', '(PMMA) Polymethyle methacrylate acrylic sheet',
      '(PP) Polypropylene', '(PP) Plypropylene injection moulding', '(PP) Plypropylene orientated film', '(PET) Polyethylene terephthalate', '(HDPE) Polythylene high density', '(HDPE) High density pipe', '(HDPE) resin', '(HIPS) Polystyrene high impact'
    ],
    'Paper': ['Bagasse pulp', 'Bamboo pulp','Cardboard','Graphic paper','Packaging paper and board','Paper pulp','Tissue paper','Wallpaper','Wood Containing Lightweight Supercalendered',
    'Wood free coated','Wood free uncoated'],
    'Foam': ['EVA (Ethylene-vinyl acetate)', 'PE(Polyethylene)', 'PS (Polystyrene slab)', 'PU (Polyurethane flexible)','UF (urea formaldehyde in situ)', 'UF (urea formaldehyde slab rigid)',
    'Foam glass','Foam glass electricity certified','Polymer'],
    'Glass': ['Glass', 'Glass fiber', 'Perilite Expanded', 'Perlite Natural'],
    'Insulation material': ['Mineral wool', 'Paper wool', 'Rock wool', 'Sheep wool', 'Tube Elastomere', 'PS (polystyrene slab)', 'Fiber glass mat (glass wool)', 'Flax Retting Fiber', 'Flax Retting Husks']
  };

  document.getElementById('mateCategory').addEventListener('change', function () {
    const category = this.value;
    const subcategorySelect = document.getElementById('mateSubcategory');
    
    // Clear previous options
    subcategorySelect.innerHTML = '<option value="">Subcategory</option>';
    
    // Add new options
    if (subcategoryMap[category]) {
      subcategoryMap[category].forEach(sub => {
        const option = document.createElement('option');
        option.value = sub;
        option.textContent = sub;
        subcategorySelect.appendChild(option);
      });
    }
  });





  function updateSummaryTable() {
    // Example logic to get input values — adjust selectors as needed
    const materialWeight = parseFloat(document.querySelector('#step2 input[type="number"]').value) || 0;
    const packagingWeight = parseFloat(document.querySelector('#step3 input[type="number"]').value) || 0;
    const energyAmount = parseFloat(document.querySelector('#step4 input[type="number"]').value) || 0;
    const transportDistance = parseFloat(document.querySelector('#step5 input[type="number"]').value) || 0;

    // Simplified dummy emission factors
    const MATERIAL_EMISSION = 2.5;     // per kg
    const PACKAGING_EMISSION = 1.8;    // per kg
    const ENERGY_EMISSION = 0.7;       // per unit
    const TRANSPORT_EMISSION = 0.05;   // per km

    const materialCarbon = materialWeight * MATERIAL_EMISSION;
    const packagingCarbon = packagingWeight * PACKAGING_EMISSION;
    const energyCarbon = energyAmount * ENERGY_EMISSION;
    const transportCarbon = transportDistance * TRANSPORT_EMISSION;

    const totalCarbon = materialCarbon + packagingCarbon + energyCarbon + transportCarbon;

    // Update the table in Step 6
    const rows = document.querySelectorAll("#step6 tbody tr td:nth-child(2)");
    rows[0].textContent = materialCarbon.toFixed(2);
    rows[1].textContent = packagingCarbon.toFixed(2);
    rows[2].textContent = energyCarbon.toFixed(2);
    rows[3].textContent = transportCarbon.toFixed(2);
    rows[4].textContent = totalCarbon.toFixed(2);
  }

  // Call updateSummaryTable() when user goes to final step (step 6)
  function nextStep() {
    if (currentStep >= totalSteps) return;

    document.getElementById(`step${currentStep}`).classList.remove("active");
    document.getElementById(`side-step-${currentStep}`).classList.remove("active");

    currentStep++;

    document.getElementById(`step${currentStep}`).classList.add("active");
    document.getElementById(`side-step-${currentStep}`).classList.add("active");

    if (currentStep === 6) {
      updateSummaryTable();
    }
  }


