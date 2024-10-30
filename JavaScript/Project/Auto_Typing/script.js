const span = document.querySelector('span');
const wordList = ['Developer', 'Coder', 'Teacher', 'YouTuber'];


function autoType() {
    let charIndex = 0;
    let skipUpdate = 0;
    let wordIndex = 0;
    let revType = false;

    setInterval(() => {
        if (skipUpdate) {
            skipUpdate--
            return
        }


        if (!revType) {
            skipUpdate = 1
            span.innerText = span.innerText + wordList[wordIndex][charIndex]
            charIndex++
        } else {
            span.innerText = span.innerText.slice(0, span.innerText.length - 1)
        }

        if (charIndex === wordList[wordIndex].length) {
            skipUpdate = 0
            revType = true
        }

        if (span.innerText.length === 0 && revType) {
            revType = false;
            charIndex = 0;
            wordIndex++
        }

        if (wordIndex === wordList.length) {
            wordIndex = 0;
        }

    }, 200)
}

autoType()

