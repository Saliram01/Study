async function dataFetc(){
    const url = ('https://dog.ceo/api/breeds/image/random');
    const res = await fetch(url);
    const data = res.json();
    return data;
}
dataFetc().then((data) => {
    // console.log(data);
})