const createEditFormTemplate = (book) => {
    return /*html*/`
        <form
            id="editbook"
            hx-put="/books/${book.id}"
            hx-target="closest li"
            hx-swap="outerHTML"
        >
            <input
                type="text"
                name="title"
                placeholder="title"
                required
                value="${book.title}"
            />
            <input
                type="text"
                name="author"
                placeholder="author"
                required
                value="${book.author}"
            />
            <button>
                Update Book
            </button>
        </form>
    `;
};

export default createEditFormTemplate;