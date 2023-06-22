// Construct the dockNavbar partial and inject it into the dockNavbarPartial div
const dockNavbarPartial = document.getElementById("dockNavbarPartial");
const dockWrapper = document.createElement("div");
dockWrapper.className = "dock-wrapper";

const dockModal = document.createElement("div");
dockModal.id = "dock-modal";
dockModal.className = "dock-modal";
dockWrapper.appendChild(dockModal);

const dock = document.createElement("div");
dock.className = "dock";
dockWrapper.appendChild(dock);

const iconNames = [
  "affaires",
  "campagnes",
  "comptes",
  "contacts",
  "dashboard",
  "facturation",
  "gestion",
  "stock",
  "vente",
];

iconNames.forEach((name) => {
  const button = document.createElement("button");
  button.className = "dock-icon";

  const link = document.createElement("a");
  link.href = name === "dashboard" ? "/" : `/${name}.html`;
  link.style.textDecoration = "none"; // Optional: Remove underline style
  link.style.color = "inherit"; // Optional: Inherit text color from parent
  button.appendChild(link);

  const img = document.createElement("img");
  img.src = `/skins/images/icone-${name}.png`;
  img.alt = name;
  link.appendChild(img);

  dock.appendChild(button);
});

dockNavbarPartial.appendChild(dockWrapper);
