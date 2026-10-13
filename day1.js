// const jsonData = '{"name":"mITTAL","age":"20","course":"Java"}';

// const student = JSON.parse(jsonData);

// console.log(student);
// console.log(student.age);


const student = {
    name: "MITTAL",
    age: 20,
    course: "Frontend"
};

const jsonString = JSON.stringify(student);

console.log(jsonString);
console.log(typeof student);
console.log(typeof jsonString);

const data = '{"name":"MITTAL"}';

console.log(JSON.parse(data));