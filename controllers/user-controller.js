const userService = require("../services/user-service");

class UserController{
	async createUser(){
		const fullname = "Иванов Иван Иванович";
		const email = "t1@y1.ru";
		const pass = "123";
		const uuid = uuidv4();
		const role = "admin";

		const userData = await userService.createUser(fullname, email, pass, uuid, role);
		return userData;
	}
}

module.exports = new UserController();