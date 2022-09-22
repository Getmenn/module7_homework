function Electric (name){
    this.name = name,
    this.tipe= 'electric';
}

Electric.prototype.getPower = function(condition){
   if (condition == 'on')
    {          
      console.log(`${this.name} power is ${this.power}w`);
      this.condition = 'on';
    }
  else
    {
      console.log(this.name + ' switched off');
    }
}

function OnTable(name,type,power){
    this.name = name,
    this.power= power,
    this.condition = 'off',
    this.connectionType = type
}

function OnFloor(name,weight,power){
    this.name = name,
    this.weight = weight,
    this.power= power,
    this.condition = 'off'
}

OnTable.prototype = new Electric ();
OnFloor.prototype = new Electric ();

const earphone = new OnTable ('earphone','bluetooth',100);
const vacuum =new OnFloor('vacuum',5,220);


earphone.getPower('on');
console.log(earphone);
vacuum.getPower('off');
console.log(vacuum);