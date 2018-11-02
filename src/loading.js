import $ from '../node_modules/jquery'


export const loadingPage = () => {
    $('#main-container').html('LOADING!!!!! BITCH')
};




export const loadedPage = (movies) => {
    let htmlOutput = '<ul>';
    movies.forEach(({title, rating}) => {
        htmlOutput += `<li>The rating for ${title} is ${rating}</li>`;

    });
    htmlOutput += '</ul>';
    return htmlOutput
};
