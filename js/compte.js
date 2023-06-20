const urlParams = new URLSearchParams(window.location.search);
const compteId = urlParams.get("id");

fetch("data/comptes.json")
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
      badge.textContent = value === 1 ? "conveti depuis un prospect" : "";

      const image = document.createElement("img");
      image.src = compte.picture;
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
      cardText.appendChild(document.createTextNode("Téléphone: "));
      cardText.appendChild(phone1Link);
      cardText.appendChild(document.createElement("br"));

      const phone2Link = document.createElement("a");
      phone2Link.href = `tel:${compte.otherphone}`;
      phone2Link.textContent = compte.otherphone;
      cardText.appendChild(document.createTextNode("Téléphone secondaire: "));
      cardText.appendChild(phone2Link);
      cardText.appendChild(document.createElement("br"));

      const email1Link = document.createElement("a");
      email1Link.href = `mailto:${compte.email1}`;
      email1Link.textContent = compte.email1;
      cardText.appendChild(document.createTextNode("Email: "));
      cardText.appendChild(email1Link);
      cardText.appendChild(document.createElement("br"));

      const email2Link = document.createElement("a");
      email2Link.href = `mailto:${compte.email2}`;
      email2Link.textContent = compte.email2;
      cardText.appendChild(document.createTextNode("Email secondaire: "));
      cardText.appendChild(email2Link);
      cardText.appendChild(document.createElement("br"));

      const websiteLink = document.createElement("a");
      websiteLink.href = `linkto:${compte.website}`;
      websiteLink.textContent = compte.website;
      cardText.appendChild(document.createTextNode("Site web: "));
      cardText.appendChild(websiteLink);
      cardText.appendChild(document.createElement("br"));

      const faxLink = document.createElement("a");
      faxLink.href = `tel:${compte.fax}`;
      faxLink.textContent = compte.fax;
      cardText.appendChild(document.createTextNode("Fax: "));
      cardText.appendChild(faxLink);
      cardText.appendChild(document.createElement("br"));

      cardText.innerHTML += `<strong>Adresse: </strong>${compte.bill_street}<br>
                     <strong>Code Postal: </strong>${compte.bill_code}<br>
                     <strong>Ville:</strong> ${compte.bill_city}`;

      const cardSubtitle = document.createElement("h6");
      cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
      cardSubtitle.textContent = "Description";

      const cardDescription = document.createElement("p");
      cardDescription.classList.add("card-text");
      cardDescription.textContent = compte.description;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardType);
      cardBody.appendChild(cardIndustry);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardSubtitle);
      cardBody.appendChild(cardDescription);

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
