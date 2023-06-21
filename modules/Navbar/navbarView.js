// Create the header element
var header = document.createElement("header");
header.id = "navbarPartial";

// Create the nav element
var nav = document.createElement("nav");
nav.className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top"; // Added 'fixed-top' class

// Create the container div
var containerDiv = document.createElement("div");
containerDiv.className =
  "m-auto container d-flex justify-content-center align-items-center";

// Create the navbar brand link
var brandLink = document.createElement("a");
brandLink.className = "navbar-brand";
brandLink.href = "/";
brandLink.textContent = "DIGIFLOW";

// Create the navbar toggler button
var togglerButton = document.createElement("button");
togglerButton.className = "navbar-toggler";
togglerButton.type = "button";
togglerButton.setAttribute("data-toggle", "collapse");
togglerButton.setAttribute("data-target", "#navbarNav");
togglerButton.setAttribute("aria-controls", "navbarNav");
togglerButton.setAttribute("aria-expanded", "false");
togglerButton.setAttribute("aria-label", "Toggle navigation");

// Create the toggler button icon
var togglerIcon = document.createElement("span");
togglerIcon.className = "navbar-toggler-icon";

// Append the toggler icon to the toggler button
togglerButton.appendChild(togglerIcon);

// Create the collapse navbar div
var collapseDiv = document.createElement("div");
collapseDiv.className = "collapse navbar-collapse";
collapseDiv.id = "navbarNav";

// Create the unordered list
var ul = document.createElement("ul");
ul.className = "navbar-nav ml-auto";

// Create the list items
var listItems = [
  { text: "Dashboard", href: "/" },
  { text: "Contacts", href: "/contacts.html" },
  { text: "Comptes", href: "/comptes.html" },
];

// Create the list item elements
var listItemElements = listItems.map(function (item) {
  var li = document.createElement("li");
  li.className = "nav-item";

  var link = document.createElement("a");
  link.className = "nav-link";
  link.href = item.href;
  link.textContent = item.text;

  li.appendChild(link);
  return li;
});

// Append the list item elements to the unordered list
listItemElements.forEach(function (li) {
  ul.appendChild(li);
});

// Append the elements to their respective parents
collapseDiv.appendChild(ul);
containerDiv.appendChild(brandLink);
containerDiv.appendChild(togglerButton);
containerDiv.appendChild(collapseDiv);
nav.appendChild(containerDiv);
header.appendChild(nav);

// Append the header to the document body or any other desired parent element
document.body.appendChild(header);
