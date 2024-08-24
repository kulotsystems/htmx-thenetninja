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
                    <div class="book-list">
                        <button hx-get="/books" hx-target="closest div">Show Books</button>
                    </div>
                    
                    <div class="add-book-form">
                        <h2>What do you want to read?</h2>
                        <form>
                            <input
                                type="text"
                                name="title"
                                placeholder="title"
                            />
                            <input
                                type="text"
                                name="author"
                                placeholder="author"
                            />
                            <button hx-post="/books" hx-target=".book-list ul" hx-swap="beforeend">Add Book</button>
                        </form>
                    </div>
                </main>
            </body>
        </html>
    `;
};

export default createHomepageTemplate;