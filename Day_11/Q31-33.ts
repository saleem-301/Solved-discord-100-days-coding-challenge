
//Question 31

let userName = ['kamran','saleem','admin','mehmood' ];

console.log('length of username was = ',userName.length);

userName = [];
console.log('length of username is = ',userName.length)

if (userName.length === 0){console.log('we need to find some user')}
else {};



//Question 32:

let New_user = ['saleem','Kamran','hammad','Ahmed','Sobhan']
let Curr_user = ['KAMRAN','Mehmood','Rehab','ahmed','Noman']


for (let nu of New_user){
    
    console.log('\nchecking user name ', nu);

    for (let cu of Curr_user)
    {
       
        if (cu.toLowerCase() === nu.toLowerCase())

        {
            console.log(`${cu} will need to enter a new username`);
            nu = " "
            
            break;
        }
        
        else{
            
        }
    }
   if(nu === " "){

   }
   else {console.log(`${nu} user is available`)
    }
    
}
//Question 33:

let K = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let e of K){
    if (e === 1){
        console.log(e+'st');
    }
    else if ( e === 2){
        console.log(e+'nd');
    }
    else if ( e === 3){
        console.log(e+'rd');
    }
    else{
        console.log(e + 'th')
    }
    
}