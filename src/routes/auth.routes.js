const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

// @route  POST /api/auth/login
router.post('/login', authController.login);

// @route  POST /api/auth/refresh-token
router.post('/refresh-token', authController.refreshToken);

// @route  POST /api/auth/logout
router.post('/logout', verifyToken, isAdmin, authController.logout);

// @route  GET /api/auth/profile
router.get('/profile', verifyToken, isAdmin, authController.getProfile);

// @route  PATCH /api/auth/update-profile
router.patch('/update-profile', verifyToken, isAdmin, authController.updateProfile);

module.exports = router;
