fetch("data/vtiger_accountshipads.json")
  .then((response) => response.json())
  .then((data) => {
    const adresseFacturation = data.find(
      (c) => c.accountaddressid === compteId
    );

    const compteAdresseFacturation = document.getElementById(
      "compte-adresse-livraison"
    );

    const card = document.createElement("div");
    card.className = "container w-100 m-auto";

    const row = document.createElement("div");
    row.className = "row";

    const row1Column1 = document.createElement("div");
    row1Column1.className =
      "col-md-12 d-flex justify-content-center align-items-center m-auto ";

    const toggleButton = document.createElement("div");
    toggleButton.className =
      "cursor-pointer bg-info text-white rounded pl-5 pr-5 mb-3 d-flex justify-content-between align-items-center";
    toggleButton.innerText = "Adresse de livraison ";
    toggleButton.innerHTML += '<span class="arrow">&#9662;</span>';

    const adresseFacturationDiv = document.createElement("div");
    adresseFacturationDiv.className = "description-content pl-3 mt-2";

    const ship_street = document.createElement("p");
    const ship_pobox = document.createElement("p");
    const ship_code = document.createElement("p");
    const ship_city = document.createElement("p");
    const ship_state = document.createElement("p");
    const ship_country = document.createElement("p");

    if (adresseFacturation) {
      ship_street.textContent = adresseFacturation.ship_street || "-";

      ship_pobox.textContent = adresseFacturation.ship_pobox || "-";

      ship_code.textContent = adresseFacturation.ship_code || "-";

      ship_city.textContent = adresseFacturation.ship_city || "-";

      ship_state.textContent = adresseFacturation.ship_state || "-";

      ship_country.textContent = adresseFacturation.ship_country || "-";
    } else {
      ship_street.textContent = "-";

      ship_pobox.textContent = "-";

      ship_code.textContent = "-";

      ship_city.textContent = "-";

      ship_state.textContent = "-";

      ship_country.textContent = "-";
    }
    adresseFacturationDiv.appendChild(ship_street);
    adresseFacturationDiv.appendChild(ship_pobox);
    adresseFacturationDiv.appendChild(ship_code);
    adresseFacturationDiv.appendChild(ship_city);
    adresseFacturationDiv.appendChild(ship_state);
    adresseFacturationDiv.appendChild(ship_country);

    // Hide the description div by default
    adresseFacturationDiv.style.display = "none";

    const toggleContainer = document.createElement("div");
    toggleContainer.className = "toggle-container w-100 m-auto";
    toggleContainer.appendChild(toggleButton);
    toggleContainer.appendChild(adresseFacturationDiv);

    row1Column1.appendChild(toggleContainer);
    card.appendChild(row);

    row.appendChild(row1Column1);

    // Append the toggle container to the compteAdresseFacturation element
    compteAdresseFacturation.appendChild(card);

    // toggle button click event listener
    toggleButton.addEventListener("click", function () {
      // toggle visibility of the description div
      if (adresseFacturationDiv.style.display === "none") {
        adresseFacturationDiv.style.display = "block";
        toggleButton.querySelector(".arrow").innerHTML = "&#9652;"; // Change arrow direction
      } else {
        adresseFacturationDiv.style.display = "none";
        toggleButton.querySelector(".arrow").innerHTML = "&#9662;"; // Change arrow direction
      }
    });
  })
  .catch((error) => console.error("Erreur:", error));
