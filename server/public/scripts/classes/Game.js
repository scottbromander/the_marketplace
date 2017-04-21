class Game {
  constructor(items){
    this.player = new Player(items);
    this.market = [];
    this.createMarkets(items);
    this.enabled = true;
  }

  createMarkets(items){
    for(let item of items){
      this.market.push(this.createMarket(item));
    }
  }

  createMarket(item){
    let marketItem;
    let { name, type } = item; //Object descructing

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
    if(this.enabled){
      for(let market of this.market){
        market.changePrice();
      }
    }
  }

  addInventory(item){
    if(this.enabled){
      this.player.addInventory(item);
    }
  }

  sellInventory(item){
    if(this.enabled){
      this.player.sellInventory(item);
    }
  }
}
