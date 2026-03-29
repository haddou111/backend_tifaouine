const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

// Route publique : Connexion admin
router.post('/login', adminController.login);

// Route publique : Rafraîchir le token
router.post('/refresh-token', adminController.refreshToken);

// Routes protégées : Nécessitent un token valide et le rôle admin
router.post('/logout', verifyToken, isAdmin, adminController.logout);
router.get('/profile', verifyToken, isAdmin, adminController.getProfile);
router.patch('/update-profile', verifyToken, isAdmin, adminController.updateProfile);

module.exports = router;
