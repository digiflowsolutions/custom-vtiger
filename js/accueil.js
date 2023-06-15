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
  accueilContainer.className = "container ";

  const folder = createFolder();

  accueilContainer.appendChild(folder);

  return accueilContainer;
};

const createFolder = () => {
  const folderDiv = document.createElement("div");
  folderDiv.className = "row justify-content-around";

  //VENTES

  const folderDivVentes = document.createElement("div");
  folderDivVentes.className = "folder bg-info mb-3 text-center";
  folderDivVentes.style.height = "400px";

  const rowVentes1 = document.createElement("div");
  rowVentes1.className = "row d-flex justify-content-between m-auto";

  rowVentes1.appendChild(createIcon(imgContact, "Icone contact"));
  rowVentes1.appendChild(createIcon(imgCompte, "Icone compte"));
  rowVentes1.appendChild(createIcon(imgAffaire, "Icone affaire"));

  folderDivVentes.appendChild(rowVentes1);

  //FACTURATION
  const folderDivFacturation = document.createElement("div");
  folderDivFacturation.className = "folder bg-success mb-3 text-center";
  folderDivFacturation.style.height = "400px";

  const rowFacturation1 = document.createElement("div");
  rowFacturation1.className = "row d-flex justify-content-between m-auto";
  const rowFacturation2 = document.createElement("div");
  rowFacturation2.className = "row d-flex justify-content-between m-auto";

  rowFacturation1.appendChild(createIcon(imgDevis, "Icone devis"));
  rowFacturation1.appendChild(createIcon(imgBdc, "Icone bdc"));
  rowFacturation1.appendChild(createIcon(imgBdl, "Icone bdl"));
  rowFacturation2.appendChild(createIcon(imgReglements, "Icone reglement"));

  folderDivFacturation.appendChild(rowFacturation1);
  folderDivFacturation.appendChild(rowFacturation2);

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
