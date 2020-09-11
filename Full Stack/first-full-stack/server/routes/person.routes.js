const PersonController = require('../controllers/person.controller');

module.exports = function(app){
    app.get('/api', PersonController.index);
    app.get('/api/people/:id', PersonController.getPerson)
    app.get('/api/people', PersonController.getAllPeople)
    app.post('/api/people', PersonController.createPerson);
}