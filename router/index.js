const Router = require('express').Router;
const { body, param } = require('express-validator');
const userController = require('../controllers/user-controller');

const userRouter = new Router();
userRouter.post('/user',
	body('fullname').isString().isLength({ min: 1 }),
	body('email').isEmail(),
	body('password').isLength({ min: 3, max: 32 }),
	body('role').isString().isLength({ min: 1 }),
	userController.createUser);


module.exports = userRouter;