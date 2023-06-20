const imgVente = "../../../skins/images/icone-vente.png";
const imgContact = "../../../skins/images/icone-contacts.png";
const imgCompte = "../../../skins/images/icone-comptes.png";
const imgAffaire = "../../../skins/images/icone-affaires.png";
const imgDevis = "../../../skins/images/icone-devis.png";
const imgBdc = "../../../skins/images/icone-bdc.png";
const imgBdl = "../../../skins/images/icone-bdl.png";
const imgFactures = "../../../skins/images/icone-factures.png";
const imgReglements = "../../../skins/images/icone-reglement.png";
const linkContacts = "/contacts.html";
const linkComptes = "/accounts.html";
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
  folderDivVentes.className = "folder mb-3 text-center bg-white";
  const rowVentes1 = document.createElement("div");
  rowVentes1.className = "row d-flex justify-content-between m-auto";
  rowVentes1.style.margin = "0 -5px";

  rowVentes1.appendChild(createIcon(imgContact, "contacts", linkContacts));
  rowVentes1.appendChild(createIcon(imgCompte, "comptes", linkComptes));
  rowVentes1.appendChild(createIcon(imgAffaire, "affaires", linkAffaires));

  folderDivVentes.appendChild(rowVentes1);

  folderDiv.appendChild(folderDivVentes);

  // FACTURATION
  const folderDivFacturation = document.createElement("div");
  folderDivFacturation.className = "folder mb-3 text-center bg-white";

  const rowFacturation1 = document.createElement("div");
  rowFacturation1.className = "row d-flex justify-content-between m-auto";
  rowFacturation1.style.margin = "0 -5px";
  const rowFacturation2 = document.createElement("div");
  rowFacturation2.className = "row d-flex justify-content-between m-auto";
  rowFacturation2.style.margin = "0 -5px";

  rowFacturation1.appendChild(createIcon(imgDevis, "devis", linkDevis));
  rowFacturation1.appendChild(createIcon(imgBdc, "bon de commande", linkBdc));
  rowFacturation1.appendChild(createIcon(imgBdl, "bon de livraison", linkBdl));
  rowFacturation2.appendChild(
    createIcon(imgReglements, "reglement", linkReglements)
  );

  folderDivFacturation.appendChild(rowFacturation1);
  folderDivFacturation.appendChild(rowFacturation2);

  folderDiv.appendChild(folderDivFacturation);

  return folderDiv;
};

const createIcon = (src, alt, link) => {
  const iconDiv = document.createElement("button");
  iconDiv.className = "rounded p-3 ";
  iconDiv.style.margin = "5px";

  iconDiv.addEventListener("mouseover", () => {
    iconDiv.classList.add("bg-dark", "text-white");
  });

  iconDiv.addEventListener("mouseout", () => {
    iconDiv.classList.remove("bg-dark", "text-white");
  });

  const img = document.createElement("img");
  img.className = "rounded p-3";
  img.src = src;
  img.alt = alt;
  img.width = "130";
  img.height = "130";
  const title = document.createElement("p");
  title.innerHTML = alt;
  title.className = "icon-title text-black";

  if (link) {
    iconDiv.addEventListener("click", () => {
      window.location.href = link;
    });
  }

  iconDiv.appendChild(img);
  iconDiv.appendChild(title);

  return iconDiv;
};

document.addEventListener("DOMContentLoaded", function () {
  const accueilContainer = Accueil();
  const accueilDiv = document.getElementById("accueil");
  accueilDiv.appendChild(accueilContainer);
});
