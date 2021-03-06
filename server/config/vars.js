const path = require('path');

let CONFIG = {} //Make this global to use all over the application

CONFIG.app = process.env.NODE_ENV || 'development';

if (CONFIG.app !== 'production') {
  // import .env variables
  require('dotenv-safe').load({
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example'),
  });

}


CONFIG.port = (CONFIG.app == 'test') ? '4141' : process.env.PORT || '4040';

CONFIG.db_dialect = process.env.DB_DIALECT || 'mongo';
CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '27017';
CONFIG.db_name = process.env.DB_NAME || 'db_name';
CONFIG.db_user = process.env.DB_USER || 'user';
CONFIG.db_password = process.env.DB_PASSWORD || 'user';
CONFIG.mongo_url = process.env.MONGO_URL || "mongodb+srv://alaeddine:mongo1234@cluster0-ofkdk.mongodb.net/test?retryWrites=true";




CONFIG.logs = process.env.NODE_ENV === 'production' ? 'combined' : 'dev',

  module.exports = CONFIG;

