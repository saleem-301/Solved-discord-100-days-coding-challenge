//Question 43:

let magicians = ['aladin','samri','goga']

function show_magicians(){
    for (let magic of magicians){
        console.log(magic);
        
    }
    console.log(magicians);

}

show_magicians()


function make_great()
{
    let new_magicians=[''];
    for (let i=0; i < magicians.length; i++){
        
         new_magicians[i] = 'The Great Magician '.concat(magicians[i]);
         console.log(new_magicians)
        
          }
          console.log(magicians);
}
make_great()
show_magicians()

//Question 44:

function makeSandwich(...items){
    let sandwichItems = [''];
    for (let i =0; i<items.length;i++){
        sandwichItems[i] = items[i]
    
}
console.log(`"Your Sandwich is ready with following ingredients"\n\
[${sandwichItems}]`)
// console.log(sandwichItems)

}

makeSandwich('Butter','Chicken','Mayo');
makeSandwich('Tomato Ketchup','Beef','Mushrooms');
makeSandwich('Cheese','chicken','Mayo','Vegitables');


//Question 45:
let myCar = (X, Y ,...items)=>{
    const car = {};
    car['Manufacturer'] = X;
    car['Model'] = Y;
    car[items[0]]=items[1];
    car[items[2]]=items[3];
    console.log(car);
    return;
};
myCar ("Toyota", "Corola Gli","Color","Green","Milage","120")