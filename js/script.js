const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const serviceID = 'service_myr6mqe';
  const templateID = 'template_e0mpsqo';

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          alert('Message sent successfully!');
          document.getElementById('contactForm').reset();
      }, (err) => {
          alert('Oops... something went wrong.');
          console.log(JSON.stringify(err));
      });
});
