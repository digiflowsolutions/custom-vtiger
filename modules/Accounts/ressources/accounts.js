fetch("data/comptes.json")
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.accountname.localeCompare(b.accountname));
    const comptesContainer = document.getElementById("comptes-container");

    const searchBar = document.createElement("input");
    searchBar.setAttribute("type", "text");
    searchBar.setAttribute("placeholder", "Rechercher");
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

    let filteredData = data;

    const renderComptes = () => {
      boardList.innerHTML = "";

      filteredData.forEach((compte) => {
        const cardColumn = document.createElement("div");
        cardColumn.classList.add("col", "d-flex", "justify-content-center");

        const link = document.createElement("a");
        link.href = `account.html?id=${compte.accountid}`;
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
        image.src = compte.picture;
        image.classList.add("card-img");
        image.alt = "Profil";
        image.style.width = "100%";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerHTML = `${compte.accountname.toUpperCase()}`;

        const phone = document.createElement("p");
        phone.classList.add("card-text");
        phone.innerHTML = compte.phone;

        const email = document.createElement("p");
        email.classList.add("card-text");
        email.innerHTML = compte.email1;

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

      filteredData = data.filter((compte) =>
        compte.accountname.toLowerCase().includes(searchTerm)
      );

      renderComptes();
    };

    searchBar.addEventListener("input", filterComptes);

    renderComptes();

    comptesContainer.appendChild(boardList);
  })
  .catch((error) => console.error("Erreur:", error));
