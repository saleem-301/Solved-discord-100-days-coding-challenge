//Question 34:

let pizzas = ['\ntikka','fajita','peproni','malai boti','vegitable'];

for (let pizza of  pizzas){
    console.log(pizza.toUpperCase());
    console.log(`I Like ${pizza.toUpperCase()} Flavour Pizza \n` );
}
console.log(`I like all kinds of pizzas flavour and love to eat and \
try different flavors every day . The most i like in pizzas is cheese\
and different yummy sauces.Even I am thinking to open a pizza business\
with name "Pizza's craze"\n "I REALLY LOVE PIZZA"` );


//Question 35:

let pets  = ['cat', 'dog','parrot'];
for (let pet of pets){
    console.log('\n',pet);
    console.log('A '+ pet+' make a great pet ')
}
console.log(pets[0]+','+pets[1]+','+' and ' +pets[2] + ' the all are adorable pets')

//Question 35:

// let pets  = ['cat', 'dog','parrot'];
for (let pet of pets){
    console.log(pet);
    console.log('A '+pet+' make a great pet ')
}
console.log(pets[0]+','+pets[1]+','+' and ' +pets[2] + ' the all are adorable pets')


//Question 36:
function make_shirt(size,msg:string){
console.log(`\nYour T shirt is Ready\n
--------------\n"size"\n--------------\n ${size}\n
you can also see your message on it\n
--------------\n your message\n--------------\n
${msg}`)
}


