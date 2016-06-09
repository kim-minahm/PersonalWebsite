angular.module('ngPortfolio').controller('NavigationController', function($scope){
  $scope.current = 0;

  $scope.tabs = [
    {title:'Home', content:'someContent'},
    {title:'Fitness Tools', content:'""' ,disabled: false},
    {title:'Projects', content:'someContent' ,disabled: false},
    {title:'About', content:'someContent' ,disabled: false}
  ];

  $scope.items = [
    "Weight Calculator",
    "DMV Happy Hour"
  ];

}).component('navBar', {
  controller: function(){},
  templateUrl: 'app/components/navigation/navigation.html'
});
