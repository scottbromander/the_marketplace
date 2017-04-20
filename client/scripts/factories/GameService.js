myApp.factory('GameService', ['$interval', function($interval){
  let game = new Game(items);

  let clock = $interval( () => {
    game.updateMarkets();
  }, TIMER_INTERVAL);

  return {
    game : game
  };
}]);
