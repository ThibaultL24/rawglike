import { fetchGameDetail } from "./api.js";

const API_KEY = "be95ce6970454524a6fb851e42f0b81d";

const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      const {
        name,
        released,
        description,
        background_image,
        developers,
        genres,
        tags,
        publishers,
        platforms,
        website,
        ratings,
        screenshots,
        stores,
      } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");

      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("img").src = background_image;
      articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.querySelector(".developers").innerHTML = developers
        .map((dev) => `<a href="#pagelist/${dev.slug}">${dev.name}</a>`)
        .join(", ");
      articleDOM.querySelector(".genres").innerHTML = genres
        .map((genre) => `<a href="#pagelist/${genre.slug}">${genre.name}</a>`)
        .join(", ");
      articleDOM.querySelector(".tags").innerHTML = tags
        .map((tag) => `<a href="#pagelist/${tag.slug}">${tag.name}</a>`)
        .join(", ");
      articleDOM.querySelector(".platforms").innerHTML = platforms
        .map(
          (platform) =>
            `<a href="#pagelist/${platform.platform.slug}">${platform.platform.name}</a>`
        )
        .join(", ");
      articleDOM.querySelector(".publishers").innerHTML = publishers
        .map((pub) => `<a href="#pagelist/${pub.slug}">${pub.name}</a>`)
        .join(", ");
      articleDOM.querySelector("a.website").href = website;
      articleDOM.querySelector(
        ".ratings"
      ).innerHTML = `Rating: ${ratings[0].title} (${ratings[0].percent}%)`;
      articleDOM.querySelector(".screenshots").innerHTML = screenshots
        .slice(0, 4)
        .map((screen) => `<img src="${screen.image}" />`)
        .join("");
      articleDOM.querySelector(".stores").innerHTML = stores
        .map(
          (store) =>
            `<a href="${store.url}" target="_blank">${store.store.name}</a>`
        )
        .join(", ");
    };

    fetchGameDetail(cleanedArgument) // Utilise fetchGameDetail ici
      .then((gameData) => {
        displayGame(gameData);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails du jeu:",
          error
        );
      });
  };

  const render = () => {
    const pageContent = document.getElementById("pageContent");
    pageContent.innerHTML = ` 
      <section class="page-detail">
        <div class="article">
  <h1 class="title"></h1> 
  <p class="release-date">Release date: <span></span></p> 
  <img class="main-image" src="" alt="Game image"> 
  <p class="description"></p> 
  <p class="developers">Developers: <span></span></p> 
  <p class="genres">Genres: <span></span></p> 
  <p class="tags">Tags: <span></span></p> 
  <p class="platforms">Platforms: <span></span></p> 
  <p class="publishers">Publishers: <span></span></p> 
  <p class="ratings"></p> 
  <div class="stores"></div> 
  <h2>Screenshots</h2> 
  <div class="screenshots"></div> 
</div>

      </section> 
    `;
    preparePage();
  };

  render();
};

export default PageDetail;
