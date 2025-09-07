
const p = require('./services/products');
const config = require('./services/config');
const db = require('./services/databese');


async function main() {
    console.log("Carrinho de compras");
    console.log("-------------------------");
    p.getFullName("001", "Notebook");
    p.getFullName("002", "Mouse");
    p.getFullName("003", "Teclado");

    console.log("-------------------------");
    p.getProductLabel("Notebook");
    p.getProductLabel("Mouse");
    p.getProductLabel("Teclado");

    console.log("-------------------------");
    console.log("Configuração do sistema:");
    console.log(config.production);

    console.log(config.client);
    console.log(config.devaArea);

    console.log("-------------------------");
    db.connectToDatabase("SQL");
    db.disconnectDatabase();

}

main();