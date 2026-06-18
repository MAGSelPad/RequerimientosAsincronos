"use strict";

let getSalesCoffee = async () => {

    const response = await fetch("https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml");

    if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.text()
};

export { getSalesCoffee }