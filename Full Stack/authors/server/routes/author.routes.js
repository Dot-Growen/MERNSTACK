const AuthorController = require('../controllers/author.controller');

module.exports = function (app) {
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthor );
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
    app.post('/api/new', AuthorController.createAuthor);
}