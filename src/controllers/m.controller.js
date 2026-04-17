let lastId = 0; 
let movies = [];

class MovieController {
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
    /* Durante minha procura além das aulas, entendi que list funciona para ver os registros de forma geral (E como tem apenas o que estou adicionando, não daria problema). Enquanto isso, o read geralmente implica em recuperar um único dado específico. Por esse motivo, decidi pelo list na produção do meu código. */

    list(req, res) {
         return res.json(movies);
    }

    /* Poderia substitui o list por read ou manter os dois, com esse código abaixo; gerando assim, dois GETs.
    read(req, res) {
        const { id } = req.params; 

        const movie = movies.find(m => m.id === Number(id));

        if (!movie) {
            return res.status(404).json({ error: "Filme não encontrado" });
        }

        return res.json(movie);
    }*/

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