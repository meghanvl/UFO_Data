// from data.js
const tableData = data;
const tbody = d3.select("tbody");
const button = d3.select("#filter-btn");

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

// listen for events and search through the columns
const dateInput = d3.select("#datetime");
const cityInput = d3.select("#city");
const stateInput = d3.select("#state");
const countryInput = d3.select("#country");
const shapeInput = d3.select("#shape");

function handleClick() {
    // prevents page from being refreshed
    d3.event.preventDefault();
    // display new table based on filtered date
    const dateTable = tableData.filter(row => row.datetime === dateInput.property("value"))
    const cityTable = tableData.filter(row => row.city === cityInput.property("value"))
    // let stateTable = tableData.filter(row => row.state === stateInput.property("value"))
    // let countryTable = tableData.filter(row => row.country === countryInput.property("value"))
    // let shapeTable = tableData.filter(row => row.shape === shapeInput.property("value"))
    // display filtered table
    displayTable(dateTable);
    displayTable(cityTable);
    // displayTable(stateTable);
    // displayTable(countryTable);
    // displayTable(shapeTable);
};

button.on("click", handleClick);





