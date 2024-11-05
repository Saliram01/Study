
const products = [
  { id: 1, name: "Apple iPhone 14", description: "Latest model with advanced features", image: "https://via.placeholder.com/200x200?text=Apple+Phone" },
  { id: 2, name: "Samsung Galaxy S22", description: "High-performance Android phone", image: "https://via.placeholder.com/200x200?text=Samsung+Phone" },
  { id: 3, name: "Sony WH-1000XM5", description: "Noise-cancelling wireless headphones", image: "https://via.placeholder.com/200x200?text=Sony+Headphones" },
  { id: 4, name: "Dell XPS 13", description: "Compact and powerful laptop", image: "https://via.placeholder.com/200x200?text=Dell+Laptop" },
  { id: 5, name: "Nintendo Switch", description: "Portable gaming console", image: "https://via.placeholder.com/200x200?text=Nintendo+Switch" },
  { id: 6, name: "Apple MacBook Pro", description: "Powerful laptop with Apple Silicon", image: "https://via.placeholder.com/200x200?text=MacBook+Pro" },
];

// Function to display products in the DOM
function displayProducts(productsToDisplay) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Clear previous products

  productsToDisplay.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-item');
    
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    `;

    productList.appendChild(productElement);
  });
}

// Function to filter products based on search term
function searchProducts(event) {
  const query = event.target.value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
  displayProducts(filteredProducts);
}

// Event listener for the search bar
document.getElementById('searchBar').addEventListener('input', searchProducts);

// Initial display of all products
displayProducts(products);
