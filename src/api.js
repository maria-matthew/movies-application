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

export const patchOptions = (moviePost) => {
    return {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(moviePost),
    }
};


