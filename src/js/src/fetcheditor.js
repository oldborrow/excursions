import fetch from 'unfetch';

const fetchEditor = () => fetch('api/editor');
export default fetchEditor();