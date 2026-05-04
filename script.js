// ===== NAVBAR SCROLL & ACTIVE =====
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
});

// Close menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => navLinksEl.classList.remove('open'));
});

// ===== CONTACT FORM =====
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('form-success').style.display = 'block';
    e.target.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 1200);
}

// ===== ANIMATE ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.domain-card, .mt-card, .doc-group, .pres-card, .team-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease';
  observer.observe(el);
});
