// Code your solutions in this file
function writeCards(names, eventName){
    const array = []
    for (let c = 0; c < names.length; c++){
        array.push(`Thank you, ${names[c]}, for the wonderful ${eventName} gift!`);
    }
    return array
}
function countDown(){
    let f = 10
    while (f >= 0){
        console.log(f)
        f--;
    }
}