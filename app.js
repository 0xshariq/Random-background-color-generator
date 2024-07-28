const button = document.querySelector('.btn');
const hex = document.querySelector('.hex-code');

function colorChange() {
    const hexChars = "0123456789ABCDEF";
    let color = "#" ;
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random()*16)];
    }
    return color;      
}
button.addEventListener('click', () => {
    const randomColor = colorChange();
    document.body.style.backgroundColor = randomColor;
    hex.textContent = randomColor;
});