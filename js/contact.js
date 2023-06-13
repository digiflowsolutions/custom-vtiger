const urlParams = new URLSearchParams(window.location.search);
const contactId = urlParams.get("id");

fetch("data/contacts.json")
  .then((response) => response.json())
  .then((data) => {
    const contact = data.find((c) => c.id === parseInt(contactId));

    if (contact) {
      const contactDetails = document.getElementById("contact-details");
      const nameElement = document.createElement("h1");
      nameElement.textContent = contact.name;
      contactDetails.appendChild(nameElement);

      const emailElement = document.createElement("p");
      emailElement.textContent = `Email: ${contact.email}`;
      contactDetails.appendChild(emailElement);

      const phoneElement = document.createElement("p");
      phoneElement.textContent = `Phone: ${contact.phone}`;
      contactDetails.appendChild(phoneElement);
    } else {
      const errorElement = document.createElement("p");
      errorElement.textContent = "Contact not found.";
      document.getElementById("contact-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Error:", error));
