import $ from '../node_modules/jquery'


export const loadingPage = () => {
    $('#ul-for-movies').html('LOADING!!!!! BITCH')
};




export const loadedPage = (movies) => {
    let htmlOutput = '';
    movies.forEach(({title, rating}) => {
        htmlOutput += `<li>The rating for ${title} is ${rating}</li>`;

    });
    return htmlOutput
};
