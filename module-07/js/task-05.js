const nameRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

nameRef.addEventListener('input', handleInput);

function handleInput({ target: { value } }) {
  outputRef.textContent = value === '' ? 'незнакомец' : value;
}
