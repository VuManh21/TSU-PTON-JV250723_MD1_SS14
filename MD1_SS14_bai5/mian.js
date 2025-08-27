let student = [
    {
        id: 1,
        name: "Nguyen  Van A",
        age: 24,
    },
    {
        id: 2,
        name: "Nguyen  Van B",
        age: 25,
    },
    {
        id: 3,
        name: "Nguyen  Van C",
        age: 26,
    }

];
while (true) {


    let inPut = prompt("moi ban nhap vao T / H / X / D ")
    if (inPut === "T") { // them hoc sinh
        let name = prompt("hay nhap ho va ten cua hoc sinh");
        let ageStudent = prompt(`so tuoi hien tai ${name}`);

        let information = {
            id: Math.random(),
            name: name,
            age: ageStudent
        };
        student.push(information);
        alert("Học sinh đã được thêm ");
        displayInformation();
        
    } else if (inPut === "H") { // hien thi 
        displayInformation();
    } else if (inPut === "X") { // xoa thong tin 
        let idStudent = +prompt("Hay nhap so ID can xoa");
        let index = student.findIndex(function (el, i) {
            return el.id === idStudent;
        });
        if (index === -1) {
            console.log("khong ton tai thong tin hoc sinh");
        } else {
            student.splice(index, 1);
            displayInformation();
        }
    } else if (inPut === "D") {   // dong danh sach 
        console.log("Dong danh sach");
        break;

    } else {
        console.log("khong co trong danh sach thong tin hoc sinh");

    }



    function displayInformation() {
        console.log("Danh sach hoc sinh cua ban");

        for (let index in student) {
            console.log("Ho Va Ten", student[index].name);
            console.log("Tuoi ", student[index].age);
            console.log(`++++++++++++++++++++++++++++++`);


        }

    }
};
