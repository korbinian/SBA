var sba = angular.module('sba', ['ngAnimate', 'ui.router']);

sba.config(function($stateProvider, $urlRouterProvider) { 
	$stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeController',
        title: 'home',
        controller: function($scope) {
            $scope.pageClass = 'page-home';
        }
    }).state('news', {
        url: '/news',
        templateUrl: 'news.html',
        controller: function($scope) {
            $scope.pageClass = 'page-news';
        }
    }).state('projects', {
        url: '/projects',
        templateUrl: 'projects.html',
        controller: function($scope) {
            $scope.pageClass = 'page-projects';
        },
    }).state('profile', {
        url: '/profile',
        templateUrl: 'profile.html',
        controller: function($scope) {
            $scope.pageClass = 'page-profile';
        }
    }).state('contact', {
        url: '/contact',
        templateUrl: 'contact.html',
        controller: function($scope) {
            $scope.pageClass = 'page-contact';
        }
    });
});