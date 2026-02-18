const titles = [
  "Cloud Computing Engineer",
  "Full Stack Developer",
  "Firebase Specialist",
  "AWS Enthusiast"
];

let ti = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-text');

function type() {
  const current = titles[ti];

  if (!deleting) {
    el.textContent = current.slice(0, ++ci);
    if (ci === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = current.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      ti = (ti + 1) % titles.length;
    }
  }

  setTimeout(type, deleting ? 50 : 90);
}

type();


// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(reveal => observer.observe(reveal));
