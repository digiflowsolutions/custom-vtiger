fetch("data/contacts.json")
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.last_name.localeCompare(b.last_name));
    const contactsContainer = document.getElementById("contacts-container");

    const boardList = document.createElement("div");
    boardList.classList.add("list-group");

    data.forEach((contact) => {
      const link = document.createElement("a");
      link.href = `contact.html?id=${contact.id}`;
      link.textContent =
        contact.last_name.toUpperCase() + " " + contact.first_name;
      link.classList.add("list-group-item", "list-group-item-action");

      link.addEventListener("mouseover", () => {
        link.classList.add("list-group-item-success");
      });

      link.addEventListener("mouseout", () => {
        link.classList.remove("list-group-item-success");
      });

      boardList.appendChild(link);
    });

    contactsContainer.appendChild(boardList);
  })
  .catch((error) => console.error("Error:", error));
