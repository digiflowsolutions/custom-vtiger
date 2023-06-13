// Fetch contacts
fetch("data/contacts.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((contact) => {
      const link = document.createElement("a");
      link.href = `contact.html?id=${contact.id}`;
      link.textContent = contact.name;

      document.getElementById("contacts-container").appendChild(link);
    });
  })
  .catch((error) => console.error("Error:", error));
