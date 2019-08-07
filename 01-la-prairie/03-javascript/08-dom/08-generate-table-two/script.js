/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    function createTable(row, column) {
        let target = document.getElementById("target");
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        let tr;
        let td;
        for (let i = 1; i < row; i++) {
            tr = document.createElement("tr");
            tbody.appendChild(tr);
            for (let j = 1; j < column; j++) {
                td = document.createElement("td");
                op = document.createTextNode(i * j);
                td.appendChild(op);
                tr.appendChild(td);
            }
        }

        table.appendChild(tbody);
        target.appendChild(table);
    };


    createTable("11", "11");


})();