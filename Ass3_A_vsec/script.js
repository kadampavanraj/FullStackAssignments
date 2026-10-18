let highest = 0;
let topperName = "";

function calculate(){

    let name = document.getElementById("name").value;

    let physics = Number(document.getElementById("phy").value)
    let chemistry = Number(document.getElementById("chem").value)
    let mathematics = Number(document.getElementById("math").value)

    let total = physics + chemistry + mathematics;

    let percentage = total / 3;

    document.getElementById("total").value = total;
    document.getElementById("percentage").value = percentage.toFixed(2) + "%";

     // Add data in table
    let row = document.getElementById("studentTable").insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = total;
    row.insertCell(2).innerHTML = percentage.toFixed(2) + "%";

    // Topper
    if (percentage > highest) {
        highest = percentage;
        topperName = name;
    }

   document.getElementById("topper").innerHTML =
   "Topper : " + topperName;
}