function parse(csv){

    return csv

        .trim()

        .split("\n")

        .slice(1)

        .map(line=>{

            const [

                time,

                speed,

                height

            ]=line.split(",");

            return{

                time:Number(time),

                speed:Number(speed),

                height:Number(height)

            };

        });

}

module.exports={

    parse

};
