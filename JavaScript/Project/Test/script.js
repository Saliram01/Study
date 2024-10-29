function Element(Node) {
    let li = document.createElement('li');
    li.append(document.createTextNode(`${Node}`));
    document.querySelector('#parent').appendChild(li);
}

function Add() {
    const name = document.querySelector('input').value;
    if (name === '') {
        return;
    }
    else {
        Element(name);
        document.querySelector('input').value = "";
    }
}

document.querySelector('#parent').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') { e.target.remove() }
})

function ChangeNode(text, index) {
    let ChangeNode = document.querySelector(`li:nth-child(${index})`);
    ChangeNode.outerHTML = `<li>${text}</li>`;
}

function Edit() {
    ChangeNode(prompt("Enter New Name"), prompt("Enter number which number text you want to edit."));
}