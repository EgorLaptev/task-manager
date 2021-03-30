'use strict';

function deleteTask() {

  if(event.target.style.backgroundColor == 'red')
    event.target.parentNode.parentNode.remove();

  document.querySelectorAll('.task .delete').forEach(deleteBtn => {
    deleteBtn.style.backgroundColor = 'transparent';
  })

  event.target.style.backgroundColor = 'red';

}
