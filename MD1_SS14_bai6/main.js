let book = [
    {
        id: 1,
        bookname: "sach A",
        authorname: "Nguyen Van A",
        year: 2020

    },
    {
        id: 2,
        bookname: "sach B",
        authorname: "Nguyen Van B",
        year: 2021

    },
    {
        id: 3,
        bookname: "sach C",
        authorname: "Nguyen Van C",
        year: 2022

    },
];
let inPut = prompt(`moi ban nhap vao 
    1. Thêm sách mới

   2. Hiển thị danh sách sách

   3. Tìm kiếm sách theo tên

   4. Xóa sách theo ID

   5. Thoát chương trình

    Nhập lựa chọn của bạn:  `
    
);

if (inPut === "1") { // them sach
    let bookT = prompt("Hay nhap ten sach ma ban muon them ");
    let author = prompt(`Ten tac gia cua sach ${bookT}`);
    let bookyear = +prompt(`Nam san xuat cua sach ${bookT}`);

    let newbook = {
        id: Math.random(),
        bookname: bookT,
        authorname: author,
        year: bookyear
    };
    book.push(newbook);
    displayInformation();
    alert("danh sach da duoc them");


} else if (inPut === "2") {// hien thi 
    displayInformation();
    alert("danh sach da duoc hien thi");

}
else if (inPut === "3") { // tim kiem
    let searchBook = prompt("hay nhap ten sach ma ban muon tim kiem");
    let index = book.findIndex(function (el, i) {
        return el.bookname.toLowerCase() === searchBook.toLowerCase();
    });
    if (index === -1) {
        console.log("khong ton tai thong tin sach");

    } else {
        let foundBook = book[index];
        console.log(`Sách tìm thấy: ID: ${foundBook.id}, Tên sách: ${foundBook.bookname}, Tác giả: ${foundBook.authorname}, Năm: ${foundBook.year}`);
        displayInformation();
    }

}
else if (inPut === "4") { // xoa
    let idBook = +prompt("Hay nhap so ID can xoa");
    let index = book.findIndex(function (el, i) {
        return el.id === idBook;
    });
    if (index === -1) {
        console.log("khong ton tai thong tin sach");
    } else {
        book.splice(index, 1);
        displayInformation();
    }
}
else if (inPut === "5") { // dung danh sach
    console.log("Dong danh sach");


} else {
    console.log("Khong co sach trong thu vien");

}


function displayInformation() {
    console.log("Danh sach thu vien cua ban");

    for (let index in book) {
        console.log("Ten sach", book[index].bookname);
        console.log("Ten tac gia", book[index].authorname);
        console.log("Nam sang tac ", book[index].year);
        console.log(`++++++++++++++++++++++++++++++++++++++++++`);


    }

}