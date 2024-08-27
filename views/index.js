const createHomepageTemplate = () => {
    return /*html*/`
        <html lang="en">
            <head>
                <title>My Reading List</title>
                <link rel="stylesheet" href="/styles.css">
                <script src="/dist/htmx.min.js"></script>
            </head>
            <body>
                <header>
                    <h1>My Reading List</h1>
                </header>
                
                <main>
                    <div class="search" style="text-align: center">
                        <input
                            type="search"
                            name="search"
                            placeholder="search books by title..."
                            hx-post="/books/search"
                            hx-trigger="keyup changed delay:300ms"
                            hx-target=".book-list"
                        />
                    </div>
                    <div class="book-list">
                        <button hx-get="/books" hx-target="closest div">Show Books</button>
                    </div>
                    
                    <div class="add-book-form">
                        <h2>What do you want to read?</h2>
                        <form
                            id="newbook"
                            hx-post="/books"
                            hx-on::after-request="document.querySelector('form#newbook').reset();"
                            hx-target=".book-list ul"
                            hx-swap="beforeend"
                        >
                            <input
                                type="text"
                                name="title"
                                placeholder="title"
                                required
                            />
                            <input
                                type="text"
                                name="author"
                                placeholder="author"
                                required
                            />
                            <button>
                                Add Book
                            </button>
                        </form>
                    </div>
                </main>
            </body>
        </html>
    `;
};

export default createHomepageTemplate;