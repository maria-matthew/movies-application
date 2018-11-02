"use strict";

export const getMovies = (url = '', options) => {
    return fetch(`/api/movies${url}`, options)
        .then(response => response.json());
};

export const postOptions = (json) => {
    return {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    }
};


