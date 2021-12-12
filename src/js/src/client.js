import fetch from 'unfetch';

const getAllArticles = () => fetch('api/articles');
export default getAllArticles();