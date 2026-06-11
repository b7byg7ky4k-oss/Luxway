const WA_NUMBER = "393290937951";
const BOOKING_EMAIL = "luxwaydrivers@gmail.com";
const ASSET_BASE = window.LUXWAY_ASSET_BASE || "";
const TRIPADVISOR_URL = "https://it.tripadvisor.ch/Attraction_Review-g187791-d33680217-Reviews-LuxWay-Rome_Lazio.html";

const seo = {
  en: {
    title: "Private Transfers Rome | NCC Chauffeur Service | LuxWay",
    description: "Book LuxWay private NCC transfers in Rome: airports, Civitavecchia port, hourly chauffeur, city transfers and panoramic tours with fixed prices.",
    keywords: "private transfers Rome, NCC Rome, chauffeur service Rome, Rome airport transfer, Fiumicino transfer, Ciampino transfer, Civitavecchia transfer, Rome panoramic tour, private driver Rome, luxury van Rome",
    ogTitle: "Private Transfers Rome | NCC Chauffeur Service | LuxWay",
    ogDescription: "Book private NCC transfers in Rome for airports, Civitavecchia port, hourly chauffeur, city transfers and panoramic tours.",
    twitterDescription: "Book private NCC transfers in Rome by WhatsApp or email: airports, Civitavecchia, hourly chauffeur and panoramic tours.",
    locale: "en_US"
  },
  it: {
    title: "Transfer Privati Roma | Servizio NCC con Chauffeur | LuxWay",
    description: "LuxWay offre transfer privati NCC a Roma con prezzi fissi, autisti professionali, transfer Fiumicino e Ciampino, transfer Civitavecchia, chauffeur a disposizione e tour panoramici di Roma.",
    keywords: "transfer privati Roma, NCC Roma, chauffeur Roma, transfer aeroporto Roma, transfer Fiumicino, transfer Ciampino, transfer Civitavecchia, tour panoramico Roma, autista privato Roma, van luxury Roma",
    ogTitle: "Transfer Privati Roma | Servizio NCC con Chauffeur | LuxWay",
    ogDescription: "Servizio NCC a Roma con prezzi fissi per aeroporti, porto di Civitavecchia, chauffeur a disposizione, transfer privati e tour panoramici.",
    twitterDescription: "Prenota transfer privati NCC a Roma via WhatsApp o email: aeroporti, Civitavecchia, chauffeur a disposizione e tour panoramici.",
    locale: "it_IT"
  }
};

