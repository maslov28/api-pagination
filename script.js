const btn = document.querySelector('.btn');
let out = document.querySelector('.persons');
let index = 1;

btn.addEventListener('click', addPerson);

addPerson();

function addPerson() {
  fetch(`https://jsonplaceholder.typicode.com/users?_page=${index}&_limit=1`)
    .then(response => response.json())
    .then(json => {
      if (json[0]) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = json[0].name + '<br>' + json[0].email;
        out.append(card);
        index++;
      }
    })
}