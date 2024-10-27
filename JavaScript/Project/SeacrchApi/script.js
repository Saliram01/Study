const apiKey = '5f423f4db0ff40329a4087289603bd29';
const Url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${apiKey}`;
const blockContainer = document.querySelector('#block-container')

const searchField = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

async function FetchRandomNews(){
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pagesSize=10&apikey=${apiKey}`;
        const resp = await fetch(apiUrl);
        const data = await resp.json();
        return data.articles;
    }
    catch(error) {
        console.log("Error fetching random news",error);
    }
 }

 searchButton.addEventListener('click',async function() {
    const query = searchField.value.trim();
    if(query !== "") {
        try {
            const articles = await fetchNewQuery(query);
            displayBlogs(articles);
        }
        catch(error) {console.error("Error fetching news by query",error)}
    }
})

async function fetchNewQuery(query){
    try {
        let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=20&apiKey=${apiKey}`);
        let data = await res.json();
        return data.articles;
    }
    catch(error) {console.log("fetching data ",error);}
}

// For blog cards 
async function displayBlogs(articles) {
    try {
        // fetching api
        blockContainer.innerHTML = '';
        articles.forEach((article) => {
            // element creation 
           let blogCard = document.createElement('div');
           blogCard.classList.add('block-card');
           const img = document.createElement('img');
           img.src = article.urlToImage;
           img.alt = article.title;
           const title = document.createElement('h2');

           const truncatedTitle = article.title.length > 30? 
           article.title.slice(0, 30) + "...." : article.title;

           title.textContent = truncatedTitle;
           const description = document.createElement('p');

           const truncated_Desc = article.description.length > 50 ? 
           article.description.slice(0,100) + "...." : article.description;
           description.textContent = truncated_Desc;
           // Append Children
           blogCard.appendChild(img);
           blogCard.appendChild(title);
           blogCard.appendChild(description);

           blogCard.addEventListener('click',() => {
            window.open(article.url, "_blank");
           })

           blockContainer.appendChild(blogCard);
        })  
    }
    catch(error) {console.error("Error fetching data",error);}
 }


 (async() => {
    try {
        const articles = await FetchRandomNews() 
        displayBlogs(articles)
    }
    catch(error) {}
 })();