"use strict";

// const apiExport = {};
//
//   apiExport.getMovies = () => {
//     return fetch('/api/movies')
//       .then(response => response.json());
//   };
//
//  export default apiExport;

export const getMovies = (url = '') => {

    return fetch(`/api/movies${url}`)
        .then(response => response.json());
};

