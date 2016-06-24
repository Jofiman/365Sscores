var liveScores = angular.module('liveScores', []);

liveScores.controller('liveScoreController', ['$scope', '$http', '$timeout', '$interval', function ($scope, $http, $timeout, $interval){
        
    var liveScoresRes = function(){
        $scope.getScores();
        $interval(function(){ 
            $scope.getScores(); 
        }, 5000);
	};
              
    $scope.getScores = function(){
		$http.get('http://mobilews.365scores.com/Data/Games/?lang=1&uc=6&tz=15&countries=1').then(function(response){
			$scope.scores = [];
			$scope.scores = response.data;
            $scope.games = response.data.Games;
            $scope.competitions = response.data.Competitions;
            console.log(response.data.Games);
            
            $scope.Today = [];
            
            angular.forEach($scope.competitions, function(item, key){
                var competitionKey = key;
                item.img = item.CID;
                item.CID = item.ID;
                item.name = item.Name;
                
                angular.forEach($scope.games, function(item, key){

                    item.Time = item.STime.slice(11);
                    item.Date = item.STime.slice(0, 10);
                });
		      });
             
            });
	};
    
    liveScoresRes();
}]);


