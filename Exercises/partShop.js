/*
 You are creating an auto shop program. This program has several parts to build a vehicle. You will be able to set the currency, get the total price of the vehicle (sum of price cost), and calculate how long the vehicle can move, and how much it will cost for an amount of fuel.

 1. Create a `Part` constructor.
 Part will have a `setPrice` and `getPrice` methods.
 ** It will have a price property that can be accessed from outside the class (public property)
 The `getPrice` method will accept a currency object and return a calculated price based on the currency value. (price * currency.value).

 2. Create an `NitroEngine` constructor.
 It will have a `Part` prototype, and a price of 1000.
 ** It will have a -public- property of speed=140.
 ** It will have a –public- property of fuelType=FUEL_TYPES.Nitro.

 3. Create an `JetEngine` constructor.
 It will have a `Part` prototype, and a price of 2000.
 ** It will have a -public- property of speed=180.
 ** It will have a -public- property of fuelType=FUEL_TYPES.Jet.

 4. Create a `Wheel` constructor
 It will have a `Part` prototype, and a price of 200.

 4. Create a `FuelTank` constructor
 It will accept fuelType object, and amount in the constructor.
 It will have a `Part` prototype, it's price will be calculated when initiated (fuelType.price * amount).

 5. Create a `Vehicle` constructor.
 I will accept currency object, and parts array in the constructor.
 Its price will be calculated from the sum of the price of its parts.
 It will have a move method, which will accept fuel amount (integet).
 ** - The move method will print the moved distance (-engine.speed- * fuelAmount)
 - If the vehicle has an Engine, it will print the price of the fuel tank in the vehicle's currency.
 - If the vehicle has no Engine, it will print `Vehicle has no engine!`
 */

//-----------------------------------
// Your code here
//-----------------------------------

function Part(part) {

    var _part = part || "";
    this._price = 0;

    function setPrice(price) {
        this._price = price;
    }

    function getPrice(_currency) {
        this._price = _currency.value * this._price;
        return this._price;
    }

    this.getPrice = getPrice;
    this.setPrice = setPrice;
}

function NitroEngine() {
    this.speed = 140;
    this.fuelType = FUEL_TYPES.Nitro.price;

    this.setPrice(1000);
}
NitroEngine.prototype = new Part("NitroEngine");
NitroEngine.prototype.constructor = NitroEngine;

function JetEngine() {
    this.speed = 180;
    this.fuelType = FUEL_TYPES.Jet.price;

    this.setPrice(2000);
}
JetEngine.prototype = new Part("JetEngine");
JetEngine.prototype.constructor = JetEngine;

function Wheel() {

    this.setPrice(200);
}
Wheel.prototype = new Part("Wheel");
Wheel.prototype.constructor = Wheel;

function FuelTank(_fuelType, _amount) {
    this.fuelType = _fuelType;
    this.amount = _amount;

    this.setPrice(_fuelType.price * _amount);
}
FuelTank.prototype = new Part("FuelTank");
FuelTank.prototype.constructor = FuelTank;

function Vehicle(currency, _parts) {
    var sum = 0;
    var engine = "";
    var index = 0;

    for (var i = 0; i < _parts.length; i++) {
        sum += _parts[i].getPrice(currency);

        if (_parts[i] instanceof NitroEngine) {
            engine = "Nitro";
            index = i;
        }

        if (_parts[i] instanceof JetEngine) {
            engine = "Jet";
            index = i;
        }

    }
    console.log(sum);

    function getPrice() {
        this.getPrice = getPrice;

        return sum;
    }

    function move(fuelAmount) {

        console.log("Moved distance: " + _parts[index].speed * fuelAmount);
        switch (engine) {
            case "Nitro":
                //var tank = new FuelTank(FUEL_TYPES[this.engine], fuelAmount);
                console.log(_parts[index].getPrice(currency) * fuelAmount);
                break;
            case "Jet":
                //  var tank = new FuelTank(FUEL_TYPES[this.engine], fuelAmount);
                //  console.log(currency * FUEL_TYPES['Jet'].price * fuelAmount);
                console.log(_parts[index].getPrice(currency) * fuelAmount);
                break;
            default:
                console.log("Vehicle has no engine");
        }
        this.move = move;

    }
}

var FUEL_TYPES = {
    Jet: {
        price: 5
    },
    Nitro: {
        price: 3
    }
};

var Currency = {
    Dollar: {
        value: 1,
        sign: "$"
    },
    Euro: {
        value: 1.2,
        sign: "€"
    },
    NIS: {
        value: 3.8,
        sign: "₪"
    }
};

//-----------------------------------
// Your code should pass these tests
//-----------------------------------

var raceCar = new Vehicle(Currency.NIS, [
    new NitroEngine(),
    new Wheel(),
    new Wheel(),
    new Wheel(),
    new Wheel()
]);

console.log("Racecar:");
console.log("price", raceCar.getPrice()); // 6840₪;
console.log(raceCar.move(10)); // Moves 1400, Costs 114₪;

var airPlane = new Vehicle(Currency.Dollar, [
    new JetEngine()
]);

console.log("Airplane:");
console.log("price", airPlane.getPrice()); // 2000$;
console.log(airPlane.move(10)); // Moves 1800, Costs 50$;

var brick = new Vehicle(Currency.Euro, [
    new Wheel(),
    new Wheel(),
    new Wheel(),
    new Wheel()
]);

console.log("Brick:");
console.log("price", brick.getPrice()); // 960€;
console.log(brick.move(10)); // Moves 0, Vehicle has no engine!;




