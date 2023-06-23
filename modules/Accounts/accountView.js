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
      backButton.classList.add("arrow-link", "mb-3");
      backButton.style.display = "inline-block";

      const compteDetails = document.getElementById("compte-details");
      const card = document.createElement("div");
      card.classList.add("container", "w-100", "m-auto");

      const row1 = document.createElement("div");
      row1.classList.add("row");
      const row2 = document.createElement("div");
      row1.classList.add("row");
      const row3 = document.createElement("div");
      row1.classList.add("row");
      const row4 = document.createElement("div");
      row1.classList.add("row");

      const row1Colum1 = document.createElement("div");
      row1Colum1.classList.add("col-md-4");
      const row1Colum2 = document.createElement("div");
      row1Colum2.classList.add("col-md-5", "d-flex");
      const row1Colum3 = document.createElement("div");
      row1Colum3.classList.add("col-md-3");

      // const badge = document.createElement("span");
      // badge.classList.add("badge", "badge-pill", "badge-info");
      // let value = compte.isconvertedfromlead;
      // badge.textContent = value ? "converti depuis un prospect" : "";

      const AvatarDiv = document.createElement("div");
      AvatarDiv.classList.add(
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center"
      );

      const accountNo = document.createElement("span");
      accountNo.classList.add(
        "account_no",
        "bg-warning",
        "text-white",
        "p-4",
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "rounded-circle"
      );
      accountNo.style.width = "20px"; // Adjust the width as needed
      accountNo.style.height = "20px"; // Adjust the height as needed
      accountNo.textContent = compte.account_no;

      const image = document.createElement("img");
      image.src = "/skins/images/icone-account.png";
      image.classList.add("rounded", "p-3");
      image.alt = "Contact Photo";
      image.style.maxWidth = "250px";
      image.style.maxHeight = "250px";

      const accountTitle = document.createElement("div");
      accountTitle.classList.add(
        "m-auto",
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "flex-column"
      );

      const accountName = document.createElement("h3");
      accountName.classList.add("accountname");
      accountName.textContent = compte.accountname;

      const accountType = document.createElement("p");
      accountType.classList.add("account_type");
      accountType.textContent = compte.account_type;
      const accountIndustry = document.createElement("p");
      accountIndustry.classList.add("account_industry");
      accountIndustry.textContent = compte.industry;

      const accountConvertedFromProspect = document.createElement("span");
      accountConvertedFromProspect.classList.add(
        "isconvertedfromlead",
        "bg-success",
        "p-2",
        "rounded",
        "text-white"
      );
      accountConvertedFromProspect.textContent = compte.isconvertedfromlead
        ? "converti d'un prospect"
        : "";

      // const phone1Link = document.createElement("a");
      // phone1Link.href = `tel:${compte.phone}`;
      // phone1Link.textContent = compte.phone;
      // phone1Link.target = "_blank";
      // cardText.textContent += "Téléphone: " + phone1Link.outerHTML + "<br>";

      // const phone2Link = document.createElement("a");
      // phone2Link.href = `tel:${compte.otherphone}`;
      // phone2Link.textContent = compte.otherphone;
      // phone2Link.target = "_blank";
      // cardText.textContent +=
      //   "Téléphone secondaire: " + phone2Link.outerHTML + "<br>";

      // const email1Link = document.createElement("a");
      // email1Link.href = `mailto:${compte.email1}`;
      // email1Link.textContent = compte.email1;
      // email1Link.target = "_blank";
      // cardText.textContent += "Email: " + email1Link.outerHTML + "<br>";

      // const email2Link = document.createElement("a");
      // email2Link.href = `mailto:${compte.email2}`;
      // email2Link.textContent = compte.email2;
      // email2Link.target = "_blank";
      // cardText.textContent +=
      //   "Email secondaire: " + email2Link.outerHTML + "<br>";

      // const websiteLink = document.createElement("a");
      // websiteLink.href = compte.website;
      // websiteLink.textContent = compte.website;
      // websiteLink.target = "_blank";
      // cardText.textContent += "Site web: " + websiteLink.outerHTML + "<br>";

      // const faxLink = document.createElement("a");
      // faxLink.href = `tel:${compte.fax}`;
      // faxLink.textContent = compte.fax;
      // faxLink.target = "_blank";
      // cardText.textContent += "Fax: " + faxLink.outerHTML + "<br>";

      // const employees = document.createElement("p");
      // employees.textContent = "Employees: " + compte.employees;

      // const annualRevenue = document.createElement("p");
      // annualRevenue.textContent = "Annual Revenue: " + compte.annualrevenue;

      // const rating = document.createElement("p");
      // rating.textContent = "Rating: " + compte.rating;

      // const ownership = document.createElement("p");
      // ownership.textContent = "Ownership: " + compte.ownership;

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

      AvatarDiv.appendChild(accountNo);
      AvatarDiv.appendChild(image);

      accountTitle.appendChild(accountName);
      accountTitle.appendChild(accountType);
      accountTitle.appendChild(accountIndustry);

      row1Colum1.appendChild(AvatarDiv);
      row1Colum2.appendChild(accountTitle);
      row1Colum3.appendChild(accountConvertedFromProspect);

      row1.appendChild(row1Colum1);
      row1.appendChild(row1Colum2);
      row1.appendChild(row1Colum3);

      card.appendChild(backButton);
      card.appendChild(row1);
      card.appendChild(row2);
      card.appendChild(row3);
      card.appendChild(row4);
      // card.appendChild(cardBody);

      // document.getElementById("compte-details").appendChild(backButton);

      compteDetails.appendChild(card);
    } else {
      const errorElement = document.createElement("p");
      errorElement.classList.add("text-danger");
      errorElement.textContent = "Compte inconnu";

      document.getElementById("compte-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Erreur:", error));
