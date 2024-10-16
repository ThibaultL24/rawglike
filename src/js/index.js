import Home from './Home.js';
import PageList from './PageList.js';
import PageDetail from './PageDetail.js';
import '../css/styles.scss'; // Ajuste le chemin selon l'endroit où tu te trouves


const routes = {
  '': Home,
  'pagelist': PageList,
  'pagedetail': PageDetail,
};

const router = () => {
  const hash = window.location.hash.slice(1).toLowerCase() || '';
  const [route, argument] = hash.split('/');

  const page = routes[route];
  if (page) {
    page(argument);
  } else {
    routes[''](); // Par défaut, redirige vers la page d'accueil
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
