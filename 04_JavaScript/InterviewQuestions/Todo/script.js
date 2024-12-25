let itemList = [];

displayList();

function addList() {
    let inputText = document.querySelector('#input-text');
    let text = inputText.value;
    let datee = document.querySelector('#date');
    let date = datee.value;
    itemList.push({item: text, date: date});
    inputText.value = '';
    datee.value = '';
    displayList();
}   


function displayList() {
    const itemsContainer = document.querySelector('.item-container');
    let newHtml = '';
    for(let i = 0; i < itemList.length; i++){
        let {item, date} = itemList[i];
        newHtml += `
        <div class="mb-3 w-50 d-flex justify-content-between align-items-center">
             <span class="w-25">${i + 1} ${item}</span>
             <span class="px-4 w-25">${date}</span>
             <button onclick="itemList.splice(${i},1); displayList();" class="border-0 py-2 px-4 rounded bg-danger text-white">Delete</button>
        </div>
        `;
    }
    itemsContainer.innerHTML = newHtml;
}