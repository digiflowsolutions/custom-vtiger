// Create the footer element
var footer = document.createElement("footer");
footer.id = "footerPartial";
footer.className = "fixed-bottom";
footer.style.backgroundColor = "#e0e0e0";

// Create the container div
var containerDiv = document.createElement("div");
containerDiv.className =
  "container d-flex justify-content-center align-items-center m-auto";

// Create the row div
var rowDiv = document.createElement("div");
rowDiv.className = "row";

// Create the column div
var colDiv = document.createElement("div");
colDiv.className = "col-12 text-center";

// Create the paragraph element
var paragraph = document.createElement("p");
paragraph.className = "m-auto";
paragraph.textContent = "© 2023 - Digiflow";

// Append the paragraph element to the column div
colDiv.appendChild(paragraph);

// Append the column div to the row div
rowDiv.appendChild(colDiv);

// Append the row div to the container div
containerDiv.appendChild(rowDiv);

// Append the container div to the footer element
footer.appendChild(containerDiv);

// Append the footer to the document body or any other desired parent element
document.body.appendChild(footer);
