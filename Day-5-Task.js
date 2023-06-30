//Day-5-Task

//1.For the given JSON iterate over all for loops (for, for in, for of, forEach):
//Ans:
let object =[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]
console.log(object)
console.log(object[0])
console.log(object.length)

object.forEach((item)=>{
console.log(item);
})

for(let key in object){
console.log(object[key])
 }

for(let i=0;i<=object.length;i++){
console.log('object:${object[i]}');
}

for(let data of object){
    console.log(data)
    }


//2.Create your own resume data in JSON format:
//Ans:
console.log("RESUME")

console.log("BIO DATA")
let person={
NAME:"GOWTHAM.M",
EMAIL:"GOWTHAM@gmail.com",
MOBILE_NUMBER:"999992222",
GENDER :"MALE",
DATE_OF_BIRTH :"7.8.2002",
ADDRESS:"1/23 MIDDLE STREET,MANNARGUDI."}
console.log(person)

console.log("EDUCATION QUALIFICATION")
let education={
SSLC :"BHARATHIDHASAN MATRICULATION AND HIGHER SECONDARY SCHOOL,MANNARGUDI",
PERCENTAGE:"63%",
YEAR:"2017-2018",
HSSC:"BHARATHIDHASAN MATRICULATION AND HIGHER SECONDARY SCHOOL,MANNARGUDI",
PERCENTAGE:"75%",
YEAR:"2017-2018",
COLLEGE:"A.V.V.M SRI PUSHPAM COLLEGE, POONDI.",
DEGREE:"B.COM",
YEAR_OF_PASSING:"2023",
PERCENTAGE:"80%"
}
console.log(education)


console.log("SKILLS")
let personal={
SKILLS :"C,C++,JAVA",
LANGUAGE:"ENGLISH,TAMIL",
HOBBIES:"CRICKET AND GYM",
}   
console.log(personal)


console.log("CERTIFICATION AND PROJECTS")
let detail1={
CETRIFICATE :"ADJP-ADVANCE DIPOLMA IN JAVA PROGRAMING",
PROJECT:"AUTOMATION IN ATM AND RAILWAY TICKET BOOKING SYSTEM"
}
console.log(detail1)

