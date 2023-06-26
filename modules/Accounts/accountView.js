const urlParams = new URLSearchParams(window.location.search);
const compteId = urlParams.get("id");

fetch("data/vtiger_account.json")
  .then((response) => response.json())
  .then((data) => {
    const compte = data.find((c) => c.accountid === parseInt(compteId));

    if (compte) {
      const backButton = document.createElement("a");
      backButton.href = "/comptes.html";
      backButton.textContent = "retour";
      backButton.className = "arrow-link mb-3";
      backButton.style.display = "inline-block";

      const compteDetails = document.getElementById("compte-details");
      const card = document.createElement("div");
      card.className = "container w-100 m-auto";

      const row = document.createElement("div");
      row.className = "row";

      const row1Column1 = document.createElement("div");
      row1Column1.className =
        "col-md-4 d-flex justify-content-center align-items-center ";

      const row1Column2 = document.createElement("div");
      row1Column2.className =
        "col-md-5 d-flex justify-content-center align-items-center";

      const row1Column3 = document.createElement("div");
      row1Column3.className = "col-md-3 d-flex flex-column m-auto";

      const row2Column1 = document.createElement("div");
      row2Column1.className =
        "d-flex flex-column mt-3 col-md-4 align-items-center";

      const row2Column2 = document.createElement("div");
      row2Column2.className =
        "col-md-4 mt-3 d-flex flex-column justify-content-center align-items-center m-auto";

      const row2Column3 = document.createElement("div");
      row2Column3.className =
        "col-md-4 mt-3 d-flex flex-column justify-content-center align-items-center m-auto";

      // ROW 1 COLUMN 1

      const avatarDiv = document.createElement("div");

      avatarDiv.className =
        " d-flex flex-column justify-content-center align-items-center";

      //account_no
      const accountNo = document.createElement("span");
      accountNo.className =
        "account_no bg-info text-white text-center p-4 d-flex justify-content-center align-items-center position-relative rounded-circle";

      accountNo.style.width = "20px";
      accountNo.style.height = "20px";
      accountNo.style.top = "58px";
      accountNo.style.left = "58px";
      accountNo.textContent = compte.account_no;
      avatarDiv.appendChild(accountNo);

      // account image
      const image = document.createElement("img");
      image.src = "/skins/images/icone-account.png";
      image.className = "rounded p-3";
      image.alt = "Contact Photo";
      image.style.maxWidth = "250px";
      image.style.maxHeight = "250px";
      avatarDiv.appendChild(image);

      // ROW 1 COLUMN 2
      const accountTitle = document.createElement("div");
      accountTitle.className =
        "mt-0 d-flex justify-content-center align-otems-center flex-column";

      // accountname
      const accountName = document.createElement("h3");
      accountName.className = "accountname";
      accountName.textContent = compte.accountname;
      accountTitle.appendChild(accountName);

      //account_type
      const accountType = document.createElement("p");
      accountType.className = "account_type";
      accountType.textContent = compte.account_type;
      accountTitle.appendChild(accountType);

      //industry
      const accountIndustry = document.createElement("p");
      accountIndustry.className = "account_industry";
      accountIndustry.textContent = compte.industry;
      accountTitle.appendChild(accountIndustry);

      // ROW 1 COLUMN 3

      // isconvertedfromlead
      const accountConvertedFromLead = document.createElement("span");
      accountConvertedFromLead.className =
        "isconvertedfromlead bg-success text-center p-3 rounded text-white m-auto";

      accountConvertedFromLead.textContent = "converti d'un prospect";
      compte.isconvertedfromlead &&
        row1Column3.appendChild(accountConvertedFromLead);

      // tags
      const containerTags = document.createElement("div");
      containerTags.classList.add(
        "d-flex",
        "justify-content-center",
        "align-items-center"
      );

      compte.tags.map((tag) => {
        const badge = document.createElement("span");
        badge.classList.add(
          "badge",
          "badge-info",
          "p-2",
          "mr-2",
          "mt-3",
          "text-center"
        );
        badge.textContent = tag;
        containerTags.appendChild(badge);
      });

      // ROW 2 COLUMN 1

      // phone + otherphone
      const emojiPhone = document.createElement("h3");
      emojiPhone.classList.add("m-0", "mr-3");
      emojiPhone.textContent = `📱`;

      const phone1Link = document.createElement("a");
      phone1Link.classList.add("mr-1", "text-reset");
      phone1Link.href = `tel:${compte.phone}`;
      phone1Link.textContent = ` ${compte.phone} `;
      phone1Link.target = "_blank";

      const phone2Link = document.createElement("a");
      phone2Link.classList.add("mr-1", "text-reset");

      phone2Link.href = `tel:${compte.otherphone}`;
      phone2Link.textContent = `${compte.otherphone}`;
      phone2Link.target = "_blank";

      const phones = document.createElement("div");
      phones.classList.add("d-flex", "mt-3", "align-items-top");

      phonesNumbers = document.createElement("div");
      phonesNumbers.classList.add("d-flex", "flex-column");

      (compte.phone || compte.otherphone) && phones.appendChild(emojiPhone);

      compte.phone && phonesNumbers.appendChild(phone1Link);
      compte.phone && phones.appendChild(phonesNumbers);

      compte.otherphone && phonesNumbers.appendChild(phone2Link);
      compte.otherphone && phones.appendChild(phonesNumbers);

      // email1 + email2

      const emojiEmail = document.createElement("h3");
      emojiEmail.classList.add("m-0", "mr-3");
      emojiEmail.textContent = `✉️`;

      const email1Link = document.createElement("a");
      email1Link.classList.add("text-reset");
      email1Link.href = `mailto:${compte.email1}`;
      email1Link.textContent = ` ${compte.email1} `;
      email1Link.target = "_blank";

      const email2Link = document.createElement("a");
      email2Link.classList.add("text-reset");
      email2Link.href = `mailto:${compte.email2}`;
      email2Link.textContent = `${compte.email2}`;
      email2Link.target = "_blank";

      const emails = document.createElement("div");
      emails.classList.add("d-flex", "mt-4", "align-items-top");

      emailAdresses = document.createElement("div");
      emailAdresses.classList.add("d-flex", "flex-column");

      (compte.email1 || compte.email2) && emails.appendChild(emojiEmail);

      compte.email1 && emailAdresses.appendChild(email1Link);
      compte.email1 && emails.appendChild(emailAdresses);

      compte.email2 && emailAdresses.appendChild(email2Link);
      compte.email2 && emails.appendChild(emailAdresses);

      // fax

      const emojiFax = document.createElement("h3");
      emojiFax.classList.add("m-0", "mr-3");
      emojiFax.textContent = `📠`;

      const faxLink = document.createElement("a");
      faxLink.classList.add("text-reset");
      faxLink.href = `tel:${compte.fax}`;
      faxLink.textContent = ` ${compte.fax} `;
      faxLink.target = "_blank";

      const fax = document.createElement("div");
      fax.classList.add("d-flex", "mt-4", "align-items-top");

      const faxNumber = document.createElement("div");
      faxNumber.classList.add("d-flex", "flex-column");

      compte.fax && fax.appendChild(emojiFax);
      compte.fax && faxNumber.appendChild(faxLink);
      compte.fax && fax.appendChild(faxNumber);

      //website
      const emojiWebsite = document.createElement("h3");
      emojiWebsite.classList.add("m-0", "mr-3");
      emojiWebsite.textContent = `🌐`;

      const websiteLink = document.createElement("a");
      websiteLink.classList.add("text-reset");

      websiteLink.href = compte.website;
      websiteLink.textContent = compte.website;
      websiteLink.target = "_blank";

      const website = document.createElement("div");
      website.classList.add("d-flex", "mt-4", "align-items-top");

      const websiteUrl = document.createElement("div");
      websiteUrl.classList.add("d-flex", "flex-column");

      compte.website && website.appendChild(emojiWebsite);
      compte.website && websiteUrl.appendChild(websiteLink);
      compte.website && website.appendChild(websiteUrl);

      // row2Column2
      // Employees

      const cardContainerEmployees = document.createElement("div");
      cardContainerEmployees.className = "col-xl-12 col-md-9 mb-3";

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
      divH5Employee.textContent = compte.employees;

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

      compte.employees && cardContainerEmployees.appendChild(cardEmployee);

      // OWNERSHIP (propriétaire)

      const cardContainerOwner = document.createElement("div");
      cardContainerOwner.className = "col-xl-12 col-md-9 mb-3";

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
      divH5Owner.textContent = compte.ownership;

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

      compte.ownership && cardContainerOwner.appendChild(cardOwner);

      // row2Column3

      // ANNUAL REVENUE
      const cardContainerRevenues = document.createElement("div");
      cardContainerRevenues.className = "col-xl-12 col-md-9 mb-3";

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
      divTextRevenue.textContent = `Revenu annuel (en ${
        compte.tickersymbol ? compte.tickersymbol : "€"
      })`;

      const divH5Revenue = document.createElement("div");
      divH5Revenue.className = "h5 mb-0 font-weight-bold text-gray-800";

      divH5Revenue.textContent = ` ${compte.annualrevenue}`;

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

      compte.annualrevenue && cardContainerRevenues.appendChild(cardRevenue);

      // RATINGS
      const cardContainerRating = document.createElement("div");
      cardContainerRating.className = "col-xl-12 col-md-9 mb-3";

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
      divH5Rating.textContent = compte.rating;

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

      compte.rating && cardContainerRating.appendChild(cardRating);

      // const sicCode = document.createElement("p");
      // sicCode.textContent = "SIC Code: " + compte.siccode;

      // const tickerSymbol = document.createElement("p");
      // tickerSymbol.textContent = "Ticker Symbol: " + compte.tickersymbol;

      // const tags = document.createElement("p");
      // tags.textContent = "Tags: " + compte.tags.join(", ");

      // cardBody.appendChild(carAccountName);
      // cardBody.appendChild(cardType);
      // cardBody.appendChild(cardIndustry);
      // cardBody.appendChild(cardText);
      // cardBody.appendChild(employees);
      // cardBody.appendChild(annualRevenue);
      // cardBody.appendChild(rating);
      // cardBody.appendChild(ownership);
      // cardBody.appendChild(sicCode);
      // cardBody.appendChild(tickerSymbol);
      // cardBody.appendChild(tags);

      // card.appendChild(badge);

      row1Column1.appendChild(avatarDiv);
      row1Column2.appendChild(accountTitle);
      row1Column3.appendChild(containerTags);

      row.appendChild(row1Column1);
      row.appendChild(row1Column2);
      row.appendChild(row1Column3);

      row2Column1.appendChild(phones);
      row2Column1.appendChild(emails);
      row2Column1.appendChild(fax);
      row2Column1.appendChild(website);

      row.appendChild(row2Column1);
      row.appendChild(row2Column2);
      row.appendChild(row2Column3);

      row2Column2.appendChild(cardContainerOwner);
      row2Column2.appendChild(cardContainerEmployees);
      row2Column3.appendChild(cardContainerRevenues);
      row2Column3.appendChild(cardContainerRating);

      card.appendChild(backButton);
      card.appendChild(row);

      compteDetails.appendChild(card);
    } else {
      const errorElement = document.createElement("p");
      errorElement.classList.add("text-danger");
      errorElement.textContent = "Compte inconnu";

      document.getElementById("compte-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Erreur:", error));
