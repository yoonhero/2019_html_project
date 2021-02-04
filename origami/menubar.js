  const navSlide = () => {
    const burger = document.querySelector('.bugger');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');


      navLink.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
        }
      });

      burger.classList.toggle('')
    });
  }
