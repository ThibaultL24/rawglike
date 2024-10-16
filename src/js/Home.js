import { fetchGames } from './api.js';
import '../css/styles.scss';

const Home = () => {
  const render = () => {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `<section class="home-page"><h1>Jeux Récents</h1><div id="recentGamesContainer"></div></section>`;
    
    fetchGames().then(games => {
      const recentGamesContainer = document.getElementById('recentGamesContainer');
      recentGamesContainer.innerHTML = games.map(game => ` 
        <div class="game-card" data-id="${game.id}"> 
          <img src="${game.background_image}" alt="${game.name}"> 
          <h2>${game.name}</h2> 
          <p>Platforms: ${game.platforms.map(p => p.name).join(", ")}</p> 
        </div> 
      `).join(''); 

      // Événements de clic 
      document.querySelectorAll('.game-card').forEach(card => { 
        card.addEventListener('click', () => { 
          const gameId = card.dataset.id; 
          window.location.hash = `#pagedetail/${gameId}`;
        }); 
      }); 
    }); 
  }; 

  render(); 
}; 

export default Home; 
