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
     alert('You Answer is correct')
   }else{
    alert('You Answer is wrong')
   }
   alert(score)


}