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
                loc: 'home'
            })

            .state('news', {
                url: '/news',
                templateUrl: 'templates/pages/news.html',
                controller: 'newsController',
                loc: 'news'
            })


            .state('projects', {
                url: '/projects',
                templateUrl: 'templates/pages/projects.html',
                controller: 'projectsController',
                loc: 'projects'
            })

            .state('project022', {
                url: '/projects/022',
                templateUrl: 'templates/projects/022.html',
                controller: 'projectController',
                loc: 'project'
            })
            .state('project055', {
                url: '/projects/055',
                templateUrl: 'templates/projects/055.html',
                controller: 'projectController',
                loc: 'project'
            })

            .state('profile', {
                url: '/profile',
                templateUrl: 'templates/pages/profile.html',
                controller: 'profileController',
                loc: 'profile'
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/pages/contact.html',
                controller: 'contactController',
                loc: 'contact'
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
    $scope.myInterval = 3000;
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
        $scope.loc = $state.current.loc;
        console.log($scope.loc);
    });

    
});
