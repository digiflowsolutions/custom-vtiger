fetch("data/vtiger_account.json")
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.accountname.localeCompare(b.accountname));
    const comptesContainer = document.getElementById("comptes-container");

    const listContainer = document.createElement("div");
    listContainer.classList.add("comptes-list-container");
    comptesContainer.appendChild(listContainer);

    listContainer.innerHTML = `
      <input type="text" placeholder="Rechercher" class="form-control mb-3">
      <button class="btn btn-primary mb-3 toggle-button">Vue liste</button>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 comptes-board"></div>
      <table class="table table-striped mb-3 table-scrollable" style="display: none;">
        <thead>
          <tr></tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    const searchBar = listContainer.querySelector("input");
    const viewToggle = listContainer.querySelector("button");
    const boardList = listContainer.querySelector(".comptes-board");
    const tableList = listContainer.querySelector("table");
    const tableHeaderRow = tableList.querySelector("thead tr");
    const tableBody = tableList.querySelector("tbody");

    const tableHeaders = ["accountname", "phone", "email1"];
    const columnAliases = {
      accountname: "Nom",
      phone: "Téléphone",
      email1: "Email",
    };

    tableHeaders.forEach((headerText) => {
      const headerTextAlias = columnAliases[headerText] || headerText;
      const headerCell = document.createElement("th");
      headerCell.innerHTML = `${headerTextAlias}<span class="arrow up" style="display: none;">▲</span><span class="arrow down">▼</span>`;
      headerCell.addEventListener("click", () => {
        const arrowUp = headerCell.querySelector(".arrow.up");
        const arrowDown = headerCell.querySelector(".arrow.down");
        const sortOrder = arrowUp.style.display === "none" ? "asc" : "desc";
        sortData(headerText, sortOrder);
        arrowUp.style.display = sortOrder === "asc" ? "none" : "";
        arrowDown.style.display = sortOrder === "desc" ? "none" : "";
      });
      tableHeaderRow.appendChild(headerCell);
    });

    let isCardView = true;
    let filteredData = data;
    let sortedColumn = null;
    let sortOrder = "asc";

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
          card.style.border = "none";

          const imageContainer = document.createElement("div");
          imageContainer.classList.add("card-img-container");
          imageContainer.style.width = "100%";
          imageContainer.style.height = "200px";
          imageContainer.style.overflow = "hidden";

          const image = document.createElement("img");
          image.src = "/skins/images/icone-account.png";
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

          link.addEventListener("mouseenter", () => {
            link.classList.add("link-hover-shadow");
          });

          link.addEventListener("mouseleave", () => {
            link.classList.remove("link-hover-shadow");
          });
        } else {
          const row = document.createElement("tr");
          const link = document.createElement("a");
          link.href = `compte.html?id=${compte.accountid}`;
          link.classList.add("text-decoration-none", "text-muted");
          link.style.display = "contents";

          row.addEventListener("click", () => {
            window.location.href = link.href;
          });

          row.style.cursor = "pointer";

          row.appendChild(link);

          tableHeaders.forEach((headerText) => {
            const cell = document.createElement("td");
            cell.textContent = compte[headerText];
            link.appendChild(cell);
          });

          tableBody.appendChild(row);
        }
      });

      if (isCardView) {
        tableList.parentElement.style.overflow = "hidden";
      } else {
        tableList.parentElement.style.overflow = "auto";
      }
    };

    const sortData = (sortBy, newSortOrder) => {
      if (sortedColumn === sortBy) {
        sortOrder = newSortOrder === "asc" ? "desc" : "asc";
      } else {
        sortOrder = newSortOrder;
      }

      sortedColumn = sortBy;

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

    comptesContainer.appendChild(listContainer);
  })
  .catch((error) => console.error("Erreur:", error));
