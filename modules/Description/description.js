fetch("data/vtiger_crmentity.json")
  .then((response) => response.json())
  .then((data) => {
    const description = data.find((c) => c.crmid === compteId);

    const compteDescription = document.getElementById("compte-description");

    const card = document.createElement("div");
    card.className = "container w-100 m-auto";

    const row = document.createElement("div");
    row.className = "row";

    const row1Column1 = document.createElement("div");
    row1Column1.className =
      "col-md-12 d-flex justify-content-center align-items-center m-auto ";

    const toggleButton = document.createElement("div");
    toggleButton.className =
      "cursor-pointer bg-primary text-white rounded pl-5 pr-5  mb-2 mt-5 d-flex justify-content-between align-items-center";
    //   toggleButton.type = "button";
    toggleButton.innerText = "Description ";
    toggleButton.innerHTML += '<span class="arrow">&#9662;</span>'; // Add arrow HTML

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description-content pl-3 mt-2";

    const dateCreation = document.createElement("span");
    dateCreation.className = "badge badge-success mr-5 mb-3";

    dateCreation.textContent = ` crée le ${description.createdtime}`;

    const dateMofication = document.createElement("span");
    dateMofication.className = "badge badge-warning";

    dateMofication.textContent = ` modifié le ${description.createdtime}`;

    const descriptionText = document.createElement("div");
    descriptionText.textContent = description.description || "";

    // if (description) {
    //   descriptionDiv.textContent = description.description || "";
    // } else {
    //   descriptionDiv.textContent = "";
    // }
    descriptionDiv.appendChild(dateCreation);
    descriptionDiv.appendChild(dateMofication);
    descriptionDiv.appendChild(descriptionText);

    // Hide the description div by default
    descriptionDiv.style.display = "none";

    const toggleContainer = document.createElement("div");
    toggleContainer.className = "toggle-container w-100 m-auto";
    toggleContainer.appendChild(toggleButton);
    toggleContainer.appendChild(descriptionDiv);

    row1Column1.appendChild(toggleContainer);
    card.appendChild(row);

    row.appendChild(row1Column1);

    // Append the toggle container to the compteDescription element
    compteDescription.appendChild(card);

    // Add click event listener to the toggle button
    toggleButton.addEventListener("click", function () {
      // Toggle the visibility of the description div
      if (descriptionDiv.style.display === "none") {
        descriptionDiv.style.display = "block";
        toggleButton.querySelector(".arrow").innerHTML = "&#9652;"; // Change arrow direction
      } else {
        descriptionDiv.style.display = "none";
        toggleButton.querySelector(".arrow").innerHTML = "&#9662;"; // Change arrow direction
      }
    });
  })
  .catch((error) => console.error("Erreur:", error));
