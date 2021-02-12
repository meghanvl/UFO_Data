// from data.js
let tableData = data;
let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");

// append data table to webpage and add new rows for each sighting
function createTable(data) {
    data.forEach((ufoData) => {
        let row = tbody.append("tr");
        Object.values(ufoData).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        });
     });
}


// use date form to listen for events and search through the date/time column
// select button
button.on("click", handleClick);

function handleClick() {
    d3.event.preventDefault();
    let date = d3.select("#datetime").property("value");
    // let filteredDate = tableData;
    
    if (date) {
        filterDate = tableData.filter(row => row.datetime === date);
    }

    createTable(filterDate);
}

function handleClick() {
    d3.event.preventDefault();
    let city = d3.select("#city").property("value");
    // let filteredCity = tableData;
    
    if (city) {
        filterCity = tableData.filter(row => row.city === city);
    }

    createTable(filterCity);
}


createTable(tableData);