const translations = {
  en: {
    navBook: "Book", navServices: "Services", navReviews: "Reviews", navFaq: "FAQ",
    eyebrow: "NCC in Rome",
    headline: "Private Transfers in Rome",
    subheadline: "Fixed Prices • Professional Chauffeur Service • WhatsApp Booking",
    badgeFixed: "Fixed Prices", badgeFees: "No Hidden Fees", badgeFlight: "Flight Monitoring", badgeEnglish: "English Speaking Driver", badgePay: "Pay Directly to the Driver",
    bookNow: "Book Now", airportTitle: "Airport Transfers", cruiseTitle: "Cruise Port Transfers", hourlyTitle: "Hourly Chauffeur Service", cityTitle: "City to City Transfers", tourTitle: "Rome Panoramic Tour",
    tourCardText: "3 Hours • Rome Highlights",
    quote: "Request a Quote", bookingEyebrow: "Book in under 60 seconds", bookingTitle: "Fast Booking",
    bookingText: "Select your service, vehicle and details. Your complete booking request opens directly in WhatsApp or by email.",
    selectService: "Select Service", yourPrice: "Your Price", openWhatsapp: "Send Request via WhatsApp", sendEmail: "Send Request by Email",
    reviewsTitle: "Premium Reviews", reviewsText: "Top-rated private chauffeur service for Rome arrivals, cruise transfers and private tours.",
    faqTitle: "Frequently Asked Questions", faqText: "Clear answers before booking your LuxWay private chauffeur service in Rome.",
    faq1Question: "How do I book a transfer?", faq1Answer: "Select the service, vehicle and travel details. The complete request opens directly on WhatsApp, where we confirm availability and final details.",
    faq2Question: "Are prices fixed?", faq2Answer: "Airport, port and Rome panoramic tour prices are fixed for the selected vehicle. City-to-city transfers are quoted by WhatsApp.",
    faq3Question: "What is included in the 3-hour panoramic tour?", faq3Answer: "The tour includes a private chauffeur and the main checkpoints: Colosseum, Trevi Fountain, Spanish Steps, Circus Maximus, Pantheon and Gianicolo Hill.",
    faq4Question: "Can I pay the driver directly?", faq4Answer: "Yes. You can pay directly to the driver, and the booking details are confirmed in advance through WhatsApp.",
    faq5Question: "Why choose LuxWay instead of another company?", faq5Answer: "LuxWay combines fixed prices, licensed NCC drivers, clean premium vehicles, punctual service, flight monitoring and direct WhatsApp or email coordination. You speak with the team before the ride, so every detail is clear before pickup.",
    airportDesc: "Private transfers from Fiumicino and Ciampino with flight monitoring, meet and greet, fixed pricing and direct WhatsApp coordination.",
    cruiseDesc: "Comfortable transfers between Rome, airports and Civitavecchia Cruise Port, planned around boarding and disembarkation times.",
    hourlyDesc: "A private chauffeur available for shopping, meetings, events, restaurants and multiple stops across Rome.",
    cityDesc: "Private transfers across Italy, including Rome to Florence, Naples, Positano and the Amalfi Coast.",
    tourDesc: "A 3-hour panoramic chauffeur tour designed to enjoy Rome’s most iconic views in total comfort, with time for elegant photo stops.",
    tourPointColosseum: "Colosseum", tourPointTrevi: "Trevi Fountain", tourPointSpagna: "Spanish Steps", tourPointCircus: "Circus Maximus", tourPointPantheon: "Pantheon", tourPointGianicolo: "Gianicolo Hill", bookTour: "Book Tour"
  },
  it: {
    navBook: "Prenota", navServices: "Servizi", navReviews: "Recensioni", navFaq: "FAQ",
    eyebrow: "NCC a Roma",
    headline: "Transfer Privati a Roma",
    subheadline: "Prezzi Fissi • Chauffeur Professionale • Prenotazione WhatsApp",
    badgeFixed: "Prezzi Fissi", badgeFees: "Nessun Costo Nascosto", badgeFlight: "Monitoraggio Volo", badgeEnglish: "Autista parla inglese", badgePay: "Paghi direttamente all'autista",
    bookNow: "Prenota Ora", airportTitle: "Transfer Aeroporto", cruiseTitle: "Transfer Porto Crociere", hourlyTitle: "Chauffeur a Disposizione", cityTitle: "Transfer Citta a Citta", tourTitle: "Tour Panoramico di Roma",
    tourCardText: "3 Ore • Tappe Iconiche",
    quote: "Richiedi Preventivo", bookingEyebrow: "Prenota in meno di 60 secondi", bookingTitle: "Prenotazione Rapida",
    bookingText: "Seleziona servizio, veicolo e dettagli. La richiesta completa si apre direttamente su WhatsApp o via email.",
    selectService: "Seleziona Servizio", yourPrice: "Il tuo prezzo", openWhatsapp: "Invia la richiesta tramite WhatsApp", sendEmail: "Invia richiesta via email",
    reviewsTitle: "Recensioni Premium", reviewsText: "Servizio chauffeur top-rated per arrivi a Roma, transfer crociere e tour privati.",
    faqTitle: "Domande Frequenti", faqText: "Risposte chiare prima di prenotare il tuo servizio chauffeur privato LuxWay a Roma.",
    faq1Question: "Come prenoto un transfer?", faq1Answer: "Seleziona servizio, veicolo e dettagli del viaggio. La richiesta completa si apre direttamente su WhatsApp, dove confermiamo disponibilita e dettagli finali.",
    faq2Question: "I prezzi sono fissi?", faq2Answer: "I prezzi per aeroporto, porto e tour panoramico di Roma sono fissi in base al veicolo selezionato. I transfer citta a citta vengono quotati su WhatsApp.",
    faq3Question: "Cosa include il tour panoramico di 3 ore?", faq3Answer: "Il tour include chauffeur privato e i principali checkpoint: Colosseo, Fontana di Trevi, Piazza di Spagna, Circo Massimo, Pantheon e Gianicolo.",
    faq4Question: "Posso pagare direttamente l'autista?", faq4Answer: "Si. Puoi pagare direttamente l'autista, con tutti i dettagli della prenotazione confermati in anticipo su WhatsApp.",
    faq5Question: "Perche scegliere LuxWay rispetto ad altre compagnie?", faq5Answer: "LuxWay unisce prezzi fissi, autisti NCC autorizzati, veicoli premium puliti, puntualita, monitoraggio volo e coordinamento diretto via WhatsApp o email. Parli con il team prima della corsa, cosi ogni dettaglio e chiaro prima del pickup.",
    airportDesc: "Transfer privati da Fiumicino e Ciampino con monitoraggio volo, meet & greet, prezzo fisso e coordinamento WhatsApp.",
    cruiseDesc: "Transfer comodi tra Roma, aeroporti e Porto di Civitavecchia, organizzati su imbarco e sbarco.",
    hourlyDesc: "Chauffeur privato per shopping, meeting, eventi, ristoranti e fermate multiple a Roma.",
    cityDesc: "Transfer privati in tutta Italia, inclusi Roma Firenze, Napoli, Positano e Costiera Amalfitana.",
    tourDesc: "Tour panoramico di 3 ore con chauffeur privato, pensato per vivere le viste piu iconiche di Roma in totale comfort, con tempo per soste foto eleganti.",
    tourPointColosseum: "Colosseo", tourPointTrevi: "Fontana di Trevi", tourPointSpagna: "Piazza di Spagna", tourPointCircus: "Circo Massimo", tourPointPantheon: "Pantheon", tourPointGianicolo: "Gianicolo", bookTour: "Prenota Tour"
  }
};

