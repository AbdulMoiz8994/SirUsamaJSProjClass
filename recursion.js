console.log("hello");


const picName=[
    {name: "Abdul Moiz"},
    {name: "Abdul Rafay"},
    {name: "Abdul Malik"},
    {name: "Abdul Basit"},
    {name: "Abdullah"},
    {name: "Abdul Bari"},
    {name: "Abdul Hadi"},
    {name: "Abdul Ahad"},
    {name: "Abdul Manan"},
    {name: "Abdul Hanan"},
]
// one way
// console.log(picName.length);
// const res= picName.findIndex((ele) =>{
//     // console.log(ele);
//     return ele.name === "Abdul Ahad"
// })
// console.log(res);

// second way
// for Loop
// let res;
// for(let i=0; i < picName.length; i++){
// //    if(picName)
//     res=picName[i]
//     // console.log(res);
//    if(res.name === "Abdul Ahad"){
//       res=i
//       break;
//    }
// }
// console.log(res);

// creating Function
// Recursion
// const recurFunc=(ind) =>{
//     // console.log(ind);
//     const element=picName[ind]
//    if(element.name === "Abdul Ahad"){
//        return ind
//    }else{
//        return recurFunc(++ind)
//    }
// }

// const res=recurFunc(0)
// console.log(res);

// Finding Factorial using Recursion
//  const factFunc=(n) =>{
//     //  console.log(n);
//   if(n == 1 || n == 0){
//       return n
//   }else{
//     return  n * factFunc(n-1)
//   }
//  }
// the logic for writing a factorial 
// n!=n * (n-1) 

// const factNumber=factFunc(5);
// console.log(factNumber);

// var twoSum = function(nums, target) {
//   // console.log(nums, target);
//    let map={};
//     let copy=[];
//     for(let i= 0; i < nums.length; i++){
//     const diff=target - nums[i];
//     console.log(i);
//       console.log(diff);  
//       console.log(map[diff]);
//       if(map.hasOwnProperty(diff)){
//         // console.log(map);
//         copy= [map[diff], i];
//         break;
//     }
//     // console.log(copy);
//      map[nums[i]]=i;
//     };
//     return copy
// };

// let arr1=[2,4,5,8];
// let value=9;
// const res=twoSum(arr1,value);
// console.log(res);


// palindrome Number


// var isPalindrome = function(x) {
//     console.log(x);
//     let value0=x.toString();
//    let value1=value0.split("")
//    let value2=value1.reverse();
//    const joinArra=value2.join("");
//    console.log(joinArra);
//    let value3=value2.toString();
//    let value4=value3.replace(/,/g,'')
//    console.log(value4);
//    if(x === +value4){
//     //  console.log("true");
//     return true
//    }else{
//     // console.log("false");
//      return false
//    }
// };


// let res=isPalindrome(121);
// console.log(res);


// second way

// var isPalindrome = function(x) {
//   console.log(x);
//   let value0=x.toString();
//  let value1=value0.split("")
//  let value2=value1.reverse();
//  const joinArra=value2.join("");
//  console.log(joinArra);
//  if(x === +joinArra){
//   //  console.log("true");
//   return true
//  }else{
//   // console.log("false");
//    return false
//  }
// };


// let res=isPalindrome(121);
// console.log(res);


var isPalindrome = function(x) {
  // console.log(x);
  let value0=x.toString().split("").reverse().join("")
 if(x === +value0){
  return true
 }
   return false
};


let res=isPalindrome(123);
console.log(res);


let value="text";
let rest=""
for(let i=value.length -1; i >=0;i--){
  console.log(i);
    rest +=value[i] 
}
console.log(rest);