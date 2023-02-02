

//Numbers
function addition(valueInt) {
    console.log("Value is: " + valueInt);
}
let firstNum: number  = 2;
let secondNum: number  = 20;
let sumOfNum: string = (firstNum + secondNum).toLocaleString();

addition(sumOfNum);


//Strings

let fullName:string = `James Doonan`;
console.log("My name is: " + fullName);


//boolean

let correctName: boolean = false;

if(fullName == `James Doonan`)
{
   correctName = true;
   console.log(correctName);
}

//Arrays

let list: Array<number> = [1, 2, 3];
console.log(list);

//Any

let anyList: any[] = [2,4,6,8,10];
for(let i=0;i<anyList.length;i++)
{
    console.log("The values at poisition " +(i+1)+ " in my array is " + anyList[i]);
}
