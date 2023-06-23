const urlParams = new URLSearchParams(window.location.search);
const compteId = urlParams.get("id");

fetch("data/vtiger_account.json")
  .then((response) => response.json())
  .then((data) => {
    const compte = data.find((c) => c.accountid === parseInt(compteId));

    if (compte) {
      const backButton = document.createElement("a");
      backButton.href = "/comptes.html";
      backButton.textContent = "Retour";
      backButton.classList.add("arrow-link");

      const compteDetails = document.getElementById("compte-details");
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";

      const badge = document.createElement("span");
      badge.classList.add("badge", "badge-pill", "badge-info");
      let value = compte.isconvertedfromlead;
      badge.textContent = value ? "converti depuis un prospect" : "";

      const image = document.createElement("img");
      image.src = "/skins/images/icone-account.png";
      image.classList.add("card-img-top", "rounded", "p-3");
      image.alt = "Contact Photo";
      image.style.width = "100%";
      image.style.height = "300px";

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = compte.accountname;

      const cardType = document.createElement("p");
      cardType.classList.add("card-type");
      cardType.textContent = compte.account_type;

      const cardIndustry = document.createElement("p");
      cardIndustry.classList.add("card-industry");
      cardIndustry.textContent = compte.industry;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");

      const phone1Link = document.createElement("a");
      phone1Link.href = `tel:${compte.phone}`;
      phone1Link.textContent = compte.phone;
      phone1Link.target = "_blank";
      cardText.appendChild(document.createTextNode("Téléphone: "));
      cardText.appendChild(phone1Link);
      cardText.appendChild(document.createElement("br"));

      const phone2Link = document.createElement("a");
      phone2Link.href = `tel:${compte.otherphone}`;
      phone2Link.textContent = compte.otherphone;
      phone2Link.target = "_blank";
      cardText.appendChild(document.createTextNode("Téléphone secondaire: "));
      cardText.appendChild(phone2Link);
      cardText.appendChild(document.createElement("br"));

      const email1Link = document.createElement("a");
      email1Link.href = `mailto:${compte.email1}`;
      email1Link.textContent = compte.email1;
      email1Link.target = "_blank";
      cardText.appendChild(document.createTextNode("Email: "));
      cardText.appendChild(email1Link);
      cardText.appendChild(document.createElement("br"));

      const email2Link = document.createElement("a");
      email2Link.href = `mailto:${compte.email2}`;
      email2Link.textContent = compte.email2;
      email2Link.target = "_blank";
      cardText.appendChild(document.createTextNode("Email secondaire: "));
      cardText.appendChild(email2Link);
      cardText.appendChild(document.createElement("br"));

      const websiteLink = document.createElement("a");
      websiteLink.href = compte.website;
      websiteLink.textContent = compte.website;
      websiteLink.target = "_blank";
      cardText.appendChild(document.createTextNode("Site web: "));
      cardText.appendChild(websiteLink);
      cardText.appendChild(document.createElement("br"));

      const faxLink = document.createElement("a");
      faxLink.href = `tel:${compte.fax}`;
      faxLink.textContent = compte.fax;
      faxLink.target = "_blank";
      cardText.appendChild(document.createTextNode("Fax: "));
      cardText.appendChild(faxLink);
      cardText.appendChild(document.createElement("br"));

      const employees = document.createElement("p");
      employees.textContent = "Employees: " + compte.employees;

      const annualRevenue = document.createElement("p");
      annualRevenue.textContent = "Annual Revenue: " + compte.annualrevenue;

      const rating = document.createElement("p");
      rating.textContent = "Rating: " + compte.rating;

      const ownership = document.createElement("p");
      ownership.textContent = "Ownership: " + compte.ownership;

      const sicCode = document.createElement("p");
      sicCode.textContent = "SIC Code: " + compte.siccode;

      const tickerSymbol = document.createElement("p");
      tickerSymbol.textContent = "Ticker Symbol: " + compte.tickersymbol;

      const tags = document.createElement("p");
      tags.textContent = "Tags: " + compte.tags.join(", ");

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardType);
      cardBody.appendChild(cardIndustry);
      cardBody.appendChild(cardText);
      cardBody.appendChild(employees);
      cardBody.appendChild(annualRevenue);
      cardBody.appendChild(rating);
      cardBody.appendChild(ownership);
      cardBody.appendChild(sicCode);
      cardBody.appendChild(tickerSymbol);
      cardBody.appendChild(tags);

      card.appendChild(backButton);
      card.appendChild(image);
      card.appendChild(badge);
      card.appendChild(cardBody);

      compteDetails.appendChild(card);
    } else {
      const errorElement = document.createElement("p");
      errorElement.classList.add("text-danger");
      errorElement.textContent = "Compte inconnu";

      document.getElementById("compte-details").appendChild(errorElement);
    }
  })
  .catch((error) => console.error("Erreur:", error));
