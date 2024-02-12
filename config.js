const dbServerName = process.env.DB_SERVER_NAME;
const dbServerPort = process.env.DB_SERVER_PORT;
const dbName = process.env.DB_NAME;
const dbLogin = process.env.DB_LOGIN;
const dbPassword = process.env.DB_PASSWORD;

const config = {
	port:5000,
	urls:{
		api:"http://localhost:5000",
		client:"http://localhost:3000",
		admin:"http://localhost:7000"
	},
	pssql:{
		server:dbServerName,
		port:dbServerPort,
		database:dbName,
		user:dbLogin,
		password:dbPassword
	}
}

module.exports = config;