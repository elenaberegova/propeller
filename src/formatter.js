function format(stats){

return`

Flight Statistics

Flights        : ${stats.flights}

Maximum Speed  : ${stats.maxSpeed} m/s

Maximum Height : ${stats.maxHeight} m

Average Speed  : ${stats.averageSpeed} m/s

Air Time       : ${stats.airTime} sec

`;

}

module.exports={

    format

};
