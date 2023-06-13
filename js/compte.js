// Get the contact ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const compteId = urlParams.get("id");
fetch("data/comptes.json")
  .then((response) => response.json())
  .then((data) => {
    const compte = data.find((c) => c.id === parseInt(compteId));

    if (compte) {
      const compteDetails = document.getElementById("compte-details");
      const nameElement = document.createElement("h1");
      nameElement.textContent = compte.name;
      compteDetails.appendChild(nameElement);
    } else {
      const errorElement = document.createElement("p");
      errorElement.textContent = "Compte not found.";
      document.getElementById("compte-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Error:", error));
