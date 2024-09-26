const books = require('../model/bookModel')


//add books
exports.addBook = async (req, res) => {
    const { id, bookName, author, price, coverImage } = req.body
    console.log("inside add book ");

    try {
        const existingBook = await books.findOne({ bookName: bookName })
        console.log(id, price);
        if (existingBook) {
            res.status(406).json(`${bookName} already exists`)
        }

        else {
            const newBook = new books({
                id: id,
                bookName: bookName,
                author: author,
                price: price,
                coverImage: coverImage
            })
            await newBook.save()
            res.status(200).json(`${bookName} added successfully`)
        }
    }
    catch (error) {
        res.status(406).json(error)
    }
}

//List Books
exports.listBooks = async (req, res) => {
    try {
        const getBooks = await books.find()
        res.status(200).json(getBooks)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

//Delete Book

exports.deleteBook = async (req, res) => {
    const {id} = req.params
    try {
        const deleteBook = await books.deleteOne({_id:id})
        res.status(200).json("Book deleted Successfully")
    }
    catch (error) {
        res.status(406).json(error)
    }
}