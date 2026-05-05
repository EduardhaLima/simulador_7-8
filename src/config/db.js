const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://erfl_db_user:1NNViH7jmABDMeGR@cluster0.yktzjjc.mongodb.net/?appName=Cluster0");
        console.log("MongoDB conectado com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;