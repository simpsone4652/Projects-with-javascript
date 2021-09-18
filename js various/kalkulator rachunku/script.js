const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btnCount = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () =>{
    if(price.value == '' || people.value == '' || tip.value == 0){
        error.textContent = 'Uzupelnij wszystkie pola'

    }else{
        error.textContent = ''
        conutBill()
    }
}
const conutBill = () =>{
    const newPrice = parseInt(price.value)
    const newPeople = parseInt(people.value)
    const newTip = parseFloat(tip.value)
    const sum = (newPrice + (newPrice * newTip)) / newPeople

    costInfo.style.display = 'block'
    cost.textContent = sum.toFixed(2)
    
}
btnCount.addEventListener('click',showBill)