// from data.js
var tableData = data;
let tbody = d3.select("tbody");

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
// let button = d3.select("#filter-btn");

// // select form
// let form = d3.select(".form-group");

// button.on("click", runEnter);
// form.on("submit", runEnter);

// // function for events
// function runEnter() {
//     d3.event.preventDefault();
//     let date = d3.select("#datetime").property("value");
//     console.log(date);
// }

function handleClick() {
    d3.event.preventDefault();
    let date = d3.select("#datetime").property("value");
    let filteredDate = tableData;
    
    if (date) {
        filterDate = filteredDate.filter((row) => row.datetime === date);
    }

    createTable(filteredDate);
}

d3.selectAll("filter-btn").on("click", handleClick);
createTable(tableData);


