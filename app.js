// //The Fortune Teller
// var numChildren = Math.floor(Math.random()*10);
// var partnerName = ["Tyler", "Steve", "Josh", "James", "Nick"];
// var randoName = partnerName[Math.floor(Math.random() * partnerName.length)];
// var geographicLocation = ["San Francisco", "New York City", "Los Angeles"];
// var randoGeographic = geographicLocation[Math.floor(Math.random()*geographicLocation.length)];
// var jobTitle = ["Architect", "CEO", "dog walker", "professor"];
// var randoJob = jobTitle[Math.floor(Math.random()*jobTitle.length)];

// var fortune = "You will be a" + " " + randoJob + " " + "in" + " " + randoGeographic + " " + "and married to" + " " + randoName + " " +"with" + " " + numChildren + " " + "kids."
// console.log(fortune);


//The Fortune Teller function

window.onload = function() {

function fortuneTeller() {
	var numChildren = Math.floor(Math.random()*10);
	var partnerName = ["Tyler", "Steve", "Josh", "James", "Nick"];
	var randoName = partnerName[Math.floor(Math.random() * partnerName.length)];
	var geographicLocation = ["San Francisco", "New York City", "Los Angeles"];
	var randoGeographic = geographicLocation[Math.floor(Math.random()*geographicLocation.length)];
	var jobTitle = ["Architect", "CEO", "dog walker", "professor"];
	var randoJob = jobTitle[Math.floor(Math.random()*jobTitle.length)];
	var fortune = "You will be a " + randoJob +  " in " + randoGeographic + " and married to " + randoName + " with " + numChildren + " kids."
	
	return fortune;
}
	document.getElementById('test').innerHTML = fortuneTeller();
}





// //Age Calculator
// function ageCalc(born, future) {
// 	var age = "You are" + " " + (future - born) + " " + "years old."
// 	console.log(age)
// }


// ageCalc(1998,2017);
// fortuneTeller();
