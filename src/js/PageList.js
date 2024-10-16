import { fetchGames } from "./api.js";  
import Masonry from 'masonry-layout'; // Assurez-vous d'importer Masonry 
import "../css/styles.scss";  

const PageList = (searchQuery = "") => {   
  const render = () => {   
    const pageContent = document.getElementById("pageContent");   
    pageContent.innerHTML = `<section class="page-list"><h1>Liste des jeux</h1><div id="gamesContainer"></div></section>`;   

    fetchGames(searchQuery).then((games) => {     
      const gamesContainer = document.getElementById("gamesContainer");     
      gamesContainer.innerHTML = games     
        .map(      
          (game) => `      
          <div class="game-card" data-id="${game.id}">      
              <img src="${game.background_image}" alt="${game.name}">      
              <h2>${game.name}</h2>     
              <p>Platforms: ${game.platforms.map((p) => p.name).join(", ")}</p>      
              <p>Release Date: ${game.released}</p>      
              <p>Rating: ${game.rating}</p>      
          </div>      
        `     
        )      
        .join("");      

      // Événements de clic     
      document.querySelectorAll(".game-card").forEach((card) => {     
        card.addEventListener("click", () => {   
          const gameId = card.dataset.id;   
          window.location.hash = `#pagedetail/${gameId}`;    
        });   
      });     

      // Initialisation de Masonry après le chargement des cartes
      setTimeout(() => {
        const masonry = new Masonry(gamesContainer, {
          itemSelector: '.game-card', 
          columnWidth: '.game-card', 
          percentPosition: true, 
          gutter: 20 
        });
      }, 0);
    });   
  };   
   
  render();   
};   

export default PageList;  
