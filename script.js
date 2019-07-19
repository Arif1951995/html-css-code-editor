let html = document.querySelector('.html');
let output = document.querySelector('.output');
let css = document.querySelector('.css');
let cssOutput = '';

html.addEventListener('input', () => {
    output.innerHTML = html.value + cssOutput;
    console.log(html.value, output.innerHTML);

})

css.addEventListener('input', () => {
    cssOutput = `<style>${css.value}</style>`;
    output.innerHTML = html.value + cssOutput;
    console.log(css.value);

})





