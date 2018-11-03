import $ from '../node_modules/jquery'


export const loadingPage = () => {
    $('#ul-for-movies').html('LOADING!!!!! BITCH')
};




export const loadedPage = (movies) => {
    let htmlOutput = '';
    movies.forEach(({title, rating}) => {
        htmlOutput += `<li class="movie-item">The rating for ${title} is ${rating}`
        htmlOutput += `<button class="edit-btn hidden">Edit</button></li>`;
        htmlOutput += `<form class="edit-movie"></form>`;

    });
    return htmlOutput
};

export const editMovie = () => {

};


