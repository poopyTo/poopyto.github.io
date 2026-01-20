const participants = ["Mike", "Maryse", "Neil", "Noora", "Justin", "Cat"];
let jsonData = [
    {
    "Book Title": "City of Thieves",
    "Book Author": "David Benioff",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2026-01-13",
    "Meetup Place": "Neil and Noora's",
    "Mike": "Worst",
    "Maryse": "DNF",
    "Neil": "Worst",
    "Noora": "Worst",
    "Justin": "Worst",
    "Cat": "Worst"
    },
    {
    "Book Title": "The Midnight Library",
    "Book Author": "Matt Haig",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2025-09-04",
    "Meetup Place": "Mike and Maryse's",
    "Mike": "Best",
    "Maryse": "Best",
    "Neil": "Worst",
    "Noora": "Worst",
    "Justin": "Worst",
    "Cat": "Worst"
  },
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
    "Justin": "N/A",
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
    "Maryse": "DNF",
    "Neil": "Worst",
    "Noora": "Worst",
    "Justin": "DNF",
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

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, y);
}

function drawChart(data) {
  const canvas = document.getElementById("bookChart");
  if (!canvas) {
    console.error("Canvas element not found");
  } else {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas context not available");
    } else {
      console.log("Canvas context loaded successfully");
    }
  }
  const ctx = canvas.getContext("2d");

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const barWidth = 20;
  const gap = 15;
  const padding = 50;
  const labelHeight = 20;
  const columnsPerBook = 3;

  canvas.width = padding * 2 + data.length * (columnsPerBook * barWidth + gap);

  const maxVotes = Math.max(...data.map(book => {
    let best = 0, worst = 0;
    participants.forEach(name => {
      if (book[name] === "Best") best++;
      if (book[name] === "Worst") worst++;
    });
    return Math.max(best, worst);
  }));

  data.forEach((book, index) => {
    let best = 0, worst = 0, dnf = 0, na = 0;
    participants.forEach(name => {
      if (book[name] === "Best") best++;
      if (book[name] === "Worst") worst++;
      if (book[name] === "DNF") dnf++;
      if (book[name] === "N/A") na++;
    });

    const x = padding + index * (3 * barWidth + gap);
    const chartHeight = canvas.height - padding - labelHeight;

    const bestHeight = (best / maxVotes) * chartHeight;
    const worstHeight = (worst / maxVotes) * chartHeight;
    const dnfHeight = (dnf / maxVotes) * chartHeight;
    const naHeight = (na / maxVotes) * chartHeight;

    // Best bar
    ctx.fillStyle = "#009879";
    ctx.fillRect(x, canvas.height - padding - bestHeight, barWidth, bestHeight);

    // Worst bar
    const worstY = canvas.height - padding - worstHeight;
    ctx.fillStyle = "#d9534f";
    ctx.fillRect(x + barWidth, worstY, barWidth, worstHeight);

    // DNF stacked on top
    const dnfY = worstY - dnfHeight;
    ctx.fillStyle = "#A020F0";
    ctx.fillRect(x + barWidth, dnfY, barWidth, dnfHeight);

    // N/A bar
    ctx.fillStyle = "#999"; // Neutral gray
    ctx.fillRect(x + barWidth * 2, canvas.height - padding - naHeight, barWidth, naHeight);

    // Optional: Label on top of DNF stack
    // if (dnf > 0) {
    //   ctx.fillStyle = "#A020F0";
    //   ctx.font = "bold 14px sans-serif";
    //   ctx.textAlign = "center";
    //   ctx.textBaseline = "bottom";
    //   ctx.fillText("DNF", x + barWidth * 1.5, dnfY - 4);
    // }

    // Book title label
    ctx.fillStyle = "#000";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";

    const title = book["Book Title"];
    const labelX = x + barWidth * 1.5;
    const labelY = canvas.height - 30;
    const maxLabelWidth = 2 * barWidth + gap - 4;
    const lineHeight = 14;

    wrapText(ctx, title, labelX, labelY, maxLabelWidth, lineHeight);
  });

  // Y-axis labels
  ctx.fillStyle = "#000";
  ctx.textAlign = "right";
  ctx.font = "12px sans-serif";
  for (let i = 0; i <= maxVotes; i++) {
    const y = canvas.height - padding - (i / maxVotes) * (canvas.height - padding - labelHeight);
    ctx.fillText(i, padding - 10, y + 4);
    ctx.beginPath();
    ctx.moveTo(padding - 5, y);
    ctx.lineTo(canvas.width - padding / 2, y);
    ctx.strokeStyle = "#ccc";
    ctx.stroke();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  generateTableRows(jsonData);
  drawChart(jsonData);
});
