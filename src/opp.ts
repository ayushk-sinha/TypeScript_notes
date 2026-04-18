class phone{
    Brand: string;
    ID: number;

    constructor(Brand:string,ID:number){
        this.Brand = Brand;
        this.ID =ID
    }
}

const samsungPhone = new phone("Samsung",23)
samsungPhone.Brand = "Samsung Galaxy"
samsungPhone.ID = 24

class computer {
    public laptop:string = "hp"
    private desktop:string = "mac mini"
    reveal(){
        this.desktop
    }
    protected mobPhone:string = "Samsung"
}
const computerType = new computer();

computerType.laptop
computerType.reveal()

class protectePhone extends computer {
    getPhone(){
        return this.mobPhone
    }
}

const p = new protectePhone()
p.getPhone

class smartPhone {
    private _android = "phone"

    get android(){
        return this._android
    }
    set android(input:string){
        this._android = input
    }
}

const p1 = new smartPhone()
p1.android = "Samsug"
console.log(p1.android);

class iPhone {
    static name = "Iphone";
    private _camera = 12;
    get getCam(){
        return this._camera
    }
    set setCam(input:number){
        this._camera = input
    }
}
console.log(iPhone.name);
const ios = new iPhone()
ios.getCam
ios.setCam = 23

abstract class phoneBook {
    abstract read():void
}

class readbook extends phoneBook{
    read(): void {
        console.log("reading book");
    }
}