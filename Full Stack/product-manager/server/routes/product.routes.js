const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
    app.get('/api/:id', ProductController.getProduct);
    app.get('/api', ProductController.showAllProducts);
    app.post('/api/product/new', ProductController.createProduct);
    app.put('/api/:id', ProductController.updateProduct);
    app.delete('/api/:id', ProductController.deleteProduct)
    
}