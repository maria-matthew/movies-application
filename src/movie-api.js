"use strict";

import $ from "jquery";

export const getMoviePoster = (searchWords) => {
    let searchQuery = searchWords.split(' ').join('+');
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=5a43e10dc640e28f93cf7fd6b868c59f&query=${searchQuery}`)
        .then(response => response.json());
};

// export const getPosterImage = (searchWords) => {
//
//     let imgUrl = `https://image.tmdb.org/t/p/w500/${getMoviePoster(searchWords)}`;
//     return imgUrl;
// };
// getMoviePoster('Jack Reacher');

// export const addImage = (selector, searchWords) => {
//
//     getMoviePoster(searchWords).then(response => response.results[0].poster_path)
//         .then((poster) => {
//             $(selector).attr('src', `https://image.tmdb.org/t/p/w500/${poster}`);
//         });
// };