const btn = document.querySelector('.btn');
let out = document.querySelector('.persons');
let index = 1;
let count;

btn.addEventListener('click', addPerson);
btn.style.display = 'none';

addPerson();

function addPerson() {
  fetch(`https://jsonplaceholder.typicode.com/users?_page=${index}&_limit=1`)
    .then(response => {
      count = +response.headers.get('x-total-count');
      return response.json();
    })
    .then(json => {
      btn.style.display = '';
      if (index == count) {
        btn.style.display = 'none';
      }
      console.log(index, count);
      let card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = json[0].name + '<br>' + json[0].email;
      out.append(card);
      index++;
    })
}