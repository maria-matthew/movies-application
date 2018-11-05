"use strict";

import $ from '../node_modules/jquery'


export const loadingPage = () => {
    $('#ul-for-movies').html('LOADING...');
};


//problem happens styling wise where when you leave the list after
//hovering over the edit button the direction of the toggle changes


//each movie starts with a form that is hidden until the edit button is pressed
export const loadedPage = (movies) => {
    let htmlOutput = '';
    movies.forEach(({ title, rating, id }) => {
        htmlOutput += `<li class="movie-item">The rating for ${title} is ${rating}`
        htmlOutput += `<button class="edit-btn hidden">Edit</button></li>`;
        htmlOutput += `<form class="edit-movie hidden">`;//form hidden until edit button is clicked
        htmlOutput += `<label for="${id}">Title: </label>`;
        htmlOutput += `<input type="text" id="${id}" value="${title}">`;
        htmlOutput += `<label for="${id}rating">Rating: </label>`;
        htmlOutput += `<input type="text" id="${id}rating" value="${rating}">`;
        htmlOutput += `<input type="submit" class="submit-edit"></form>`;

    });
    return htmlOutput;
};

export const editMovie = () => {

};


