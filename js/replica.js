const movies = [
  { title: 'Forrest Gump', poster: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg', youtube: 'bLvqoHBptjg' },
  { title: 'Gladiador', poster: 'https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg', youtube: 'cXg62-t8BWs' },
  { title: 'Matrix', poster: 'https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg', youtube: 'zckJCxYxn1g' },
  { title: 'Filme X', poster: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg', youtube: 'a06zxOyQrAs' },
];

function createCard(movie){
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${movie.poster}" alt="Poster - ${movie.title}">
    <div class="overlay">
      <button class="play-btn" data-video="${movie.youtube}" aria-label="Reproduzir trailer">▶</button>
    </div>
    <div class="meta">${movie.title}</div>
  `;
  return card;
}

function openModal(videoId){
  const modal = document.getElementById('trailer-modal');
  const iframe = document.getElementById('modal-iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  const modal = document.getElementById('trailer-modal');
  const iframe = document.getElementById('modal-iframe');
  iframe.src = '';
  modal.setAttribute('aria-hidden','true');
}

document.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.getElementById('movie-grid');
  movies.forEach(m => grid.appendChild(createCard(m)));

  grid.addEventListener('click', (e)=>{
    const btn = e.target.closest('.play-btn');
    if(btn){
      const id = btn.dataset.video;
      openModal(id);
    }
  });

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });
});
