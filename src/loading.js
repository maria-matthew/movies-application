"use strict";

import $ from '../node_modules/jquery'
import { getMoviePoster} from "./movie-api";


//adds loading image
export const loadingPage = () => {
    $('#section-for-movies').html(` 
       <div class="col s12">
            <div class="row"><span class="white-text">Loading...</span></div>
            <div class="row">
                <div class="preloader-wrapper small active">
                    <div class="spinner-layer spinner-red-only">
                      <div class="circle-clipper left">
                        <div class="circle"></div>
                      </div><div class="gap-patch">
                        <div class="circle"></div>
                      </div><div class="circle-clipper right">
                        <div class="circle"></div>
                      </div>
                    </div>
                  </div>
            </div>
       </div>           
`);
};

//function takes in movie title, gets info for path from api and styles the id with that title name
const addImage = (title) => {
    //grabs path for movie poster image

    getMoviePoster(title).then(response => {
        console.log(response);
        return response.results[0].poster_path;
    }).then((poster) => {
        //attachs path to the end of the image source
        $(`#${title}`).attr('src', `https://image.tmdb.org/t/p/w500${poster}`);
    });

};

//STYLE IDEAS
//refactor to a for loop so that after every third element a new row is created

//Add select for rating edit feature

//Add modals with description of the movie to pop up, when image is clicked


//each movie starts with a form that is hidden until the edit button is pressed
export const loadedPage = (movies) => {
    let htmlOutput = '';
    //form hidden until edit button is clicked
    movies.forEach(({ title, rating, id }) => {
        let idTitle = title.split(' ').join('-');//makes titles spinal so the od is one name even with titles with spaces

        htmlOutput += `
        <div class="col l4 m6 s12 mb-5 center white-text">
            <div class="movie-item row">
                <div class="col s12">
                    <img src="" alt="movie poster image" id="${idTitle}" class="movie-poster materialboxed img-fluid" >
                </div>
                <div class="col s12">
                    <span class="movie-titles">${title} <br>Rating: ${rating}</span>
                </div>
                <div class="function-btn col s12">
                    <a class="btn-floating btn-large waves-effect waves-light blue"><i class="edit-btn material-icons">create</i></a>
                    <a class="btn-floating btn-large waves-effect waves-light blue"><i class="delete-btn material-icons" id="${id}">remove</i></a>
                </div>
                <div class="col s10 offset-s1">
                    <form class="edit-movie hidden row" id="${id}edit-form">
                        <label class="col s6" for="${id}title">Title: </label>
                    <input type="text" id="${id}title" value="${title}" class="title-edit">
                        <label class="col s6" for="${id}rating">Rating: </label>
                    <input type="text" id="${id}rating" value="${rating}" class="rating-edit">
                        <input type="submit" class="submit-edit btn blue" id="${id}-submit">
                    </form>
                </div>        
            </div>
        </div>
        `;
        addImage(idTitle);//call the function to style the image right after it is added in the html
    });
    return htmlOutput;
};




