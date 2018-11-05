/**
 * es6 modules and imports
 */
import { getMovies, postOptions, putOptions, deleteOptions} from './api.js';
import $ from 'jquery';
import { loadingPage, loadedPage } from './loading';
import { getPosterImage, getMoviePoster } from "./movie-api";

loadingPage();
// console.log(getMoviePoster('Jack Reacher'));
// console.log(getPosterImage('Jack Reacher'));
//Loaded Page
getMovies().then((movies) => {
  $('#ul-for-movies').html(loadedPage(movies));
  $('#movie-add-form').removeClass('hidden');
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});



//Add Movie Function
$('#movie-add-btn').click((e) => {
  e.preventDefault();
  const title = $("#movie-title-input").val();
  const rating = $("#rating").val();
  if(title.length !== 0){
      $(e.target).attr('disabled', true);

      getMovies('', postOptions({title, rating}));
      getMovies().then((movies) => {
          $(e.target).attr('disabled', false);
          $('#ul-for-movies').html(loadedPage(movies));
      });
  } else{
      console.log('no dice');
  }

});

//Edit/Delete Button Animations
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

//Edit Movie Function
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

//Delete Movie Function
$(document).on('click', '.delete-btn', (e) =>{
    e.preventDefault();
    $(e.target).attr('disabled', true);
    const id = $(e.target).parent().next().children()[1].id;

    getMovies(id, deleteOptions());
    getMovies().then((movies) => {
        $('#ul-for-movies').html(loadedPage(movies));
    });
});