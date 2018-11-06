/**
 * es6 modules and imports
 */
import { getMovies, createOptions } from './api.js';
import $ from 'jquery';
import { loadingPage, loadedPage } from './loading';

loadingPage();

//Loaded Page
getMovies().then((movies) => {
    $('#section-for-movies').html(loadedPage(movies));
    $('#movie-add-form').removeClass('hidden');
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});

//IDEA: Add a movie that has a genre attained from the api

//Add Movie Function
$('#movie-add-btn').click((e) => {
    e.preventDefault();
    const title = $("#movie-title-input").val();
    const rating = $("#rating").val();
    if(title.length !== 0){
        $(e.target).attr('disabled', true);
        getMovies('', createOptions('POST', {title, rating}));
        getMovies().then((movies) => {
            $(e.target).attr('disabled', false);
            $('#section-for-movies').html(loadedPage(movies));
        });
    } else{
        console.log('no dice');
    }
});


//Edit/Delete Button Animations
//Issue to work on: whenever the form is toggled, it affects the layout of all the movies
$(document).on('click', '.edit-btn', (e) => {
    e.preventDefault();
    let editID = $(e.target).parent().parent().next().children('form').attr('id');
    $(`#${editID}`).slideToggle();
});



//Edit Movie Function
//grabs value of user input and turns it into and object to get added to the database
$(document).on('click', '.submit-edit', (e) =>{
    e.preventDefault();
    const ratingEdit = $(e.target).parent().children()[3].value;
    const titleEdit = $(e.target).parent().children()[1].value;
    let id = $(e.target).attr('id');
    id = id.split('-')[0];

    getMovies(id, createOptions('PUT', {title:titleEdit, rating:ratingEdit}));
    getMovies().then((movies) => {
        $('#section-for-movies').html(loadedPage(movies));
    });
});

//Delete Movie Function
//grabs id of movie selected and sends id to get deleted
$(document).on('click', '.delete-btn', (e) =>{
    e.preventDefault();
    $(e.target).parent().attr('disabled', true);
    const id = $(e.target).attr('id');

    getMovies(id, createOptions('delete'));
    getMovies().then((movies) => {
        $('#section-for-movies').html(loadedPage(movies));
    });
});