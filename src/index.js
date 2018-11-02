/**
 * es6 modules and imports
 */
import { getMovies, postOptions} from './api.js';
import $ from 'jquery';
import { loadingPage, loadedPage } from './loading';


loadingPage();

getMovies().then((movies) => {
  $('#ul-for-movies').html(loadedPage(movies));
  $('#movie-add-form').removeClass('hidden');
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

$('#movie-add-btn').click((e) => {
  e.preventDefault();
  const title = $("#movie-title-input").val();
  const rating = $("#rating").val();
  console.log("test");
  getMovies(postOptions({title, rating}));
  getMovies().then((movies) => {
      $('#ul-for-movies').html(loadedPage(movies));
  });

});

$(document).on('click', '.movie-item', () => {
    console.log('im a click');
    $(this).next().html('<input type="text">');
});