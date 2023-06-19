fetch("data/comptes.json")
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.accountname.localeCompare(b.accountname));
    const comptesContainer = document.getElementById("comptes-container");

    // Create the search bar
    const searchBar = document.createElement("input");
    searchBar.setAttribute("type", "text");
    searchBar.setAttribute("placeholder", "Search");
    searchBar.classList.add("form-control", "mb-3");
    comptesContainer.appendChild(searchBar);

    const boardList = document.createElement("div");
    boardList.classList.add(
      "row",
      "row-cols-1",
      "row-cols-md-2",
      "row-cols-lg-4",
      "g-4"
    );

    let filteredData = data; // Initially, set the filteredData to all comptes

    const renderComptes = () => {
      boardList.innerHTML = ""; // Clear the existing comptes

      filteredData.forEach((compte) => {
        const cardColumn = document.createElement("div");
        cardColumn.classList.add("col", "d-flex", "justify-content-center");

        const link = document.createElement("a");
        link.href = `compte.html?id=${compte.accountid}`; // Link to contact.html with contact ID
        link.classList.add(
          "list-group-item",
          "text-decoration-none",
          "text-muted"
        );

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.maxWidth = "300px"; // Set maximum width for the card
        card.style.margin = "auto"; // Add margin: auto to center the card

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("card-img-container");
        imageContainer.style.width = "100%";
        imageContainer.style.height = "200px";
        imageContainer.style.overflow = "hidden"; // Hide any overflowing content

        const image = document.createElement("img");
        image.src = compte.picture;
        image.classList.add("card-img");
        image.alt = "Profile Picture";
        image.style.width = "100%"; // Make the image responsive

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerHTML = `${compte.accountname.toUpperCase()}`;

        const phone = document.createElement("p");
        phone.classList.add("card-text");
        phone.innerHTML = compte.mobile_phone;

        const email = document.createElement("p");
        email.classList.add("card-text");
        email.innerHTML = compte.email_main;

        cardBody.appendChild(title);
        cardBody.appendChild(phone);
        cardBody.appendChild(email);

        imageContainer.appendChild(image);
        card.appendChild(imageContainer);
        card.appendChild(cardBody);

        link.appendChild(card);
        cardColumn.appendChild(link);
        boardList.appendChild(cardColumn);
      });
    };

    const filterComptes = (event) => {
      const searchTerm = event.target.value.toLowerCase();

      // Filter the comptes based on the search term
      filteredData = data.filter(
        (compte) =>
          compte.last_name.toLowerCase().includes(searchTerm) ||
          compte.first_name.toLowerCase().includes(searchTerm)
      );

      renderComptes(); // Render the filtered comptes
    };

    searchBar.addEventListener("input", filterComptes);

    renderComptes(); // Render all comptes initially

    comptesContainer.appendChild(boardList);
  })
  .catch((error) => console.error("Error:", error));
