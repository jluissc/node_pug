// click guardar
const nombre = document.getElementById('nombre');
const numero = document.getElementById('numero');

const btnAdd = document.querySelector("#btn_add");

// click eliminar
const spanDelete = document.getElementsByClassName('btn_delete')

btnAdd.addEventListener('click', () => {
    console.log('clickkk');
    window.location.href = `agregar/${nombre.value}/${numero.value}`;
})

// spanDelete.addEventListener('click', () => {
//     console.log('click delete');
// })

for (let i of spanDelete) {
    i.addEventListener('click', () => {
        let id = i.getAttribute('id')
        window.location.href = `delete/${id}`;
    })
    
}