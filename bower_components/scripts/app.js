var appSemen = angular.module('semen', []);

appSemen.constant('name', 'Semen');

// -------------------------------------------

var app = angular.module('nata', ['ngRoute', 'semen']);

app.service('News', function($http){
  this.get = function(callback) {
    $http.get('/get-news').success(callback);
  }

  this.add = function() {}
});

app.controller('HomeController', function($location, name) {
  this.greeting = 'hello, this is nata and ' + name + ' home page';

  this.goToNews = function() {
    $location.path('/news')
  }
});

app.controller('NewsController', function($location, News) {
  this.news = news || [];

  News.get(function(data){
    this.news = data;
  }).bind(this));

  this.goToHome = function() {
    $location.path('/home')
  }
});

app.config(
function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/home', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  })
  .when('/news', {
    templateUrl: 'templates/news.html',
    controller: 'NewsController',
    controllerAs: 'newsCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
});
