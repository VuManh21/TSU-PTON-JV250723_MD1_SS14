let person =[
    {name: "Jone", age :25 , job :"Developer"},
];
console.log(person[0].name);

for(let key in person){
    
    console.log(`  Name: ${person[key].name}`);
    console.log(`  Age: ${person[key].age}`);
    console.log(`  Job: ${person[key].job}`);
}
