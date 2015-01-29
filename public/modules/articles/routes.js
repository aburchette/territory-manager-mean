'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
            state('listArticles', {
                url: '/articles',
                templateUrl: 'modules/articles/views/list-articles.html'
            }).
            state('createArticle', {
                url: '/articles/create',
                templateUrl: 'modules/articles/views/create-article.html'
            }).
            state('viewArticle', {
                url: '/articles/:articleId',
                templateUrl: 'modules/articles/views/view-article.html'
            }).
            state('editArticle', {
                url: '/articles/:articleId/edit',
                templateUrl: 'modules/articles/views/edit-article.html'
            });
	}
]);
