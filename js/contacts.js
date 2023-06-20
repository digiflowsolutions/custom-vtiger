fetch("data/contacts.json")
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.lastname.localeCompare(b.lastname));
    const contactsContainer = document.getElementById("contacts-container");

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

    let filteredData = data;

    const renderContacts = () => {
      boardList.innerHTML = "";

      filteredData.forEach((contact) => {
        const cardColumn = document.createElement("div");
        cardColumn.classList.add("col", "d-flex", "justify-content-center");

        const link = document.createElement("a");
        link.href = `contact.html?id=${contact.contactid}`;
        link.classList.add(
          "list-group-item",
          "text-decoration-none",
          "text-muted"
        );

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.maxWidth = "300px";
        card.style.margin = "auto";
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("card-img-container");
        imageContainer.style.width = "100%";
        imageContainer.style.height = "200px";
        imageContainer.style.overflow = "hidden";

        const image = document.createElement("img");
        image.src = contact.picture;
        image.classList.add("card-img");
        image.alt = "Profile Picture";
        image.style.width = "100%";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerHTML = `${
          contact.salutation
        } ${contact.lastname.toUpperCase()} ${contact.firstname}`;

        const phone = document.createElement("p");
        phone.classList.add("card-text");
        phone.innerHTML = contact.phone;

        const email = document.createElement("p");
        email.classList.add("card-text");
        email.innerHTML = contact.email;

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

      filteredData = data.filter(
        (contact) =>
          contact.lastname.toLowerCase().includes(searchTerm) ||
          contact.firstname.toLowerCase().includes(searchTerm)
      );

      renderContacts();
    };

    searchBar.addEventListener("input", filterContacts);

    renderContacts();

    contactsContainer.appendChild(boardList);
  })
  .catch((error) => console.error("Erreur:", error));
