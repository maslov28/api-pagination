const btn = document.querySelector('.btn');
let out = document.querySelector('.persons');
let index = 0;

btn.addEventListener('click', addPerson);

addPerson();

function addPerson() {
  fetch(`https://jsonplaceholder.typicode.com/users?_page=1&_limit=10`)
    .then(response => response.json())
    .then(json => {
      if (index < json.length) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = json[index].name + '<br>' + json[index].email;
        out.append(card);
        index++;
      }
    })
}