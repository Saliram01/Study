const cardContainer = document.querySelector('.card-container');
const Url = 'https://fakestoreapi.com/products';


 async function Fethcing(){
    let res = await fetch(Url);
    return await res.json();
}

async function FetchingData(receiveData) {
    receiveData.map((data) => {
        const card  = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = data.image;
        card.appendChild(img);

        const title = document.createElement('h2');
        const tit = data.title.length > 10 ? data.title.slice(0,10) + "..." : data.title;
        title.textContent = tit;
        card.appendChild(title);

        const rating = document.createElement('span');
        rating.textContent ="Rating : " + data.rating.rate;
        card.appendChild(rating);

        const price = document.createElement('span');
        price.textContent = "Price : $" + data.price;
        card.appendChild(price);

        const description = document.createElement('p');
        let desc = data.description.length > 50 ? data.description.slice(0,50) + "..." : data.description;
        description.textContent = desc;
        card.appendChild(description);

        card.addEventListener('click',() => {
            window.open(data.image, '_blank');
        })
        cardContainer.appendChild(card);
    })

}

(async() =>{
    const data = await Fethcing();
    FetchingData(data);
})();