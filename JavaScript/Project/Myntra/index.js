const itemsContainer = document.querySelector('.items-container');
const items = [
    {
        id: '1',
        image: 'https://github.com/Complete-Coding/JavaScript_Complete_YouTube/blob/main/11%20Template%20Myntra%20Functional%20Clone/images/1.jpg?raw=true',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '2',
        image: 'https://github.com/Complete-Coding/JavaScript_Complete_YouTube/blob/main/11%20Template%20Myntra%20Functional%20Clone/images/2.jpg?raw=true',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '3',
        image: 'https://github.com/Complete-Coding/JavaScript_Complete_YouTube/blob/main/11%20Template%20Myntra%20Functional%20Clone/images/3.jpg?raw=true',
        company: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '4',
        image: 'https://github.com/Complete-Coding/JavaScript_Complete_YouTube/blob/main/11%20Template%20Myntra%20Functional%20Clone/images/4.jpg?raw=true',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '5',
        image: 'https://github.com/Complete-Coding/JavaScript_Complete_YouTube/blob/main/11%20Template%20Myntra%20Functional%20Clone/images/5.jpg?raw=true',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '6',
        image: 'https://github.com/Complete-Coding/JavaScript_Complete_YouTube/blob/main/11%20Template%20Myntra%20Functional%20Clone/images/6.jpg?raw=true',
        company: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '7',
        image: 'https://github.com/Complete-Coding/JavaScript_Complete_YouTube/blob/main/11%20Template%20Myntra%20Functional%20Clone/images/7.jpg?raw=true',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '8',
        image: 'https://github.com/Complete-Coding/JavaScript_Complete_YouTube/blob/main/11%20Template%20Myntra%20Functional%20Clone/images/8.jpg?raw=true',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    }
];

let bagItems;
onLoad();
function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItems();
    bagIconCount();
} 

function addToBag(addedItems) {
    bagItems.push(addedItems);
    localStorage.setItem('bagItems', JSON.stringify(bagItems))
    bagIconCount();
       console.log(addedItems);
}


function bagIconCount() {
    let bagItemCountNumber = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountNumber.style.visibility = 'visible';
        bagItemCountNumber.innerText = bagItems.length;
    }
    else { bagItemCountNumber.style.visibility = 'hidden' }
}

function displayItems() { 
    if (!itemsContainer) { return }
    let innerHTML = '';
    items.forEach((item) => {
        innerHTML += `
    <div class="item-container">
        <img class="item-image" src=${item.image}
            alt=${item.item_name}>
        <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}k</div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>
`;
    })

    itemsContainer.innerHTML = innerHTML;
}

