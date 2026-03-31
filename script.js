const cards = document.querySelectorAll('.card');

cards.forEach((card, idx) => {
  card.style.animationDelay = `${idx * 0.15}s`;
  card.animate(
    [
      { transform: 'translateY(10px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }
    ],
    {
      duration: 700,
      delay: idx * 160,
      fill: 'forwards',
      easing: 'cubic-bezier(.2,.8,.2,1)'
    }
  );
});
