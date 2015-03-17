require('odata-server');
require('./model');

var config = {
	type: colleges,
	database: 'college-data',
	provider: {
	    server: 'ds033607.mongolab.com:33607',
        databaseName: 'college-data',
        user: 'test_user',
        username: 'test_user',
        password: 'password'
	}
};

$data.createODataServer(config, '/colleges.svc', process.env.PORT || 5000);