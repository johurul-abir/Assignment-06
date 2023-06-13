
const search = prompt("Search Now");


const result = donar.filter((data) => 
data.address == search || 
data.phone == search ||
data.gendar == search ||
data.bloodGroup == search

 );

const finalResult = [];

result.forEach((item, index) => {
    finalResult.push(item);
});

console.table(finalResult);
