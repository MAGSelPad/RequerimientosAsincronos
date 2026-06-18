"use strict";

import { getSalesCoffee } from "./requirements.js";

const processSalesCoffee = async () => {
    try{
        let xmlText = await getSalesCoffee()
        const parser = new DOMParser();
        const data = parser.parseFromString(xmlText, "application/xml");

        
        let sales = data.getElementsByTagName("row");
        let tbody = document.querySelector("#example tbody");
        tbody.innerHTML = "";
        let rowsHTML = "";
        for (let sale of sales){
            let rowHTML = `
                <tr>
                    <td>[DATE]</td>
                    <td>[TIME]</td>
                    <td>[COFFEE]</td>
                    <td>[MONEY]</td>
                    <td>[PAYMENT]</td>
                    <td>[TIMEOFDAY]</td>
                </tr>
            `;
            rowHTML = rowHTML.replace("[DATE]", sale.getElementsByTagName("Date")[0].textContent);
            rowHTML = rowHTML.replace("[TIME]", sale.getElementsByTagName("Time")[0].textContent);
            rowHTML = rowHTML.replace("[COFFEE]", sale.getElementsByTagName("coffee_name")[0].textContent);
            rowHTML = rowHTML.replace("[MONEY]", sale.getElementsByTagName("money")[0].textContent);
            rowHTML = rowHTML.replace("[PAYMENT]", sale.getElementsByTagName("cash_type")[0].textContent);
            rowHTML = rowHTML.replace("[TIMEOFDAY]", sale.getElementsByTagName("Time_of_Day")[0].textContent);
            rowsHTML += rowHTML;
        }
        tbody.innerHTML = rowsHTML;
        $('#example').DataTable();

    }catch(error){
        alert(error);
    }

};

window.addEventListener("load", processSalesCoffee);