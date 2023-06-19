const urlParams = new URLSearchParams(window.location.search);
const contactId = urlParams.get("id");

fetch("data/contacts.json")
  .then((response) => response.json())
  .then((data) => {
    const contact = data.find((c) => c.id === parseInt(contactId));

    if (contact) {
      const contactDetails = document.getElementById("contact-details");
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";

      // Create image element
      const image = document.createElement("img");
      image.src = contact.picture;
      image.classList.add("card-img-top", "rounded", "p-3");
      image.alt = "contact Photo";
      image.style.width = "100%";
      image.style.height = "300px";

      // Create card body div
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Create card title (name)
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = contact.last_name;

      // Create card text (phone, email, address, city)
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");

      const phoneLink = document.createElement("a");
      phoneLink.href = `tel:${contact.mobile_phone}`;
      phoneLink.textContent = contact.mobile_phone;
      cardText.appendChild(document.createTextNode("Téléphone: "));
      cardText.appendChild(phoneLink);
      cardText.appendChild(document.createElement("br"));

      const emailLink = document.createElement("a");
      emailLink.href = `mailto:${contact.email_main}`;
      emailLink.textContent = contact.email_main;
      cardText.appendChild(document.createTextNode("Email: "));
      cardText.appendChild(emailLink);
      cardText.appendChild(document.createElement("br"));

      cardText.innerHTML += `<strong>Adresse: </strong>${contact.address1}<br>
                     <strong>Code Postal: </strong>${contact.postal_code}<br>
                     <strong>Ville:</strong> ${contact.city}`;

      // Create card subtitle (description)
      const cardSubtitle = document.createElement("h6");
      cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
      cardSubtitle.textContent = "Description";

      // Create card description
      const cardDescription = document.createElement("p");
      cardDescription.classList.add("card-text");
      cardDescription.textContent = contact.description;

      // Append elements to their respective parents
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardSubtitle);
      cardBody.appendChild(cardDescription);

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
  .catch((error) => console.error("Error:", error));
