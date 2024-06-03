document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    const mainImage = document.getElementById('main-image');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const newImage = card.getAttribute('data-image');
        const newTitle = card.getAttribute('data-title');
        const newText = card.getAttribute('data-text');
        
        // Change the main image
        mainImage.src = newImage;
  
        // Update the card content (if needed, otherwise this part can be removed)
        card.innerHTML = `
          <h3 class="text-lg font-semibold">${newTitle}</h3>
          <p class="text-sm text-zinc-600">${newText}</p>
        `;
      });
    });
  });
  const buttons = document.querySelectorAll('.absolute.bottom-5.left button');
  const slides = document.querySelectorAll('.flex.overflow-x-auto > div');
  const dots = document.querySelectorAll('.absolute.bottom-5.left button');
  let currentIndex = 0;

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      slides[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      buttons[currentIndex].classList.remove('bg-red-500');
      buttons[currentIndex].classList.add('bg-zinc-300');
      currentIndex = index;
      buttons[currentIndex].classList.remove('bg-zinc-300');
      buttons[currentIndex].classList.add('bg-red-500');
    });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (index === 0) {
        window.location.href = 'index1.html';
      } else if (index === 1) {
        window.location.href = 'index2.html';
      } else {
        window.location.href = 'index3.html';
      }
    });
  });  
  document.getElementById("back-button").addEventListener("click", function() {
    // Navigate to index3.html
    window.location.href = "index3.html";
  });