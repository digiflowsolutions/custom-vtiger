const urlParams = new URLSearchParams(window.location.search);
const contactId = urlParams.get("id");

fetch("data/contacts.json")
  .then((response) => response.json())
  .then((data) => {
    const contact = data.find((c) => c.contactid === parseInt(contactId));

    if (contact) {
      const backButton = document.createElement("a");
      backButton.href = "/contacts.html";
      backButton.textContent = "Retour";
      backButton.classList.add("arrow-link");

      const contactDetails = document.getElementById("contact-details");
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";

      const image = document.createElement("img");
      image.src = contact.picture;
      image.classList.add("card-img-top", "rounded", "p-3");
      image.alt = "contact";
      image.style.width = "100%";
      image.style.height = "300px";

      // Create card body div
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Create badge element
      const badge = document.createElement("span");
      badge.classList.add("badge", "badge-pill", "badge-info");
      let value = contact.isconvertedfromlead;
      badge.textContent = value === 1 ? "conveti depuis un prospect" : "";

      const title = document.createElement("span");
      title.classList.add("badge", "badge-pill", "badge-success");
      title.textContent = contact.title;

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = `${contact.salutation} ${contact.lastname} ${contact.firstname}`;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");

      const phoneLink = document.createElement("a");
      phoneLink.href = `tel:${contact.phone}`;
      phoneLink.textContent = contact.phone;
      cardText.appendChild(document.createTextNode("Téléphone: "));
      cardText.appendChild(phoneLink);
      cardText.appendChild(document.createElement("br"));

      const mobileLink = document.createElement("a");
      mobileLink.href = `tel:${contact.mobile}`;
      mobileLink.textContent = contact.mobile;
      cardText.appendChild(document.createTextNode("Téléphone mobile: "));
      cardText.appendChild(mobileLink);
      cardText.appendChild(document.createElement("br"));

      const emailLink = document.createElement("a");
      emailLink.href = `mailto:${contact.email}`;
      emailLink.textContent = contact.email;
      cardText.appendChild(document.createTextNode("Email: "));
      cardText.appendChild(emailLink);
      cardText.appendChild(document.createElement("br"));

      cardText.innerHTML += `<strong>Adresse: </strong>${contact.mailingstreet}<br>
                     <strong>Code Postal: </strong>${contact.mailingzip}<br>
                     <strong>Ville:</strong> ${contact.mailingcity}`;

      cardBody.appendChild(badge);
      cardBody.appendChild(title);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);

      card.appendChild(backButton);
      card.appendChild(image);
      card.appendChild(cardBody);

      contactDetails.appendChild(card);
    } else {
      const errorElement = document.createElement("p");
      errorElement.classList.add("text-danger");
      errorElement.textContent = "contact not found.";

      document.getElementById("contact-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Erreur:", error));
