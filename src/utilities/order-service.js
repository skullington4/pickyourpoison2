import * as ordersAPI from './order-api.js';

export async function getAll() {
    console.log('get all orders')
    const orders = await ordersAPI.getDrinks();
    console.log(orders);
    return orders;
}

export async function createDrink(drink) {
    console.log('checkout');
    console.log(drink);
    const title = drink.name;
    const glass = drink.glass;
    const spirits = [];
    drink.spirits.forEach(spirit => {
        spirits.push(spirit);
    });
    const mixers = [];
    drink.mixers.forEach(mixer => {
        mixers.push(mixer);
    });
    const garnishes = drink.garnishes;
    const price = drink.price;

    console.log(title, glass, spirits, mixers, garnishes, price);

    const fullDrink = {
        title: title,
        glass: glass,
        spirits: spirits,
        mixers: mixers,
        garnishes: garnishes,
        price: price
    }
    const order = await ordersAPI.createOrder(fullDrink);
    console.log(order);
    return order;

}
