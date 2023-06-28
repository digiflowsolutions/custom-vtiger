fetch("data/vtiger_accountbillads.json")
  .then((response) => response.json())
  .then((data) => {
    const adresseFacturation = data.find(
      (c) => c.accountaddressid === compteId
    );

    const compteAdresseFacturation = document.getElementById(
      "compte-adresse-facturation"
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
      "cursor-pointer bg-secondary text-white rounded pl-5 pr-5 mt-5 mb-2 d-flex justify-content-between align-items-center";
    toggleButton.innerText = "Adresse de facturation ";
    toggleButton.innerHTML += '<span class="arrow">&#9662;</span>'; // Add arrow HTML

    const adresseFacturationDiv = document.createElement("div");
    adresseFacturationDiv.className = "description-content pl-3 mt-2";

    const bill_street = document.createElement("p");
    const bill_pobox = document.createElement("p");
    const bill_code = document.createElement("p");
    const bill_city = document.createElement("p");
    const bill_state = document.createElement("p");
    const bill_country = document.createElement("p");

    if (adresseFacturation) {
      bill_street.textContent = adresseFacturation.bill_street || "-";

      bill_pobox.textContent = adresseFacturation.bill_pobox || "-";

      bill_code.textContent = adresseFacturation.bill_code || "-";

      bill_city.textContent = adresseFacturation.bill_city || "-";

      bill_state.textContent = adresseFacturation.bill_state || "-";

      bill_country.textContent = adresseFacturation.bill_country || "-";
    } else {
      bill_street.textContent = "-";

      bill_pobox.textContent = "-";

      bill_code.textContent = "-";

      bill_city.textContent = "-";

      bill_state.textContent = "-";

      bill_country.textContent = "-";
    }
    adresseFacturationDiv.appendChild(bill_street);
    adresseFacturationDiv.appendChild(bill_pobox);
    adresseFacturationDiv.appendChild(bill_code);
    adresseFacturationDiv.appendChild(bill_city);
    adresseFacturationDiv.appendChild(bill_state);
    adresseFacturationDiv.appendChild(bill_country);

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

    // Add click event listener to the toggle button
    toggleButton.addEventListener("click", function () {
      // Toggle the visibility of the description div
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
