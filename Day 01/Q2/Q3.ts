//QUESTION 3:
function titlecase (nam)
{ 

let title = ""
for (let i = 0; i<= nam.length; i++)
    { 
        let k = nam.charAt(i); 
        
        if (i == 0) 
        {
           title = title.concat(k.toUpperCase())
        }
        else if (nam.charAt(i-1)==" ")
        {
            title = title.concat(k.toUpperCase())
        }
        else {
            title = title.concat(k.toLowerCase())
            }
                  
        
    }
    console.log(`In Upper Case: ${nam.toUpperCase()} `);
    console.log(`In Lower Case: ${nam.toLowerCase()}`);
    console.log(`In Title Case : ${title}`);
}

titlecase('sir zia khan');