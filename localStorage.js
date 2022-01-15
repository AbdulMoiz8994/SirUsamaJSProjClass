// localStorage.setItem('firstName', 'Abdul moiz')
// localStorage.setItem('lastNmae', "Attari")


// const data=localStorage.getItem('firstName')
// console.log(data);

// // localStorage.removeItem('firstName')


// const obje1={
//     name: 'Abdul moiz',
//     fatherName: "zafar ali"
// }
// localStorage.setItem('value', JSON.stringify(obje1))
// let result= localStorage.getItem('value')

// console.log('result',JSON.parse(result));


// const obj1={
//     name: "Abdul moiz",
//     age: 20,
//     0: true
// }

// const obj2={
//     name: "Abdul Rafay",
//     age:22,
//     id:10
// }

// const result= Object.assign(obj1, obj2);
// console.log(result);
// // for Array and String
// const arr=["moiz", "rafay", "malik"]
// for(let value of arr){
//     console.log(value);
// }
// // is for object and give the property of an obj
// for(let prop in obj1){
//     console.log(prop);
// }

// Object.keys(obj1).map((obj) =>{
//     console.log(obj.split(" "));
// });

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));


// we want vowel if any vowel match then do an increment


// imperative approach
// function getVowels(str1){
//     console.log(str1.length);
//     const realVowel="aeiou";
//     let counter=0;
//       for(let i=0; i<str1.length; i++){
//                if(realVowel.includes(str1[i])){
//                    counter++
//                }
//       } 
//       return counter;

// }

// console.log(getVowels("pfniwo"));

// declarative approach
// function getVowel(str){
//      const vowel="aeiou";
//      let counter=0;
//     for(let val of str){
//         console.log(val);
//         if(vowel.includes(val)){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(getVowel("dogoei"));



// change positive into negative and negative into positive

// function opposite(num){
//     // console.log(num);
//      return -num
// }

// console.log(opposite(-15));

// console.log(5|1);
// function oddEven(value){
// console.log(value % 2);
//     if(value % 2 === 0){
//         return "Even"
//     }
//         return "ODD"
// }

// console.log(oddEven(5)); 

// function oddEven(value){
// //   const val= value % 2 ===0 ? "Even" : "Odd" 
// //   return val 
// // both will be true
// return value % 2 ===0 ? "Even" : "Odd"
// } 
// console.log(oddEven(2));


// class Stack{
//     constructor() {
//         this.item=[]  
//     }
//  isEmpty(){
//     if(this.item == 0){
//         return true
//     }
//     return false
//  }
//  push(item){
//   this.item.push(item)
// }
// pop(){
//   if(this.item == 0){
//       return alert("The stack is already empty.")
//   }  
// }
// }


// let res=new Stack();
// res.push("moiz")
// res.push("khan")
// console.log(res.item);
// res.item.pop();
// res.item.pop()
// res.pop()
// console.log(res.isEmpty());





// function getInteger(str,dec, strContent){
//     const firstInteger=4;
//     const firstDecimal=4.0
//     const firstString='HackerRank'
//     const number=Number(str);
//     const result=number+firstInteger;
//     console.log(result);
//     const decimal=parseFloat(dec)
//     const decResult=decimal+firstDecimal
//     console.log(decResult);
//      const  ResultContent=firstString+strContent
//      console.log(ResultContent);
// }

// getInteger("2","1.34","For JavaScript Developer")


// const ar1=[0,1,2,3,4,5];
// const ar2=[3,5]
// console.log(ar1.concat(ar2));

// setTimeout(() =>{
// console.log("run");
// },5000)


// let a=5;
// function check(){
//     let a=10;
//     if(true){
//       console.log(a);
//     }
// }
// check()
// console.log(a);


// function opposite(num){
//     return  -num
// }
// console.log(opposite(-5));


// function evenodd(num){
//    if(num % 2 === 0){
//     return true
//    }else{
//      return false
//    }
// }

// console.log(evenodd(9));  //it gives us the remainder



  
// let names= "Abdul Moiz"
// const purFunc=() =>{
//   names = names.split(' ')  
// }
// purFunc();
// console.log(names)


// Pure Function
// let names= "Abdul Moiz"
// const purFunc=(nameStr) =>{
//  return nameStr.split(" ");
// }
// let value=purFunc(names);
// console.log(value);
// console.log(names)



// It is not pure function because it is mutating the original array we should retrun it
// let names= ["Abdul Moiz"]
// const purFunc=(namesSt, arrexp) =>{
//  namesSt.push(arrexp)  
// }
// purFunc(names,"moiz");
// console.log(names);


// let arr2="text"
// function arr1Func(arr2){
//   let arr1="moiz";
//   let value1=arr1.split(" ")
//   let value2=value1.reverse();
//   let value3=value2.toString()
//   let value4=value3.replace(/,/g,"");
//   console.log(value3);
// }
// arr1Func(arr2);

// not pure becuase mutable and immutable;
// const arr1=["Abdul moiz"];
// const arr1function=(arr2,student) =>{
//   return  arr2.push(student)
// }

// arr1function(arr1,"khanzada")
// console.log(arr1);


// making pure function via make the another array  inside it  which we retrun
// const arr1=["Abdul moiz"];
// const arr1function=(arr2,student) =>{
//   return  [...arr2, student];
// };

// let value= arr1function(arr1,"moiz");
// console.log(value);
// console.log(arr1);


// for(var i=0; i< 2;i++){
//     setTimeout(() =>{
//         console.log(i); 
//     },1000)
// }


// const creatButton=({title,disabled,surname})=>{
//   const button={};
//   button.titl=title || "";
//   button.disable= disabled || false
//   button.names= surname || "khanzada"
//   return button
// }

// if we have not data avaliable then by defualt object.assign assign to this object

// const creatButton=(config)=>{
//   console.log(config);
//  return Object.assign({
//   title:  "",
//   disabled: false,
//   names: "khanzada",
//  }, config)
// }

// const data={
//     title: "moiz",
//     disabled: true
// }

// let res=creatButton(data);
// console.log(res);







