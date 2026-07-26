const fs=require("fs");

function save(

    text,

    file

){

    fs.writeFileSync(

        file,

        text

    );

}

module.exports={

    save

};
