const openPopup = document.getElementById('open');
const closePopup = document.getElementById('close');
const formPopup = document.getElementById('formPopup');

openPopup.addEventListener("click",()=>{
  formPopup.classList.remove('hidden')
})
closePopup.addEventListener("click",()=>{
  formPopup.classList.add('hidden')
})