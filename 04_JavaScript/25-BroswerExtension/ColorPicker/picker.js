const btn = document.querySelector('.changeColorBtn');
const colorGrid = document.querySelector('.colorGrid');
const colorValue = document.querySelector('.colorValue');

btn.addEventListener('click', async () => {

    chrome.storage.sync.get('color',({color}) => {
        console.log('color', color);
    });

    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id},

        function: pickColor,

    }, async(injectionResults) => {
        const [data] = injectionResults;

        if(data && data.result) {
            const color = data.result.sRGBHex;
            colorGrid.style.backgroundColor = color;
            colorValue.innerText = color;

            try {
                await navigator.clipboard.writeText(color);

            } catch(error) {
                console.error(error);
            }
        }
    })
})

async function pickColor() {
    try {
        const dropper = new EyeDropper();
        return await dropper.open();
    } catch (error) {
        console.error('Error picking color:', error);
    }
}