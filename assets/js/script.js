// Tilt effect for portfolio cards
const cards = document.querySelectorAll('.tilt');
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width/2;
    const midY = rect.height/2;
    const rotateX = (y - midY)/midY*10;
    const rotateY = (x - midX)/midX*10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`; });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
