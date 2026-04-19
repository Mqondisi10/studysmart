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
// REGISTER FUNCTION
function register() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({ username, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "login.html";
}


// LOGIN FUNCTION
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", username);
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
}


// CHECK LOGIN (protect index.html)
function checkLogin() {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
        alert("Please login first!");
        window.location.href = "login.html";
    }
}
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out!");
    window.location.href = "login.html";
}