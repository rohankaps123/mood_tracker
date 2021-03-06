angular.module('mood_tracker.controllers').controller('analyzeController', function($scope,$window, $stateParams) {
  $scope.show = [true, false];
  $scope.selectBy = 'Date';
  $scope.moods = ["Happy", "Sad", "Hungry"];
 // get theme
  $scope.appTheme = 'positive';
  var selectedTheme = $window.localStorage.appTheme;
    if (selectedTheme) {
        $scope.appTheme = selectedTheme;
    } else {
        $scope.appTheme = 'positive';
    }
  //select by date or mood
  $scope.updateSelectBy = function(selected){
    if(selected === 'Date'){
      $scope.show = [true, false];
    }else{
      $scope.show = [false, true];
    }
  };

  var data = {
    labels: ['Happy', 'Sad', 'Hungry'],
    series: [20, 35, 55]
  };

  var options = {
    showLabel: true
  };

  var responsiveOptions = [
    ['screen and (min-width: 640px)', {
      chartPadding: 30,
    }],
    ['screen and (min-width: 1024px)', {
      chartPadding: 20
    }]
  ];

  new Chartist.Pie('.ct-chart', data, options,responsiveOptions);
});
