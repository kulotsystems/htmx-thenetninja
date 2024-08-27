import createBookTemplate from './book.js';

const createListTemplate = (books) => {
    return /*html*/`
        <ul>
          ${books.map((book) => createBookTemplate(book)).join('')}
        </ul>
    `;
};

export default createListTemplate;