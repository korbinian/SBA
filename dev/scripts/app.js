var sba = angular.module('sba', ['ngAnimate', 'ui.router']);

sba.config(function($stateProvider, $urlRouterProvider) { 
	$stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeController',
        title: 'home'
    }).state('news', {
        url: '/news',
        templateUrl: 'news.html',
        controller: 'newsController',
    }).state('projects', {
        url: '/projects',
        templateUrl: 'projects.html',
        controller: 'projectsController',
    }).state('profile', {
        url: '/profile',
        templateUrl: 'profile.html',
        controller: 'profileController',
    }).state('contact', {
        url: '/contact',
        templateUrl: 'contact.html',
        controller: 'contactController',
    })
});

sba.controller('homeController', function($scope) {
    $scope.pageClass = 'page-home';
});

sba.controller('newsController', function($scope) {
    $scope.pageClass = 'page-news';
});

sba.controller('projectsController', function($scope) {
    $scope.pageClass = 'page-projects';
});

sba.controller('profileController', function($scope) {
    $scope.pageClass = 'page-profile';
});

sba.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});