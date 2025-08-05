const participants = ["Mike", "Maryse", "Neil", "Noora", "Justin", "Cat"];
let jsonData = [
  {
    "Book Title": "The Aurora Antidote",
    "Book Author": "ELA Hugh",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2025-06-09",
    "Meetup Place": "Neil and Noora's",
    "Mike": "Worst",
    "Maryse": "DNF",
    "Neil": "Worst",
    "Noora": "Best",
    "Justin": "n/a",
    "Cat": "DNF"
  },
  {
    "Book Title": "I Am Legend",
    "Book Author": "Richard Matheson",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2025-03-17",
    "Meetup Place": "Neil and Noora's",
    "Mike": "Best",
    "Maryse": "Best",
    "Neil": "Worst",
    "Noora": "Worst",
    "Justin": "Best",
    "Cat": "Best"
  },
  {
    "Book Title": "Rare Flavours",
    "Book Author": "Ram V",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2025-01-22",
    "Meetup Place": "Mike and Maryse's",
    "Mike": "Best",
    "Maryse": "Best",
    "Neil": "Worst",
    "Noora": "Worst",
    "Justin": "Best",
    "Cat": "Best"
  },
  {
    "Book Title": "Shubeik Lubeik",
    "Book Author": "Deena Mohamed",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2024-04-15",
    "Meetup Place": "Justin and Cat's",
    "Mike": "Best",
    "Maryse": "Best",
    "Neil": "Best",
    "Noora": "Best",
    "Justin": "Worst",
    "Cat": "Best"
  },
  {
    "Book Title": "The Thursday Murder Club",
    "Book Author": "Richard Osman",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2024-07-31",
    "Meetup Place": "Altitude Climbing Gym - Kanata",
    "Mike": "Best",
    "Maryse": "Worst",
    "Neil": "Worst",
    "Noora": "Worst",
    "Justin": "Best",
    "Cat": "Best"
  },
  {
    "Book Title": "The Three-Body Problem",
    "Book Author": "Cixin Liu",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2024-03-13",
    "Meetup Place": "Mike and Maryse's",
    "Mike": "Best",
    "Maryse": "Best",
    "Neil": "Best",
    "Noora": "Worst",
    "Justin": "Best",
    "Cat": "Best"
  },
  {
    "Book Title": "The Immortalists",
    "Book Author": "Chloe Benjamin",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2024-01-31",
    "Meetup Place": "Beyond the Pale",
    "Mike": "Best",
    "Maryse": "Best",
    "Neil": "Best",
    "Noora": "Worst",
    "Justin": "Worst",
    "Cat": "N/A"
  },
  {
    "Book Title": "In the Lives of Puppets",
    "Book Author": "T.J. Klune",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2024-01-31",
    "Meetup Place": "Beyond the Pale",
    "Mike": "Worst",
    "Maryse": "Worst",
    "Neil": "Worst",
    "Noora": "Worst",
    "Justin": "Worst",
    "Cat": "Best"
  },
  {
    "Book Title": "What Moves the Dead",
    "Book Author": "T. Kingfisher",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2023-08-01",
    "Meetup Place": "El Camino Elgin",
    "Mike": "Best",
    "Maryse": "Worst",
    "Neil": "Best",
    "Noora": "Best",
    "Justin": "Best",
    "Cat": "Best"
  },
  {
    "Book Title": "Bear and the Nightingale",
    "Book Author": "Katherine Arden",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2023-05-31",
    "Meetup Place": "Heart and Crown Preston",
    "Mike": "Best",
    "Maryse": "Best",
    "Neil": "Worst",
    "Noora": "Best",
    "Justin": "Best",
    "Cat": "Best"
  },
  {
    "Book Title": "Kaiju Preservation Society",
    "Book Author": "John Scalzi ",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2023-05-03",
    "Meetup Place": "Clocktower Bank St",
    "Mike": "Worst",
    "Maryse": "Worst",
    "Neil": "Worst",
    "Noora": "Worst",
    "Justin": "Worst",
    "Cat": "Worst"
  },
  {
    "Book Title": "Now You See Us",
    "Book Author": "Balli Kaur Jaswal",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2023-04-04",
    "Meetup Place": "Beyond the Pale",
    "Mike": "Best",
    "Maryse": "Best",
    "Neil": "Best",
    "Noora": "N/A",
    "Justin": "Worst",
    "Cat": "Best"
  },
  {
    "Book Title": "Station Eleven",
    "Book Author": "Emily St. John Mandel",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2023-03-15",
    "Meetup Place": "Mill St",
    "Mike": "Best",
    "Maryse": "Worst",
    "Neil": "Worst",
    "Noora": "N/A",
    "Justin": "Worst",
    "Cat": "Best"
  }
];

generateTableRows(jsonData);

function generateTableRows(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  data.forEach(item => {
    const row = document.createElement("tr");

    let bestCount = 0;
    let worstCount = 0;

    participants.forEach(name => {
      if (item[name] === "Best") bestCount++;
      if (item[name] === "Worst") worstCount++;
    });

    const keys = [
      "Book Title", "Book Author", "Best", "Worst",
      "Meetup Date", "Meetup Place", ...participants
    ];

    keys.forEach(key => {
      const cell = document.createElement("td");
      if (key === "Best") {
        cell.textContent = bestCount;
      } else if (key === "Worst") {
        cell.textContent = worstCount;
      } else {
        cell.textContent = item[key] || "";
      }
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

function sortTable(columnIndex) {
  const table = document.getElementById("myTable");
  let switching = true;
  let dir = "asc";
  let switchcount = 0;
  let shouldSwitch = false;

  while (switching) {
    switching = false;
    const rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      const x = rows[i].getElementsByTagName("td")[columnIndex];
      const y = rows[i + 1].getElementsByTagName("td")[columnIndex];

      const xValue = isNaN(x.textContent) ? x.textContent.toLowerCase() : parseFloat(x.textContent);
      const yValue = isNaN(y.textContent) ? y.textContent.toLowerCase() : parseFloat(y.textContent);

      if ((dir === "asc" && xValue > yValue) || (dir === "desc" && xValue < yValue)) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}