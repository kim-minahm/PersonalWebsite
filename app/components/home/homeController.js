angular.module('ngPortfolio').controller('HomeController', function($scope){
  // $scope.name = "Hello My Name is WHAT";
  this.header = "HIS NAME IS STIG"
  this.information = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}).component('home',{
  controller: "HomeController",
  templateUrl: 'app/components/home/home.html'
});
