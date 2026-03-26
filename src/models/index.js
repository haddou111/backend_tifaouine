const { sequelize } = require('../config/database');

// Importer tous les modèles ici plus tard
const Utilisateur = require('./Utilisateur');
const admin = require('./admin');
const membre = require('./membre');
const benevole = require('./benevole');
// ...

// Configurer les associations ici (Héritage 1:1)
Utilisateur.hasOne(admin, { foreignKey: 'utilisateur_id', onDelete: 'CASCADE' });
admin.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id' });

Utilisateur.hasOne(membre, { foreignKey: 'utilisateur_id', onDelete: 'CASCADE' });
membre.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id' });

Utilisateur.hasOne(benevole, { foreignKey: 'utilisateur_id', onDelete: 'CASCADE' });
benevole.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id' });

module.exports = {
    sequelize,
    Utilisateur,
    admin,
    membre,
    benevole
};
