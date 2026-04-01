require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// Servir les fichiers statiques (Photos des membres, bénévoles, etc.)
app.use('/data', express.static(path.join(__dirname, 'src', 'data')));
const PORT = process.env.PORT || 5000;

// Extra basic middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Route de base
app.get('/', (req, res) => {
    res.json({ message: "API Tifaouine Running" });
});

const apiRoutes = require('./src/routes');
app.use('/api', apiRoutes);

const { sequelize } = require('./src/config/database');

// Vérification de la connexion à la base de données avant de démarrer le serveur
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log(' Connexion à PostgreSQL établie avec succès');

        await sequelize.sync({ alter: false });

        app.listen(PORT, () => {
            console.log(`Serveur démarré sur http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error(' Impossible de se connecter à la base de données :', error);
        process.exit(1);
    }
};

startServer();
