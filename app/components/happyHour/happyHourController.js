angular.module('ngPortfolio').controller('HappyHourCtrl', function(){
  var deals = [
    {name: "Benny's", address:"123 mulberry", startTime:"6:00", endTime:"9:00", deal:"half off drinks"}

  ];

}).component('happyHour', {
  controller: function(){},
  templateUrl: "app/components/happyHour/happyHour.html"
});
