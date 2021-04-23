// STEP 01: Predefined list of countries
const countryListAlpha2 = {
  NOSENSE: "NOSENSE",
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas (the)",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia (Plurinational State of)",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory (the)",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  KY: "Cayman Islands (the)",
  CF: "Central African Republic (the)",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands (the)",
  CO: "Colombia",
  KM: "Comoros (the)",
  CD: "Congo (the Democratic Republic of the)",
  CG: "Congo (the)",
  CK: "Cook Islands (the)",
  CR: "Costa Rica",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  CI: "Côte d'Ivoire",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic (the)",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",
  ET: "Ethiopia",
  FK: "Falkland Islands (the) [Malvinas]",
  FO: "Faroe Islands (the)",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories (the)",
  GA: "Gabon",
  GM: "Gambia (the)",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  VA: "Holy See (the)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran (Islamic Republic of)",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea (the Democratic People's Republic of)",
  KR: "Korea (the Republic of)",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic (the)",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands (the)",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia (Federated States of)",
  MD: "Moldova (the Republic of)",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands (the)",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger (the)",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands (the)",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine, State of",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines (the)",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  MK: "Republic of North Macedonia",
  RO: "Romania",
  RU: "Russian Federation (the)",
  RW: "Rwanda",
  RE: "Réunion",
  BL: "Saint Barthélemy",
  SH: "Saint Helena, Ascension and Tristan da Cunha",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin (French part)",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten (Dutch part)",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan (the)",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania, United Republic of",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands (the)",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates (the)",
  GB: "United Kingdom of Great Britain and Northern Ireland (the)",
  UM: "United States Minor Outlying Islands (the)",
  US: "United States of America (the)",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela (Bolivarian Republic of)",
  VN: "Viet Nam",
  VG: "Virgin Islands (British)",
  VI: "Virgin Islands (U.S.)",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  AX: "Åland Islands",
};

// STEP 01: wishlist
let wishlist = [];

// STEP 03 : get the wishlited items from the localstorage
if (!localStorage.getItem("wishlist")) {
  localStorage.setItem("wishlist", JSON.stringify([]));
}
wishlist = JSON.parse(localStorage.getItem("wishlist"));

// Get the country select element
const countriesSelectElm = document.querySelector("#countries");

// STEP 01: Populate countries to the country select element
for (const key in countryListAlpha2) {
  const countryOptionElement = document.createElement("option");
  countryOptionElement.value = key;
  countryOptionElement.textContent = countryListAlpha2[key];
  countriesSelectElm.appendChild(countryOptionElement);
}

// STEP 01: Get some other elements
const addCountryBtn = document.querySelector("#add-country");
const wishlistContainer = document.querySelector("#wishlist");
const notificationContainer = document.querySelector("#notification");

// STEP 04: function to update the log in the sessionStorage
const addEventToSessionLog = (event, name) => {
  log.push({ eventType: event, countryName: name });
  sessionStorage.setItem("log", JSON.stringify(log));
};

// STEP 01: add the event listener to the add button so that the country will be wishlisted
addCountryBtn.addEventListener("click", () => {
  // remove any prior notifications...
  notificationContainer.innerText = "";

  // get the selected item
  const selectedItem =
    countriesSelectElm.options[countriesSelectElm.selectedIndex];

  if (selectedItem.value != 0) {
    // if another value has been selected other than the default one
    if (!wishlist.includes(selectedItem.value)) {
      // if the country hasn't been added before

      // add the country code to the wishlist array
      wishlist.push(selectedItem.value);

      // STEP 03: update the wishlist in the localStorage
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      // STEP 01: create and append the dom country element to the wishlist container
      appendCountryElm(selectedItem.value, selectedItem.text);

      // STEP 04: add to the session log
      appendLoggingElm("add", selectedItem.text);
      // STEP 04: add event to the sessionStorage
      addEventToSessionLog("add", selectedItem.text);
    } else {
      notificationContainer.innerText =
        "This country has been already wishlisted.";
    }
  } else {
    notificationContainer.innerText =
      "Please, make sure to select a country from the list.";
  }
});

// STEP 01: country deletion from the list handler
const deleteCountryHandler = (e) => {
  e.stopPropagation();
  const code = e.target.parentNode.textContent.split("-")[0];
  const index = wishlist.findIndex((countryCode) => countryCode == code);
  wishlist.splice(index, 1);
  e.target.parentNode.parentNode.remove();

  // STEP 03: update the wishlist in the localStorage
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  // STEP 04: add to the session log
  appendLoggingElm("delete", countryListAlpha2[code]);
  // STEP 04: add event to the sessionStorage
  addEventToSessionLog("delete", countryListAlpha2[code]);
};

//STEP 06: dragStart handler
const dragStartHandler = (e) => {
  // Add the target element's id to the data transfer object
  e.dataTransfer.setData("text/plain", e.target.id);
  // For cursor state
  e.dataTransfer.effectAllowed = "move";
};

function dragOverHandler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  // Get the target element
  const targetElm =
    e.target.nodeName === "H2"
      ? e.target.parentNode
      : e.target.parentNode.parentNode;
  // Set a style
  targetElm.childNodes[0].classList.remove("has-background-grey-light");
}

