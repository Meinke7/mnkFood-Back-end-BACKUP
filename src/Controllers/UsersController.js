const { hash } = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UserController {
    async create(request, response) {
        const {name, email, password} = request.body;

    const checkUserExists = await knex.select('email').where({email}).from('users');

    if (checkUserExists.length > 0){
      throw new AppError('Este email já está em uso', 401);
    };

    const hashedPassword = await hash(password, 8);

    await knex('users').insert({
      name,
      email,
      password: hashedPassword,
      admin: false
    });

    return response.status(200).json();
  }
}

module.exports = UserController;