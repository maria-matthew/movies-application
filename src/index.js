/**
 * es6 modules and imports
 */
import { getMovies, postOptions, putOptions, deleteOptions} from './api.js';
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

  getMovies('', postOptions({title, rating}));
  getMovies().then((movies) => {
      $('#ul-for-movies').html(loadedPage(movies));
  });

});


$(document).on('click', '.edit-btn', (e) => {
    console.log('im a click');
    $(e.target).parent().next('.edit-movie').toggleClass('hidden');
});


$(document).on('mouseenter', '.movie-item', (e) => {
    $(e.target).children('.edit-btn').toggleClass('hidden');
    $(e.target).children('.delete-btn').toggleClass('hidden');
});

$(document).on('mouseleave', '.movie-item', (e) => {
    $(e.target).children('.edit-btn').toggleClass('hidden');
    $(e.target).children('.delete-btn').toggleClass('hidden');
});

$(document).on('click', '.submit-edit', (e) =>{
    e.preventDefault();
    const ratingEdit = $(e.target).parent().children()[3].value;
    const titleEdit = $(e.target).parent().children()[1].value;
    const id = $(e.target).parent().children()[1].id;

    getMovies(id, putOptions({title:titleEdit, rating:ratingEdit}));
    getMovies().then((movies) => {
        $('#ul-for-movies').html(loadedPage(movies));
    });
});

$(document).on('click', '.delete-btn', (e) =>{
    e.preventDefault();
    const id = $(e.target).parent().next().children()[1].id;

    getMovies(id, deleteOptions());
    getMovies().then((movies) => {
        $('#ul-for-movies').html(loadedPage(movies));
    });
});