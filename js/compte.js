const urlParams = new URLSearchParams(window.location.search);
const compteId = urlParams.get("id");

fetch("data/comptes.json")
  .then((response) => response.json())
  .then((data) => {
    const compte = data.find((c) => c.id === parseInt(compteId));
    // const contact = data.find((c) => c.id === contactId);

    if (compte) {
      const compteDetails = document.getElementById("compte-details");
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";

      // Create image element
      const image = document.createElement("img");
      // image.src = contact.Photo;
      image.src = compte.picture;
      image.classList.add("card-img-top");
      image.alt = "Compte Photo";

      // Create card body div
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Create card title (name)
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = compte.account_name;

      // Create card text (phone, email, address, city)
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerHTML = `<strong>Téléphone: </strong> ${compte.mobile_phone}<br>
                     <strong>Email: </strong> ${compte.email_main}<br>
                     <strong>Addresse: </strong>${compte.address1}<br>
                     <strong>code Postal: </strong>${compte.postal_code}<br>
                     <strong>Ville:</strong> ${compte.city}`;

      // Create card subtitle (description)
      const cardSubtitle = document.createElement("h6");
      cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
      cardSubtitle.textContent = "Description";

      // Create card description
      const cardDescription = document.createElement("p");
      cardDescription.classList.add("card-text");
      cardDescription.textContent = compte.description;

      // Append elements to their respective parents
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardSubtitle);
      cardBody.appendChild(cardDescription);

      card.appendChild(image);
      card.appendChild(cardBody);

      compteDetails.appendChild(card);
    } else {
      const errorElement = document.createElement("p");
      errorElement.classList.add("text-danger");
      errorElement.textContent = "Compte not found.";

      document.getElementById("compte-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Error:", error));
