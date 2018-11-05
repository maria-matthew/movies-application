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
    //form hidden until edit button is clicked
    movies.forEach(({ title, rating, id }) => {htmlOutput += `
        <li class="movie-item">The rating for ${title} is ${rating}
            <button class="edit-btn hidden">Edit</button>
        </li>
        <form class="edit-movie hidden">
            <label for="${id}">Title: </label>
                <input type="text" id="${id}" value="${title}">
            <label for="${id}rating">Rating: </label>
                <input type="text" id="${id}rating" value="${rating}">
            <input type="submit" class="submit-edit">
        </form>`
    });
    return htmlOutput
};

export const editMovie = () => {

};


