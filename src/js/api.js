const API_KEY = 'be95ce6970454524a6fb851e42f0b81d';
const BASE_URL = 'https://api.rawg.io/api/games';

export const fetchGames = async (searchQuery = '', page = 1) => { 
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&page_size=9&ordering=-rating&search=${searchQuery}&page=${page}`); 
    const data = await response.json(); 
    return data.results; 
}; 

export const fetchGameDetail = async (gameId) => { 
    const response = await fetch(`${BASE_URL}/${gameId}?key=${API_KEY}`);
    const data = await response.json();
    return data;
}; 
