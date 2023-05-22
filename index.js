import { gsap } from "gsap";
import $ from 'jquery';

//setup
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 20; j++) {
    const $cube = $('<div class="box red">Box</div>')
    $('.box-container').append($cube);
  }
}



//box animation
let boxMoved = false;
const boxButton = document.getElementsByClassName('box-button')[0];
boxButton.addEventListener('click', () => {
  if (!boxMoved) {
    gsap.to('.green', {x: 200,
                     duration: 2,
                     backgroundColor: 'teal',
                     ease:  'bounce.out'});
  } else {
    gsap.to('.green', {x: 0,
                     backgroundColor: 'green',
                     duration: 0.75,
                     ease: 'power.inOut'});
  }
  boxMoved = !boxMoved;
});

//stagger test

const toggleBoxes = (delay, autoGrid, staggerFrom) => {
  console.log(autoGrid);
  if (!boxesBoxed) {
    gsap.to('.red', {
      scale: 1.25,
      stagger: {
        each: 0.05,
        from: staggerFrom,
        grid: autoGrid
      },
      duration: 0.2,
      background: 'teal',
      borderWidth: '3px',
      delay: delay
    })
  } else {
    gsap.to('.red', {
      scale: 1,
      stagger: {
        each: 0.05,
        from: staggerFrom,
        grid: autoGrid
      },
      duration: 0.75,
      border: 'none',
      background: 'red',
      ease: 'bounce.out',
      borderWidth: '0px',
      delay: delay
    })
  }
  boxesBoxed = !boxesBoxed;
}

let boxesBoxed = false;
const staggerButton = document.getElementsByClassName('stagger-button')[0];
staggerButton.addEventListener('click', () => {
  const repeats = $('.repeats').val();
  const delay = $('.delay').val();
  const staggerFrom = $('.stagger-from:checked').val();
  const autoGrid = $('.auto-grid').is(':checked') ? 'auto' : '';
  for (let i = 0; i <= repeats - 1; i++) {
    toggleBoxes(delay * i, autoGrid, staggerFrom)
  }
})