 regular function
function a (){
    console.log("a");
}

arrow function
const b = c => {
    console.log("b",c);
}

function expression
const d = function(){
    console.log("d");

}

function chit (a,b){
    console.log(a,b)
}
chit(50,60)
chit()
chit()

const fun = () => {
    console.log("hiiii")
}

fun()

function expression
function showMessage(){
    alert("Hello World!");
}
showMessage();

const a =["hii", "prebtybe"]
  a.slice(1)
console.log(a)

let numbers = [1, 13, 22, 123,49];  

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("The sum of the numbers is: " + sum)


let s="chitranjan"
let vowel="aeiouAEIOU"
let count= "";
for(let i=0; i<s.length; i++){
    if(vowel== s[i]){
        // count+=s[i];
        count++;
    }
    console.log(count);
}


let arr =[4,8,7,54,55,7,2,22,1,7]
let even="";
let odd="";
for(let i of arr){
    if (arr[i]%2===0){
        even+=arr[i]
        
    }else{
        odd+=arr[i]
        
    }
    
}
console.log(even)
console.log(odd)

let arr1 =[0,1,0,1,0,1,1,1,0,0,0]
let zero=0;
let one=0;
for(let i = 0; i<arr1.length; i++){
    if(1===arr1){
        one++

    }else if(0===arr1){
        zero++
        
    }
    
}
console.log(one);
console.log(zero)






