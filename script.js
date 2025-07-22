// Dark Mode Toggle

const toggle = document.getElementById('darkModeToggle');  /*Selects the element with the ID darkModeToggle*/
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');  /*When clicked, it toggles the dark class on the <body> element.*/
});

// Scroll Animation
const faders = document.querySelectorAll('.fade-in'); 

const options = {
  threshold: 0.2, /*threshold: 0.2 means 20% of the element must be visible in the viewport.*/
};
const appearOnScroll = new IntersectionObserver((entries) => {  /*Creates a new IntersectionObserver.*/
  entries.forEach(entry => {   /*t watches each entry*/
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); /*visible enough based on the threshold, it adds the show class to it.*/
    }
  })
}, options);

faders.forEach(fade => appearOnScroll.observe(fade));  /*faders is a list of all elements on the page that have the class .fade-in*/

