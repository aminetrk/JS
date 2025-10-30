let favMonth = prompt("Enter your favorite month:");
favMonth = favMonth.toLowerCase();

if (!isNaN(favMonth) || /\d/.test(favMonth)) {
  console.log("Please enter a valid month, not numbers!");
} else {
  switch (favMonth) {
    case "january":
      console.log("January is the start of a new year!");
      break;
    case "february":
      console.log("February brings love and cozy vibes!");
      break;
    case "march":
      console.log("March means spring is coming!");
      break;
    case "april":
      console.log("April showers bring May flowers!");
      break;
    case "may":
      console.log("May is full of sunshine and blooms!");
      break;
    case "june":
      console.log("June starts the fun of summer!");
      break;
    case "july":
      console.log("July is all about BBQs and fireworks!");
      break;
    case "august":
      console.log("August is perfect for summer adventures!");
      break;
    case "september":
      console.log("September brings back school and cooler air!");
      break;
    case "october":
      console.log("October is spooky and full of candy!");
      break;
    case "november":
      console.log("November gives thanks and warm meals!");
      break;
    case "december":
      console.log("December brings holidays and cozy nights!");
      break;
    default:
      console.log("That's not a valid month, try again!");
      break;
  }

  if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
    console.log("You love the winter months!");
  } else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
    console.log("You enjoy the summer months!");
  } else {
    console.log("Other months are interesting too!");
  }
}