const vehicles = {
  suv: {
    name: "SUV or Sedan",
    image: `${ASSET_BASE}assets/images/bmw-x3-black.png`,
    passengers: "Maximum 4 passengers",
    luggage: "2 large suitcases + 2 carry-ons or 4 small suitcases"
  },
  van: {
    name: "Luxury Van",
    image: `${ASSET_BASE}assets/images/mercedes-v-class-black.png`,
    passengers: "Maximum 8 passengers",
    luggage: "Maximum 8 large suitcases"
  }
};

const services = {
  tour: {
    label: "Rome Panoramic Tour",
    routes: [],
    prices: { suv: 200, van: 350 },
    note: "3-hour panoramic tour",
    fields() {
      return [["Pickup Address", "text", "address"], ["Tour Date", "date"], ["Tour Start Time", "time"], ["Language", "select", ["English", "Italian", "Spanish", "French"]], ["Passengers", "number"], ["Customer Name", "text"], ["WhatsApp Number", "tel"], ["Special Requests", "textarea"]];
    }
  },
  airport: {
    label: "Airport Transfer",
    routeLabel: "Transfer Direction",
    routes: ["Airport → Address", "Address → Airport"],
    airports: ["Fiumicino Airport (FCO)", "Ciampino Airport (CIA)"],
    prices: { suv: 65, van: 85 },
    note: "Fixed airport transfer price",
    fields(route) {
      return route === "Airport → Address"
        ? [["Flight Number", "text"], ["Arrival Date", "date"], ["Arrival Time", "time"], ["Destination Address", "text", "address"], ["Passengers", "number"], ["Luggage", "text"], ["Customer Name", "text"], ["WhatsApp Number", "tel"], ["Special Requests", "textarea"]]
        : [["Pickup Address", "text", "address"], ["Pickup Date", "date"], ["Pickup Time", "time"], ["Flight Number (optional)", "text"], ["Passengers", "number"], ["Luggage", "text"], ["Customer Name", "text"], ["WhatsApp Number", "tel"], ["Special Requests", "textarea"]];
    }
  },
  cruise: {
    label: "Cruise Port Transfer",
    routeLabel: "Select Route",
    routes: ["Port → Address", "Address → Port", "Port → Airport", "Airport → Port"],
    prices: { suv: 160, van: 190 },
    note: "Fixed Civitavecchia transfer price",
    fields(route) {
      const map = {
        "Port → Address": [["Cruise Company", "text"], ["Ship Name", "text"], ["Disembarkation Date", "date"], ["Disembarkation Time", "time"], ["Destination Address", "text", "address"], ["Passengers", "number"], ["Luggage", "text"], ["Customer Name", "text"], ["WhatsApp Number", "tel"]],
        "Address → Port": [["Pickup Address", "text", "address"], ["Cruise Company", "text"], ["Ship Name", "text"], ["Boarding Date", "date"], ["Pickup Time", "time"], ["Passengers", "number"], ["Luggage", "text"], ["Customer Name", "text"], ["WhatsApp Number", "tel"]],
        "Port → Airport": [["Cruise Company", "text"], ["Ship Name", "text"], ["Disembarkation Date", "date"], ["Disembarkation Time", "time"], ["Destination Airport", "select", ["Fiumicino Airport (FCO)", "Ciampino Airport (CIA)"]], ["Passengers", "number"], ["Luggage", "text"], ["Customer Name", "text"], ["WhatsApp Number", "tel"]],
        "Airport → Port": [["Airport", "select", ["Fiumicino Airport (FCO)", "Ciampino Airport (CIA)"]], ["Flight Number", "text"], ["Arrival Date", "date"], ["Arrival Time", "time"], ["Cruise Company", "text"], ["Ship Name", "text"], ["Passengers", "number"], ["Luggage", "text"], ["Customer Name", "text"], ["WhatsApp Number", "tel"]]
      };
      return map[route];
    }
  },
  hourly: {
    label: "Hourly Chauffeur Service",
    routes: [],
    prices: { suv: 50, van: 80 },
    note: "Hourly chauffeur price",
    fields() {
      return [["Pickup Address", "text", "address"], ["Date", "date"], ["Start Time", "time"], ["Passengers", "number"], ["Customer Name", "text"], ["WhatsApp Number", "tel"], ["Special Requests", "textarea"]];
    }
  },
  city: {
    label: "City to City Transfer",
    routes: [],
    prices: { suv: null, van: null },
    note: "Quote confirmed by WhatsApp",
    fields() {
      return [["Departure Address", "text", "address"], ["Destination Address", "text", "address"], ["Date", "date"], ["Time", "time"], ["Passengers", "number"], ["Luggage", "text"], ["Customer Name", "text"], ["WhatsApp Number", "tel"], ["Special Requests", "textarea"]];
    }
  }
};

