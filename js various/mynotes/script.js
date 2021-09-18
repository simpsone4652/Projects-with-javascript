const addBtn = document.querySelector('.add')
const deleteBtns = document.getElementsByClassName('delete-note')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteAllBtn = document.querySelector('.delete-all')


const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue;
let cardID = 0;

const openPanel = () => {
    notePanel.style.visibility="visible"
    
}
const closePanel = () => {
    notePanel.style.visibility="hidden"
    error.style.visibility="hidden"
    category.selectedIndex = 0;
    textArea.value = '';
    
}
const addNote = () => {
    if(textArea.value !=='' && category.options[category.selectedIndex].value !== '0'){
        createNote();
        error.style.visibility='hidden'
    }else{
        error.style.visibility='visible'

    }
    
}
const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id',cardID);

    newNote.innerHTML = `<div class="note-header">
    <h3 class="note-title">${selectedValue}</h3>
    <buttton class="delete-note" onclick=deleteNote(${cardID})><i class="fas fa-times icon"> </i></buttton>
    </div>
    <div class="note-body">${textArea.value}
    </div>`

    noteArea.appendChild(newNote);
    cardID++;
    textArea.value = ''
    category.selectedIndex = 0;
    notePanel.style.visibility="hidden"
    checkColor(newNote)
    
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
    
}
selectValue()




const checkColor = (note) => {
    switch(selectedValue){
        case 'Zakupy':
            note.style.backgroundColor = 'rgb(72,255,0)';
            break
        case 'Praca':
            note.style.backgroundColor = 'rgb(255,243,0)';
            break;
        case 'Inne':
            note.style.backgroundColor = 'rgb(72,170,255)';
            break;

    }

    
}
const deleteNote = (id) => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete)
    
}
const deleteAllNote = () => {
    noteArea.textContent =''

    
}


addBtn.addEventListener('click',openPanel)
cancelBtn.addEventListener('click',closePanel)
saveBtn.addEventListener('click',addNote)
deleteAllBtn.addEventListener('click',deleteAllNote)