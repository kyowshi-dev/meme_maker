const layout = document.getElementById('layout');
const image = document.getElementById('image');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const memePreview = document.getElementById('memePreview');
const createBtn = document.getElementById('createBtn');

const imageSources = {
  matrix: 'images/matrix.jpg',
  beach: 'images/beach.jpg'
};

createBtn.addEventListener('click', () => {
  const layoutVal = layout.value;
  const imageVal = image.value;
  const textTop = text1.value;
  const textBottom = text2.value;

  let topTextDiv = '';
  let bottomTextDiv = '';

  if (layoutVal === 'top' || layoutVal === 'top-bottom') {
    topTextDiv = `<div class="meme-text top-text">${textTop}</div>`;
  }

  if (layoutVal === 'bottom' || layoutVal === 'top-bottom') {
    bottomTextDiv = `<div class="meme-text bottom-text">${textBottom}</div>`;
  }

  memePreview.innerHTML = `
    <div style="position: relative;">
      <img src="${imageSources[imageVal]}" alt="meme image">
      ${topTextDiv}
      ${bottomTextDiv}
    </div>
  `;
});
