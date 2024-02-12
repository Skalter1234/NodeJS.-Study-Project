const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const UserSchema = sequelize.define('Users', {
	fullname: {
		type: DataTypes.STRING, 
		allowNull: false,
		unique: false
	},
	email: {
		type: DataTypes.STRING, 
		allowNull: false,
		unique: true
	},
	password:{
		type:DataTypes.STRING,
		allowNull:false
	},
	uuid:{
		type:DataTypes.TEXT,
		allowNull:false
	},
	role:{
		type:DataTypes.STRING,
		allowNull:false
	}
});

UserSchema.sync().then(() => {}).catch((error) => {
   console.error('Unable to create table Users: ', error);
});

module.exports = UserSchema;