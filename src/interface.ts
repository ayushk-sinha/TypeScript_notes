type orderType = {
    type: string;
    sugar: number; 
    strong: boolean;
}

function makeChai(order : orderType){
    console.log("order preparing");
}

function serveChai(order : orderType){
    console.log("order served");
}

type chaiRec = {
    water: number;
    milk: number;
}

class cuttingChai implements chaiRec{
    water = 100;
    milk = 50;
}

interface cupSize {
    size: "large" | "small"
}

class chaiOrder implements cupSize{
    size : "large" | "small" = "large";
}

interface response {
    ok: true | false
}
class myRes implements response {
    ok: boolean = true;
}

type teaType = "masala" | "ginger" | "cutting"

function chaiTea(t:teaType){
    console.log(`this is ${t}`);
    
}
chaiTea("masala")

type BaseChai = {teaLeaves : number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup : MasalaChai = {
    teaLeaves : 10,
    masala : 10
}

type userIn = {
    username: string,
    bio?: string
}

const user1:userIn =  {
    username: "Ayush",
    bio: "I am just a prgrammer for fun"

}
const user2:userIn =  {
    username: "Ayush2"
}

console.log(user1);
console.log(user2);

type cofing = {
    readonly appName: string,
    version: number
}

const cfg: cofing = {
    appName:"masterji",
    version: 1
}

//cfg.appName = "newname" not possible

cfg.version = 2