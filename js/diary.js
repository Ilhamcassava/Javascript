 // Define products and their prices
const products = {
    coffee: { name: "Coffee", price: 2.5 },
    latte: { name: "Latte", price: 3.0 },
    cappuccino: { name: "Cappuccino", price: 3.5 }
};

// Initialize empty cart
const cart = {};

// Function to update cart and total
function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    let total = 0;

    for (const product in cart) {
        const name = products[product].name;
        const price = products[product].price;
        const quantity = cart[product];
        const itemTotal = price * quantity;
        total += itemTotal;

        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = `${name} x ${quantity} - $${itemTotal.toFixed(2)}`;
        cartElement.appendChild(listItem);
    }

    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Event listener for "Add to Cart" button
document.getElementById('addToCart').addEventListener('click', function() {
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (cart.hasOwnProperty(product)) {
        cart[product] += quantity;
    } else {
        cart[product] = quantity;
    }

    updateCart();
});
