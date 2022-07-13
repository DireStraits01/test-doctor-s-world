//____________________circle_______________________
let items = document.querySelectorAll('.circular')
const itemsLength = 8

const arc = 2 * Math.PI * (1 / itemsLength)
const radius = 60
console.log(arc)
for (let i =0; i < itemsLength; i++){
    const angle = i * arc;
    
    x = radius * Math.cos(angle)
    y = radius * Math.sin(angle)
    items[i].style.left = 50 + x + '%';
    items[i].style.top = 50 + y + '%' 
}

//_________________patient_______________

const patient = document.querySelector('.column')
const patientImage = document.querySelector('.circul-img')
const patientText = patientImage.querySelector('p')

patient.addEventListener('click', function(event){
    patientText.textContent = '' 
    if (event.target.dataset.image == 'adult')
    {patientImage.classList.add('adult-img')
    patientImage.classList.remove('kid-img') 
    patientText.textContent = '' 
}
    else if(event.target.dataset.image == 'kid')
    {patientImage.classList.add('kid-img')
    patientImage.classList.remove('adult-img')
    patientText.textContent = 'Ребенок'   
}
})
