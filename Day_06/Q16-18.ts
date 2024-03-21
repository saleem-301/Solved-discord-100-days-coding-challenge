//Question 16:
let guest = ['HAMAD','AHMED','SUBHAN'];
console.log('\nList of Invited People \n\t',guest,'\n');

for (let b = 0; b<guest.length; b++) 
{
    console.log('Dear '+guest[b].toUpperCase()+' You are invited at dinner yesterday')
}

console.log("\nANNOUNCEMENT\n",guest[1],"Couldn't come for dinner today\n");

guest.splice(1,1,'Jahanzeb');
console.log('List of Invited People \n\t',guest,'\n');

//Using for Loop 
for (let b = 0; b<guest.length; b++) 
{
    console.log('Dear '+guest[b].toUpperCase()+' You are invited at dinner yesterday')
}

console.log("\nwe have arrange a bigger table for today's dinner\n");

guest.unshift('Yasmeen');
guest.splice(2,0,'Aiman');


for (let b = 0; b<guest.length; b++) 
{
    console.log('Dear '+guest[b].toUpperCase()+' You are invited at dinner yesterday')
}


//Question 17:
// var guest = ['HAMAD','AHMED','SUBHAN'];
console.log('\nList of Invited People \n\t',guest,'\n');

for (let b = 0; b<guest.length; b++) 
{
    console.log('Dear '+guest[b].toUpperCase()+' You are invited at dinner yesterday')
}

console.log("\nANNOUNCEMENT\n",guest[1],"Couldn't come for dinner today\n");

guest.splice(1,1,'Jahanzeb');
console.log('List of Invited People \n\t',guest,'\n');

//Using for Loop 
for (let b = 0; b<guest.length; b++) 
{
    console.log('Dear '+guest[b].toUpperCase()+' You are invited at dinner yesterday')
}

console.log("\nwe have arrange a bigger table for today's dinner\n");

guest.unshift('Yasmeen');
guest.splice(2,0,'Aiman');


for (let b = 0; b<guest.length; b++) 
{
    console.log('Dear '+guest[b].toUpperCase()+' You are invited at dinner yesterday')
}
console.log('\n',guest);
console.log("ANNOUNCEMENT\n\t It is sorry to say that we couldn't \
arranged a bigger table, Now only two people can be invited.\n");


for (var i = guest.length; i>2; i--)
{
    let p = guest.pop();
    console.log(`Sorry Dear ${p} for not inviting you`)
    
}

console.log('\n',guest,'\n');
for (var i=0 ; i<guest.length; i++)
{
    console.log(`Dear ${guest[i]} you are still invited for dinner    `)
    
}

guest.shift();
guest.shift();
console.log('\nGUEST = ',guest,'\n');



//Question 18:

let favrPlace = ['maldives', 'aifil tower', 'china wall', 'burj khalifa', 'hawaii']
let sortedPlace = [favrPlace[0]];;

for (let i = 1 ; i<favrPlace.length; i++){
    sortedPlace.push(favrPlace[i])
    
}
console.log('\nfavrPlace = ',favrPlace,'\n');
console.log('\nsortedPlace = ',sortedPlace.sort(),'\n');
console.log('\nfavrPlace = ',favrPlace,'\n');

console.log('\nreverse sort = ',sortedPlace.reverse(),'\n');
console.log('\nfavrPlace = ',favrPlace,'\n');
console.log('\nfavrPlace = ',favrPlace.reverse(),'\n');
console.log('\nfavrPlace = ',favrPlace.reverse(),'\n');
