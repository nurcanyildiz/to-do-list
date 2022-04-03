const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const listItem = document.querySelector('#list-item');


btn.addEventListener('click', function() {


  if(input.value === '' ){
    return;
  }




  const list = document.createElement('li');
  listItem.append(list);
  list.innerHTML = input.value;
  input.value = ' ';
  list.classList.add('listStyle');

  list.addEventListener('click', function() {
    list.style.textDecoration = 'line-through';
    list.style.color = 'red';
  });



  const completeBtn = document.createElement('button');
  list.append(completeBtn);
  completeBtn.innerHTML = 'x';
  completeBtn.classList.add('removeCompleteButton');

  completeBtn.addEventListener('click', function(e) {
    list.parentNode.removeChild(list);
    return false;

  });

});






