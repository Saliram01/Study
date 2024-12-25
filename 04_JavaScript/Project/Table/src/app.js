const boxSingle = document.querySelector('#single');
const single = document.querySelector('#btnn');

const box = document.querySelector('#container');
const multiple = document.querySelector('#btn');


single.addEventListener('click', () => {
    let u = document.querySelector('.singleOne').value;
    const container = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = `Table of : ${u}`;
    container.classList.add('flex');
    container.classList.add('border-2');
    container.classList.add('justify-between');
    container.classList.add('mb-2');

    const operand = document.createElement('div');
    operand.classList.add('p-2');
    operand.classList.add('text-xl');

    const ope = document.createElement('div');
    ope.classList.add('p-2');
    ope.classList.add('text-xl');

    const count = document.createElement('div');
    count.classList.add('p-2');
    count.classList.add('text-xl');

    const equal = document.createElement('div');
    equal.classList.add('p-2');
    equal.classList.add('text-xl');

    const total = document.createElement('div');
    total.classList.add('p-2');
    total.classList.add('text-xl');

    container.append(operand, ope, count, equal, total);
    for (let j = 1; j <= 10; j++) {

        let div1 = document.createElement('div');
        div1.innerText = u;

        let div2 = document.createElement('div');
        div2.innerText = "*";

        let div3 = document.createElement('div');
        div3.innerText = j;

        let div4 = document.createElement('div');
        div4.innerText = "=";

        let div5 = document.createElement('div');
        div5.innerText = u * j;

        operand.append(div1);
        ope.append(div2);
        count.append(div3);
        equal.append(div4);
        total.append(div5);
    }
    box.append(p);
    boxSingle.append(container);
    document.querySelector('.singleOne').value = '';
})


// MULTIPLE TABLE
multiple.addEventListener('click', () => {
    let user = document.querySelector('.multiple').value;
    for (let i = 1; i <= user; i++) {
        const container = document.createElement('div');
        const p = document.createElement('p');
        p.classList.add('mb-2')
        p.innerText = `Table of : ${i}`;
        container.classList.add('flex');
        container.classList.add('border-2');
        container.classList.add('justify-between');
        container.classList.add('mb-4');
        
        const operand = document.createElement('div');
        operand.classList.add('p-2');
         operand.classList.add('text-xl');  

        const ope = document.createElement('div');
        ope.classList.add('p-2');
        ope.classList.add('text-xl');

        const count = document.createElement('div');
        count.classList.add('p-2');
        count.classList.add('text-xl');

        const equal = document.createElement('div');
        equal.classList.add('p-2');
        equal.classList.add('text-xl');

        const total = document.createElement('div');
        total.classList.add('p-2');
        total.classList.add('text-xl');

        container.append(operand, ope, count, equal, total);

        for (let j = 1; j <= 10; j++) {

            let div1 = document.createElement('div');
            div1.innerText = i;

            let div2 = document.createElement('div');
            div2.innerText = "*";

            let div3 = document.createElement('div');
            div3.innerText = j;

            let div4 = document.createElement('div');
            div4.innerText = "=";

            let div5 = document.createElement('div');
            div5.innerText = i * j;

            operand.append(div1);
            ope.append(div2);
            count.append(div3);
            equal.append(div4);
            total.append(div5);
        }
        box.append(p);
        box.append(container);
        document.querySelector('.multiple').value = '';
    }
})
