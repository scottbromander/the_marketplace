myApp.controller('GameController', ['$scope', 'GameService', function($scope,GameService){
    var gameController = this;
    $scope.gameInstance = GameService.game;

    $scope.clickItem = (index) => {
      var item = $scope.gameInstance.market[index];
      GameService.game.addInventory(item);
    };

    $scope.sellItem = (index) => {
      var item = $scope.gameInstance.market[index];
      GameService.game.sellInventory(item);
    };
}]);
