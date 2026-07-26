const{

    read

}=require("./src/csvReader");

const{

    parse

}=require("./src/parser");

const{

    analyze

}=require("./src/analyzer");

const{

    format

}=require("./src/formatter");

const{

    save

}=require("./src/report");

const csv=read(

    "./data/sample-flight.csv"

);

const records=parse(

    csv

);

const stats=analyze(

    records

);

const report=format(

    stats

);

console.log(

    report

);

save(

    report,

    "./output/report.txt"

);
