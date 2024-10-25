let products = {
    data : [
        {
            productName : 'Regular White T-Shirt',
            category : 'Topwear',
            price : '30',
            image : 'https://st.depositphotos.com/1026550/1985/i/450/depositphotos_19858499-stock-photo-blank-white-t-shirt-with.jpg',
        },
        {
            productName : 'Beige Short Skirt',
            category : 'Bottomwear',
            price : '49',
            image : 'https://di2ponv0v5otw.cloudfront.net/posts/2023/07/31/64c869de253a8c1f5c178aca/s_wp_64c869f9ffb5d0deb1d5124e.webp',
        },
        {
            productName : 'Sporty Smart Watch',
            category : 'Watch',
            price : '99',
            image : 'https://images.unsplash.com/photo-1698729616358-4fadac492844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D',
        },
        {
            productName : 'Basic Knitted Top',
            category : 'Topwear',
            price : '99',
            image : 'https://images.unsplash.com/photo-1571044420976-94b71786bae8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJhc2ljJTIwS25pdHRlZCUyMFRvcHxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            productName : 'Black Leader Jacket',
            category : 'Jacket',
            price : '129',
            image : 'https://media.istockphoto.com/id/1335297793/photo/black-vest-blank-template-black-waistcoat-sleeveless-with-zipped-front-view-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=U57nnCeXCquVYZ9LkSNYW66wGP6LwStyoYxrFA5lq_E=',
        },
        {
            productName : 'Stylish Pink Trowser',
            category : 'Bottomwear',
            price : '89',
            image : 'https://media.istockphoto.com/id/1542662814/photo/pink-colour-paperbag-over-dyed-jegging.webp?a=1&b=1&s=612x612&w=0&k=20&c=FA47o0RI9T3HCGBVPlOoWTnQYODBLAqhE4b0ZKxFVXk=',
        },
        {
            productName : "Brown Men's Jacket",
            category : 'Jacket',
            price : '189',
            image : 'https://media.istockphoto.com/id/174991671/photo/winter-jacket.webp?a=1&b=1&s=612x612&w=0&k=20&c=LVxqn3WgCelLeDXygjk9yUChWXgHmCKJkKBeYcAkfJE=',
        },
        {
            productName : "Comfy Gray Paints",
            category : 'Bottomwear',
            price : '69',
            image : 'https://hips.hearstapps.com/hmg-prod/images/neutral-paint-213-gull-wing-gray-2134-50-rgb-1672971395.jpg',
        },
    ]
};

for(let i of products.data){
    // Create Card
    let card = document.createElement('div');
    // Card should have category and should stay hide initially
    card.classList.add('card',`${i.category}`,'hide');
    // image div
    let imageConatiner = document.createElement("div");
    imageConatiner.classList.add('image-container');
    // img tag
    let image = document.createElement('img');
    image.setAttribute('src',`${i.image}`)

    imageConatiner.appendChild(image);
    card.appendChild(imageConatiner);

    // container
    let container = document.createElement('div');
    container.classList.add('container');

    // product name
    let name = document.createElement('h3');
    name.classList.add('product-name');
    name.innerText = i.productName.toUpperCase();

    container.appendChild(name);
    card.appendChild(container)

    // price
    let price = document.createElement('h6');
    price.innerText = "$" + i.price;
    container.appendChild(price)
    document.querySelector('#products').appendChild(card);
}

// parameter pass from button (parameter same as category)
function filterProduct(value) {
    let buttons = document.querySelectorAll('.button-value1');
    buttons.forEach((button) => {
        // checks if value equal inner text
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add('active');
        }
        else {
            button.classList.remove('active');
        }
    });
    let elements = document.querySelectorAll('.card');
    elements.forEach((element) => {
        // display all cards
        if(value == 'all'){
            element.classList.remove('hide')
        }
        else {
            // checks element content category
            if(element.classList.contains(value)){
                // display element based on category
                element.classList.remove('hide');
            }
            else {
                // hide other elements
                element.classList.add('hide');
            }
        }
    })
}

// search button 
document.querySelector('#search').addEventListener('click',() => {
    // initialization
    let searchInput = document.querySelector('#search-input').value;
    let elements = document.querySelectorAll('.product-name');
    let cards = document.querySelectorAll('.card');
    
    // loop through all elements
    elements.forEach((elment,index) => {
        // checks if text includes
        if(elment.innerText.includes(searchInput.toUpperCase())){
            // display matched
            cards[index].classList.remove('hide');
        }
        else {
            // hide other 
            cards[index].classList.add('hide');
        }
    })
})

// initially display all product
window.onload = () => {
    filterProduct('all');
}