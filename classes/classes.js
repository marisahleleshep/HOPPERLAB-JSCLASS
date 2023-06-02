class Person{

    constructor(name,age){
        this.name=name;
        this.age=age
    }
       
    greet(){
        console.log("Hello")
    } 
};
let person=new Person("Jane",50)
console.log(person)
person.greet()


class Student extends Person{
    constructor(name,age){
super(name,age)
    }
}
let student=new Student("Henry",45)
console.log({student});

Student.prototype.height="6Ft";
console.log(student.height);

class Sister extends Person{
    constructor(name,age){
        super(name,age);
        this.name=name;
        this.age=age;
        this.race="white"
    }
}
let sister=new Sister("Joan",23)
console.log({sister})



// The magical Baobab: in a small village there is a baobab tree believed to have 
 // magical properties. every season it bears different fruits, each with its own unique power. 
// you have decided to create a software system that track the changes in the tree and predict  
// what type of fruit it will bear next season and what it will bear next season and what powers 
// it will possess. The system should also record the effect of each fruit when consumed. 

class BaobabTree {
    constructor() {
        this.fruitSeasons = [];
    }

    addFruitSeason(season, fruitType, powers) {
        this.fruitSeasons.push({
            season: season,
            fruitType: fruitType,
            powers: powers
        });
    }


    
    predictNextFruit() {
        const currentSeason = this.fruitSeasons.length;
        if (currentSeason === 0) {
            return "No previous fruit seasons recorded";
        } else {
            const previousSeason = this.fruitSeasons[currentSeason - 1];
            return `Next season, the baobab tree will bear ${previousSeason.fruitType} fruit with powers: ${previousSeason.powers}`;
        }
    }

    recordFruitEffect(fruitType, effect) {
        const currentSeason = this.fruitSeasons.length;
        if (currentSeason === 0) {
            console.log("No fruit seasons recorded yet");
        } else {
            const previousSeason = this.fruitSeasons[currentSeason - 1];
            if (previousSeason.fruitType === fruitType) {
                console.log(`Effect of consuming ${fruitType} fruit: ${effect}`);
            } else {
                console.log(`${fruitType} fruit is not available in the previous season`);
            }
        }
    }

}
const fruits= new BaobabTree("rainy","mango","grow")
fruits.addFruitSeason


// # The ever changing Ankara: you are a fashion designer known for the unique and vibrant 
// # Ankara designs, recently you have discovered that the fabric patterns change there design 
// # depending on the temperature and the mood of the wearer. you want to create a software application 
// # that predicts the changes in the vibrant designs given the mood and temperature data. think about 
// # Python classes you will need to model the changes of Ankara and predict the changes 

class Ankara {
  constructor(temp, mood) {
    this.temp = temp;
    this.mood = mood;
  }

  predictDesign() {
    if (this.temp >= 20 && this.mood === "happy") {
      console.log("wear less pattern");
    } else {
      console.log("wear more");
    }
  }
}

const ankara = new Ankara(20, "cotton");
ankara.predictDesign();


//  The great migration Forecast: every year, million of wildebeest, zebras, 
//  and other animals participates in the great migration across the serengeti-mara ecosystem. 
//  As a conversionist, you want to develop a sofware system that models this migration predicting 
//  the movement of the heards based on the weather patterns, river levels and predator locations. 
//  consider what classes you will need to and represent the animals, the animals the environment 
//  and the various factors that influence the migration

class Migration {
    constructor(weatherPattern, riverLevels) {
        this.weatherPattern = weatherPattern;
        this.riverLevels = riverLevels;
    }

    migration() {
        if (this.weatherPattern === "dry" && this.riverLevels === "low") {
            console.log("weather is high");
        } else {
            console.log("weather is low");
        }
    }
}

const migrationInstance = new Migration("dry", "low");
migrationInstance.migration();
