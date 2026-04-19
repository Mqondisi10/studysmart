const books = [
    { title: "Information Systems", price: 500 },
    { title: "Database Fundamentals", price: 450 },
    { title: "Web Development Basics", price: 400 },
    { title: "Cybersecurity Essentials", price: 550 }
];

let cart = [];

function displayBooks(bookList) {
    const bookSection = document.getElementById("books");
    bookSection.innerHTML = "";

    bookList.forEach((book, index) => {
        bookSection.innerHTML += `
            <div class="book">
                <h3>${book.title}</h3>
                <p>R${book.price}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(index) {
    cart.push(books[index]);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.title} - R${item.price}</li>`;
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Order placed successfully!");
        cart = [];
        displayCart();
    }
}

function searchBooks() {
    const searchValue = document.getElementById("search").value.toLowerCase();

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchValue)
    );

    displayBooks(filteredBooks);
}

// Load books when page starts
displayBooks(books);