function dragLeaveHandler(e) {
  e.preventDefault();
  // Get the target element
  const targetElm =
    e.target.nodeName === "H2"
      ? e.target.parentNode
      : e.target.parentNode.parentNode;
  // Sett a style
  targetElm.childNodes[0].classList.add("has-background-grey-light");
}
function dropHandler(e) {
  e.preventDefault();
  // Get the target element
  const targetElm =
    e.target.nodeName === "H2"
      ? e.target.parentNode
      : e.target.parentNode.parentNode;

  // Get the id of the target and add the moved element to the target's DOM
  const sourceElmId = e.dataTransfer.getData("text/plain");
  // Get the source element
  const sourceElm = document.getElementById(sourceElmId);

  // Get source and target elements idexes in the children collection of the container
  const sourceIndex = [...wishlistContainer.children].indexOf(sourceElm);
  const targetIndex = [...wishlistContainer.children].indexOf(targetElm);

  // Move the element
  if (sourceIndex < targetIndex)
    targetElm.insertAdjacentElement("afterend", sourceElm);
  if (sourceIndex > targetIndex)
    targetElm.insertAdjacentElement("beforebegin", sourceElm);

  // Reset the style of the target
  targetElm.childNodes[0].classList.remove("has-background-black");
  targetElm.childNodes[0].classList.add("has-background-grey-light");
}
// STEP 01: function to append a dom country element to the wishlist container
const appendCountryElm = (code, name) => {
  // create the country dom element and append it to the container
  const newCountryElm = document.createElement("div");
  newCountryElm.id = code;

  // STEP 06: set the element as draggable
  newCountryElm.setAttribute("draggable", "true");

  const html = `<h2 class="pl-4 py-4 my-1 has-background-grey-light has-text-black">${code}- ${name}
  <span class="tag is-danger is-pulled-right mr-4" style="cursor: pointer;">
    Delete
  </span>
</h2>`;
  newCountryElm.innerHTML = html;
  wishlistContainer.appendChild(newCountryElm);

  // add event handler that fires whenever the delete button is clicked:
  newCountryElm
    .querySelector("span")
    .addEventListener("click", deleteCountryHandler);
  // STEP 02: add an event handler that fires whenever the element is clicked for fetching country info
  newCountryElm.addEventListener("click", countryClickedHandler);

  // STEP 06: add an event handlers that fire whenever the user start dragging the element
  newCountryElm.addEventListener("dragstart", dragStartHandler);
  newCountryElm.addEventListener("dragover", dragOverHandler);
  newCountryElm.addEventListener("dragleave", dragLeaveHandler);
  newCountryElm.addEventListener("drop", dropHandler);
};

// STEP 02: get the info container dom element
const infoContainer = document.querySelector("#info");

// STEP 02: function that fetchs the country info from a third-party RESTFul api
const fetchCountryInfo = async (code) => {
  // fetch the data
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);

  // Country not found
  if (!res.ok) throw Error(`Sorry! No info has been found for this country.`);

  // Was ok...and country found
  const data = await res.json();
  return data;
};

// STEP 02: A function to make the code execution wait for some x time...
function wait(x) {
  return new Promise((resolve) => setTimeout(resolve, x));
}

// STEP 05: function that calculate distance between two points
function distance(lat1, lat2, lon1, lon2) {
  // convert to radians as JavaScript Math works with radians instead of degrees !
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  // Radius of earth in kilometers. Use 3956
  // for miles
  const r = 6371;

  // Haversine formula
  const dlon = lon2 - lon1;
  const dlat = lat2 - lat1;
  const a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  // calculate the result
  const d = 2 * r * Math.asin(Math.sqrt(a));

  return d;
}

