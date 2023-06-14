// Fetch the contacts data
fetch("data/contacts.json")
  .then((response) => response.json())
  .then((data) => {
    const contactsContainer = document.getElementById("contacts-container");

    // Create a div to hold the board list
    const boardList = document.createElement("div");
    boardList.classList.add("list-group");

    // Iterate over the contacts data
    data.forEach((contact) => {
      // Create a link for each contact
      const link = document.createElement("a");
      link.href = `contact.html?id=${contact.id}`;
      link.textContent = contact.Nom + " " + contact.Prénom;
      link.classList.add("list-group-item", "list-group-item-action");

      // Add hover effect with "success" color
      link.addEventListener("mouseover", () => {
        link.classList.add("list-group-item-success");
      });

      // Remove hover effect
      link.addEventListener("mouseout", () => {
        link.classList.remove("list-group-item-success");
      });

      // Append the link to the board list
      boardList.appendChild(link);
    });

    // Append the board list to the contacts container
    contactsContainer.appendChild(boardList);
  })
  .catch((error) => console.error("Error:", error));
