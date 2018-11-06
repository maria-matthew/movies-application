"use strict";

export const getMovies = (id = '', options) => {
    return fetch(`/api/movies/${id}`, options)
        .then(response => response.json());
};

export const createOptions = (method, movieObj) => {
    return {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    }
};


//
// export const postOptions = (moviePost) => {
//     return {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(moviePost),
//     }
// };
//
// export const putOptions = (moviePost) => {
//     return {
//         method: 'PUT',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(moviePost),
//     }
// };
//
// export const deleteOptions = (moviePost) => {
//     return {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(moviePost),
//     }
// };
