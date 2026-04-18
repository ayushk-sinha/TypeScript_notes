let subs: number | string = `1M`

let apiRequestStatus : `pending` | `sucess` | `erroe` = `pending`

apiRequestStatus = `pending`

let airLineSeat : `aisle` | `window` | `middle` = `aisle`

airLineSeat = `aisle`

console.log(airLineSeat);

const orderList = ['1','2','4','8']

let currentOrder: string | undefined;

for (let order of orderList) {
    if(order === '8'){
        currentOrder = order
        break
    }
    
}
console.log(currentOrder);
