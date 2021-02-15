// from data.js
let tableData = data;
let tbody = d3.select("tbody");
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

// listen for events and search through the date column
// let dateInput = d3.select("#datetime");


function handleClick(date) {
    // prevents page from being refreshed
    d3.event.preventDefault();
    // display new table based on filtering by date
    let dateInput = d3.select("#datetime");
    let dateTable = tableData.filter(row => row.datetime === dateInput.property("value"));
    // display filtered table
    displayTable(dateTable);
};

button.on("click", handleClick);

// let cityInput = d3.select("#city");

function handleClick(city) {
    d3.event.preventDefault();
    let cityInput = d3.select("#city");
    let cityTable = tableData.filter(row => row.city === cityInput.property("value"));
    displayTable(cityTable);
};

button.on("click", handleClick);

// let stateInput = d3.select("#state");

function handleClick(state) {
    d3.event.preventDefault();
    let stateInput = d3.select("#state");
    let stateTable = tableData.filter(row => row.state === stateInput.property("value"));
    displayTable(stateTable);
};

button.on("click", handleClick);

// let countryInput = d3.select("#country");

function handleClick(country) {
    d3.event.preventDefault();
    let countryInput = d3.select("#country");
    let countryTable = tableData.filter(row => row.country === countryInput.property("value"));
    displayTable(countryTable);
};

button.on("click", handleClick);

// let shapeInput = d3.select("#shape");

function handleClick(shape) {
    d3.event.preventDefault();
    let shapeInput = d3.select("#shape");
    let shapeTable = tableData.filter(row => row.shape === shapeInput.property("value"));
    displayTable(shapeTable);
};

button.on("click", handleClick);







