const presents = document.querySelectorAll('.present')
const boxes = document.querySelectorAll('.box')
const presentsBox = document.querySelector('.presents-box')
const chosenBox = document.querySelector('.chosen-box')
const sendBtn = document.querySelector('.send-btn')
presents.forEach(present =>{
    present.addEventListener('dragstart',()=>{
        present.classList.add('is-dragged')
    })
    present.addEventListener('dragend',()=>{
        present.classList.remove('is-dragged')
    })
})
boxes.forEach(box =>{
    box.addEventListener('dragover', e =>{
        e.preventDefault()
        const isDragged = document.querySelector('.is-dragged')
        box.appendChild(isDragged)

        handlePresents()
    })
})
const handlePresents = () =>{
    const otherPresents = presentsBox.querySelectorAll('.present')
    if(chosenBox.childElementCount > 2){
        otherPresents.forEach(present =>{
            present.setAttribute('draggable',false)
            present.classList.add('present-disabled')
        })
        sendBtn.disabled=false
    }else{
        otherPresents.forEach(present =>{
            present.setAttribute('draggable',true)
            present.classList.remove('present-disabled')
        })
        sendBtn.disabled=true

    }
}