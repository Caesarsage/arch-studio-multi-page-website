const carrousel = document.querySelector('#carrousel');
const gallery = Array.from(carrousel.children);
const controls = document.querySelector('#carrousel-controls');
const btns = Array.from(controls.querySelectorAll('button'));

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

btns.forEach(btn => btn.addEventListener('click', handleClick))