const express = require('express');
const app = express();
const PORT = 3000;

//Middleware to parse JSON request
app.use(express.json());

//sample data
let books = [
    {id: 1, title: "The Catcher in rae", author: "J.D. Salinger"},
    {id: 2, title: "To kill Mokingbird", author: "Harper lee"}
];

app.get ('/books', (req, res) => {
    res.json(books);
})

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book =  books.find(b => b.id === bookId);

    if(!book) {
        return res.status(404).json({message: "Book not found"})
    }

    res.json(book);
})

app.post('/books', (req, res) => {
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(202).json(newBook);
});

app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === bookId);
 
    if (index === -1) {
       return res.status(404).json({ message: "Book not found" });
    }
 
    const deletedBook = books.splice(index, 1)[0];
    res.json({ message: `Book with ID ${bookId} has been deleted successfully.`, deletedBook });
});

app.listen(PORT, () =>{
    console.log(`Server running on https://localhost:${PORT}`);
});