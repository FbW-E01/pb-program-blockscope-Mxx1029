{
    // 1.
    let x;
    const determiner = 5;
    determiner < 0 ? x = "Less than 0" : x = "Greater or equal to 0";
    console.log(x);
    // 2. 
    if (determiner >= 0) {
        let updater = "Greater or equal to 0";
        const message = "Positive Integer";
        console.log(message);
    } else {
        updater = "Less than 0";
    }
    // Answer: if you try to print "message" outside of the block, you get a reference error, because message is declared in a block and can only be accessed there
    // 3.
    // I use ternaries whenever possible as they are shorter to read. If there's just a either/or decision, I try to use ternaries. If i need to make more than one decision, I use if, else if, else statements
    // Example for a ternary
    const age = 16;
    (age >= 16) ? console.log("Do you want a beer?") : console.log("No beer for you, youngster!");
    // Example for a if - else if statement
    const weathers = ["Sunny", "Rainy", "Snowy", "Meh"];
    let weather = weathers[Math.floor(Math.random() * 4)];
    if (weather === "Sunny") {
        console.log(`It's ${weather}. Bring sunglasses.`);
    } else if (weather === "Rainy") {
        console.log(`It's ${weather}. Bring an umbrella.`);
    } else if (weather === "Snowy") {
        console.log(`It's ${weather}. Bring a thick jacket.`);
    } else {
        console.log(`It's ${weather}. Are you sure you wanna go out?`);
    };
}

