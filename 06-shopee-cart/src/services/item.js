
//CASOS DE USO DOS ITENS

//criar itens  com sub total certo
export function createItem(name, price, quantity) {
    return {
        name,
        price,  
        quantity,
        subTotal:() => price * quantity
    };


}
//atualizar quantidade e subtotal do item
export function updateItem(item, quantity) {
}
//validar se o item existe

export default createItem;