const servicePages = [
  ["Home", `${ASSET_BASE}index.html#top`],
  ["Rome Panoramic Tour", `${ASSET_BASE}services/rome-panoramic-tour/`],
  ["Airport Transfers", `${ASSET_BASE}services/rome-airport-transfers/`],
  ["Cruise Port Transfers", `${ASSET_BASE}services/cruise-port-transfers/`],
  ["Hourly Chauffeur Service", `${ASSET_BASE}services/hourly-chauffeur-service/`],
  ["City to City Transfers", `${ASSET_BASE}services/city-to-city-transfers/`]
];

const serviceReviewContent = {
  tour: {
    title: "Rome Panoramic Tour Reviews",
    text: "Travelers usually value the relaxed pace, scenic photo stops and the comfort of seeing Rome's highlights with a private chauffeur.",
    cards: [
      ["Panoramic Stops", "Colosseum, Trevi Fountain, Spanish Steps and Gianicolo are easy to enjoy without changing taxis."],
      ["Comfortable Timing", "A 3-hour private route keeps the experience elegant, flexible and simple for couples or families."]
    ]
  },
  airport: {
    title: "Airport Transfer Reviews",
    text: "Airport clients usually focus on punctual pickup, flight monitoring, luggage help and clear WhatsApp coordination.",
    cards: [
      ["Smooth Arrivals", "Flight details help coordinate the meeting time at Fiumicino or Ciampino."],
      ["Easy Communication", "Direct WhatsApp updates make the transfer clear before landing and after pickup."]
    ]
  },
  cruise: {
    title: "Cruise Port Transfer Reviews",
    text: "Cruise guests usually appreciate port timing, luggage space and reliable connections between Civitavecchia, Rome and the airports.",
    cards: [
      ["Cruise Timing", "Pickup is planned around boarding and disembarkation, with ship details added in the form."],
      ["Luggage Comfort", "SUV/Sedan and Luxury Van options help match the vehicle to passengers and bags."]
    ]
  },
  hourly: {
    title: "Hourly Chauffeur Reviews",
    text: "Hourly clients usually mention flexibility, multiple stops and the convenience of having one private driver available in Rome.",
    cards: [
      ["Multiple Stops", "Ideal for restaurants, shopping, meetings, events and changing plans during the day."],
      ["Flexible Schedule", "The service starts from 3 hours and can be adapted around your route."]
    ]
  },
  city: {
    title: "City to City Transfer Reviews",
    text: "Long-distance clients usually value private comfort, luggage assistance and custom routes across Italy.",
    cards: [
      ["Private Long Rides", "Useful for Rome to Florence, Naples, Positano and Amalfi Coast routes."],
      ["Custom Quote", "The request form collects route, passengers and luggage so the quote can be precise."]
    ]
  }
};

