const Router = require("express").Router;
const UserController = require("../controllers/user-controller");
const BudgetController = require("../controllers/budget-controller");
const SettingsController = require("../controllers/settings-controller");
const CategoriesController = require("../controllers/categories-controller");
const router = new Router();
const { check } = require("express-validator");

const AuthMiddleware = require("../middleware/auth-middleware");

router.post(
  "/registration",
  check("email", "Введите корректный email").isEmail(),
  check("password")
    .not()
    .isIn(["123456", "qwerty", "password", "пароль"])
    .withMessage("Не вводите такой простой пароль")
    .isLength({ min: 6 })
    .withMessage("Минимальное количество символов 6"),
  UserController.registration
);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activated);
router.get("/refresh", UserController.refresh);

router.get("/get-balance", AuthMiddleware, BudgetController.getBalance);
router.post("/create-action", AuthMiddleware, BudgetController.createAction);
router.post("/delete-action", AuthMiddleware, BudgetController.deleteAction);

router.get("/get-settings", AuthMiddleware, SettingsController.getSettings);
router.post(
  "/change-currency",
  AuthMiddleware,
  SettingsController.changeCurrency
);

router.get(
  "/get-categories",
  AuthMiddleware,
  CategoriesController.getCategories
);

router.post("/add-category", AuthMiddleware, CategoriesController.addCategory);
router.post(
  "/delete-category",
  AuthMiddleware,
  CategoriesController.deleteCategory
);

module.exports = router;
