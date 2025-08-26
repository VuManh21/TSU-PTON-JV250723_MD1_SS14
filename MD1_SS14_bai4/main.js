let original = {
    name: "Bob",
    age: 30
};
const copy = JSON.parse(JSON.stringify(original));
copy.name = "Charlie";
console.log("original:", original);
console.log("copy:", copy);

