document.querySelector('#add-time')
.addEventListener('click', cloneField)

const fieldContainer = document.querySelector('.schedule-item');

function cloneField() {

    const newFieldContainer = fieldContainer.cloneNode(true);
    
    newFieldContainer.querySelector('button')
    .addEventListener('click', removeField)

    const fields = newFieldContainer.querySelectorAll('input');
    
    fields.forEach(field => {
        field.value = '';
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
