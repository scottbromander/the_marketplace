class Game {
  constructor(items){
    this.player = new Player(items);
    console.log(this.player);
    this.market = [];
    this.createMarkets(items);
  }

  createMarkets(items){
    for(let item of items){
      this.market.push(this.createMarket(item));
    }
  }

  createMarket(item){
    let marketItem;
    let { name, type } = item;

    switch(type){
      case 'MarketItem':
        marketItem = new MarketItem(name);
        break;
      case 'FruitItem':
        marketItem = new FruitItem(name);
        break;
      case 'ElectronicItem':
        marketItem = new ElectronicItem(name);
        break;
      case 'CollectableItem':
        marketItem = new CollectableItem(name);
        break;
    }

    return marketItem;
  }

  updateMarkets(){
    for(let market of this.market){
      market.changePrice();
    }
  }

  addInventory(item){
    this.player.addInventory(item);
  }

  sellInventory(item){
    this.player.sellInventory(item);
  }
}
