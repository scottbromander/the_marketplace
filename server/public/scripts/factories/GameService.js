myApp.factory('GameService', ['$interval', function($interval){
  let game = new Game(GAME_ITEMS);

  let clock = $interval( () => {
    game.updateMarkets();
  }, TIMER_INTERVAL);

  let gameClock = $interval( () => {
    game.enabled = false;
  }, GAME_TIME);

  return {
    game : game
  };
}]);
