let fas= document.querySelectorAll('#fas').forEach(fas => {
    fas.addEventListener('click', () => {
    fas.style.color = fas.style.color === "green" ? "white" : "green"
    });
});
let fass= document.querySelectorAll('#fass').forEach(fass => {
    fass.addEventListener('click', () => {
    fass.style.color = fass.style.color === "green" ? "#363438" : "green"
    });
});
let heart= document.querySelectorAll('#heart').forEach(heart => {
    heart.addEventListener('click', () => {
    heart.style.color = heart.style.color === "red" ? "white" : "red"
    });
});
let hear= document.querySelectorAll('#hear').forEach(hear => {
    hear.addEventListener('click', () => {
    hear.style.color = hear.style.color === "red" ? "#363438" : "red"
    });
});