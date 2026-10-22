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
  player.src = videoUrl;
  modal.style.display = 'flex';
}

function closeVideo(event) {
  if (event.target.classList.contains('modal') || event.target.classList.contains('close-modal')) {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    player.src = '';
    modal.style.display = 'none';
  }
}