const FIXED_SERVICE = document.body.dataset.fixedService || "";
const INITIAL_SERVICE = services[FIXED_SERVICE] ? FIXED_SERVICE : "tour";
const state = { service: INITIAL_SERVICE, route: services[INITIAL_SERVICE].routes[0] || "", airport: "Fiumicino Airport (FCO)", vehicle: "suv", hours: 3 };
const serviceSelect = document.querySelector("#serviceSelect");
const routeBlock = document.querySelector("#routeBlock");
const airportBlock = document.querySelector("#airportBlock");
const hoursBlock = document.querySelector("#hoursBlock");
const vehicleBlock = document.querySelector("#vehicleBlock");
const dynamicFields = document.querySelector("#dynamicFields");
const priceValue = document.querySelector("#priceValue");
const priceNote = document.querySelector("#priceNote");
const bookingForm = document.querySelector("#bookingForm");
const hasBookingForm = Boolean(serviceSelect && routeBlock && airportBlock && hoursBlock && vehicleBlock && dynamicFields && priceValue && priceNote && bookingForm);

const serviceEntries = services[FIXED_SERVICE] ? [[FIXED_SERVICE, services[FIXED_SERVICE]]] : Object.entries(services);

if (serviceSelect) {
  serviceEntries.forEach(([key, service]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = service.label;
    serviceSelect.append(option);
  });
}

if (services[FIXED_SERVICE] && serviceSelect) {
  document.body.classList.add("fixed-service-page");
  serviceSelect.disabled = true;
}

function money(value) {
  return value === null ? "REQUEST A QUOTE" : `€${value}`;
}

function currentPrice() {
  if (state.service === "hourly") return state.hours * services.hourly.prices[state.vehicle];
  return services[state.service].prices[state.vehicle];
}

function makeOptions(name, values, selected, onChange) {
  const wrap = document.createElement("div");
  wrap.className = "option-row";
  values.forEach((value) => {
    const label = document.createElement("label");
    label.className = "choice";
    label.innerHTML = `<input type="radio" name="${name}" value="${value}"><span>${value}</span>`;
    label.querySelector("input").checked = value === selected;
    label.querySelector("input").addEventListener("change", () => onChange(value));
    wrap.append(label);
  });
  return wrap;
}

function fieldId(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function renderField([label, type, extra]) {
  const wrap = document.createElement("div");
  wrap.className = type === "textarea" ? "field full" : "field";
  const id = fieldId(label);
  const labelNode = document.createElement("label");
  labelNode.htmlFor = id;
  labelNode.textContent = label;
  wrap.append(labelNode);

  if (type === "textarea") {
    const textarea = document.createElement("textarea");
    textarea.id = id;
    textarea.name = label;
    wrap.append(textarea);
  } else if (type === "select") {
    const select = document.createElement("select");
    select.id = id;
    select.name = label;
    extra.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      select.append(option);
    });
    wrap.append(select);
  } else {
    const input = document.createElement("input");
    input.id = id;
    input.name = label;
    input.type = type;
    if (type === "number") input.min = "1";
    if (extra === "address") input.dataset.address = "true";
    wrap.append(input);
  }
  return wrap;
}

function vehicleIcon(type) {
  const icons = {
    people: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    suitcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M7 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><path d="M9 11v6M15 11v6"/></svg>',
    carry: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/><path d="M6 6h12v14H6z"/><path d="M9 20v2M15 20v2"/></svg>'
  };
  return icons[type] || "";
}

