const urlParams = new URLSearchParams(window.location.search);
const compteId = urlParams.get("id");

fetch("data/vtiger_account.json")
  .then((response) => response.json())
  .then((data) => {
    const compte = data.find((c) => c.accountid === parseInt(compteId));

    if (compte) {
      //MODAL ADD INSTANCE
      const modalDiv = document.createElement("div");
      modalDiv.className = "modal";
      modalDiv.setAttribute("tabindex", "-1");
      modalDiv.setAttribute("role", "dialog");

      document.addEventListener("click", function (event) {
        if (event.target === modalDiv && modalDiv.style.display === "block") {
          numAccountInput.value = ""; // Reset
          nameInput.value = ""; // Reset

          modalDiv.style.display = "none";
        }
      });

      const modalDialogDiv = document.createElement("div");
      modalDialogDiv.className = "modal-dialog";
      modalDialogDiv.setAttribute("role", "document");

      const modalContentDiv = document.createElement("div");
      modalContentDiv.className = "modal-content";

      const modalHeaderDiv = document.createElement("div");
      modalHeaderDiv.className = "modal-header";

      const modalTitleH5 = document.createElement("h5");
      modalTitleH5.className = "modal-title";
      modalTitleH5.textContent = "Ajouter un compte";

      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "close";
      closeButton.setAttribute("data-dismiss", "modal");
      closeButton.setAttribute("aria-label", "Close");

      closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        modalDiv.style.display = "none";
      });

      const closeSpan = document.createElement("span");
      closeSpan.setAttribute("aria-hidden", "true");
      closeSpan.innerHTML = "&times;";

      closeButton.appendChild(closeSpan);

      modalHeaderDiv.appendChild(modalTitleH5);
      modalHeaderDiv.appendChild(closeButton);

      const modalBodyDiv = document.createElement("div");
      modalBodyDiv.className = "modal-body";

      const formElement = document.createElement("form");

      const formNumAccountDiv = document.createElement("div");
      formNumAccountDiv.className = "form-group";

      const numAccountLabel = document.createElement("label");
      numAccountLabel.textContent = "N°";

      // Account name input
      const numAccountInput = document.createElement("input");
      numAccountInput.type = "text";
      numAccountInput.className = "form-control";
      numAccountInput.placeholder = 'ex: "COMP01" ';

      formNumAccountDiv.appendChild(numAccountLabel);
      formNumAccountDiv.appendChild(numAccountInput);

      const formNameDiv = document.createElement("div");
      formNameDiv.className = "form-group";

      const nameLabel = document.createElement("label");
      nameLabel.textContent = "Nom";

      const nameInput = document.createElement("input");
      nameInput.id = "nameInput";
      nameInput.type = "text";
      nameInput.className = "form-control";
      nameInput.placeholder = 'ex: "DIGIFLOW" ';

      formNameDiv.appendChild(nameLabel);
      formNameDiv.appendChild(nameInput);

      // Email input
      const emailGroupDiv = document.createElement("div");
      emailGroupDiv.className = "form-group";

      const emailLabel = document.createElement("label");
      emailLabel.textContent = "Email principal";

      const emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.className = "form-control";
      emailInput.placeholder = 'ex: "contact@digiflow-solutions.net" ';

      emailGroupDiv.appendChild(emailLabel);
      emailGroupDiv.appendChild(emailInput);

      // Email secondaire
      const emailSecondaryGroupDiv = document.createElement("div");
      emailSecondaryGroupDiv.className = "form-group";

      const emailSecondaryLabel = document.createElement("label");
      emailSecondaryLabel.textContent = "Email secondaire";

      const emailSecondaryInput = document.createElement("input");
      emailSecondaryInput.type = "email";
      emailSecondaryInput.className = "form-control";
      emailSecondaryInput.placeholder = 'ex: "dev@digiflow-solutions.net" ';

      emailSecondaryGroupDiv.appendChild(emailSecondaryLabel);
      emailSecondaryGroupDiv.appendChild(emailSecondaryInput);

      // Account type
      const accountTypeGroupDiv = document.createElement("div");
      accountTypeGroupDiv.className = "form-group";

      const accountTypeLabel = document.createElement("label");
      accountTypeLabel.textContent = "Type";

      const accountTypeInput = document.createElement("input");
      accountTypeInput.type = "type";
      accountTypeInput.className = "form-control";
      accountTypeInput.placeholder = "ex: CRM";

      accountTypeGroupDiv.appendChild(accountTypeLabel);
      accountTypeGroupDiv.appendChild(accountTypeInput);

      formElement.appendChild(formNumAccountDiv);
      formElement.appendChild(formNameDiv);
      formElement.appendChild(accountTypeGroupDiv);
      formElement.appendChild(emailGroupDiv);
      formElement.appendChild(emailSecondaryGroupDiv);

      modalBodyDiv.appendChild(formElement);

      const modalFooterDiv = document.createElement("div");
      modalFooterDiv.className = "modal-footer";

      const saveChangesButton = document.createElement("button");
      saveChangesButton.type = "button";
      saveChangesButton.className = "btn btn-success";
      saveChangesButton.textContent = "Enregistrer";
      saveChangesButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (nameInput.value.trim() === "") {
          alert("Nom obligatoire");
          return;
        }
        numAccountInput.value = ""; // Reset
        nameInput.value = ""; // Reset
        modalDiv.style.display = "none";
      });

      const closeButtonFooter = document.createElement("button");
      closeButtonFooter.type = "button";
      closeButtonFooter.className = "btn btn-danger";
      closeButtonFooter.setAttribute("data-dismiss", "modal");
      closeButtonFooter.textContent = "Annuler";
      closeButtonFooter.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        numAccountInput.value = ""; // Reset
        nameInput.value = ""; // Reset

        modalDiv.style.display = "none";
      });

      modalFooterDiv.appendChild(saveChangesButton);
      modalFooterDiv.appendChild(closeButtonFooter);

      modalContentDiv.appendChild(modalHeaderDiv);
      modalContentDiv.appendChild(modalBodyDiv);
      modalContentDiv.appendChild(modalFooterDiv);

      modalDialogDiv.appendChild(modalContentDiv);

      modalDiv.appendChild(modalDialogDiv);

      const backButton = document.createElement("a");
      backButton.href = "/comptes.html";
      backButton.innerHTML = '<i class="fa fa-arrow-left" ></i>';
      backButton.className = "arrow-link mb-3 text-dark";
      backButton.style.display = "inline-block";

      const addInstance = document.createElement("a");
      addInstance.innerHTML = '<i class="fa fa-plus" ></i>';
      addInstance.className = "plus-link mb-3 text-dark";
      addInstance.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        modalDiv.style.display = "block";
      });

      const topHeader = document.createElement("div");
      topHeader.className = "d-flex justify-content-between";

      topHeader.appendChild(backButton);
      topHeader.appendChild(addInstance);

      const compteDetails = document.getElementById("compte-details");
      const card = document.createElement("div");
      card.className = "container w-100 m-auto";

      const row = document.createElement("div");
      row.className = "row";

      const row1Column1 = document.createElement("div");
      row1Column1.className =
        "col-lg-4 d-flex justify-content-center align-items-center ";

      const row1Column2 = document.createElement("div");
      row1Column2.className =
        "col-lg-5 d-flex justify-content-center align-items-center";

      const row1Column3 = document.createElement("div");
      row1Column3.className = "col-lg-3 d-flex flex-column m-auto";

      const row2Column1 = document.createElement("div");
      row2Column1.className =
        "d-flex flex-column mt-3 col-lg-4 justify-content-center align-items-lg-start align-items-sm-center ";

      const row2Column2 = document.createElement("div");
      row2Column2.className =
        "col-lg-4 d-flex flex-column justify-content-center align-items-center ml-auto mr-auto mb-auto mt-5 mt-lg-0";

      const row2Column3 = document.createElement("div");
      row2Column3.className =
        "col-lg-4  d-flex flex-column justify-content-center align-items-center ml-auto mr-auto mb-auto";

      // ROW 1 COLUMN 1

      const avatarDiv = document.createElement("div");

      avatarDiv.className =
        " d-flex flex-column justify-content-center align-items-center";

      // account image
      const image = document.createElement("img");
      image.src = "/skins/images/icone-account.png";
      image.className = "rounded p-3";
      image.alt = "Contact Photo";
      image.style.maxWidth = "250px";
      image.style.maxHeight = "250px";
      avatarDiv.appendChild(image);

      //account_no
      const accountNo = document.createElement("span");
      accountNo.className =
        "account_no bg-info text-white text-center p-2 d-flex justify-content-center align-items-center rounded";

      accountNo.style.width = "120px";
      accountNo.style.height = "30px";

      accountNo.textContent = `${compte.account_no} / ${data.length}` || "-";
      avatarDiv.appendChild(accountNo);

      row1Column1.appendChild(avatarDiv);

      // ROW 1 COLUMN 2
      const accountTitle = document.createElement("div");
      accountTitle.className =
        "mt-0 d-flex justify-content-center align-items-center flex-column";

      // accountname
      const accountName = document.createElement("h1");
      accountName.className = "accountname mb-3 text-center";
      accountName.textContent = compte.accountname || "-";
      accountTitle.appendChild(accountName);

      //account_type
      const accountType = document.createElement("h3");
      accountType.className = "account_type mb-3";
      accountType.textContent = compte.account_type || "-";
      accountTitle.appendChild(accountType);
      row1Column2.appendChild(accountTitle);

      //industry
      const accountIndustry = document.createElement("h5");
      accountIndustry.className = "account_industry mb-3";
      accountIndustry.textContent = compte.industry || "-";
      accountTitle.appendChild(accountIndustry);

      //code APE
      const sicCode = document.createElement("div");
      sicCode.innerHTML =
        "<em><u>APE</u> :</em> <em>" + compte.siccode + "</em>";

      accountTitle.appendChild(sicCode);

      // ROW 1 COLUMN 3

      // isconvertedfromlead
      const accountConvertedFromLead = document.createElement("span");
      accountConvertedFromLead.className =
        "isconvertedfromlead bg-success text-center ml-auto mr-auto mt-3 p-3 rounded text-white ";

      accountConvertedFromLead.textContent = "CONVERTI D'UN PROSPECT";
      compte.isconvertedfromlead &&
        row1Column3.appendChild(accountConvertedFromLead);

      // tags
      const containerTags = document.createElement("div");

      containerTags.className =
        "d-flex justify-content-center align-items-center";

      compte.tags.map((tag) => {
        const badge = document.createElement("span");
        badge.className = "badge badge-info p-2 mr-2 mt-3 text-center";
        badge.textContent = tag;
        containerTags.appendChild(badge);
      });
      row1Column3.appendChild(containerTags);

      // ROW 2 COLUMN 1
      // phone + otherphone
      const emojiPhone = document.createElement("h3");
      emojiPhone.className = "m-0 mr-3";
      emojiPhone.textContent = `📱`;

      const phone1Link = document.createElement("a");
      phone1Link.className = "mr-1 text-reset";
      phone1Link.href = `tel:${compte.phone || "-"}`;
      phone1Link.textContent = compte.phone || "-";
      phone1Link.target = "_blank";

      const phone2Link = document.createElement("a");
      phone2Link.className = "mr-1 text-reset";

      phone2Link.href = `tel:${compte.otherphone || "-"}`;
      phone2Link.textContent = `${compte.otherphone || "-"}`;
      phone2Link.target = "_blank";

      const phones = document.createElement("div");
      phones.className = "d-flex mt-3 align-items-center m-auto";

      phonesNumbers = document.createElement("div");
      phonesNumbers.className = "d-flex flex-column";

      (compte.phone || compte.otherphone) && phones.appendChild(emojiPhone);

      compte.phone && phonesNumbers.appendChild(phone1Link);
      compte.phone && phones.appendChild(phonesNumbers);

      compte.otherphone && phonesNumbers.appendChild(phone2Link);
      compte.otherphone && phones.appendChild(phonesNumbers);

      row2Column1.appendChild(phones);

      // email1 + email2

      const emojiEmail = document.createElement("h3");
      emojiEmail.className = "m-0 mr-3";
      emojiEmail.textContent = `✉️`;

      const email1Link = document.createElement("a");
      email1Link.className = "text-reset";
      email1Link.href = `mailto:${compte.email1 || "-"}`;
      email1Link.textContent = ` ${compte.email1 || "-"} `;
      email1Link.target = "_blank";

      const email2Link = document.createElement("a");
      email2Link.className = "text-reset";
      email2Link.href = `mailto:${compte.email2 || "-"}`;
      email2Link.textContent = `${compte.email2 || "-"}`;
      email2Link.target = "_blank";

      const emails = document.createElement("div");
      emails.className = "d-flex mt-4 align-items-center m-auto";

      emailAdresses = document.createElement("div");
      emailAdresses.className = "d-flex flex-column";

      (compte.email1 || compte.email2) && emails.appendChild(emojiEmail);

      compte.email1 && emailAdresses.appendChild(email1Link);
      compte.email1 && emails.appendChild(emailAdresses);

      compte.email2 && emailAdresses.appendChild(email2Link);
      compte.email2 && emails.appendChild(emailAdresses);

      row2Column1.appendChild(emails);

      // fax

      const emojiFax = document.createElement("h3");
      emojiFax.className = "m-0 mr-3";
      emojiFax.textContent = `📠`;

      const faxLink = document.createElement("a");
      faxLink.className = "text-reset";
      faxLink.href = `tel:${compte.fax || "-"}`;
      faxLink.textContent = ` ${compte.fax || "-"} `;
      faxLink.target = "_blank";

      const fax = document.createElement("div");
      fax.className = "d-flex mt-4 align-items-center m-auto";

      const faxNumber = document.createElement("div");
      faxNumber.className = "d-flex flex-column";

      compte.fax && fax.appendChild(emojiFax);
      compte.fax && faxNumber.appendChild(faxLink);
      compte.fax && fax.appendChild(faxNumber);

      row2Column1.appendChild(fax);

      //website
      const emojiWebsite = document.createElement("h3");
      emojiWebsite.className = "m-0 mr-3";
      emojiWebsite.textContent = `🌐`;

      const websiteLink = document.createElement("a");
      websiteLink.className = "text-reset";

      websiteLink.href = compte.website;
      websiteLink.textContent = compte.website || "-";
      websiteLink.target = "_blank";

      const website = document.createElement("div");
      website.className = "d-flex mt-4 align-items-center m-auto";

      const websiteUrl = document.createElement("div");
      websiteUrl.className = "d-flex flex-column";

      compte.website && website.appendChild(emojiWebsite);
      compte.website && websiteUrl.appendChild(websiteLink);
      compte.website && website.appendChild(websiteUrl);

      row2Column1.appendChild(website);

      // row2Column2

      // Employees
      const cardContainerEmployees = document.createElement("div");
      cardContainerEmployees.className = "col-12 mb-3";

      const cardEmployee = document.createElement("div");
      cardEmployee.className = "card shadow h-100 py-2 pl-3";
      cardEmployee.style.borderLeft = "10px solid green";

      const cardEmployeeBody = document.createElement("div");
      cardEmployeeBody.className = "card-body";

      const cardEmployeeRow = document.createElement("div");
      cardEmployeeRow.className = "row no-gutters align-items-center";

      const cardEmployeeColumnLeft = document.createElement("div");
      cardEmployeeColumnLeft.className = "col mr-2";

      const divTextEmployee = document.createElement("div");
      divTextEmployee.className =
        "text-xs font-weight-bold text-uppercase mb-1";
      divTextEmployee.textContent = "Employés";

      const divH5Employee = document.createElement("div");
      divH5Employee.className = "h5 mb-0 font-weight-bold text-gray-800";
      divH5Employee.textContent = compte.employees || "-";

      const divColAutoEmployee = document.createElement("div");
      divColAutoEmployee.className = "col-auto";

      const iElementEmployee = document.createElement("i");
      iElementEmployee.className = "fas fa-users fa-2x text-gray-300";

      cardEmployeeColumnLeft.appendChild(divTextEmployee);
      cardEmployeeColumnLeft.appendChild(divH5Employee);

      cardEmployeeRow.appendChild(cardEmployeeColumnLeft);
      cardEmployeeRow.appendChild(divColAutoEmployee);
      cardEmployeeBody.appendChild(cardEmployeeRow);
      divColAutoEmployee.appendChild(iElementEmployee);

      cardEmployee.appendChild(cardEmployeeBody);

      cardContainerEmployees.appendChild(cardEmployee);

      row2Column2.appendChild(cardContainerEmployees);

      // OWNERSHIP (propriétaire)
      const cardContainerOwner = document.createElement("div");
      cardContainerOwner.className = "col-12  mb-3";

      const cardOwner = document.createElement("div");
      cardOwner.className = "card shadow h-100 py-2 pl-3";
      cardOwner.style.borderLeft = "10px solid yellow";

      const cardOwnerBody = document.createElement("div");
      cardOwnerBody.className = "card-body";

      const cardOwnerRow = document.createElement("div");
      cardOwnerRow.className = "row no-gutters align-items-center";

      const cardOwnerColumnLeft = document.createElement("div");
      cardOwnerColumnLeft.className = "col mr-2";

      const divTextOwner = document.createElement("div");
      divTextOwner.className = "text-xs font-weight-bold text-uppercase mb-1";
      divTextOwner.textContent = "Propriétaire";

      const divH5Owner = document.createElement("div");
      divH5Owner.className = "h5 mb-0 font-weight-bold text-gray-800";
      divH5Owner.textContent = compte.ownership || "-";

      const divColAutoOwner = document.createElement("div");
      divColAutoOwner.className = "col-auto";

      const iElementOwner = document.createElement("i");
      iElementOwner.className = "fas fa-crown fa-2x text-gray-300";

      cardOwnerColumnLeft.appendChild(divTextOwner);
      cardOwnerColumnLeft.appendChild(divH5Owner);

      cardOwnerRow.appendChild(cardOwnerColumnLeft);
      cardOwnerRow.appendChild(divColAutoOwner);
      cardOwnerBody.appendChild(cardOwnerRow);
      divColAutoOwner.appendChild(iElementOwner);

      cardOwner.appendChild(cardOwnerBody);

      cardContainerOwner.appendChild(cardOwner);
      row2Column2.appendChild(cardContainerOwner);

      // row2Column3

      // ANNUAL REVENUE
      const cardContainerRevenues = document.createElement("div");
      cardContainerRevenues.className = "col-12  mb-3";

      const cardRevenue = document.createElement("div");
      cardRevenue.className = "card shadow h-100 py-2 pl-3";
      cardRevenue.style.borderLeft = "10px solid red";

      const cardRevenueBody = document.createElement("div");
      cardRevenueBody.className = "card-body";

      const cardRevenueRow = document.createElement("div");
      cardRevenueRow.className = "row no-gutters align-items-center";

      const cardRevenueColumnLeft = document.createElement("div");
      cardRevenueColumnLeft.className = "col mr-2";

      const divTextRevenue = document.createElement("div");
      divTextRevenue.className = "text-xs font-weight-bold text-uppercase mb-1";
      divTextRevenue.textContent = `Revenu annuel (${
        compte.tickersymbol ? compte.tickersymbol : "€"
      })`;

      const divH5Revenue = document.createElement("div");
      divH5Revenue.className = "h5 mb-0 font-weight-bold text-gray-800";

      divH5Revenue.textContent = compte.annualrevenue || "-";

      const divColAutoRevenue = document.createElement("div");
      divColAutoRevenue.className = "col-auto";

      // case euros
      const iElementRevenue = document.createElement("i");
      iElementRevenue.className = "fas fa-money-bill-wave fa-2x text-gray-300";

      cardRevenueColumnLeft.appendChild(divTextRevenue);
      cardRevenueColumnLeft.appendChild(divH5Revenue);

      cardRevenueRow.appendChild(cardRevenueColumnLeft);
      cardRevenueRow.appendChild(divColAutoRevenue);
      cardRevenueBody.appendChild(cardRevenueRow);
      divColAutoRevenue.appendChild(iElementRevenue);

      cardRevenue.appendChild(cardRevenueBody);

      cardContainerRevenues.appendChild(cardRevenue);
      row2Column3.appendChild(cardContainerRevenues);

      // RATINGS
      const cardContainerRating = document.createElement("div");
      cardContainerRating.className = "col-12  mb-3";

      const cardRating = document.createElement("div");
      cardRating.className = "card shadow h-100 py-2 pl-3";
      cardRating.style.borderLeft = "10px solid purple";

      const cardRatingBody = document.createElement("div");
      cardRatingBody.className = "card-body";

      const cardRatingRow = document.createElement("div");
      cardRatingRow.className = "row no-gutters align-items-center";

      const cardRatingColumnLeft = document.createElement("div");
      cardRatingColumnLeft.className = "col mr-2";

      const divTextRating = document.createElement("div");
      divTextRating.className = "text-xs font-weight-bold text-uppercase mb-1";
      divTextRating.textContent = "Note";

      const divH5Rating = document.createElement("div");
      divH5Rating.className = "h5 mb-0 font-weight-bold text-gray-800";
      divH5Rating.textContent = compte.rating || "-";

      const divColAutoRating = document.createElement("div");
      divColAutoRating.className = "col-auto";

      const iElementRating = document.createElement("i");
      iElementRating.className = "fas fa-star fa-2x text-gray-300";

      cardRatingColumnLeft.appendChild(divTextRating);
      cardRatingColumnLeft.appendChild(divH5Rating);
      cardRatingRow.appendChild(cardRatingColumnLeft);
      cardRatingRow.appendChild(divColAutoRating);
      cardRatingBody.appendChild(cardRatingRow);
      divColAutoRating.appendChild(iElementRating);
      cardRating.appendChild(cardRatingBody);
      cardContainerRating.appendChild(cardRating);
      row2Column3.appendChild(cardContainerRating);

      row.appendChild(row1Column1);
      row.appendChild(row1Column2);
      row.appendChild(row1Column3);

      row.appendChild(row2Column1);
      row.appendChild(row2Column2);
      row.appendChild(row2Column3);

      card.appendChild(modalDiv);
      card.appendChild(topHeader);

      card.appendChild(row);

      compteDetails.appendChild(card);
    } else {
      const errorElement = document.createElement("p");
      errorElement.className = "text-danger";
      errorElement.textContent = "Compte inconnu";

      document.getElementById("compte-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Erreur:", error));
