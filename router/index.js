const Router = require('express').Router
const UserController = require('../controllers/user-controller')
const router = new Router()
const {check} = require('express-validator')

router.post(
    '/registration',
    check('email', 'Введите корректный email').isEmail(),
    check('password')
        .not()
        .isIn(['123456', 'qwerty', 'password','пароль'])
        .withMessage('Не вводите такой простой пароль')
        .isLength({min: 6})
        .withMessage('Минимальное количество символов 6'),
    UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.activated)
router.get('/refresh', UserController.refresh)

module.exports = router