function benefitIcon(title) {
  const icons = {
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="9"/></svg>',
    driver: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17a5 5 0 0 1 10 0"/><circle cx="12" cy="8" r="3"/><path d="M4 20h16"/></svg>',
    camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7l1.5-2h5L16 7h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3Z"/><circle cx="12" cy="13" r="3"/></svg>',
    tag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12 12 20 4 12V4h8l8 8Z"/><path d="M8 8h.01"/></svg>',
    plane: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l18-7-7 18-3-8-8-3Z"/><path d="M11 14 21 4"/></svg>',
    meet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12a4 4 0 1 1 8 0"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M9 16h6"/></svg>',
    luggage: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M7 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/></svg>',
    route: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M5 7v3a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4"/></svg>',
    car: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 16h14l-2-6H7l-2 6Z"/><path d="M7 16v2M17 16v2"/><path d="M4 13h16"/></svg>',
    quote: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v12H4z"/><path d="M8 11h8M8 15h5"/><path d="M16 3v4M8 3v4"/></svg>'
  };
  const key = title.toLowerCase();
  if (key.includes("flight")) return icons.plane;
  if (key.includes("meet")) return icons.meet;
  if (key.includes("price") || key.includes("fixed")) return icons.tag;
  if (key.includes("chauffeur") || key.includes("driver")) return icons.driver;
  if (key.includes("photo")) return icons.camera;
  if (key.includes("timing") || key.includes("hours") || key.includes("minimum")) return icons.clock;
  if (key.includes("luggage")) return icons.luggage;
  if (key.includes("route") || key.includes("stops")) return icons.route;
  if (key.includes("vehicle") || key.includes("airport")) return icons.car;
  if (key.includes("quote")) return icons.quote;
  return icons.car;
}

function initBenefitCards() {
  document.querySelectorAll(".landing-section").forEach((section) => {
    const eyebrow = section.querySelector(".section-intro .eyebrow");
    if (!eyebrow || eyebrow.textContent.trim().toLowerCase() !== "benefits") return;
    section.classList.add("benefits-section");
    section.querySelectorAll(".landing-card").forEach((card) => {
      if (card.querySelector(".benefit-icon")) return;
      const heading = card.querySelector("h3");
      if (!heading) return;
      const icon = document.createElement("span");
      icon.className = "benefit-icon";
      icon.innerHTML = benefitIcon(heading.textContent);
      card.insertBefore(icon, heading);
    });
  });
}

function render() {
  const service = services[state.service];
  serviceSelect.value = state.service;
  routeBlock.innerHTML = "";
  airportBlock.innerHTML = "";
  hoursBlock.innerHTML = "";
  vehicleBlock.innerHTML = "";
  dynamicFields.innerHTML = "";

  if (service.routes.length) {
    const title = document.createElement("label");
    title.textContent = service.routeLabel;
    routeBlock.append(title, makeOptions("route", service.routes, state.route, (value) => {
      state.route = value;
      render();
    }));
  }

  if (state.service === "airport") {
    const title = document.createElement("label");
    title.textContent = "Select Airport";
    airportBlock.append(title, makeOptions("airport", service.airports, state.airport, (value) => {
      state.airport = value;
      render();
    }));
  }

  if (state.service === "hourly") {
    const title = document.createElement("label");
    title.textContent = "Select Hours";
    const values = [3, 4, 5, 6, "Custom"];
    const selectedHours = state.hours > 6 ? "Custom" : String(state.hours);
    hoursBlock.append(title, makeOptions("hours", values.map(String), selectedHours, (value) => {
      state.hours = value === "Custom" ? 7 : Number(value);
      render();
    }));
    if (state.hours > 6) hoursBlock.append(renderField(["Number of Hours", "number"]));
  }

  Object.entries(vehicles).forEach(([key, vehicle]) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `vehicle-card ${state.vehicle === key ? "selected" : ""}`;
    const maxPassengers = state.service === "tour" && key === "van" ? "Maximum 7 passengers" : vehicle.passengers;
    card.innerHTML = `
      <img src="${vehicle.image}" alt="${vehicle.name}">
      <div class="vehicle-card-body">
        <h3>${vehicle.name}</h3>
        <div class="vehicle-detail-list" aria-label="${vehicle.name} details">
          <p>${vehicleIcon("people")} <span>${maxPassengers}</span></p>
          <p>${vehicleIcon("suitcase")} <span>${vehicle.luggage}</span></p>
        </div>
        <strong>${money(service.prices[key])}</strong>
      </div>`;
    if (state.service === "hourly") card.querySelector("strong").textContent = `${money(service.prices[key])}/hour`;
    card.addEventListener("click", () => {
      state.vehicle = key;
      render();
    });
    vehicleBlock.append(card);
  });

  const price = currentPrice();
  priceValue.textContent = money(price);
  priceNote.textContent = service.note;
  service.fields(state.route).forEach((field) => dynamicFields.append(renderField(field)));
  if (state.service === "hourly" && state.hours > 6) {
    const hoursInput = document.querySelector("#number-of-hours");
    if (hoursInput) {
      hoursInput.value = state.hours;
      hoursInput.addEventListener("input", () => {
        state.hours = Number(hoursInput.value || 7);
        priceValue.textContent = money(currentPrice());
      });
    }
  }
  initAutocomplete();
}

