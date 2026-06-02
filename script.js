const WA_NUMBER = "393290937951";

const translations = {
  en: {
    navBook: "Book", navServices: "Services", navReviews: "Reviews",
    eyebrow: "Licensed NCC Service in Rome",
    headline: "Private Transfers in Rome",
    subheadline: "Fixed Prices • Professional Chauffeur Service • WhatsApp Booking",
    badgeFixed: "Fixed Prices", badgeFees: "No Hidden Fees", badgeFlight: "Flight Monitoring", badgeEnglish: "English Speaking Driver", badgePay: "Pay Directly to the Driver",
    bookNow: "Book Now", airportTitle: "Airport Transfers", cruiseTitle: "Cruise Port Transfers", hourlyTitle: "Hourly Chauffeur Service", cityTitle: "City to City Transfers", tourTitle: "Rome Panoramic Tour",
    quote: "Request a Quote", bookingEyebrow: "Book in under 60 seconds", bookingTitle: "Fast WhatsApp Booking",
    bookingText: "Select your service, vehicle and details. Your complete booking request opens directly in WhatsApp.",
    selectService: "Select Service", yourPrice: "Your Price", openWhatsapp: "Open WhatsApp with Booking Details",
    reviewsTitle: "Premium Reviews", reviewsText: "Top-rated private chauffeur service for Rome arrivals, cruise transfers and private tours.", viewReviews: "View All Reviews",
    airportDesc: "Private transfers from Fiumicino and Ciampino with flight monitoring, meet and greet, fixed pricing and direct WhatsApp coordination.",
    cruiseDesc: "Comfortable transfers between Rome, airports and Civitavecchia Cruise Port, planned around boarding and disembarkation times.",
    hourlyDesc: "A private chauffeur available for shopping, meetings, events, restaurants and multiple stops across Rome.",
    cityDesc: "Private transfers across Italy, including Rome to Florence, Naples, Positano and the Amalfi Coast.",
    tourDesc: "A 3-hour panoramic tour with photo stops, audio guide support and Rome’s main landmarks, including the Colosseum."
  },
  it: {
    navBook: "Prenota", navServices: "Servizi", navReviews: "Recensioni",
    eyebrow: "Servizio NCC autorizzato a Roma",
    headline: "Transfer Privati a Roma",
    subheadline: "Prezzi Fissi • Chauffeur Professionale • Prenotazione WhatsApp",
    badgeFixed: "Prezzi Fissi", badgeFees: "Nessun Costo Nascosto", badgeFlight: "Monitoraggio Volo", badgeEnglish: "Autista parla inglese", badgePay: "Paghi direttamente all'autista",
    bookNow: "Prenota Ora", airportTitle: "Transfer Aeroporto", cruiseTitle: "Transfer Porto Crociere", hourlyTitle: "Chauffeur a Disposizione", cityTitle: "Transfer Citta a Citta", tourTitle: "Tour Panoramico di Roma",
    quote: "Richiedi Preventivo", bookingEyebrow: "Prenota in meno di 60 secondi", bookingTitle: "Prenotazione WhatsApp Rapida",
    bookingText: "Seleziona servizio, veicolo e dettagli. La richiesta completa si apre direttamente su WhatsApp.",
    selectService: "Seleziona Servizio", yourPrice: "Il tuo prezzo", openWhatsapp: "Apri WhatsApp con i dettagli",
    reviewsTitle: "Recensioni Premium", reviewsText: "Servizio chauffeur top-rated per arrivi a Roma, transfer crociere e tour privati.", viewReviews: "Vedi Tutte le Recensioni",
    airportDesc: "Transfer privati da Fiumicino e Ciampino con monitoraggio volo, meet & greet, prezzo fisso e coordinamento WhatsApp.",
    cruiseDesc: "Transfer comodi tra Roma, aeroporti e Porto di Civitavecchia, organizzati su imbarco e sbarco.",
    hourlyDesc: "Chauffeur privato per shopping, meeting, eventi, ristoranti e fermate multiple a Roma.",
    cityDesc: "Transfer privati in tutta Italia, inclusi Roma Firenze, Napoli, Positano e Costiera Amalfitana.",
    tourDesc: "Tour panoramico di 3 ore con soste foto, supporto audio guida e principali attrazioni di Roma, Colosseo incluso."
  }
};

