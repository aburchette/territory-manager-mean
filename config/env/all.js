'use strict';

module.exports = {
	app: {
		title: 'Territory Manager',
		description: 'Territory Manager'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'cogh2Ne5oS3bUc4shooG4iV2',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css'
			],
			js: [
                'socket.io/socket.io.js',
                'public/lib/socket.io-client/socket.io-client.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
            'public/controllers.js',
            'public/modules/*/module.js',
            'public/modules/*/services.js',
            'public/modules/*/controllers.js',
            'public/modules/*/routes.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
