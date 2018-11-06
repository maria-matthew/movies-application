"use strict";


export const getMoviePoster = (searchWords) => {
    let searchQuery = searchWords.split('-').join('+');
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=5a43e10dc640e28f93cf7fd6b868c59f&query=${searchQuery}`)
        .then(response => response.json());
};

