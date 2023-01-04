const express = require ('express');
const helmet = require('helmet');
const path = require('path');
const authRoutes = require('./routes/user');

const app = express() ;

require('dotenv').config();

app.use(express.json()); // middleware interceptant tous les objets json provenant de json.

//---------------------------SECURITY----------------------
app.use(helmet()); // failles XSS

//---------------------------CORS----------------------
app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', process.env.ACCESS_CONTROL_URL );
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
    next();
});

app.use('/medias', express.static(path.join(__dirname, 'medias'))); // middleware répondant au requête envoyée à /image
// requete envoyé a /images , le middleware sert le dossier static. en argument on passe le chemin.
// path = chemin du server, dirname = repertoire de base, 'images' = sous réperoire image

//---------------------------ROUTES----------------------
app.use('/api/auth', authRoutes);

module.exports = app;