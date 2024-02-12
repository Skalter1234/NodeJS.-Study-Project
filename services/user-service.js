const { v4: uuidv4 } = require('uuid');
const UserModel = require("../models/user-model");
class UserService{
	async createUser(fullname, email, password, uuid, role){
		await UserModel.create({fullname, email, password, uuid, role});
		return {"status":"success"};
	}
}

module.exports = new UserService();