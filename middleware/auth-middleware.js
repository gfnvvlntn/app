const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/token-service')

module.exports = (req, res, next) => {
    try {
        const authorizationHeader = req.header.authorization
        if (!authorizationHeader) {
            return next(ApiError.UnAuthorizedError())
        }
        const accessToken = authorizationHeader.split(' ')[1]
        if (!accessToken) {
            return next(ApiError.UnAuthorizedError())
        }
        const tokenData = tokenService.validateAccessToken(accessToken)

        if (!tokenData) {
            return next(ApiError.UnAuthorizedError())
        }
        req.user = tokenData
        next()
    }catch (e) {
        return next(ApiError.UnAuthorizedError())
    }
}