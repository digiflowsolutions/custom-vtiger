fetch("data/contacts.json")
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.last_name.localeCompare(b.last_name));
    const contactsContainer = document.getElementById("contacts-container");

    // Create the search bar
    const searchBar = document.createElement("input");
    searchBar.setAttribute("type", "text");
    searchBar.setAttribute("placeholder", "Search");
    searchBar.classList.add("form-control", "mb-3");
    contactsContainer.appendChild(searchBar);

    const boardList = document.createElement("div");
    boardList.classList.add(
      "row",
      "row-cols-1",
      "row-cols-md-2",
      "row-cols-lg-4",
      "g-4"
    );

    let filteredData = data; // Initially, set the filteredData to all contacts

    const renderContacts = () => {
      boardList.innerHTML = ""; // Clear the existing contacts

      filteredData.forEach((contact) => {
        const cardColumn = document.createElement("div");
        cardColumn.classList.add("col", "d-flex", "justify-content-center");

        const link = document.createElement("a");
        link.href = `contact.html?id=${contact.id}`; // Link to contact.html with contact ID
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
        image.src = contact.picture;
        image.classList.add("card-img");
        image.alt = "Profile Picture";
        image.style.width = "100%"; // Make the image responsive

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerHTML = `${contact.last_name.toUpperCase()} ${
          contact.first_name
        }`;

        const phone = document.createElement("p");
        phone.classList.add("card-text");
        phone.innerHTML = contact.mobile_phone;

        const email = document.createElement("p");
        email.classList.add("card-text");
        email.innerHTML = contact.email_main;

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

    const filterContacts = (event) => {
      const searchTerm = event.target.value.toLowerCase();

      // Filter the contacts based on the search term
      filteredData = data.filter(
        (contact) =>
          contact.last_name.toLowerCase().includes(searchTerm) ||
          contact.first_name.toLowerCase().includes(searchTerm)
      );

      renderContacts(); // Render the filtered contacts
    };

    searchBar.addEventListener("input", filterContacts);

    renderContacts(); // Render all contacts initially

    contactsContainer.appendChild(boardList);
  })
  .catch((error) => console.error("Error:", error));
