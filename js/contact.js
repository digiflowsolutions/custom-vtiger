const urlParams = new URLSearchParams(window.location.search);
const contactId = urlParams.get("id");

fetch("data/contacts.json")
  .then((response) => response.json())
  .then((data) => {
    const contact = data.find((c) => c.id === parseInt(contactId));

    if (contact) {
      const contactDetails = document.getElementById("contact-details");
      const page = document.createElement("div");
      page.classList.add("page", "row");

      const image = document.createElement("img");
      image.src = contact.picture;
      image.classList.add("contact-photo", "col-lg-6", "p-3");
      image.alt = "Contact Photo";

      const contactInfo = document.createElement("div");
      contactInfo.classList.add("contact-info", "col-lg-6");

      const contactTitle = document.createElement("h2");
      contactTitle.classList.add("contact-title");
      contactTitle.textContent =
        contact.last_name.toUpperCase() + " " + contact.first_name;

      const contactDetailsList = document.createElement("ul");
      contactDetailsList.classList.add("contact-details-list");

      const createContactDetail = (label, value) => {
        const detailItem = document.createElement("li");
        const detailLabel = document.createElement("strong");
        detailLabel.textContent = label + ": ";
        const detailValue = document.createTextNode(value);
        detailItem.appendChild(detailLabel);
        detailItem.appendChild(detailValue);
        contactDetailsList.appendChild(detailItem);
      };

      createContactDetail("Téléphone", contact.mobile_phone);
      createContactDetail("Email", contact.email_main);
      createContactDetail("Adresse", contact.address1);
      createContactDetail("Code Postal", contact.postal_code);
      createContactDetail("Ville", contact.city);

      const descriptionTitle = document.createElement("h3");
      descriptionTitle.classList.add("description-title");
      descriptionTitle.textContent = "Description";

      const descriptionText = document.createElement("p");
      descriptionText.classList.add("description-text");
      descriptionText.textContent = contact.description;

      contactInfo.appendChild(contactTitle);
      contactInfo.appendChild(contactDetailsList);
      contactInfo.appendChild(descriptionTitle);
      contactInfo.appendChild(descriptionText);

      page.appendChild(image);
      page.appendChild(contactInfo);

      contactDetails.appendChild(page);
    } else {
      const errorElement = document.createElement("p");
      errorElement.classList.add("text-danger");
      errorElement.textContent = "Contact not found.";

      document.getElementById("contact-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Error:", error));
