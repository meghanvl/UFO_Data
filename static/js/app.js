// from data.js
var tableData = data;
let tbody = d3.select("tbody");

// YOUR CODE HERE!
function createTable(weatherData)

data.forEach((weatherData) => {
   let row = tbody.append("tr");
   Object.entries(weatherData).forEach(([key, value]) => {
       let cell = row.append("td");
       cell.text(value);
   });
});