// const urlParams = new URLSearchParams(window.location.search);
// const compteId = urlParams.get("id");

fetch("data/vtiger_crmentity.json")
  .then((response) => response.json())
  .then((data) => {
    const description = data.find((c) => c.crmid === compteId);

    if (description) {
      const compteDescription = document.getElementById("compte-description");

      const dropdownButton = document.createElement("button");
      dropdownButton.className = "btn btn-secondary dropdown-toggle";
      dropdownButton.type = "button";
      dropdownButton.id = "dropdownMenuButton";
      dropdownButton.setAttribute("data-toggle", "dropdown");
      dropdownButton.setAttribute("aria-haspopup", "true");
      dropdownButton.setAttribute("aria-expanded", "false");
      dropdownButton.innerText = "Dropdown button";

      const dropdownMenu = document.createElement("div");
      dropdownMenu.className = "dropdown-menu";
      dropdownMenu.setAttribute("aria-labelledby", "dropdownMenuButton");

      const descriptionText = document.createElement("a");
      descriptionText.className = "dropdown-item";

      descriptionText.textContent = description.description;

      dropdownMenu.appendChild(descriptionText);

      const dropdownContainer = document.createElement("div");
      dropdownContainer.className = "dropdown";
      dropdownContainer.appendChild(dropdownButton);
      dropdownContainer.appendChild(dropdownMenu);

      // Append the dropdown container to the compteDescription element
      compteDescription.appendChild(dropdownContainer);

      // Add click event listener to the dropdown button
      dropdownButton.addEventListener("click", function () {
        // Toggle the dropdown menu visibility
        dropdownMenu.classList.toggle("show");
      });
    } else {
      const errorElement = document.createElement("p");
      errorElement.classList.add("text-danger");
      errorElement.textContent = "Compte inconnu";

      document.getElementById("compte-description").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Erreur:", error));
