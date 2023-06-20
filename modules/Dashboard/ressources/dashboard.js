document.addEventListener("DOMContentLoaded", function () {
  fetch("data/contacts.json")
    .then((response) => response.json())
    .then((data) => {
      const contactsCount = data.length;

      fetch("data/comptes.json")
        .then((response) => response.json())
        .then((data) => {
          const comptesCount = data.length;

          // Création du chart element
          const canvas = document.createElement("canvas");
          canvas.id = "chart";

          // Append chart canvas vers container
          document.getElementById("chart-container").appendChild(canvas);

          // bar chart
          new Chart(canvas, {
            type: "bar",
            data: {
              labels: ["Contacts", "Comptes"],
              datasets: [
                {
                  label: "Nombre",
                  data: [contactsCount, comptesCount],
                  backgroundColor: [
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(255, 99, 71, 0.6)",
                  ],
                  borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 71, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    precision: 0,
                    precision: 0,
                  },
                },
              },
            },
          });

          // Pie chart
          var ctxP = document.getElementById("pieChart").getContext("2d");

          var myPieChart = new Chart(ctxP, {
            type: "pie",
            data: {
              labels: ["Comptes", "Contacts"],
              datasets: [
                {
                  data: [comptesCount, contactsCount],
                  backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                  ],
                  hoverBackgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1",
                    "#FFC870",
                    "#A8B3C5",
                    "#616774",
                  ],
                },
              ],
            },
            options: {
              responsive: true,
            },
          });
        })
        .catch((error) => console.error("Erreur API comptes:", error));
    })
    .catch((error) => console.error("Erreur API contacts:", error));
});
