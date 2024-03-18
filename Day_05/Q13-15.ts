//Question 13:
console.log('\n');
let transport = ['Motorcycle', ' Car', 'Truck', 'Bicycle'];
console.log("I would like to own suzuki ",transport[0]);
console.log("My favourit",transport[1], "is Fortuner");
console.log('My Friend is Driving Mazda',transport[2]);
console.log('i gifted my son',transport[3],'on his birthday');

//Question 14:
let guest = ['HAMAD','AHMED','SUBHAN'];
console.log ('Dear '+guest[0]+' You are invited at dinner yesterday');
console.log('Dear '+guest[1]+' You are invited at dinner yesterday');
console.log('Dear '+guest[2]+' You are invited at dinner yesterday');



//Question 15:
// let guest = ['HAMAD','AHMED','SUBHAN'];
console.log('\nList of Invited People \n\t',guest);

console.log('\nDear '+guest[0]+' You are invited at dinner yesterday');
console.log('Dear '+guest[1]+' You are invited at dinner yesterday');
console.log('Dear '+guest[2]+' You are invited at dinner yesterday');

console.log("\n",guest[1],"Couldn't come for dinner today\n");

guest.splice(1,1,'Jahanzeb');
console.log('List of Invited People \n\t',guest);

console.log('Dear '+guest[0]+' You are invited at dinner yesterday');
console.log('Dear '+guest[1]+' You are invited at dinner yesterday');
console.log('Dear '+guest[2]+' You are invited at dinner yesterday');