// STEP 02:  the country clicked handler
const countryClickedHandler = async (e) => {
  // remove any prior notifications...
  notificationContainer.innerText = "";
  let html;
  try {
    const countryCode = e.target.textContent.split("-")[0];
    // if the country hasn't been added before
    // add progress bar
    html = `<progress class="progress is-medium is-dark" max="100">45%</progress>
  `;
    infoContainer.innerHTML = html;

    // intentional delay for three seconds...
    await wait(1000);

    // get the info and display them..
    const info = await fetchCountryInfo(countryCode);
    html = `
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="${info.flag}" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${info.name}</p>
                  <p class="subtitle is-6">${info.region}</p>
                </div>
              </div>

              <div class="content">
                  <ul>
                  <li><b>Capital</b>: ${info.capital}</li>
                  <li><b>Area</b>: ${info.area} km<sup>2</sup></li>
                  <li><b>Population</b>: ${info.population} people</li>
                  <li><b>Language(s)</b>: ${info.languages
                    .map((lg) => lg.name)
                    .join(" | ")}</li>
                  <li><b>Currencies(s)</b>: ${info.currencies
                    .map((cur) => `${cur.name}(${cur.code} - ${cur.symbol})`)
                    .join(" | ")}</li>
                  <li><b>Timezone(s)</b>: ${info.timezones.join(" | ")}</li>
                  <li><b>How far is it?</b>: 
                      <span id="show-distance" class="tag is-info" style="cursor: pointer;">
                        show
                      </span>
                  </li>
                  </ul>
              </div>`;

    infoContainer.innerHTML = html;

    // STEP 04: add to the session log
    appendLoggingElm("fetch", countryListAlpha2[countryCode]);

    // STEP 04: add event to the sessionStorage
    addEventToSessionLog("fetch", countryListAlpha2[countryCode]);

    // STEP 05: show distance
    const showDistancContainer = document.querySelector("#show-distance");
    showDistancContainer.addEventListener("click", () => {
      if (navigator.geolocation) {
        // check if it is supported by the browser
        // on success
        const success = (position) => {
          // Get my actual position coords
          let { latitude, longitude } = position.coords;
          let [destinationLat, destinationLong] = info.latlng;
          result = distance(
            latitude,
            destinationLat,
            longitude,
            destinationLong
          );
          showDistancContainer.innerText = `${result.toFixed(2)} km`;
        };
        const error = (error) => {
          showDistancContainer.classList.remove("is-info");
          showDistancContainer.classList.add("is-danger");
          switch (error.code) {
            case error.PERMISSION_DENIED:
              showDistancContainer.innerText =
                "You have denied the request for Geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              showDistancContainer.innerText =
                "Location information is unavailable.";
              break;
            case error.UNKNOWN_ERROR:
              showDistancContainer.innerText = "An unknown error occurred.";
              break;
          }
        };
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        result = "Geolocation is not supported by this browser.";
      }
    });
  } catch (error) {
    html = `<div class="notification is-danger">
             ${error.message}
            </div>`;
    infoContainer.innerHTML = html;
  }
};

// STEP 01: Populate the wishlist
for (const countryCode of wishlist) {
  appendCountryElm(countryCode, countryListAlpha2[countryCode]);
}

// STEP 04: get the session log container element
const sessionLogContainer = document.querySelector("#log");

// STEP 04 : get the logging items from the sessionStorage
if (!sessionStorage.getItem("log")) {
  sessionStorage.setItem("log", JSON.stringify([]));
}
const log = JSON.parse(sessionStorage.getItem("log"));

// STEP 04: function to create and append a dom sesion logging element
const appendLoggingElm = (eventType, name) => {
  formattedName = `<b>${name.toUpperCase()}</b>`;
  let msg;
  switch (eventType) {
    case "add":
      msg = `I have wishlisted ${formattedName}.`;
      break;
    case "delete":
      msg = `I have removed ${formattedName} from my wishlist.`;
      break;
    case "fetch":
      msg = `I have looked up more info about ${formattedName}.`;
      break;
  }
  // Date & time
  var dt = new Date();
  var dateTime = dt.toLocaleString();
  // create the country dom element and append it to the container
  const newLoggingElm = document.createElement("div");
  const html = `<h2 class="pl-2 py-2 my-1 has-background-grey-light has-text-black">
                  <span class="tag is-info" style="cursor: pointer;">
                    ${dateTime}
                  </span>
                  # ${msg}</h2>`;
  newLoggingElm.innerHTML = html;
  sessionLogContainer.appendChild(newLoggingElm);
};

// STEP 04: populate the session log
log.forEach((item) => appendLoggingElm(item.eventType, item.countryName));
