const knex = require("../database/knex");
const authConfig = require("../configs/auth");
const AppError = require("../utils/AppError");
const { sign } = require("jsonwebtoken");
const { compare } = require("bcryptjs");

class AuthenticationController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first();

    if (!user) {
      throw new AppError("E-mail e/ou senha incorreta", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreta", 401);
    }

    const { secret } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn: "24h",
    });

    return response.json({ user, token });
  }
}

module.exports = AuthenticationController;
