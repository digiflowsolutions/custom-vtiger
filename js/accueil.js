// Accueil.js

const imgContact = "./../../assets/img/icone-contacts.png";
const imgCompte = "./../../assets/img/icone-comptes.png";
const imgAffaire = "./../../assets/img/icone-affaires.png";

const linkContacts = "";
const linkComptes = "";
const linkAffaires = "";

const Accueil = () => {
  const accueilContainer = document.createElement("div");
  accueilContainer.className = "grid-container ";

  const folder = createFolder();
  accueilContainer.appendChild(folder);

  // Uncomment the following lines to add more folders
  // accueilContainer.appendChild(createFolder());
  // accueilContainer.appendChild(createFolder());
  // accueilContainer.appendChild(createFolder());
  // accueilContainer.appendChild(createFolder());
  // accueilContainer.appendChild(createFolder());

  return accueilContainer;
};

const createFolder = () => {
  const folderDiv = document.createElement("div");
  //ajouter folder ventes etc...
  folderDiv.className = "folder bg-info";

  folderDiv.appendChild(createIcon(imgContact, "Icone contact"));
  folderDiv.appendChild(createIcon(imgCompte, "Icone compte"));
  folderDiv.appendChild(createIcon(imgAffaire, "Icone affaire"));
  //   folderDiv.appendChild(createIcon(imgContact, "Icone contact"));
  //   folderDiv.appendChild(createIcon(imgContact, "Icone contact"));
  //   folderDiv.appendChild(createIcon(imgContact, "Icone contact"));
  //   folderDiv.appendChild(createIcon(imgContact, "Icone contact"));
  //   folderDiv.appendChild(createIcon(imgContact, "Icone contact"));
  //   folderDiv.appendChild(createIcon(imgContact, "Icone contact"));

  return folderDiv;
};

const createIcon = (src, alt) => {
  const iconDiv = document.createElement("div");
  iconDiv.classList.add("icone", "rounded", "p-3");
  iconDiv.style.width = "30%"; // Set the width of the iconDiv

  const img = document.createElement("img");
  img.classList.add("icone", "rounded", "p-3");
  img.src = src;
  img.alt = alt;
  img.style.width = "34%"; // Set the width of the image
  img.style.height = "auto"; // Maintain the aspect ratio of the image

  iconDiv.appendChild(img);

  return iconDiv;
};

document.addEventListener("DOMContentLoaded", function () {
  const accueilContainer = Accueil();
  const accueilDiv = document.getElementById("accueil");
  accueilDiv.appendChild(accueilContainer);
});
