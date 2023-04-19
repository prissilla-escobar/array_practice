

var niblings = ["Kailan", "Luis", "Caleb", "Adalyn", "Avery"]
// nibling is a niece or nephew! haha I read it's a new word to combine the two
var niblingsAges = [15, 14, 11, 5, 2]
var activities = ["sport player", "artist", "risk taker", "couch potato"]

// this method will remove the last element in the array. line 7 will print the output.
niblings.pop()
console.log(niblings)

/* This method will add the element in the parenthesis to the beginning of the array.
line 11 will print the output */
niblingsAges.unshift(67)
console.log(niblingsAges)

/* This method will add the element in the parenthesis to the end of the array.
line 17 will print the output */
activities.push("runner")
console.log(activities)

/* Index positions is the number an element is read in an array from left to right.
When counting in an array, you will always start with the number 0 and then go up 
from there from left to right. Below is the index positions for the variable 'niblings'
Kailan is 0, Luis is 1, Caleb is 2, Adalyn is 3 and Avery is 4.