const ApiError = require("../exceptions/api-error");
const CategoriesService = require("../service/categories-service");

class CategoriesController {
    async getCategories(req, res, next) {
        try {
            const user = req.user;

            if (!user.id) {
                return next(ApiError.UnAuthorizedError());
            }
            const categoriesData = await CategoriesService.getCategories(user.id);

            return res.json(categoriesData.categories);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new CategoriesController();
