const link = document.getElementsByTagName('a');
const espaco = document.getElementsByTagName('li');

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('mouseover', () => {
    espaco[i].classList.add('mouseOver');
  });
  
  link[i].addEventListener('mouseout', () => {
    espaco[i].classList.remove('mouseOver');
  });
}