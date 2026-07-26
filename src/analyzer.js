const{

    average

}=require("../lib/helpers");

function analyze(records){

    return{

        flights:1,

        maxSpeed:Math.max(

            ...records.map(

                r=>r.speed

            )

        ),

        maxHeight:Math.max(

            ...records.map(

                r=>r.height

            )

        ),

        averageSpeed:average(

            records.map(

                r=>r.speed

            )

        ).toFixed(2),

        airTime:

            records.at(-1).time-

            records[0].time

    };

}

module.exports={

    analyze

};
