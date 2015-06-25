var nameApp = angular.module('starter', ['ionic', 'ui.router']);
 
nameApp.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'index.html',
      controller: 'ListCtrl'
    })
    .state('view', {
      url: '/images',
      templateUrl: 'yedekImage.html',
      controller: 'MainCtrl'
    }) ;
  
  $urlRouterProvider.otherwise("/");
  
});
 
nameApp.controller('ListCtrl', function($scope, $state) {
  $scope.changePage = function(){
    $state.go('view', {movieid: 1});
  };    
});
  
nameApp.controller('ViewCtrl', function($scope, $stateParams, $ionicHistory) {
  console.log($stateParams.movieid);
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };    
});

nameApp.controller('MainCtrl', function($scope, $ionicModal) {
	$scope.hide = [{
		bars : true
	}];


	$scope.data = {};
	$scope.grids = grids;

	// $scope.grids = [{
	// id: 0,
	// src:  deneme,
	// }, {
	// id: 1,
	// src:  'http://lorempixel.com/400/200/sports/2/',
	// }, {
	// id: 2,
	// src: 'http://lorempixel.com/400/200/sports/3/',
	// }, {
	// id: 3,
	// src: 'http://lorempixel.com/400/200/sports/4/',
	// }, {
	// id: 4,
	// src: 'http://lorempixel.com/400/200/sports/5/',
	// }, {
	// id: 5,
	// src: 'http://lorempixel.com/400/200/sports/6/',
	// }];

	$ionicModal.fromTemplateUrl('templates/modal.html', function(modal) {
		$scope.gridModal = modal;
	}, {
		scope : $scope,
		animation : 'slide-in-up'
	});

	// $scope.initialize = function(grids) {
		// console.log();
		// $scope.grids = grids;
	// };

	$scope.openModal = function(selected) {
		console.log(selected.id);
		$scope.data.selected = selected.id;

		$scope.gridModal.show();
	};

	$scope.closeModal = function() {
		$scope.gridModal.hide();
		$scope.hide.bars = false;
	};
});
