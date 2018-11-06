/**
 * es6 modules and imports
 */
import { getMovies, createOptions } from './api.js';
import $ from 'jquery';
import { loadingPage, loadedPage } from './loading';
import { getPosterImage, getMoviePoster } from "./movie-api";

loadingPage();

//Loaded Page
getMovies().then((movies) => {
    $('#section-for-movies').html(loadedPage(movies));
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

$(document).on('click', '.edit-btn', (e) => {
    e.preventDefault();
    let editID = $(e.target).parent().parent().next().children('form').attr('id');
    $(`#${editID}`).slideToggle();
});



//Edit Movie Function
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
$(document).on('click', '.delete-btn', (e) =>{
    e.preventDefault();
    $(e.target).parent().attr('disabled', true);
    const id = $(e.target).attr('id');

    getMovies(id, createOptions('delete'));
    getMovies().then((movies) => {
        $('#section-for-movies').html(loadedPage(movies));
    });
});