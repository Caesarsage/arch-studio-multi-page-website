const carrousel = document.querySelector('#carrousel');
const gallery = Array.from(carrousel.children);
const controls = document.querySelector('#carrousel-controls');
const btns = Array.from(controls.querySelectorAll('button'));

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

var intervalID;

function runCarrousel() {
  if(desktop && getWidth() <= 1024){
    desktop = false;
    let i = 0;
    intervalID = setInterval(() => {
      gallery.map((el, idx) => {
        if(idx === i) {
          el.classList.remove('z-0', 'opacity-0', 'duration-700');
          el.classList.add('z-20', 'opacity-100', 'duration-500');
        } else {
          el.classList.remove('z-20', 'opacity-100', 'duration-500');
          el.classList.add('z-0', 'opacity-0', 'duration-700');
        }
      })
      i++;
      if(i === gallery.length) {
        i = 0;
      }
    }, 5000);
  } else if(!desktop && getWidth() > 1024) {
    clearInterval(intervalID);
    desktop = true;
  }
}

function handleClick(e) {

  btns.map(btn => {
      if(btn === e.target) {
        btn.classList.remove('bg-very-light-grey', 'text-dark-grey');
        btn.classList.add('bg-very-dark-blue', 'text-white');
      } else {
        btn.classList.remove('bg-very-dark-blue', 'text-white');
        btn.classList.add('bg-very-light-grey', 'text-dark-grey');
      }
    })

  gallery.map(el => {
    if(el.dataset.galleryelement === e.target.textContent) {
      el.classList.remove('z-0', 'opacity-0', 'duration-700');
      el.classList.add('z-20', 'opacity-100', 'duration-500');
    } else {
      el.classList.remove('z-20', 'opacity-100', 'duration-500');
      el.classList.add('z-0', 'opacity-0', 'duration-700');
    }
  })
}

let desktop = getWidth() <= 1024 ? true : false;

runCarrousel();

btns.forEach(btn => btn.addEventListener('click', handleClick));
window.addEventListener('resize', runCarrousel);