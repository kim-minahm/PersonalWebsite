angular.module('ngPortfolio').controller('PlateCalculatorController', function($scope){
  $scope.weights = [
    {name: "Forty Five", size: 45, count: 0},
    {name: "Thirty Five", size: 35, count: 0},
    {name: "Twenty Five", size: 25, count: 0},
    {name: "Ten", size: 10, count: 0},
    {name: "Five", size: 5, count: 0},
    {name: "Two and Half", size: 2.5, count: 0},
  ];

  $scope.totalWeight = 45;

  var bar = 45;

//Logic for weight calculator
  // $scope.increment = function(value) {
  //   value.count+=1;
  //   update($scope);
  // };
  //
  // $scope.decrement = function(value) {
  //   if(value.count!=0){
  //     value.count-=1;
  //     update($scope);
  //   }
  // };

   var update = function($scope){
    $scope.totalWeight = 0;
    $scope.weights.forEach(sum);
  };

  var sum = function(item){
    $scope.totalWeight+=item.size * item.count;
  };

  $scope.increment = function(value){
    $scope.totalWeight+=value;
    getWeight($scope);
  };

  $scope.decrement = function(value){
    if($scope.totalWeight-value >= bar){
      $scope.totalWeight-=value;
      getWeight($scope);
    }
  };

   var getWeight = function($scope){
     this.tempTotal = $scope.totalWeight;
     this.tempTotal-=45;
     this.tempTotal/=2;
     $scope.weights.forEach(breakDown, this);
  };

  var breakDown = function(weight){
    // console.log("%s:%s:%s",weight.size, weight.count, this.tempTotal)
    weight.count = Math.floor(this.tempTotal/weight.size);
    this.tempTotal-=weight.count*weight.size;
    // console.log("%s:%s:%s",weight.size, weight.count, this.tempTotal)
  }
}).component('plateCalculator', {
  controller: function(){},
  templateUrl:'app/components/plateCalculator/plateCalculator.html'
});

// .directive('plateCalculator', function(){
//   return {
//     restrict: 'E',
//     templateUrl: 'app/components/plateCalculator/plateCalculator.html',
//     link: function(scope, element, attrs, controllers){
//
//
//     }
//   }
// });
