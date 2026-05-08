const Movie = require('../models/movies')

class MovieController {
    async create(req, res) {
        try {
            const newMovie = await Movie.create(req.body);
            return res.status(201).json(newMovie);
        } catch (error) {
            return res.status(400).json({ error: "Erro ao criar filme" });
        }
    }

    async list(req, res) {
    try {
        const movies = await Movie.find();
        return res.json(movies);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao listar filmes" });
    }
}

    async show(req, res) {
        try {
            const movie = await Movie.findById(req.params.id);
            if (!movie) return res.status(404).json({ error: "Filme não encontrado" });
            return res.json(movie);
        } catch (error) {
            return res.status(400).json({ error: "ID inválido" });
        }
    }

    async update(req, res) {
        try {
            const movieUpdate = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!movieUpdate) return res.status(404).json({ error: "Filme não encontrado" });
            return res.json(movieUpdate);
        } catch (error) {
            return res.status(400).json({ error: "Erro ao atualizar" });
        }
    }

    async delete(req, res) {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            if (!movie) return res.status(404).json({ error: "Filme não encontrado" });
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ error: "Erro ao deletar" });
        }
    }
}

module.exports = new MovieController();