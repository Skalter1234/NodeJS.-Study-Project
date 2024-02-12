const envType = String(process.env.NODE_ENV).trim();
const envPath = __dirname+`/.env.${envType}`;
require('dotenv').config({path:envPath});


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const config = require('./config');
const router = require('./router/index');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors({
	credentials:true,
	origin:config.urls.client
}));
app.use(cookieParser());
app.use("/api", router);

const start = async ()=>{
	try{
		app.listen(PORT, ()=>{
			console.log(`Server started on ${PORT}`);
		});
	}
	catch(e){
		console.log(e);
	}
}

start();