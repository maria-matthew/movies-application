/**
 * es6 modules and imports
 */
import { getMovies, postOptions} from './api.js';
import $ from 'jquery';
import { loadingPage, loadedPage } from './loading';


loadingPage();


getMovies().then((movies) => {
  $('#main-container').html(loadedPage(movies));
  $('#movie-add-form').removeClass('hidden');
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

$('#movie-add-btn').click((e) => {
  e.preventDefault();
  getMovies(url, postOptions(movies))
});