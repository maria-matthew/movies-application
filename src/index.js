/**
 * es6 modules and imports
 */
import { getMovies, postOptions, putOptions} from './api.js';
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
  getMovies('', postOptions({title, rating}));
  getMovies().then((movies) => {
      $('#ul-for-movies').html(loadedPage(movies));
  });

});

// $(document).on('click', '.movie-item', () => {
//     console.log('im a click');
//     $(this).next().html('<input type="text">');
// });


//idea: make it so that when the user hovers over the title, an edit
//button appears and when the edit button is clicked the forms pops up
//underneath

//problem statement: have edit button appear when user hovers over list

// $('.movie-item').hover(() => {
//     console.log('hover');
//     $('.edit-btn').toggleClass('hidden');
// });

$(document).on('click', '.edit-btn', (e) => {
    console.log('im a click');
    // $(document).children().css('background-color', 'yellow');
    // $('li').css('background-color', 'yellow');
    // $(this).css('background-color', 'yellow');
    $(e.target).parent().next('.edit-movie').toggleClass('hidden');
});


$(document).on('mouseenter', '.movie-item', (e) => {
    console.log('hover over');
    $(e.target).children('.edit-btn').toggleClass('hidden');
});

$(document).on('mouseleave', '.movie-item', (e) => {
    console.log('hover over');
    $(e.target).children('.edit-btn').toggleClass('hidden');
});

$(document).on('click', '.submit-edit', (e) =>{
    e.preventDefault();
    // $(e.target).preventDefault();
    $('body').css('background-color', 'yellow');
    // const title = $("#").val();
    // const rating = $("#rating").val();
    // const titleEdit = $(e.target).next().val;
    const ratingEdit = $(e.target).parent().children()[3].value;
    // const ratingEdit = e ;
    // const titleEdit = $(e.target).parent().children()[1].value;
    const titleEdit = parseFloat($(e.target).parent().children()[1].value);
    const id = $(e.target).parent().children()[1].id;

    console.log(id);
    // console.log(typeof titleEdit);
    // console.log(typeof ratingEdit);
    getMovies(id, putOptions({titleEdit, ratingEdit}));
    getMovies().then((movies) => {
        $('#ul-for-movies').html(loadedPage(movies));
    });
});