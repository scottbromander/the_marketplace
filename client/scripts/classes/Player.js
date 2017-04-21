class Player{
  constructor(items){
    this.inventory = {};
    this.cash = PLAYER_STARTING_CASH;
    this.createInventory(items);
  }

  createInventory(items){
    for(let item of items){
      this.inventory['inv' + item.name] = [];
    }
  }

  addInventory(item){
    let name = item.name;
    let playerInv = this.inventory['inv' + name];

    if(this.cash >= item.price){
      this.cash -= item.price;
      playerInv.push(item.price);
      this.averageInventory(playerInv);
    }
  }

  sellInventory(item){
    let name = item.name;
    let playerInv = this.inventory['inv' + name];
    if(playerInv.length > 0){
      playerInv.pop();
      this.cash += item.price;
    }
  }

  averageInventory(array){
    let sum = 0;
    for(let item of array){
      sum += item;
    }
    let average = sum / array.length;
    for(let i = 0; i < array.length; i++){
      array[i] = parseFloat(average.toFixed(2));
    }
  }
}
