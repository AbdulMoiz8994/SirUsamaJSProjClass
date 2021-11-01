localStorage.setItem('firstName', 'Abdul moiz')
localStorage.setItem('lastNmae', "Attari")


const data=localStorage.getItem('firstName')
console.log(data);

// localStorage.removeItem('firstName')


const obje1={
    name: 'Abdul moiz',
    fatherName: "zafar ali"
}
localStorage.setItem('value', JSON.stringify(obje1))
let result= localStorage.getItem('value')

console.log('result',JSON.parse(result));
