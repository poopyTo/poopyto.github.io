
const participants = ["Mike", "Maryse", "Neil", "Noora", "Justin", "Cat"];

let currentSort = {
  column: null,
  asc: true
};

const columnMap = [
  "Book Title",     // 0
  "Book Author",    // 1
  "Best",           // 2
  "Worst",          // 3
  "Meetup Date",    // 4
  "Meetup Place",   // 5
  ...participants   // 6+
];

let jsonData = [
    {
    "Book Title": "Game Changer",
    "Book Author": "Rachel Reid",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2026-03-31",
    "Meetup Place": "Beyond the Pale",
    "Mike": "Worst",
    "Maryse": "Best",
    "Neil": "Worst",
    "Noora": "Worst",
    "Justin": "DNF",
    "Cat": "DNF"
    },
    {
    "Book Title": "Frankenstein; or, The Modern Prometheus",
    "Book Author": "Mary Shelley",
    "Best": "0",
    "Worst": "0",
    "Meetup Date": "2026-02-24",
    "Meetup Place": "Mike and Maryse's",
    "Mike": "Best",
    "Maryse": "Worst",
    "Neil": "Best",
    "Noora": "Best",
    "Justin": "Best",
    "Cat": "Best"
    },
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

/* =========================
   CONFIG
========================= */
const COLORS = {
  best: "#009879",
  worst: "#d9534f",
  dnf: "#A020F0",
  na: "#999",
  grid: "#ccc",
  text: "#000"
};

const CHART = {
  barWidth: 20,
  gap: 15,
  padding: 50,
  labelHeight: 20
};

/* =========================
   DATA HELPERS
========================= */
function countVotes(book) {
  const counts = { best: 0, worst: 0, dnf: 0, na: 0 };

  participants.forEach(name => {
    const vote = book[name];
    if (vote === "Best") counts.best++;
    else if (vote === "Worst") counts.worst++;
    else if (vote === "DNF") counts.dnf++;
    else if (vote === "N/A") counts.na++;
  });

  return counts;
}

function prepareData(data) {
  return data.map(book => ({
    ...book,
    counts: countVotes(book)
  }));
}



/* =========================
   TABLE
========================= */
function generateTableRows(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  data.forEach(item => {
    const row = document.createElement("tr");

    const cells = [
      item["Book Title"],
      item["Book Author"],
      item.counts.best,
      item.counts.worst,
      item["Meetup Date"],
      item["Meetup Place"],
      ...participants.map(p => item[p] || "")
    ];

    cells.forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

/* =========================
   SORTING
========================= */
let currentData = [];

function sortData(key, asc = true) {
  currentData.sort((a, b) => {
    let valA, valB;

    if (key === "Best" || key === "Worst") {
      valA = a.counts[key.toLowerCase()];
      valB = b.counts[key.toLowerCase()];
    } else {
      valA = a[key];
      valB = b[key];
    }

    // Normalize values
    if (!isNaN(valA)) valA = Number(valA);
    if (!isNaN(valB)) valB = Number(valB);

    if (valA < valB) return asc ? -1 : 1;
    if (valA > valB) return asc ? 1 : -1;
    return 0;
  });

  refreshUI();
}

/* =========================
   CHART HELPERS
========================= */
function drawBar(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  words.forEach((word, index) => {
    const testLine = line + word + " ";
    const testWidth = ctx.measureText(testLine).width;

    if (testWidth > maxWidth && index > 0) {
      ctx.fillText(line.trim(), x, y);
      line = word + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  });

  ctx.fillText(line.trim(), x, y);
}

/* =========================
   CHART
========================= */
function drawChart(data) {
  const canvas = document.getElementById("bookChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const { barWidth, gap, padding, labelHeight } = CHART;
  const columnsPerBook = 3;

  canvas.width = padding * 2 + data.length * (columnsPerBook * barWidth + gap);

  const maxVotes = Math.max(
    ...data.map(book =>
      Math.max(book.counts.best, book.counts.worst)
    )
  );

  const chartHeight = canvas.height - padding - labelHeight;

  data.forEach((book, index) => {
    const { best, worst, dnf, na } = book.counts;

    const x = padding + index * (3 * barWidth + gap);

    const bestHeight = (best / maxVotes) * chartHeight;
    const worstHeight = (worst / maxVotes) * chartHeight;
    const dnfHeight = (dnf / maxVotes) * chartHeight;
    const naHeight = (na / maxVotes) * chartHeight;

    // Best
    drawBar(ctx, x, canvas.height - padding - bestHeight, barWidth, bestHeight, COLORS.best);

    // Worst
    const worstY = canvas.height - padding - worstHeight;
    drawBar(ctx, x + barWidth, worstY, barWidth, worstHeight, COLORS.worst);

    // DNF (stacked)
    drawBar(ctx, x + barWidth, worstY - dnfHeight, barWidth, dnfHeight, COLORS.dnf);

    // N/A
    drawBar(ctx, x + barWidth * 2, canvas.height - padding - naHeight, barWidth, naHeight, COLORS.na);

    // Label
    ctx.fillStyle = COLORS.text;
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";

    wrapText(
      ctx,
      book["Book Title"],
      x + barWidth * 1.5,
      canvas.height - 30,
      barWidth * 2 + gap - 4,
      14
    );
  });

  // Y-axis + grid
  ctx.fillStyle = COLORS.text;
  ctx.textAlign = "right";
  ctx.font = "12px sans-serif";

  for (let i = 0; i <= maxVotes; i++) {
    const y = canvas.height - padding - (i / maxVotes) * chartHeight;

    ctx.fillText(i, padding - 10, y + 4);

    ctx.beginPath();
    ctx.moveTo(padding - 5, y);
    ctx.lineTo(canvas.width - padding / 2, y);
    ctx.strokeStyle = COLORS.grid;
    ctx.stroke();
  }
}

function sortTable(columnIndex) {
  const key = columnMap[columnIndex];

  // Toggle direction if same column
  if (currentSort.column === key) {
    currentSort.asc = !currentSort.asc;
  } else {
    currentSort.column = key;
    currentSort.asc = true;
  }

  sortData(key, currentSort.asc);
}

/* =========================
   APP INIT
========================= */
function refreshUI() {
  generateTableRows(currentData);
  drawChart(currentData);
}

document.addEventListener("DOMContentLoaded", () => {
  currentData = prepareData(jsonData);
  refreshUI();
});
