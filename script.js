// let soni = prompt("Mahsulot sonini kiriting:");
// let narx;
// if (soni < 10) {
//     narx = 500;
// } else {
//     narx = 450;
// }
// console.log("Mahsulot narxi: " + narx);
// alert("Mahsulot narxi: " + narx);

// let tezlik = prompt("Avtomobil tezligini kiriting:");
// let natija2;
// if (tezlik < 60) {
//     natija2 = "Tezlik me'yorida";
// } else if (tezlik >= 60 && tezlik <= 80) {
//     natija2 = "Ogohlantirish";
// } else {
//     natija2 = "Jarima";
// }
// console.log(natija2);
// alert(natija2);

// let narxKiriting = prompt("Narxni kiriting:");
// let natija3;
// if (narxKiriting > 100) {
//     natija3 = "Qimmat";
// } else if (narxKiriting >= 50 && narxKiriting <= 100) {
//     natija3 = "O'rtacha";
// } else {
//     natija3 = "Arzon";
// }
// console.log(natija3);
// alert(natija3);


// function aniqlaPosNeg(a, b, c) {
//     let musbat = 0, manfiy = 0;
//     [a, b, c].forEach(s => {
//         if (s > 0) musbat++;
//         else if (s < 0) manfiy++;
//     });
//     let msg = `Musbat: ${musbat}, Manfiy: ${manfiy}`;
//     console.log(msg);
//     alert(msg);
// }
// aniqlaPosNeg(5, -2, 3);

// let sumToq = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) sumToq += i;
// }
// console.log("Toq sonlar yigindisi: " + sumToq);
// alert("Toq sonlar yigindisi: " + sumToq);

// function nYigindi(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) sum += i;
//     console.log(`${n} gacha yigindisi: ${sum}`);
//     alert(`${n} gacha yigindi: ${sum}`);
// }
// nYigindi(10);

// function teskariQil(soz) {
//     let rev = soz.split('').reverse().join('');
//     console.log("Teskari: " + rev);
//     alert("Teskari: " + rev);
// }
// teskariQil("Istifaa");



// let numbers = [5, 2, 8, 6, 9, 4];
// numbers.sort((a, b) => a - b);
// console.log("Tartiblangan: " + numbers);
// alert("Tartiblangan: " + numbers);

// let items = [{ price: 30 }, { price: 20 }, { price: 50 }];
// let total = items.reduce((acc, curr) => acc + curr.price, 0);
// console.log("totalPrice: " + total);
// alert("totalPrice: " + total);




const addBtn = document.getElementById('addStudentBtn');
const tableBody = document.getElementById('studentTableBody');

const nameInp = document.getElementById('name');
const emailInp = document.getElementById('email');
const phoneInp = document.getElementById('phone');
const enrollInp = document.getElementById('enroll');
const dateInp = document.getElementById('date');

addBtn.addEventListener('click', () => {
    const name = nameInp.value;
    const email = emailInp.value;
    const phone = phoneInp.value;
    const enroll = enrollInp.value;
    const date = dateInp.value;

   

    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="./img/user-pic.png" alt="user"></td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${enroll}</td>
        <td>${date}</td>
        <td class="actions">
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash" onclick="this.parentElement.parentElement.remove()"></i>
        </td>
    `;

    tableBody.appendChild(row);

    [nameInp, emailInp, phoneInp, enrollInp, dateInp].forEach(inp => inp.value = "");
});