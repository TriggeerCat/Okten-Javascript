// Task 1

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(5, "Charlie", "Brown", "charlie.brown@example.com", "+1334455667"),
    new User(2, "Jane", "Smith", "jane.smith@example.com", "+1987654321"),
    new User(3, "Alice", "Johnson", "alice.johnson@example.com", "+1122334455"),
    new User(4, "Bob", "Williams", "bob.williams@example.com", "+1223344556"),
    new User(1, "John", "Doe", "john.doe@example.com", "+1234567890"),
    new User(8, "Frank", "Moore", "frank.moore@example.com", "+1667788990"),
    new User(7, "Emma", "Wilson", "emma.wilson@example.com", "+1556677889"),
    new User(10, "Hank", "Anderson", "hank.anderson@example.com", "+1889900112"),
    new User(9, "Grace", "Taylor", "grace.taylor@example.com", "+1778899001"),
    new User(6, "David", "Miller", "david.miller@example.com", "+1445566778")
];

// Task 2

users = users.filter(user => user.id % 2 === 0)
console.log(users);

// Task 3

users.sort((user1, user2) => user1.id > user2.id ? 1 : -1)
console.log(users);

// Task 4

function Client(id, name, surname, email, phone, ...order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(5, "Charlie", "Brown", "charlie.brown@example.com", "+1334455667", "Monitor", "Keyboard", "Mouse"),
    new Client(2, "Jane", "Smith", "jane.smith@example.com", "+1987654321", "Tablet"),
    new Client(3, "Alice", "Johnson", "alice.johnson@example.com", "+1122334455", "Smartwatch", "Headphones"),
    new Client(4, "Bob", "Williams", "bob.williams@example.com", "+1223344556", "Gaming Console"),
    new Client(1, "John", "Doe", "john.doe@example.com", "+1234567890", "Laptop", "Smartphone"),
    new Client(8, "Frank", "Moore", "frank.moore@example.com", "+1667788990", "TV", "Soundbar"),
    new Client(7, "Emma", "Wilson", "emma.wilson@example.com", "+1556677889", "E-Book Reader", "Wireless Earbuds"),
    new Client(10, "Hank", "Anderson", "hank.anderson@example.com", "+1889900112", "Drone", "VR Headset"),
    new Client(9, "Grace", "Taylor", "grace.taylor@example.com", "+1778899001", "Smart Home Hub"),
    new Client(6, "David", "Miller", "david.miller@example.com", "+1445566778", "Camera")
];

// Task 5

clients.sort((user1, user2) => user1.order.length < user2.order.length ? 1 : -1)

console.log(clients)

// Task 6

function ConstructorCar(model, producer, productionYear, maxSpeed, fuelTankVolume) {
    this.model = model;
    this.producer = producer;
    this.productionYear = productionYear;
    this.maxSpeed = maxSpeed;
    this.fuelTankVolume = fuelTankVolume;

    function drive() {
        console.log(`Driving with ${maxSpeed} km per hour`);
    }

    function info() {
        console.log(`
        Model — ${model}
        Producer — ${producer}
        Production year — ${productionYear}
        Max speed — ${maxSpeed}
        Fuel tank volume — ${fuelTankVolume}
        `);
    }

    function increaseMaxSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    function changeYear(newYear) {
        this.year = newYear;
    }

    function addDriver(driver) {
        this.driver = driver;
    }
}

// Task 7

class ClassCar {
    constructor(model, producer, productionYear, maxSpeed, fuelTankVolume) {
        this.model = model;
        this.producer = producer;
        this.productionYear = productionYear;
        this.maxSpeed = maxSpeed;
        this.fuelTankVolume = fuelTankVolume;
    }

    drive() {
        console.log(`Driving with ${this.maxSpeed} km per hour`);
    }

    info() {
        console.log(`
        Model — ${this.model}
        Producer — ${this.producer}
        Production year — ${this.productionYear}
        Max speed — ${this.maxSpeed}
        Fuel tank volume — ${this.fuelTankVolume}
        `);
    }

    increaseMaxSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

// Task 8

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

const cinderellas = [
    new Cinderella("Ella", 19, 36),
    new Cinderella("Sophia", 21, 37),
    new Cinderella("Isabella", 22, 38),
    new Cinderella("Mia", 18, 35),
    new Cinderella("Amelia", 20, 39),
    new Cinderella("Olivia", 23, 37),
    new Cinderella("Emma", 19, 36),
    new Cinderella("Ava", 24, 40),
    new Cinderella("Lily", 22, 38),
    new Cinderella("Charlotte", 21, 37)
];

function Prince(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}

const prince = new Prince("William", 22, 35)

console.log(`The name of the cinderella who should be with prince ${prince.name} is ${(cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize)).name}!`);

// Task 9

const QAEngineerWalksIntoTheBar = [1, 0, 99999999999, "lizard", -1, "ueicbksjdhd", true, "First real customer wals into the bar and asks where the toilet is", "Bar:", "🔥"]

Array.prototype.forEach = function () {
    for (const x of this) {
        console.log(x);
    }
}

Array.prototype.filter = function () {
    return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
};

QAEngineerWalksIntoTheBar.forEach();
console.log(QAEngineerWalksIntoTheBar.filter());