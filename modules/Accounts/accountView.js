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

      const row1Column1 = document.createElement("div");
      row1Column1.classList.add("col-md-4");
      const row1Column2 = document.createElement("div");
      row1Column2.classList.add("col-md-5", "d-flex");
      const row1Column3 = document.createElement("div");
      row1Column3.classList.add("col-md-3", "d-flex", "flex-column", "m-auto");

      const row2Column1 = document.createElement("div");
      row2Column1.classList.add("col-md-6");
      const row2Column2 = document.createElement("div");
      row2Column2.classList.add("col-md-6");

      // ROW 1 COLUMN 1

      const AvatarDiv = document.createElement("div");
      AvatarDiv.classList.add(
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center"
      );

      //account_no
      const accountNo = document.createElement("span");
      accountNo.classList.add(
        "account_no",
        "bg-warning",
        "text-white",
        "text-center",
        "p-4",
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "rounded-circle"
      );
      accountNo.style.width = "20px"; // Adjust the width as needed
      accountNo.style.height = "20px"; // Adjust the height as needed
      accountNo.textContent = compte.account_no;

      // account picture
      const image = document.createElement("img");
      image.src = "/skins/images/icone-account.png";
      image.classList.add("rounded", "p-3");
      image.alt = "Contact Photo";
      image.style.maxWidth = "250px";
      image.style.maxHeight = "250px";

      // ROW 1 COLUMN 2
      const accountTitle = document.createElement("div");
      accountTitle.classList.add(
        "mt-0",
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "flex-column"
      );

      // accountname
      const accountName = document.createElement("h3");
      accountName.classList.add("accountname");
      accountName.textContent = compte.accountname;

      const accountType = document.createElement("p");
      accountType.classList.add("account_type");
      accountType.textContent = compte.account_type;
      const accountIndustry = document.createElement("p");
      accountIndustry.classList.add("account_industry");
      accountIndustry.textContent = compte.industry;

      // ROW 1 COLUMN 3

      // isconvertedfromlead
      const accountConvertedFromLead = document.createElement("span");
      accountConvertedFromLead.classList.add(
        "isconvertedfromlead",
        "bg-success",
        "text-center",
        "p-2",
        "rounded",
        "text-white"
      );

      if (compte.isconvertedfromlead) {
        accountConvertedFromLead.textContent = "converti d'un prospect";
      } else {
        accountConvertedFromLead.classList.remove("p-2");
      }

      // tags
      const containerTags = document.createElement("div"); //

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

      // <div class="row no-gutters align-items-center">
      //   <div class="col mr-2">
      //     <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
      //       Earnings (Annual)
      //     </div>
      //     <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
      //   </div>
      //   <div class="col-auto">
      //     <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
      //   </div>
      // </div>;

      AvatarDiv.appendChild(accountNo);
      AvatarDiv.appendChild(image);

      accountTitle.appendChild(accountName);
      accountTitle.appendChild(accountType);
      accountTitle.appendChild(accountIndustry);

      row1Column1.appendChild(AvatarDiv);
      row1Column2.appendChild(accountTitle);
      row1Column3.appendChild(accountConvertedFromLead);
      row1Column3.appendChild(containerTags);

      row2Column1.appendChild(phones);
      row2Column1.appendChild(emails);
      row2Column1.appendChild(fax);
      row2Column1.appendChild(website);

      row1.appendChild(row1Column1);
      row1.appendChild(row1Column2);
      row1.appendChild(row1Column3);

      row2.appendChild(row2Column1);

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
