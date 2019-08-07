/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    //Function to create tab
    function exer8A7(row, column) {
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        let id = document.getElementById("target");
        let tr;
        let td;

        for (let i = 0; i < row; i++) {
            tr = document.createElement("tr");
            tbody.appendChild(tr);

            for (let i = 0; i < column; i++) {
                td = document.createElement("td");
                tr.appendChild(td);
                //Add your style here!
                td.style.width = "100px";
                td.style.height = "100px";
            }

        }
        table.appendChild(tbody);
        id.appendChild(table);
    }

    exer8A7(10, 1);
})();