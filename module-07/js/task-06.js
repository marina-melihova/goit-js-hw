const inputRef = document.querySelector('#validation-input');
const countChar = inputRef.dataset.length;

/*
 * Напиши скрипт, который бы при потере фокуса на инпуте,
 * проверял его содержимое на правильное количество символов.
 */

inputRef.addEventListener('blur', onInputBlur);
inputRef.addEventListener('input', inputValueHandler);

function onInputBlur({ target: { value } }) {
  value.length === 6 ? inputRef.classList.add('valid') : inputRef.classList.add('invalid');
}

function inputValueHandler() {
  inputRef.classList.remove('valid', 'invalid');
}
