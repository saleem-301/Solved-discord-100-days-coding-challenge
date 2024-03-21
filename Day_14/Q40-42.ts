
//Question 40:

function make_album(a:string,b:string ,c:string ='')
{
    let musicAlbum = {'Artist Name':a, 'Album Name':b, 'No of Tracks':c}
    // musicAlbum['Aritist Name'] = a;
    console.log(musicAlbum);
}

make_album('atif','Doori');
make_album('Ali Zafar','Huqa Pani','11');
make_album('Rahat Fateh Ali Khan','Charkha"','8');



//Question 41:
let magicians = ['aladin','samri','goga']

function show_magicians(){
    for (let magic of magicians){
        console.log(magic);
        
    }
    console.log(magicians);

}

show_magicians()

//Question 42:
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
    for (let i=0; i < magicians.length; i++){
        
        // console.log(magicians[i],magicians.length)
         magicians[i] = 'The Great Magician '.concat(magicians[i]);
       
          }
          console.log(magicians);
}
make_great()