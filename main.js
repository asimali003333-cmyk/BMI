let weight = prompt("enter your weight");
let height = prompt("enter your height");
let BMI = weight / (height * height);


if (BMI < 18.5) {
    console.log("Your BMI is " + BMI + ". You are underweight.");
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        console.log("Your BMI is " + BMI + ". You are normal weight.");
    }
    else if (BMI >= 25) {
        console.log("Your BMI is " + BMI + ". You are overweight.");
    }
    else {
        console.log("Invalid input. Please enter valid weight and height.");
    }