function collectForm() {
  const details = {
    Service: services[state.service].label,
    Route: state.route || "",
    Airport: state.service === "airport" ? state.airport : "",
    Vehicle: vehicles[state.vehicle].name,
    Price: money(currentPrice())
  };
  if (state.service === "hourly") details["Number of Hours"] = state.hours;
  dynamicFields.querySelectorAll("input, select, textarea").forEach((field) => {
    if (field.value) details[field.name] = field.value;
  });
  return details;
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const details = collectForm();
    const lines = ["Hello,", "", "I would like to book:", ""];
    Object.entries(details).forEach(([key, value]) => {
      if (value) lines.push(`${key}: ${value}`);
    });
    lines.push("", "Thank you.");
    const body = lines.join("\n");
    const channel = event.submitter?.dataset.submitChannel || "whatsapp";
    if (window.fbq) fbq("track", "Lead", { content_name: details.Service });
    if (channel === "email") {
      if (window.gtag) gtag("event", "booking_email_click", { service: details.Service });
      const subject = encodeURIComponent(`Booking request - ${details.Service}`);
      window.location.href = `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
      return;
    }
    if (window.gtag) gtag("event", "booking_whatsapp_click", { service: details.Service });
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
  });
}

if (serviceSelect) {
  serviceSelect.addEventListener("change", () => {
    if (services[FIXED_SERVICE]) return;
    state.service = serviceSelect.value;
    state.route = services[state.service].routes[0] || "";
    state.vehicle = "suv";
    render();
  });
}

document.querySelectorAll("[data-service-jump]").forEach((item) => {
  item.addEventListener("click", () => {
    state.service = item.dataset.serviceJump;
    state.route = services[state.service].routes[0] || "";
    render();
    document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });
  });
});

function setMeta(selector, value) {
  const tag = document.querySelector(selector);
  if (!tag) return;
  if (tag.hasAttribute("content")) {
    tag.setAttribute("content", value);
  } else {
    tag.textContent = value;
  }
}

function updateSeo(lang) {
  const content = seo[lang];
  document.title = content.title;
  setMeta('meta[name="description"]', content.description);
  setMeta('meta[name="keywords"]', content.keywords);
  setMeta('meta[name="language"]', lang === "it" ? "Italian" : "English");
  setMeta('meta[property="og:title"]', content.ogTitle);
  setMeta('meta[property="og:description"]', content.ogDescription);
  setMeta('meta[property="og:locale"]', content.locale);
  setMeta('meta[name="twitter:title"]', content.ogTitle);
  setMeta('meta[name="twitter:description"]', content.twitterDescription);
}

document.querySelectorAll(".lang").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    document.documentElement.lang = lang;
    updateSeo(lang);
    document.querySelectorAll(".lang").forEach((el) => el.classList.toggle("active", el === button));
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (translations[lang][key]) node.textContent = translations[lang][key];
    });
  });
});

window.initAutocomplete = function initAutocomplete() {
  if (!window.google || !google.maps || !google.maps.places) return;
  document.querySelectorAll("[data-address]").forEach((input) => {
    if (input.dataset.autocompleteReady) return;
    input.dataset.autocompleteReady = "true";
    new google.maps.places.Autocomplete(input, {
      fields: ["formatted_address", "geometry", "name"],
      componentRestrictions: { country: "it" }
    });
  });
};

function loadGoogleMaps() {
  const key = window.GOOGLE_MAPS_API_KEY;
  if (!key || document.querySelector("[data-google-maps-loader]")) return;
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&libraries=places&callback=initAutocomplete`;
  script.async = true;
  script.defer = true;
  script.dataset.googleMapsLoader = "true";
  document.head.append(script);
}

function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    if (!track || !prev || !next) return;
    const move = (direction) => {
      const slide = track.querySelector(".carousel-slide");
      const gap = 14;
      const amount = slide ? slide.getBoundingClientRect().width + gap : track.clientWidth * 0.9;
      const nearEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - amount * 0.35;
      if (direction > 0 && nearEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: direction * amount, behavior: "smooth" });
      }
    };
    prev.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    window.setInterval(() => move(1), 5000);
  });
}

