// ── Wilson's Lone Star — Main JS ──

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav__mobile');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
  }

  // Active nav link
  const links = document.querySelectorAll('.nav__links a, .nav__mobile a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Form submission
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.querySelector('#fname');
      const email = form.querySelector('#email');
      const course = form.querySelector('#course');
      if (!name.value.trim() || !email.value.trim() || !course.value) {
        alert('Please fill in your name, email, and course of interest.');
        return;
      }
      document.getElementById('form-success').style.display = 'block';
      form.style.opacity = '.4';
      form.style.pointerEvents = 'none';
      document.getElementById('form-success').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});
