fetch("data/vtiger_crmentity.json")
  .then((response) => response.json())
  .then((data) => {
    const description = data.find((c) => c.crmid === compteId);

    if (description) {
      const compteDescription = document.getElementById("compte-description");

      const toggleButton = document.createElement("button");
      toggleButton.className = "btn btn-secondary";
      toggleButton.type = "button";
      toggleButton.innerText = "Description";
      toggleButton.innerHTML += '<span class="arrow">&#9662;</span>'; // Add arrow HTML

      const descriptionDiv = document.createElement("div");
      descriptionDiv.className = "description-content";
      descriptionDiv.textContent = description.description;

      // Hide the description div by default
      descriptionDiv.style.display = "none";

      const toggleContainer = document.createElement("div");
      toggleContainer.className = "toggle-container";
      toggleContainer.appendChild(toggleButton);
      toggleContainer.appendChild(descriptionDiv);

      // Append the toggle container to the compteDescription element
      compteDescription.appendChild(toggleContainer);

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
      errorElement.textContent = "Compte inconnu";

      document.getElementById("compte-description").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Erreur:", error));
