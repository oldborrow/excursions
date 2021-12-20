import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        response.json().then(e => {
            error.error = e;
        })
        return Promise.reject(error);
    }
}

export const getAllArticles = () =>
    fetch('api/articles').then(checkStatus);

export const addNewArticle = article =>
    fetch('api/editor', {
        headers: {
            'Content-Type' : 'application/json'
        },

        method: 'POST',
        body: JSON.stringify(article)
    }).then(checkStatus);