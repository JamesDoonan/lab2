//Numbers
function addition(valueInt) {
    console.log("Value is: " + valueInt);
}
var firstNum = 2;
var secondNum = 20;
var sumOfNum = (firstNum + secondNum).toLocaleString();
addition(sumOfNum);
//Strings
var fullName = "James Doonan";
console.log("My name is: " + fullName);
//boolean
var correctName = false;
if (fullName == "James Doonan") {
    correctName = true;
    console.log(correctName);
}
//Arrays
var list = [1, 2, 3];
console.log(list);
//Any
var anyList = [2, 4, 6, 8, 10];
for (var i = 0; i < anyList.length; i++) {
    console.log("The values at poisition " + (i + 1) + " in my array is " + anyList[i]);
}
