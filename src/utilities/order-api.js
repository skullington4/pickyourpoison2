import sendRequest from "./send-request.js";
const BASE_URL = process.env.REACT_APP_API_URL + '/api/orders';


export async function getDrinks() {
    console.log('Made it to order-api.js getDrinks()')
    return await sendRequest(BASE_URL, 'GET');
}

export async function createOrder(drink) {
    return await sendRequest(BASE_URL, 'POST', drink);
}


// export async function checkout(drink) {
//     console.log('checkout');
//     console.log(drink);
//     const title = drink.name;
//     const glass = drink.glass;
//     const spirits = [];
//     drink.spirits.forEach(spirit => {
//         spirits.push(spirit);
//     });
//     const mixers = [];
//     drink.mixers.forEach(mixer => {
//         mixers.push(mixer);
//     });
//     const garnishes = drink.garnishes;
//     const price = drink.price;

//     console.log(title, glass, spirits, mixers, garnishes, price);

//     const order = await createOrder(title, glass, spirits, mixers, garnishes, price);
//     console.log(order);
//     return order;
// }
