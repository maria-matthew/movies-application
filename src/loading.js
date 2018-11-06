"use strict";

import $ from '../node_modules/jquery'
import { getMoviePoster} from "./movie-api";


export const loadingPage = () => {
    $('#ul-for-movies').html('LOADING...');
};

const addImage = (selector, searchWords) => {


    getMoviePoster(searchWords).then(response => response.results[0].poster_path)
        .then((poster) => {
            $(selector).attr('src', `https://image.tmdb.org/t/p/w500/${poster}`);
        });
};
//problem happens styling wise where when you leave the list after
//hovering over the edit button the direction of the toggle changes

//each movie starts with a form that is hidden until the edit button is pressed
export const loadedPage = (movies) => {
    let htmlOutput = '';
    //form hidden until edit button is clicked
    movies.forEach(({ title, rating, id }) => {htmlOutput += `
        <div class="col s4 mb-5 center white-text">
            <div class="movie-item row">
                <img src="" alt="" id="${title}">
                <div class="col s12">
                    <span class="movie-titles">${title} <br>Rating: ${rating}</span>
                </div>
                <div class="function-btn col s12">
                    <button class="edit-btn btn orange accent-4">Edit</button>
                    <button class="delete-btn btn orange accent-4" id="${id}">Delete</button>
                </div>
                <div class="col s12">
                    <form class="edit-movie hidden row">
                        <label class="col s6" for="${id}title">Title: </label>
                    <input type="text" id="${id}title" value="${title}" class="title-edit">
                        <label class="col s6" for="${id}rating">Rating: </label>
                    <input type="text" id="${id}rating" value="${rating}" class="rating-edit">
                        <input type="submit" class="submit-edit btn orange accent-4" name="${id}">
                    </form>
                </div>        
            </div>
        </div>
        `;
        // addImage(`#${title}`, title);
    });
    return htmlOutput;
};


