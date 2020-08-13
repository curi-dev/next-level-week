document.querySelector('.exclude-time')
.addEventListener('click', removeField)


const fieldset = document.querySelector("#schedule-items");

function removeField() {

    fieldset.removeChild(this.parentNode.closest('div'));
    
    
    

}