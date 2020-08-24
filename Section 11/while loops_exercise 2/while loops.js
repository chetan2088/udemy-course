console.log("Printing All Numbers Between -10 and 19");
var counter = -10;
while(counter < 20){
    console.log(counter);
    counter++;
}
console.log("Printing All Even Numbers Between 10 and 40");
var counter = 10;
while(counter <= 40){
    // console.log(counter);
    // counter+2;
    if(counter % 2 === 0){
        console.log(counter);
    }
    counter+=1;
}
console.log("Printing All Odd Numbers Between 10 and 40");
var counter = 300;
while(counter <= 330){
    if(counter % 2 !== 0){
    console.log(counter);
    }
    counter++;
}
console.log("Printing All Numbers Divisible By 5 and 3 Between 5 and 50");
var counter = 5;
while(counter <= 50){
    if(counter % 5 === 0 && counter % 3 === 0){
    console.log(counter);
    }
    counter++;
}
