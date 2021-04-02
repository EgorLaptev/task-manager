'use strict';

const search = document.querySelector('#search');

search.addEventListener('input', evt => {

    Task.list.forEach(task => {
       for(let prop in task) {
           if(/search.value/.test(task[prop])) {

           }

       }
    });

});