var sba = angular.module('sba', ['ui.router', 'ngAnimate', 'ngTouch', 'ui.bootstrap']);

sba.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider


    .state('home', {
        url: '/',
        templateUrl: 'templates/pages/home.html',
        controller: 'homeController'
    })


    .state('news', {
        url: '/news',
        templateUrl: 'templates/pages/news.html',
        controller: 'newsController',
    })


    .state('projects', {
        url: '/projects',
        templateUrl: 'templates/pages/projects.html',
        controller: 'projectsController',
    })

    .state('project022', {
        url: '/projects/022',
        templateUrl: 'templates/projects/022.html',
        controller: 'projectController',
    })
    .state('project055', {
        url: '/projects/055',
        templateUrl: 'templates/projects/055.html',
        controller: 'projectController',
    })

    .state('profile', {
        url: '/profile',
        templateUrl: 'templates/pages/profile.html',
        controller: 'profileController',
    })


    .state('contact', {
        url: '/contact',
        templateUrl: 'templates/pages/contact.html',
        controller: 'contactController',
    });
}]);




sba.controller('homeController', function($scope) {
    $scope.pageClass = 'page-home';
});

sba.controller('newsController', function($scope) {
    $scope.pageClass = 'page-news';
});

sba.controller('projectsController', function($scope) {
    $scope.pageClass = 'page-projects';
});
sba.controller('projectController', function($scope) {
    $scope.pageClass = 'page-project';
});

sba.controller('profileController', function($scope) {
    $scope.pageClass = 'page-profile';
});

sba.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

// uses angular

sba.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 1000;
    var slides = $scope.slides = [
        { image: 'images/slider/slider-1.jpg' },
        { image: 'images/slider/slider-2.jpg' },
        { image: 'images/slider/slider-3.jpg' }
    ];
});