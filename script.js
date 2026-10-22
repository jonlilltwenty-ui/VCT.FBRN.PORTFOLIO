function filterCategory(category, event) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (event) event.target.classList.add('active');

  const cards = document.querySelectorAll('.work-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function openVideo(videoUrl) {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('videoPlayer');
  
  if (modal && player) {
    player.src = videoUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop page scrolling when watching
  }
}

function closeVideo(event) {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('videoPlayer');

  if (modal && player) {
    player.src = '';
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore page scrolling
  }
}
