const UserModel = require("../models/user-model");
const BudgetModel = require("../models/budget-models");
const SettingsModel = require("../models/settinsgs-model");
const CategoriesModel = require("../models/categories-models");

const bcrypt = require("bcrypt");
const uuid = require("uuid");

// const mailService = require("./mail-service");
const tokenService = require("./token-service");

const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      return { error: 1, message: `auth error.user exists` };
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    // await mailService.sendActivationMail(
    //   email,
    //   `${process.env.API_URL}/api/activate/${activationLink}`
    // );
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await BudgetModel.create({ user: userDto.id });
    await SettingsModel.create({ user: userDto.id });
    await CategoriesModel.create({ user: userDto.id });

    await tokenService.saveTokens(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return {
        error: 1,
        message: `auth error.user does not exist`,
      };
    }
    const isPasswordEquals = await bcrypt.compare(password, user.password);
    if (!isPasswordEquals) {
      return {
        error: 1,
        message: `auth error.user does not exist`,
      };
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveTokens(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    return tokenService.removeToken(refreshToken);
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("auth error.broken link");
    }
    user.isActivated = true;
    await user.save();
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnAuthorizedError();
    }
    const tokenData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = tokenService.findToken(refreshToken);
    if (!tokenData || !tokenFromDB) {
      throw ApiError.UnAuthorizedError();
    }
    const user = await UserModel.findById(tokenData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveTokens(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
