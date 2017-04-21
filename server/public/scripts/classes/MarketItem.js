class MarketItem {

  constructor(name, price = ITEM_STARTING_COST, swing = ITEM_PRICE_SWING){
    this.name = name;
    this.price = price;
    this.swing = swing;
  }

  changePrice(){
    let swing = Utilities.randomNumber(0, this.swing);

    //POSITIVE OR NEGATIVE ADJUSTMENT? 1 = Negative adjustment
    let adjust = Utilities.randomNumber(1,2);
    if(adjust === 1){
      swing = -swing;
    }

    swing = swing/100; //Covert Dollars to Cents
    this.price += swing;
    if(this.price < LOWEST_PRICE){
      this.price = LOWEST_PRICE;
    } else if (this.price > HIGHEST_PRICE){
      this.price = HIGHEST_PRICE;
    }

    return this.price;
  }
}

class FruitItem extends MarketItem {
  constructor(name, price, swing){
    super(name, price, swing);
  }
}

class ElectronicItem extends MarketItem {
  constructor(name, price, swing){
    super(name, price, swing);
  }
}

class CollectableItem extends MarketItem {
  constructor(name, price, swing){
    super(name, price, swing);
  }
}
