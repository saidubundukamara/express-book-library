async function getAllBooks(req, res) {
    const books = [
        {
            id: 1,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger'
        },
        {
            id: 2,
            title: 'The Art of Sleeping anywhere',
            author: 'Kotor Saedu'
        },
]

    return res.json(books);
}


module.exports = {
    getAllBooks
}add