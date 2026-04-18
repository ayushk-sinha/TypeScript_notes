class phone {
    Brand;
    ID;
    constructor(Brand, ID) {
        this.Brand = Brand;
        this.ID = ID;
    }
}
const samsungPhone = new phone("Samsung", 23);
samsungPhone.Brand = "Samsung Galaxy";
samsungPhone.ID = 24;
class computer {
    laptop = "hp";
    desktop = "mac mini";
    reveal() {
        this.desktop;
    }
    mobPhone = "Samsung";
}
const computerType = new computer();
computerType.laptop;
computerType.reveal();
class protectePhone extends computer {
    getPhone() {
        return this.mobPhone;
    }
}
const p = new protectePhone();
p.getPhone;
class smartPhone {
    _android = "phone";
    get android() {
        return this._android;
    }
    set android(input) {
        this._android = input;
    }
}
const p1 = new smartPhone();
p1.android = "Samsug";
console.log(p1.android);
class iPhone {
    static name = "Iphone";
    _camera = 12;
    get getCam() {
        return this._camera;
    }
    set setCam(input) {
        this._camera = input;
    }
}
console.log(iPhone.name);
const ios = new iPhone();
ios.getCam;
ios.setCam = 23;
class phoneBook {
}
class readbook extends phoneBook {
    read() {
        console.log("reading book");
    }
}
export {};
//# sourceMappingURL=opp.js.map