/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var orderBookApp = angular.module('orderBook',['ui.router'])

.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/dashboard');
	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'html/dashboard.html',
			controller: 'dashboardController',
			controllerAs: 'dashboardCtrl'
		})
		.state('orders', {
			url: '/orders',
			templateUrl: 'html/orders.html',
			controller: 'ordersController',
			controllerAs: 'ordersCtrl'
		})
		.state('items', {
			url: '/items',
			templateUrl: 'html/items.html',
			controller: 'itemsController',
			controllerAs: 'itemsCtrl'
		})
		.state('customers', {
			url: '/customers',
			templateUrl: 'html/customers.html',
			controller: 'customersController',
			controllerAs: 'customerCtrl'
		});

});

orderBookApp.controller('tabController',['$state',function($state){
	var self = this;
	self.selectedTab = 1;

	self.setTab = function(tabNum){
		self.selectedTab = tabNum;
	}

	self.changeRoute = function(newRoute){
		$state.go(newRoute);

	}

  	self.isSet = function(checkTab) {
		return self.selectedTab === checkTab;
  	};

  }
]);


orderBookApp.controller('dashboardController',[function(){

  }
]);

orderBookApp.controller('ordersController',[function(){

  }
]);

orderBookApp.controller('itemsController',[function(){

  }
]);

orderBookApp.controller('customersController',[function(){

  }
]);