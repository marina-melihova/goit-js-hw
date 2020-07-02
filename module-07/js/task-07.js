const fontSizeRef = document.querySelector('#font-size-control');

const min = fontSizeRef.min;
const max = fontSizeRef.max;
const size = fontSizeRef.value;
fontSizeRef.style.backgroundSize = ((size - min) * 100) / (max - min) + '% 100%';

const textRef = document.querySelector('#text');

fontSizeRef.addEventListener('input', onFontSizeChange);

function onFontSizeChange({ target }) {
  const size = target.value;
  textRef.style.fontSize = size + 'px';
  fontSizeRef.style.backgroundSize = ((size - min) * 100) / (max - min) + '% 100%';
}
