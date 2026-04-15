let lastId = 0; 
let movies = [];

class MovieController {
    list(req, res) {
        return res.json(movies);
    }

    create(req, res) {
        const { title, description, year, genres, image, video } = req.body;
        
        lastId++; 
        
        const newMovie = {
            id: lastId, 
            title,
            description,
            year,
            genres,
            image,
            video
        };
        
        movies.push(newMovie);
        return res.status(201).json(newMovie);
    }

    update(req, res) {
        const { id } = req.params;
        const { title, description, year, genres, image, video } = req.body;
        
        const index = movies.findIndex(m => m.id === Number(id));

        if (index === -1) {
            return res.status(404).json({ error: "Filme não encontrado" });
        }

        const movieUpdate = {
            id: Number(id),
            title,
            description,
            year,
            genres,
            image,
            video
        };

        movies[index] = movieUpdate;
        return res.json(movieUpdate);
    }

    delete(req, res) {
        const { id } = req.params;
        const index = movies.findIndex(m => m.id === Number(id));

        if (index === -1) {
            return res.status(404).json({ error: "Filme não encontrado" });
        }

        movies.splice(index, 1);
        return res.status(204).send();
    }
}

module.exports = new MovieController();