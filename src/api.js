"use strict";

export const getMovies = (id = '', options) => {
    return fetch(`/api/movies/${id}`, options)
        .then(response => response.json());
};


// REFACTORED the options methods to be one so we
// just send in the method type and the object we
// are working with
export const createOptions = (method, movieObj) => {
    return {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    }
};

