export default function CartItem ({ item, cartItems, setCartItems }) {
    console.log(item);
    const removeFromCart = (item) => {
        const newCartItems = [...cartItems];
        const index = newCartItems.indexOf(item);
        if (index > -1) {
            newCartItems.splice(index, 1);
            setCartItems(newCartItems);
        }
    };

    return (
        <>
        
        <div className='cart-item border'>   
            <div className='cart-item-details'>
                <div className="row">
                    {item.category === 'Cocktails' ? (
                        <>
                            <div>
                                <span className='name'>{item.name}</span>
                                <span className='price'>
                                    {item.quantity} - ${item.price}
                                </span>
                            </div>
                            <span className="desc">{item.description}</span>
                        </>
                    ) : (
                        <div className="customeDrinkContainer">
                            <span className='name'>Custom Drink: {item.name} - ${item.price}</span>
                            <span className="desc">Glass: {item.glass}</span>
                            <span className="desc">Spirits: {item.spirits.map((spirit, index) => (
                                <span key={index}>{spirit}{index === item.spirits.length - 1 ? '' : ', '}</span>
                            ))}</span>
                            <span className="desc">Mixers: {item.mixers.map((mixer, index) => (
                                <span key={index}>{mixer}{index === item.mixers.length - 1 ? '' : ', '}</span>
                            ))}</span>
                            <span className="desc">Garnish: {item.garnishes}</span>
                        </div>
                    )
                    }
                </div>
                <button onClick={() => removeFromCart(item)}>X</button>
            </div>
        </div>
        </>
    );
};


