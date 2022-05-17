const btn = document.querySelector('.btn');
let out = document.querySelector('.persons');
let index = 1;

btn.addEventListener('click', addPerson);

addPerson();

function addPerson() {
  fetch(`https://jsonplaceholder.typicode.com/users/${index}`)
    .then(response => response.json())
    .then(json => {
      let card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = json.name + '<br>' + json.email;
      out.append(card);
      index++;
    })
}