fetch("data/comptes.json")
  .then((response) => response.json())
  .then((data) => {
    // Sort the data array alphabetically by the 'Nom_compte' property
    data.sort((a, b) => a.account_name.localeCompare(b.account_name));

    const comptesContainer = document.getElementById("comptes-container");

    const boardList = document.createElement("div");
    boardList.classList.add("list-group");

    data.forEach((compte) => {
      const link = document.createElement("a");
      link.href = `compte.html?id=${compte.id}`;
      link.textContent = compte.account_name;
      link.classList.add("list-group-item", "list-group-item-action");

      link.addEventListener("mouseover", () => {
        link.classList.add("list-group-item-success");
      });

      link.addEventListener("mouseout", () => {
        link.classList.remove("list-group-item-success");
      });

      boardList.appendChild(link);
    });

    comptesContainer.appendChild(boardList);
  })
  .catch((error) => console.error("Error:", error));
