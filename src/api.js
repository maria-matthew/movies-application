"use strict";

export const getMovies = (options) => {
    return fetch(`/api/movies`, options)
        .then(response => response.json());
};

export const postOptions = (moviePost) => {
    return {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(moviePost),
    }
};


