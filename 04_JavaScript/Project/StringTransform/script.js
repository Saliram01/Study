const input = document.querySelector('#myInput');
input.addEventListener('input', () => {
    lowerCase(input.value);
    upperCase(input.value);
    camelCase(input.value);
    pascalCase(input.value);
    kababCase(input.value);
    snakeCase(input.value);
    trimText(input.value);
})

function lowerCase(lc) {
    let lower = lc.toLowerCase();
    document.querySelector('.lowercase').innerText = lower;
}
function upperCase(uc) {
    let upper = uc.toUpperCase();
    document.querySelector('.uppercase').innerText = upper;
}

function camel(str) {
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1, str.length);
}
function camelCase(cc) {
    let low = cc.toLowerCase();
    let word = low.split(' ');
    let cap = word.map((wordd, i) => {
        if (i === 0) return wordd
        return camel(wordd)
    })
    document.querySelector('.camelcase').innerText = cap.join('');
}

function pascalCase(pc) {
    let arr = pc.split(' ');
    let pascal = arr.map((res) =>{
        if(!res) return res
        return res[0].toUpperCase() + res.slice(1)
    })
    let fin = pascal.join('');
    document.querySelector('.pascalcase').innerText = fin;
}

function kababCase(kc) {
    let sp = kc.split(' ');
    let kb = sp.join('-');
    document.querySelector('.kababcase').innerText = kb;
}

function snakeCase(sc) {
    let sp = sc.split(' ');
    let sn = sp.join('_');
    document.querySelector('.snakecase').innerText = sn;
}

function trimText(tm) {
    let t = tm.split(' ').join('');
    document.querySelector('.trim').innerText = t;
}

