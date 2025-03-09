// Task 1
{
    const QAEngineerWalksIntoTheBar = [1, 0, 99999999999, "lizard", -1, "ueicbksjdhd", true, "First real customer wals into the bar and asks where the toilet is", "Bar:", "🔥"]
    console.log(QAEngineerWalksIntoTheBar);
}

console.log(" ");

// Task 2
{
    let book1 = {
        title: "Silver Eyes",
        pageCount: 300,
        genre: "Horror"
    };

    let book2 = {
        title: 1984,
        pageCount: 400,
        genre: "dystopia"
    }

    let book3 = {
        title: "Unmatched Core Rules",
        pageCount: 16,
        genre: "game rules"
    }

    console.log(book1, book2, book3);
}

console.log(" ");

// Task 3
{
    let book1 = {
        title: "Silver Eyes",
        pageCount: 300,
        genre: "Horror",
        authors: ["Scott Cawthon, Kira Breed-Wrisley"]
    };

    let book2 = {
        title: 1984,
        pageCount: 400,
        genre: "dystopia",
        authors: ["George Orwell"]
    }

    let book3 = {
        title: "Unmatched Core Rules",
        pageCount: 16,
        genre: "game rules",
        authors: ["Julia Angotti", "Ashleigh Edwards", "Chad Edwards", "Jason Hager", "Alfie Harris", "Frank Klensch", "John Leveille", "Zack Lovaas", "Jacob Marks", "Gary McCarthy", "Peter Osterweil", "Ethan Ottoy", "Taylor Pochetti", "Ben Stapleton", "Joshua Tan Jer Yi", "Michael Topjian", "Jason Viddal"]
    }

    console.log(book1, book2, book3);
}

console.log(" ");

// Task 4 (filled by ChadGPT)
{
    let users = [
        {name: "Alice Johnson", username: "alicej", password: "pass123"},
        {name: "Bob Smith", username: "bobsmith", password: "secure456"},
        {name: "Charlie Brown", username: "charlieb", password: "hello789"},
        {name: "David Wilson", username: "davidw", password: "test321"},
        {name: "Emma Davis", username: "emmad", password: "qwerty654"},
        {name: "Frank Miller", username: "frankm", password: "sunshine987"},
        {name: "Grace Lee", username: "gracel", password: "moonlight234"},
        {name: "Henry White", username: "henryw", password: "starlight567"},
        {name: "Ivy Scott", username: "ivys", password: "rainbow890"},
        {name: "Jack Taylor", username: "jackt", password: "cloudy123"}
    ];

    console.log(users);
}

console.log(" ");

// Task 5 (filled by ChadGPT)
{
    const week = [
        [12, 18, 14], // Monday
        [11, 20, 15], // Tuesday
        [10, 19, 13], // Wednesday
        [9, 17, 12],  // Thursday
        [8, 16, 11],  // Friday
        [7, 15, 10],  // Saturday
        [6, 14, 9]    // Sunday
    ];

    console.log(week[5][2]);
}

console.log(" ");

// Task 6
{
    let x = 1; //parseInt(prompt("Enter x"));
    if (x !== 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

console.log(" ");

// Task 7
{
    let computer = {
        blow: false
    }
    let time = 12; //parseInt(prompt("Enter time"));
    if (time < 0) {
        computer.blow = true;
    } else if (time < 15) {
        console.log("The time is in first quarter")
    } else if (time < 30) {
        console.log("The time is in second quarter")
    } else if (time < 45) {
        console.log("The time is in third quarter")
    } else if (time < 60) {
        console.log("The time is in fourth quarter")
    } else {
        computer.blow = true;
    }
}

console.log(" ");

// Task 8
{
    let day = 31; //parseInt(prompt("Enter day"));
    day = ~~((day - 0.1) / 10) + 1;
    switch (day) {
        case 1:
            console.log("The day is in the first decade");
            break;
        case 2:
            console.log("The day is in the second decade");
            break;
        case 3:
            console.log("The day is in the third decade");
            break;
        default:
            console.log("31 day actually is start of the fourth decade, cuz decade of the month is 10 days")
    }
}

console.log(" ");

// Task 9 (filled by ChadGPT)
{
    let day = "Monday"; //parseInt(prompt("Enter day"));
    switch (day.toLowerCase()) {
        case "monday":
            console.log("9:00 AM - Team Meeting\n1:00 PM - Project Work\n5:00 PM - Gym");
            break;
        case "tuesday":
            console.log("10:00 AM - Client Call\n2:00 PM - Code Review\n6:00 PM - Cooking Class");
            break;
        case "wednesday":
            console.log("8:00 AM - Yoga\n12:00 PM - Lunch with Team\n3:00 PM - Presentation Prep");
            break;
        case "thursday":
            console.log("9:30 AM - Stand-up Meeting\n2:30 PM - Development Work\n7:00 PM - Movie Night");
            break;
        case "friday":
            console.log("10:00 AM - Sprint Review\n4:00 PM - Happy Hour\n8:00 PM - Dinner with Friends");
            break;
        case "saturday":
            console.log("10:00 AM - Hiking\n3:00 PM - Shopping\n7:00 PM - Family Time");
            break;
        case "sunday":
            console.log("9:00 AM - Church\n1:00 PM - Relax & Read\n6:00 PM - Prepare for Week");
            break;
        default:
            console.log("Invalid day. Please enter a valid weekday.");
    }
}

console.log(" ");

// Task 10
{
    let a = 1, b = 2;
    if (a > b) {
        console.log(a);
    } else if (b > a) {
        console.log(b);
    } else {
        console.log("They're equal");
    }
}

console.log(" ");

// Task 11
{
    let x = "123";
    if (!x) {
        x = "default"
    }
    console.log(x);
}

console.log(" ");

// Task 12
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    if (coursesAndDurationArray[0].monthDuration > 5)
    {
        console.log("Nice!")
    }
    if (coursesAndDurationArray[1].monthDuration > 5)
    {
        console.log("Nice!")
    }
    if (coursesAndDurationArray[2].monthDuration > 5)
    {
        console.log("Nice!")
    }
    if (coursesAndDurationArray[3].monthDuration > 5)
    {
        console.log("Nice!")
    }
    if (coursesAndDurationArray[4].monthDuration > 5)
    {
        console.log("Nice!")
    }
    if (coursesAndDurationArray[5].monthDuration > 5)
    {
        console.log("Nice!")
    }
}