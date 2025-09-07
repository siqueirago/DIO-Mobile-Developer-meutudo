
import * as cartService from "./services/cart.js";
import { createItem } from "./services/item.js";


const myCart = [];
const myWishList = [];

console.log("\nBem-vindo ao carrinho de compras da Shopee!");

const item1 = await createItem("Camisa", 29.99, 1);
const item2 = await createItem("Calça", 59.99, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);  

//await cartService.deleteItem(myCart, item1.name);

//console.log("Item removido do carrinho.");







