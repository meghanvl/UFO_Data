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


function dateFilter() {
    let dateInput = d3.select("#datetime");
    let dateTable = tableData.filter(row => row.datetime === dateInput.property("value"));
    displayTable(dateTable);
}


function cityFilter() {
    let cityInput = d3.select("#city");
    let cityTable = dateTable.filter(row => row.city === cityInput.property("value"));
    displayTable(cityTable);
}

function stateFilter() {
    let stateInput = d3.select("#state");
    let stateTable = cityTable.filter(row => row.state === stateInput.property("value"));
    displayTable(stateTable);
}

function countryFilter() {
    let countryInput = d3.select("#country");
    let countryTable = stateTable.filter(row => row.country === countryInput.property("value"));
    displayTable(countryTable);
}

function shapeFilter() {
    let shapeInput = d3.select("#shape");
    let shapeTable = countryTable.filter(row => row.shape === shapeInput.property("value"));
    displayTable(shapeTable);
}

function handleChange(event) {
    d3.event.target.value;
    
}

button.on("change", handleChange);

// listen for events and search through columns based on filter search

// function handleClick() {
//     // prevents page from being refreshed
//     d3.event.preventDefault();
//     // filter data table by date
//     let date = d3.select("#datetime");
//     let dateTable = tableData.filter(row => row.datetime === date.property("value")); 
//     // display filtered table
//     displayTable(dateTable);
// }

// button.on("click", handleClick);


// function handleClick() {
//     d3.event.preventDefault();
//     let cityInput = d3.select("#city");
//     let cityTable = tableData.filter(row => row.city === cityInput.property("value"));
//     displayTable(cityTable);
// };

// button.on("click", handleClick);


// function handleClick() {
//     d3.event.preventDefault();
//     let stateInput = d3.select("#state");
//     let stateTable = tableData.filter(row => row.state === stateInput.property("value"));
//     displayTable(stateTable);
// };

// button.on("click", handleClick);


// function handleClick() {
//     d3.event.preventDefault();
//     let countryInput = d3.select("#country");
//     let countryTable = tableData.filter(row => row.country === countryInput.property("value"));
//     displayTable(countryTable);
// };

// button.on("click", handleClick);


// function handleClick() {
//     d3.event.preventDefault();
//     let shapeInput = d3.select("#shape");
//     let shapeTable = tableData.filter(row => row.shape === shapeInput.property("value"));
//     displayTable(shapeTable);
// };

// button.on("click", handleClick);









