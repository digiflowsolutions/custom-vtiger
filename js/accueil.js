const imgContact = "./../../assets/img/icone-contacts.png";
const imgCompte = "./../../assets/img/icone-comptes.png";
const imgAffaire = "./../../assets/img/icone-affaires.png";
const imgDevis = "./../assets/img/icone-devis.png";
const imgBdc = "./../assets/img/icone-bdc.png";
const imgBdl = "./../assets/img/icone-bdl.png";
const imgFactures = "./../assets/img/icone-factures.png";
const imgReglements = "./../assets/img/icone-reglement.png";

const linkContacts = "/contacts.html";
const linkComptes = "/comptes.html";
const linkAffaires = "/affaires.html";
const linkDevis = "/devis.html";
const linkBdc = "/bdc.html";
const linkBdl = "/bdl.html";
const linkFactures = "/factures.html";
const linkReglements = "/reglements.html";

const Accueil = () => {
  const accueilContainer = document.createElement("div");
  accueilContainer.className = "container";

  const folder = createFolder();

  accueilContainer.appendChild(folder);

  return accueilContainer;
};

const createFolder = () => {
  const folderDiv = document.createElement("div");
  folderDiv.className = "row justify-content-around";

  // VENTES
  const folderDivVentes = document.createElement("div");
  folderDivVentes.className = "folder mb-3 text-center";
  folderDivVentes.style.height = "400px";
  folderDivVentes.style.backgroundColor = "#f5ebd8";

  const rowVentes1 = document.createElement("div");
  rowVentes1.className = "row d-flex justify-content-between m-auto";

  rowVentes1.appendChild(createIcon(imgContact, "Icone contact", linkContacts));
  rowVentes1.appendChild(createIcon(imgCompte, "Icone compte", linkComptes));
  rowVentes1.appendChild(createIcon(imgAffaire, "Icone affaire", linkAffaires));

  folderDivVentes.appendChild(rowVentes1);

  folderDivVentes.addEventListener("click", () => {
    openModal(rowVentes1.innerHTML);
  });

  // FACTURATION
  const folderDivFacturation = document.createElement("div");
  folderDivFacturation.className = "folder mb-3 text-center";
  folderDivFacturation.style.height = "400px";
  folderDivFacturation.style.backgroundColor = "#f5ebd8";

  const rowFacturation1 = document.createElement("div");
  rowFacturation1.className = "row d-flex justify-content-between m-auto";
  const rowFacturation2 = document.createElement("div");
  rowFacturation2.className = "row d-flex justify-content-between m-auto";

  rowFacturation1.appendChild(createIcon(imgDevis, "Icone devis", linkDevis));
  rowFacturation1.appendChild(createIcon(imgBdc, "Icone bdc", linkBdc));
  rowFacturation1.appendChild(createIcon(imgBdl, "Icone bdl", linkBdl));
  rowFacturation2.appendChild(
    createIcon(imgReglements, "Icone reglement", "/reglement", linkReglements)
  );

  folderDivFacturation.appendChild(rowFacturation1);
  folderDivFacturation.appendChild(rowFacturation2);

  folderDivFacturation.addEventListener("click", () => {
    openModal(rowFacturation1.innerHTML + rowFacturation2.innerHTML);
  });

  folderDiv.appendChild(folderDivVentes);
  folderDiv.appendChild(folderDivFacturation);

  return folderDiv;
};

const createIcon = (src, alt, link) => {
  const iconDiv = document.createElement("div");
  iconDiv.className = "icone rounded p-3";
  iconDiv.style.display = "inline-block";

  const img = document.createElement("img");
  img.className = "icone rounded p-3 bg-white";
  img.src = src;
  img.alt = alt;
  img.width = "130";
  img.height = "130";

  if (link) {
    iconDiv.setAttribute("data-href", link); // Set the link value as a data attribute
  }

  iconDiv.appendChild(img);

  return iconDiv;
};

const openModal = (content) => {
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const closeIcon = document.createElement("span");
  closeIcon.className = "close";
  closeIcon.innerHTML = "&times;";
  closeIcon.addEventListener("click", () => {
    closeModal(modal);
  });

  modalContent.innerHTML = content;
  modalContent.appendChild(closeIcon);

  // Find all the icons inside the modal
  const icons = modalContent.getElementsByClassName("icone");

  // Wrap each icon with an anchor tag
  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];
    const link = icon.getAttribute("data-href"); // Get the link value from the data attribute

    if (link) {
      const anchor = document.createElement("a");
      anchor.href = link;

      // Replace the icon div with the anchor tag
      icon.parentNode.replaceChild(anchor, icon);
      anchor.appendChild(icon);
    }
  }

  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  modal.style.display = "block";

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
};

const closeModal = (modal) => {
  document.body.removeChild(modal);
};

document.addEventListener("DOMContentLoaded", function () {
  const accueilContainer = Accueil();
  const accueilDiv = document.getElementById("accueil");
  accueilDiv.appendChild(accueilContainer);
});
