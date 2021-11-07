// constructors in object
// we define const with capital letter

function Object1(name,roll){
    this.name=name;
    this.roll=roll;
    this.getName=function(){
        return this.name
    }
}

const student1=new Object1("Abdul Moiz", 12121);
const student2=new Object1("Rizwan", 1334)
console.log(student1.getName());
console.log(student2);

// prototype
// when we are making the function when we do not make the function again and again 
// copy banayee ga or bar bar jab bi call karee ga tou copy leye ga


function ProtoTypes(email,number){
    this.email=email;
    this.number=number;
    // this.school="saylani";
}
// this is prototype
ProtoTypes.prototype.setName=function(){
        return (
            this.number,this.email
        )
}

ProtoTypes.prototype.school="saylani"

const result1=new ProtoTypes("moiz@gmail.com",+"03303243036");
console.log(result1);
console.log(result1.setName());
const result2=new ProtoTypes("rizwan56@gmail.com",+"03303243036");

console.log(result2.email);




const listStudent={
    name: "basit",
    roll: 1211,
    school: "saylani"
}

for(let prop in listStudent){
    // console.log(prop)
    console.log(prop + ":"+ listStudent[prop]);
}
console.log("roll" in listStudent);
console.log(listStudent["name"]);
console.log("isPrototypeOf" in listStudent);
console.log(listStudent.hasOwnProperty("constructor"));