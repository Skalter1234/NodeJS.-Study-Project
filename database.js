const { Sequelize } = require("sequelize");
const dbConfig = require("./config").pssql;
const database = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
	host:dbConfig.server,
	dialect:"fix",
	logging: false
});

database.sync();

module.exports = database;