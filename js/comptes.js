// Fetch the comptes data
fetch("data/comptes.json")
  .then((response) => response.json())
  .then((data) => {
    const comptesContainer = document.getElementById("comptes-container");

    // Create a div to hold the board list
    const boardList = document.createElement("div");
    boardList.classList.add("list-group");

    // Iterate over the comptes data
    data.forEach((compte) => {
      // Create a link for each compte
      const link = document.createElement("a");
      link.href = `compte.html?id=${compte.id}`;
      link.textContent = compte.Nom_compte;
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

    // Append the board list to the comptes container
    comptesContainer.appendChild(boardList);
  })
  .catch((error) => console.error("Error:", error));
