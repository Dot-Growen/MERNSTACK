const JokeController = require("../Controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes/", JokeController.getAllJokes);
    app.get("/api/jokes/:id", JokeController.getOneJoke);
    // app.post("/api/jokes/random", JokeController.getRandomJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
}