var sba = angular.module('sba', [

    // add dependencies

        'ui.router', 
        'ngAnimate', 
        'ngTouch', 
        'ui.bootstrap'

    ])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        // route to root if url does not exist

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'templates/pages/home.html',
                controller: 'homeController',
                bla: 'home'
            })

            .state('news', {
                url: '/news',
                templateUrl: 'templates/pages/news.html',
                controller: 'newsController',
                bla: 'news'
            })


            .state('projects', {
                url: '/projects',
                templateUrl: 'templates/pages/projects.html',
                controller: 'projectsController',
                bla: 'projects'
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
                bla: 'profile'
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/pages/contact.html',
                controller: 'contactController',
                bla: 'contact'
            })
    }])
    
    .controller('homeController', function($scope) {
        $scope.pageClass = 'page-home';
    })
    .controller('newsController', function($scope) {
        $scope.pageClass = 'page-news';
    })
    .controller('projectsController', function($scope) {
        $scope.pageClass = 'page-projects';
    })
    .controller('projectController', function($scope) {
        $scope.pageClass = 'page-project';
    })
    .controller('profileController', function($scope) {
        $scope.pageClass = 'page-profile';
    })
    .controller('contactController', function($scope) {
        $scope.pageClass = 'page-contact';
    })

// uses angular ui

.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 1000;
    var slides = $scope.slides = [
        { image: 'images/slider/slider-1.jpg' },
        { image: 'images/slider/slider-2.jpg' },
        { image: 'images/slider/slider-3.jpg' }
    ];
})

.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
})

.controller('viewController', function ($scope, $state){
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $scope.fromState = fromState;
        $scope.toState = toState;
        $scope.bla = $state.current.bla;
        console.log($scope.bla);
    });

    
});

$(document).bind('mousemove', function(e){
	$('#next-title').css({
		opacity: 1,
		left: e.pageX + 5,
		top: e.pageY - 20
	});
});