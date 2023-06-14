// Get the contact ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const contactId = urlParams.get("id");

fetch("data/contacts.json")
  .then((response) => response.json())
  .then((data) => {
    // const contact = data.find((c) => c.id === parseInt(contactId));
    const contact = data.find((c) => c.id === contactId);

    if (contact) {
      const contactDetails = document.getElementById("contact-details");

      // Create a table to display the contact details
      const table = document.createElement("table");
      table.classList.add("table", "table-striped");

      // Iterate over the fields of the contact object
      Object.entries(contact).forEach(([field, value]) => {
        // Create a row for each field-value pair
        const row = document.createElement("tr");

        // Create cells for the field and value
        const fieldCell = document.createElement("td");
        fieldCell.textContent = field;

        const valueCell = document.createElement("td");
        valueCell.textContent = value;

        // Append the cells to the row
        row.appendChild(fieldCell);
        row.appendChild(valueCell);

        // Append the row to the table
        table.appendChild(row);
      });

      // Append the table to the contact-details container
      contactDetails.appendChild(table);
    } else {
      const errorElement = document.createElement("p");
      errorElement.classList.add("text-danger");
      errorElement.textContent = "Contact not found.";

      document.getElementById("contact-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Error:", error));
