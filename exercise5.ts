function string_length1(greeting: string) {
    return greeting;
  }

  let result1 = string_length1("Hello");
  console.log(result1.length);


function string_length2(firstName: string, lastName: string) {
    return firstName + " " + lastName;
  }

  let result2 = string_length2("James","Doonan");
  result2.replace("James","Doonan").length ;
  console.log(result2.length);

function string_noSpaces(value: string):number{

    return value.replace(" ","").length;
    
  }
  console.log("The number of charachters are " +string_noSpaces(result2));


function both_methods(value:string,spaces?:boolean):number{
    let count:number = 0;
    if(spaces){
        count = value.length;
    }
    else{
        count = value.replace(" ","").length;
    }
    return count;
  }
  console.log(both_methods("test 1"));