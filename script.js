const progress = document.getElementById('progress');
const buttonNext = document.getElementById('next');
const buttonPrev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
buttonNext.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log(currentActive);
  update();
});
buttonPrev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    buttonPrev.disabled = true;
  } else if (currentActive === circles.length) {
    buttonNext.disabled = true;
  } else {
    buttonPrev.disabled = false;
    buttonNext.disabled = false;
  }
}
