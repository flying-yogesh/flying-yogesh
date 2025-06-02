const products = [
    {id:1, name: "wireless headphone", price: 20000, image: "images/wireless headphone.webp"},
    {id:2, name: "iphone 16 pro max", price: 150000, image:"images/smartphone.jpg"},
    {id:3, name: "i watch", price: 89000, image:"images/Applewatch-series10-rosegold-Price-in-Nepal.webp"},
    {id:4, name: "speaker", price: 100000, image:"images/speakerxl.jpg"},
    {id:5, name: "mackbook", price: 250000, image:"images/laptopxl.jpg"},
];

let cart = JSON.parse(localStorage.getItem("cart"))||[];

function renderproducts() {
    const list = document.getElementById("product-list");
    products.forEach(product => {  
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
        <img src ="${product.image}" alt = "${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</P>
        <button onclick = "addtocart(${product.id})">add to cart</button>
        `;
        list.appendChild(div);
    });
}

function addtocart(id){
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updatecartcount();
}
function updatecartcount(){
    document.getElementById("cart-count").textContent = cart.length;
}

renderproducts();
updatecartcount();