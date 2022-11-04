const countElement = document.getElementById('count');
const generateElement = document.getElementById('generate');
const countTextElement = document.getElementById('countText');
const cardsElement = document.getElementById('cards');
let count = countElement.value;

countElement.addEventListener('input', (e) => {
    let newCount = parseInt(e.currentTarget.value);
    countTextElement.innerText = newCount;
    count = newCount;
})

generateElement.addEventListener('click', e => {
    e.preventDefault();
    const colorNumbers = [];
    let color1 = getRandomNumber(10, 100);
    let color2 = getRandomNumber(10, 100);
    let color3 = getRandomNumber(10, 100);
    colorNumbers.push([color1, color2, color3]);

    for (let i = 1; i < count; i++) {
        color1 = color1 + getRandomNumber(15, 50);
        color2 = color2 + getRandomNumber(15, 50);
        color3 = color3 + getRandomNumber(15, 50);
        colorNumbers.push([color1, color2, color3]);
    }
    console.log(colorNumbers)
    cardsElement.innerHTML = '';
    colorNumbers.forEach(colors => {
        const div = document.createElement('div');
        div.classList.add('color-element');
        div.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
        cardsElement.append(div);
    })

})


const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
