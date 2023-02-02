function string_length1(greeting) {
    return greeting;
}
var result1 = string_length1("Hello");
console.log(result1.length);
function string_length2(firstName, lastName) {
    return firstName + " " + lastName;
}
var result2 = string_length2("James", "Doonan");
result2.replace("James", "Doonan").length;
console.log(result2.length);
function string_noSpaces(value) {
    return value.replace(" ", "").length;
}
console.log("The number of charachters are " + string_noSpaces(result2));
function both_methods(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", "").length;
    }
    return count;
}
console.log(both_methods("test 1"));
