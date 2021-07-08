const lowerBtn = document.querySelector('.lower');
const addBtn = document.querySelector('.add');
const count = document.querySelector('.counter');

let counter = '';

lowerBtn.addEventListener('click' , () => {
  if(counter > 0 && counter <= 50){
    counter--
    count.textContent = counter
  }
});

addBtn.addEventListener('click' , () => {
  if(count.textContent >= 0 && counter <= 49){
    counter++
    count.textContent = counter;
  }
});
