angular.module('ngPortfolio').controller('HomeController', function($scope){
  // $scope.name = "Hello My Name is WHAT";
  this.header = "HIS NAME IS STIG";
  this.bio = `
  Minahm Kim graduated May 2015 from Virginia Tech with a B.S. in Computer Science.
  He has three dogs, Benjii the terrier, Maximus the eskimo, and Kudo the Yorkie.
  Currently residing in Northern Virginia, he is an avid fan of boardgames.`;
}).component('home',{
  controller: "HomeController",
  templateUrl: 'app/components/home/home.html'
});
