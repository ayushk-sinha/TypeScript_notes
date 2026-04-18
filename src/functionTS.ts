function makingChai (type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type} chai`);
}
makingChai("masala", 5)

function getChaiPrice():number{
    return 25
}

function chaiLog():void{
    console.log(`chai is ready`)
}

function complexChai(
    type: string,
    cupSize: number,
    noOfCUps: number,
    price: number,
    ingredients: string[],
):number{
    if(cupSize > 10){
        return cupSize+1;
    }else if(noOfCUps > 10){
        return noOfCUps;
    }
    return price;
}