


//adicionar itens ao carrinho

async function addItem(userCart, item) {
    userCart.push(item);
 
}

//calcular o valor total do carrinho

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subTotal(), 0);
    console.log(result);


}
//deletar itens do carrinho

async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    } else {
        console.log(`Item ${name} não encontrado no carrinho.`);
    }   

}

//remover um item do carrinho disponibilizando o índice do item

async function removeItem(userCart, item) {
    // Encontrar o índice do item no carrinho
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //caso não encontre o item
    if (indexFound === -1) {
        console.log("Item não encontrado no carrinho.");
        return;
    } 
    // Se o item for maior que 1, diminuir a quantidade
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
    } else {
        // Se a quantidade for 1, remover o item do carrinho
        userCart.splice(indexFound, 1);
    }  

}
// exibir itens do carrinho
async function displayCart(userCart) {
    console.log("\n------------------- Itens no carrinho: -------------------");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - Preço: R$${item.price.toFixed(2)} - Quantidade: ${item.quantity} - Subtotal: R$${item.subTotal().toFixed(2)}`);
    });
    const total = userCart.reduce((sum, item) => sum + item.subTotal(), 0);

    console.log(`Total: R$${total.toFixed(2)}`);
    console.log("\nObrigado por comprar na Shopee!🎉");
    return total;


}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};

                    