const fs = require('node:fs');

fs.writeFile("hamdan.txt", "Papa great hain", function(err){
    if(err){
        console.log(err);
    }else console.log("ho gaya");
})