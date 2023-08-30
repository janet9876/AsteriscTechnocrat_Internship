// JavaScript code for adding products to the cart and calculating the total
const products = document.querySelectorAll('.product');
const cartList = document.querySelector('.cart ul');
const totalDisplay = document.querySelector('.total');

let cart = [];

products.forEach(product => {
    const addToCartButton = product.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const productName = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.querySelector('.price').textContent.replace(/[^0-9.]/g, '')); // Extract the numeric value
        
        // Add the product to the cart array
        cart.push({ name: productName, price: productPrice });
        
        // Update the cart display
        displayCart();
    });
});

function displayCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        totalPrice += item.price;
    });

    totalDisplay.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
}
