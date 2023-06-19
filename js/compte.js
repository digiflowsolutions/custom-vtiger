const urlParams = new URLSearchParams(window.location.search);
const compteId = urlParams.get("id");

fetch("data/comptes.json")
  .then((response) => response.json())
  .then((data) => {
    const compte = data.find((c) => c.accountid === parseInt(compteId));

    if (compte) {
      const compteDetails = document.getElementById("compte-details");
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";

      // Create image element
      const image = document.createElement("img");
      image.src = compte.picture;
      image.classList.add("card-img-top", "rounded", "p-3");
      image.alt = "Contact Photo";
      image.style.width = "100%";
      image.style.height = "300px";

      // Create card body div
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Create card title (name)
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = compte.accountname;

      // Create card text (phone, email, address, city)
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");

      const phoneLink = document.createElement("a");
      phoneLink.href = `tel:${compte.mobile_phone}`;
      phoneLink.textContent = compte.mobile_phone;
      cardText.appendChild(document.createTextNode("Téléphone: "));
      cardText.appendChild(phoneLink);
      cardText.appendChild(document.createElement("br"));

      const emailLink = document.createElement("a");
      emailLink.href = `mailto:${compte.email_main}`;
      emailLink.textContent = compte.email_main;
      cardText.appendChild(document.createTextNode("Email: "));
      cardText.appendChild(emailLink);
      cardText.appendChild(document.createElement("br"));

      cardText.innerHTML += `<strong>Adresse: </strong>${compte.address1}<br>
                     <strong>Code Postal: </strong>${compte.postal_code}<br>
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
