class Electric {
    constructor (name){
    this.name = name;
    this.tipe= 'electric';
    }

    getPower(condition){
      if (this.condition == 'on')
        {
          return this.name + ' power is '+ this.power + 'w';
        }
      else
        {
          return this.name + ' switched off';
        }
        
    }
  
}

class OnTable extends Electric{
    constructor(name,type,power){
        super(name);
        this.connectionType = type;
        this.power=power;
        this.condition = 'off';
    }
    getPower(condition){
        this.condition = condition;
        return super.getPower(condition);    
    }
}

class OnFloor extends Electric{
    constructor(name,weight,power){
        super(name);
        this.weight = weight;
        this.power= power;
        this.condition = 'off';
    }
   getPower(condition){
        this.condition = condition;
        return super.getPower(condition);    
    }
}

const earphone = new OnTable ('earphone','bluetooth',100);
const vacuum = new OnFloor('vacuum',5,220);


console.log(earphone.getPower('off'));
console.log(earphone);
console.log(vacuum.getPower('on'));
console.log(vacuum);