function initRevealCards() {
  const cards = document.querySelectorAll(".service-strip .service-card, .other-services .service-card, .deep-services .deep-card, .service-review-grid article, .benefits-section .landing-card");
  if (!cards.length) return;

  cards.forEach((card, index) => {
    card.classList.add("reveal-ready");
    card.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 90}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

  cards.forEach((card) => observer.observe(card));
}

function initMobileMenu() {
  const header = document.querySelector(".site-header");
  if (!header || header.querySelector(".mobile-menu-button")) return;

  const button = document.createElement("button");
  button.className = "mobile-menu-button";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "mobile-menu-panel");
  button.setAttribute("aria-label", "Open menu");
  button.innerHTML = '<span class="hamburger-icon" aria-hidden="true"><span></span><span></span><span></span></span><span class="visually-hidden">Menu</span>';

  const panel = document.createElement("div");
  panel.className = "mobile-menu-panel";
  panel.id = "mobile-menu-panel";
  panel.hidden = true;

  const quickLinks = services[FIXED_SERVICE]
    ? [
        ["Book This Service", "#booking"],
        ["Reviews", "#service-reviews"],
        ["Other Services", "#other-services"]
      ]
    : [
        ["Fast Booking", "#booking"],
        ["Reviews", "#reviews"],
        ["FAQ", "#faq"]
      ];

  const links = [...quickLinks, ...servicePages];
  panel.innerHTML = links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    panel.hidden = isOpen;
    document.body.classList.toggle("mobile-menu-open", !isOpen);
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open menu");
      panel.hidden = true;
      document.body.classList.remove("mobile-menu-open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || panel.hidden) return;
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open menu");
    panel.hidden = true;
    document.body.classList.remove("mobile-menu-open");
  });

  header.append(button, panel);
}

function initCookieNotice() {
  const storageKey = "luxwayCookieChoice";
  if (localStorage.getItem(storageKey)) return;

  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-live", "polite");
  banner.setAttribute("aria-label", "Cookie notice");
  banner.innerHTML = `
    <p>LuxWay uses essential cookies and may use third-party services for maps, analytics and booking links. Read the <a href="${ASSET_BASE}cookie-policy/">Cookie Policy</a> and <a href="${ASSET_BASE}privacy-policy/">Privacy Policy</a>.</p>
    <div class="cookie-actions">
      <button class="btn primary" type="button" data-cookie-choice="accepted">Accept</button>
      <button class="btn light" type="button" data-cookie-choice="declined">Reject</button>
    </div>
  `;

  banner.querySelectorAll("[data-cookie-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem(storageKey, button.dataset.cookieChoice);
      banner.hidden = true;
    });
  });

  document.body.append(banner);
}

function initServiceReviews() {
  if (!services[FIXED_SERVICE] || document.querySelector("#service-reviews")) return;
  const content = serviceReviewContent[FIXED_SERVICE];
  const anchor = document.querySelector(".faq") || document.querySelector("#other-services");
  if (!content || !anchor) return;

  const section = document.createElement("section");
  section.className = "service-reviews";
  section.id = "service-reviews";
  section.setAttribute("aria-labelledby", "service-reviews-title");
  section.innerHTML = `
    <div class="section-intro">
      <p class="eyebrow">TripAdvisor</p>
      <h2 id="service-reviews-title">${content.title}</h2>
      <p>${content.text}</p>
    </div>
    <div class="service-review-grid">
      ${content.cards.map(([title, text]) => `<article><strong>${title}</strong><p>${text}</p><span>★★★★★</span></article>`).join("")}
    </div>
    <div class="center-actions">
      <a class="btn dark" href="${TRIPADVISOR_URL}" target="_blank" rel="noopener">Read LuxWay Reviews on TripAdvisor</a>
    </div>
  `;
  anchor.before(section);

  const reviewLink = document.querySelector('.site-header .nav a[href*="#reviews"]');
  if (reviewLink) reviewLink.setAttribute("href", "#service-reviews");
}

if (hasBookingForm) render();
initCarousels();
initMobileMenu();
initServiceReviews();
initBenefitCards();
initRevealCards();
initCookieNotice();
loadGoogleMaps();
