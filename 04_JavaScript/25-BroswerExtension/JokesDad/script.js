fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then((jokeData) => {
        const jokesText = jokeData.attachments[0].text;
        const jokesEl = document.getElementById('joke-element');
        jokesEl.innerHTML = jokesText;
    })