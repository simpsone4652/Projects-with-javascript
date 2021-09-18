const btn= document.querySelector('.arrow')
const arrowIcon=document.querySelector('.fas')
const img = document.querySelector('.item1')

function showImage(){
    img.classList.toggle('show')
}

btn.addEventListener('click',showImage)