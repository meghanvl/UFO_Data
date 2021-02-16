// from data.js
let tableData = data;
let tbody = d3.select("tbody");
// select filter button (Filter Table)
let button = d3.select("#filter-btn");


// append data table to webpage 
function displayTable(data) {
    tbody.html("");
    data.forEach((ufoData) => {
        let row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
     })
}

displayTable(tableData);

// filter table by date

function handleClick() {
    // prevents page from being refreshed
    d3.event.preventDefault();
    // filter data table by date
    let date = d3.select("#datetime");
    let dateTable = tableData.filter(row => row.datetime === date.property("value")); 
    // display filtered table
    displayTable(dateTable);
}

button.on("click", handleClick);











