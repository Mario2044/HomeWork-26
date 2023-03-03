const ul = document.getElementById('ul');
const liOne = document.getElementById('one');
const newLi = `<li>2</li><li>3</li>`;

liOne.insertAdjacentHTML('afterend', newLi);