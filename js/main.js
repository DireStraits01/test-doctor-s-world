let items = document.querySelectorAll('.circular')
const itemsLength = 8

const arc = 2 * Math.PI * (1 / itemsLength)
const radius = 50
console.log(arc)
for (let i =0; i < itemsLength; i++){
    const angle = i * arc;
    
    x = radius * Math.cos(angle)
    y = radius * Math.sin(angle)
    items[i].style.left = 50 + x + '%';
    items[i].style.top = 50 + y + '%' 
}