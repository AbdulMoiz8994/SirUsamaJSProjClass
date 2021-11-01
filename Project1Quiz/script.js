// make all things in one function to check
function check(){
//    get all documents
    const option1=document.getElementById('q1_a1');
    // we do not need both element 
    // const option2=document.getElementById('q1_a2');
    // const option3=document.getElementById('q1_a3');
    // const btn=document.querySelector('.btn')

// make th variable to increase the score when the ans is correct
let score=0
// condition check 1

   if(option1.checked == true ){
     score++
     alert('Your Question 1  is correct')
   }else{
    alert('Your Question 1 is wrong')
   }

//    condition 2 check
//    const quest2_option1=document.getElementById('q2_a1')
//    const quest2_option2=document.getElementById('q2_a2')
   const quest2_option3=document.getElementById('q2_a3')
 if(quest2_option3.checked == true){
     score++
     alert('Your Question 2 is correct')
 }else{
    alert('Your Question 2 is wrong')
   }

//    alert(score)
//    const quest3_option1=document.getElementById('q3_a1')
//    const quest3_option2=document.getElementById('q3_a2')
   const quest3_option3=document.getElementById('q3_a3')
   if(quest3_option3.checked == true){
      score++ 
      alert('Your Question 3 is correct') 
   }else{
    alert('Your Question 3 is wrong')
   }

   const quest4_option1=document.getElementById('q4_a1')
//    const quest4_option2=document.getElementById('q4_a2')
//    const quest4_option3=document.getElementById('q4_a3')
   if(quest4_option1.checked == true){
    score++ 
    alert('Your Question 4 is correct') 
 }else{
  alert('Your Question 4 is wrong')
 }
alert(score)

}