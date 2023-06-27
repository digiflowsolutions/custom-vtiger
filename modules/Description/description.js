fetch("data/vtiger_crmentity.json")
  .then((response) => response.json())
  .then((data) => {
    const description = data.find((c) => c.crmid === compteId);

    if (description) {
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
        "bg-secondary text-white rounded pl-5 pr-5 mt-3 mb-2 d-flex justify-content-between align-items-center";
      //   toggleButton.type = "button";
      toggleButton.innerText = "Description ";
      toggleButton.innerHTML += '<span class="arrow">&#9662;</span>'; // Add arrow HTML

      const descriptionDiv = document.createElement("div");
      descriptionDiv.className = "description-content pl-3 mt-2";
      descriptionDiv.textContent = description.description;

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
    } else {
      const errorElement = document.createElement("p");
      errorElement.classList.add("text-danger");
      errorElement.textContent = "";

      document.getElementById("compte-description").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Erreur:", error));
