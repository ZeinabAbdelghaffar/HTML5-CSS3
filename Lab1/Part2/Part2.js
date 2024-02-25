const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');
const text = document.getElementById('text');
function updateColor() {
    const red = redRange.value;
    const green = greenRange.value;
    const blue = blueRange.value;
    const color = `rgb(${red}, ${green}, ${blue})`;
    text.style.color = color;
}
redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);
