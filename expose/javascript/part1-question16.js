let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for(let prop in statistics){
    const propVal = statistics[prop];

    

    const isOddNumber = (propVal % 2 == 1);
    const startsWithR = prop.startsWith('r');

    if(isOddNumber || startsWithR){
        console.log(propVal);
    }
}