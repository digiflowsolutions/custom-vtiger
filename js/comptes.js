fetch("data/comptes.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((compte) => {
      const link = document.createElement("a");
      link.href = `compte.html?id=${compte.id}`;
      link.textContent = compte.name;

      document.getElementById("comptes-container").appendChild(link);
    });
  })
  .catch((error) => console.error("Error:", error));
