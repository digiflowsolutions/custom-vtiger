// Get the contact ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const compteId = urlParams.get("id");

fetch("data/comptes.json")
  .then((response) => response.json())
  .then((data) => {
    const compte = data.find((c) => c.id === compteId);

    if (compte) {
      const compteDetails = document.getElementById("compte-details");

      // Create a table to display the contact details
      const table = document.createElement("table");
      table.classList.add("table", "table-striped");

      // Iterate over the fields of the contact object
      Object.entries(compte).forEach(([field, value]) => {
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
      compteDetails.appendChild(table);
    } else {
      const errorElement = document.createElement("p");
      errorElement.classList.add("text-danger");
      errorElement.textContent = "Compte not found.";

      document.getElementById("compte-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Error:", error));

// // Get the contact ID from the URL query parameter
// const urlParams = new URLSearchParams(window.location.search);
// const compteId = urlParams.get("id");
// fetch("data/comptes.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const compte = data.find((c) => c.id === parseInt(compteId));

//     if (compte) {
//       const compteDetails = document.getElementById("compte-details");

//       // Create a table to display the compte details
//       const table = document.createElement("table");
//       table.classList.add("table");

//       // Iterate over the fields of the compte object
//       Object.entries(compte).forEach(([field, value]) => {
//         // Create a row for each field-value pair
//         const row = document.createElement("tr");

//         // Create cells for the field and value
//         const fieldCell = document.createElement("th");
//         fieldCell.scope = "row";
//         fieldCell.textContent = field;
//         const valueCell = document.createElement("td");
//         valueCell.textContent = value;

//         // Append the cells to the row
//         row.appendChild(fieldCell);
//         row.appendChild(valueCell);

//         // Append the row to the table
//         table.appendChild(row);
//       });

//       // Append the table to the compte-details container
//       compteDetails.appendChild(table);
//     } else {
//       const errorElement = document.createElement("p");
//       errorElement.classList.add("text-danger");
//       errorElement.textContent = "Compte not found.";
//       document.getElementById("compte-details").appendChild(errorElement);
//     }
//   })
//   .catch((error) => console.error("Error:", error));
