fetch("data/comptes.json")
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.accountname.localeCompare(b.accountname));
    const comptesContainer = document.getElementById("comptes-container");

    const listContainer = document.createElement("div");
    listContainer.classList.add("comptes-list-container");
    comptesContainer.appendChild(listContainer);

    const searchBar = document.createElement("input");
    searchBar.setAttribute("type", "text");
    searchBar.setAttribute("placeholder", "Rechercher");
    searchBar.classList.add("form-control", "mb-3");
    listContainer.appendChild(searchBar);

    const viewToggle = document.createElement("button");
    viewToggle.textContent = "Vue liste";
    viewToggle.classList.add("btn", "btn-primary", "mb-3");
    listContainer.appendChild(viewToggle);

    const boardList = document.createElement("div");
    boardList.classList.add(
      "row",
      "row-cols-1",
      "row-cols-md-2",
      "row-cols-lg-4",
      "g-4",
      "comptes-board"
    );
    listContainer.appendChild(boardList);

    const tableList = document.createElement("table");
    tableList.classList.add(
      "table",
      "table-striped",
      "mb-3",
      "table-scrollable"
    );
    tableList.style.display = "none";

    listContainer.appendChild(tableList);

    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const tableBody = document.createElement("tbody");

    const tableHeaders = ["accountname", "phone", "email1"];

    tableHeaders.forEach((headerText) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = headerText;

      const arrowUp = document.createElement("span");
      arrowUp.innerHTML = "&#9650;";
      arrowUp.classList.add("arrow", "up");
      arrowUp.addEventListener("click", () => {
        sortData(headerText, "asc");
      });

      const arrowDown = document.createElement("span");
      arrowDown.innerHTML = "&#9660;";
      arrowDown.classList.add("arrow", "down");
      arrowDown.addEventListener("click", () => {
        sortData(headerText, "desc");
      });

      headerCell.appendChild(arrowUp);
      headerCell.appendChild(arrowDown);
      headerRow.appendChild(headerCell);
    });

    tableHeader.appendChild(headerRow);
    tableList.appendChild(tableHeader);
    tableList.appendChild(tableBody);

    let isCardView = true;
    let filteredData = data;

    const renderComptes = () => {
      boardList.innerHTML = "";
      tableBody.innerHTML = "";

      filteredData.forEach((compte) => {
        if (isCardView) {
          const cardColumn = document.createElement("div");
          cardColumn.classList.add("col", "d-flex", "justify-content-center");

          const link = document.createElement("a");
          link.href = `compte.html?id=${compte.accountid}`;
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
        } else {
          const row = document.createElement("tr");
          const link = document.createElement("a");
          link.href = `compte.html?id=${compte.accountid}`;
          link.classList.add("text-decoration-none", "text-muted");
          link.style.display = "contents"; // Make the link behave like its content is part of the row

          row.addEventListener("click", () => {
            window.location.href = link.href; // Redirect to the link URL when the row is clicked
          });

          row.style.cursor = "pointer"; // Show cursor pointer on the row

          row.appendChild(link);

          const nameCell = document.createElement("td");
          nameCell.textContent = compte.accountname;

          const phoneCell = document.createElement("td");
          phoneCell.textContent = compte.phone;

          const emailCell = document.createElement("td");
          emailCell.textContent = compte.email1;

          link.appendChild(nameCell);
          row.appendChild(phoneCell);
          row.appendChild(emailCell);

          tableBody.appendChild(row);
        }
      });

      //permet de ne pas scroller après les cards
      if (isCardView) {
        tableContainer.style.height = "0px";
      }
    };

    const sortData = (sortBy, sortOrder) => {
      let sortedData = [];

      if (sortOrder === "asc") {
        sortedData = filteredData.sort((a, b) =>
          a[sortBy].localeCompare(b[sortBy])
        );
      } else {
        sortedData = filteredData.sort((a, b) =>
          b[sortBy].localeCompare(a[sortBy])
        );
      }

      filteredData = sortedData;
      renderComptes();
    };

    const filterComptes = (event) => {
      const searchTerm = event.target.value.toLowerCase();

      filteredData = data.filter((compte) =>
        compte.accountname.toLowerCase().includes(searchTerm)
      );

      renderComptes();
    };

    searchBar.addEventListener("input", filterComptes);

    viewToggle.addEventListener("click", () => {
      isCardView = !isCardView;
      if (isCardView) {
        boardList.style.display = "flex";
        tableList.style.display = "none";
        viewToggle.textContent = "Vue liste";
      } else {
        boardList.style.display = "none";
        tableList.style.display = "table";
        viewToggle.textContent = "Vue cartes";
      }
      renderComptes();
    });

    renderComptes();

    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table-container");
    tableContainer.appendChild(tableList);
    listContainer.appendChild(tableContainer);

    // Add a CSS class to the table container for styling
    tableContainer.classList.add("scrollable");

    comptesContainer.appendChild(listContainer);
  })
  .catch((error) => console.error("Erreur:", error));
