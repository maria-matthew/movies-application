"use strict";

export const getMovies = (id = '', options) => {
    return fetch(`/api/movies/${id}`, options)
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

export const putOptions = (moviePost) => {
    return {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(moviePost),
    }
};