const vehicles = {
  suv: {
    name: "SUV or Sedan",
    image: "assets/images/bmw-x3-black.png",
    passengers: "Maximum 4 passengers",
    luggage: "2 large suitcases + 2 carry-ons or 4 small suitcases"
  },
  van: {
    name: "Luxury Van",
    image: "assets/images/mercedes-v-class-black.png",
    passengers: "Maximum 8 passengers",
    luggage: "Maximum 8 large suitcases"
  }
};

const services = {
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
    prices: { suv: 170, van: 190 },
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
    prices: { suv: 50, van: 50 },
    note: "€50 per hour",
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
  },
  tour: {
    label: "Rome Panoramic Tour",
    routes: [],
    prices: { suv: 200, van: 350 },
    note: "3-hour panoramic tour",
    fields() {
      return [["Pickup Address", "text", "address"], ["Tour Date", "date"], ["Tour Start Time", "time"], ["Language", "select", ["English", "Italian", "Spanish", "French"]], ["Passengers", "number"], ["Customer Name", "text"], ["WhatsApp Number", "tel"], ["Special Requests", "textarea"]];
    }
  }
};

const state = { service: "airport", route: "Airport → Address", airport: "Fiumicino Airport (FCO)", vehicle: "suv", hours: 3 };
const serviceSelect = document.querySelector("#serviceSelect");
const routeBlock = document.querySelector("#routeBlock");
const airportBlock = document.querySelector("#airportBlock");
const hoursBlock = document.querySelector("#hoursBlock");
const vehicleBlock = document.querySelector("#vehicleBlock");
const dynamicFields = document.querySelector("#dynamicFields");
const priceValue = document.querySelector("#priceValue");
const priceNote = document.querySelector("#priceNote");

Object.entries(services).forEach(([key, service]) => {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = service.label;
  serviceSelect.append(option);
});

function money(value) {
  return value === null ? "REQUEST A QUOTE" : `€${value}`;
}

function currentPrice() {
  if (state.service === "hourly") return state.hours * 50;
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
    card.innerHTML = `<img src="${vehicle.image}" alt="${vehicle.name}"><div><h3>${vehicle.name}</h3><p>👤 ${maxPassengers}</p><p>🧳 ${vehicle.luggage}</p><strong>${money(service.prices[key])}</strong></div>`;
    if (state.service === "hourly") card.querySelector("strong").textContent = "€50/hour";
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

document.querySelector("#bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const details = collectForm();
  const lines = ["Hello,", "", "I would like to book:", ""];
  Object.entries(details).forEach(([key, value]) => {
    if (value) lines.push(`${key}: ${value}`);
  });
  lines.push("", "Thank you.");
  const message = encodeURIComponent(lines.join("\n"));
  if (window.fbq) fbq("track", "Lead", { content_name: details.Service });
  if (window.gtag) gtag("event", "booking_whatsapp_click", { service: details.Service });
  window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank", "noopener");
});

serviceSelect.addEventListener("change", () => {
  state.service = serviceSelect.value;
  state.route = services[state.service].routes[0] || "";
  state.vehicle = "suv";
  render();
});

document.querySelectorAll("[data-service-jump]").forEach((item) => {
  item.addEventListener("click", () => {
    state.service = item.dataset.serviceJump;
    state.route = services[state.service].routes[0] || "";
    render();
    document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".lang").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    document.documentElement.lang = lang;
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

render();
loadGoogleMaps();
