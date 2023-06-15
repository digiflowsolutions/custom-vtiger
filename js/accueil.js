const imgContact = "./../../assets/img/icone-contacts.png";
const imgCompte = "./../../assets/img/icone-comptes.png";
const imgAffaire = "./../../assets/img/icone-affaires.png";
const imgDevis = "./../assets/img/icone-devis.png";
const imgBdc = "./../assets/img/icone-bdc.png";
const imgBdl = "./../assets/img/icone-bdl.png";
const imgFactures = "./../assets/img/icone-factures.png";
const imgReglements = "./../assets/img/icone-reglement.png";

const linkContacts = "";
const linkComptes = "";
const linkAffaires = "";

const Accueil = () => {
  const accueilContainer = document.createElement("div");
  accueilContainer.className = "container";

  const folder = createFolder();

  accueilContainer.appendChild(folder);

  return accueilContainer;
};

const createFolder = () => {
  const folderDiv = document.createElement("div");
  folderDiv.className = "row";

  //ventes
  const folderDivVentes = document.createElement("div");
  folderDivVentes.className = "folder bg-info mb-3 col-5 text-center";

  // add row inside row

  folderDivVentes.appendChild(createIcon(imgContact, "Icone contact"));
  folderDivVentes.appendChild(createIcon(imgCompte, "Icone compte"));
  folderDivVentes.appendChild(createIcon(imgAffaire, "Icone affaire"));

  //facturation
  const folderDivFacturation = document.createElement("div");
  folderDivFacturation.className = "folder bg-success mb-3 col-5 text-center";

  folderDivFacturation.appendChild(createIcon(imgDevis, "Icone devis"));
  folderDivFacturation.appendChild(createIcon(imgBdc, "Icone bdc"));
  folderDivFacturation.appendChild(createIcon(imgBdl, "Icone bdl"));
  folderDivFacturation.appendChild(
    createIcon(imgReglements, "Icone reglement")
  );

  folderDiv.appendChild(folderDivVentes);
  folderDiv.appendChild(folderDivFacturation);

  return folderDiv;
};

const createIcon = (src, alt) => {
  const iconDiv = document.createElement("div");
  // iconDiv.classList.add("icone", "rounded", "p-3");
  iconDiv.className = "icone rounded p-3 ";
  iconDiv.style.display = "inline-block"; // Add this line to make the div adjust to the width of the image

  const img = document.createElement("img");
  img.className = "icone rounded p-3 bg-white";
  img.src = src;
  img.alt = alt;
  img.width = "130"; // Set the width of the image
  img.height = "130"; // Maintain the aspect ratio of the image

  iconDiv.appendChild(img);

  return iconDiv;
};

document.addEventListener("DOMContentLoaded", function () {
  const accueilContainer = Accueil();
  const accueilDiv = document.getElementById("accueil");
  accueilDiv.appendChild(accueilContainer);
});
