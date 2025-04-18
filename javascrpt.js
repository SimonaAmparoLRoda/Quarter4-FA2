function mulTable() {
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);

    if(isNaN(x) || isNaN(y) || x < 2 || x > 10 || y <2 || y>10) {
        alert("Please enter valid numbers between 2 and 10.");
        return;
    }

    var out = "<table>";
    for (i = 1; i <= x; i++) {
        out += "<tr>";
        for (j = 1; j <= y; j++){
            out += `<td>${i*j}</td>`;
        }
        out +="</tr>"
    }
    out += "</table>";
    document.getElementById("table").innerHTML = out;
}