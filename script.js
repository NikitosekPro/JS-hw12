// // task 1
// const user = {
//     name: "John",
//     hobby: "reading",
//     premium: true
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (let key in user) {
//     console.log(key + ':' + user[key]);
// }

//   // task 2
// function countProps(obj) {
//     return Object.keys(obj).length;
// }

//   // task 3
// function findBestEmployee(employees) {
//     let bestEmployee = '';
//     let maxTasks = 0;
//     for (let employee in employees) {
//         if (employees[employee] > maxTasks) {
//         maxTasks = employees[employee];
//         bestEmployee = employee;
//     }
//     }
//     return bestEmployee;
// }

//   // task 4
// function countTotalSalary(employees) {
//     let totalSalary = 0;
//     for (let key in employees) {
//         totalSalary += employees[key];
//     }
//     return totalSalary;
// }

//   // task 5
// function getAllPropValues(arr, prop) {
//     let values = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][prop] !== undefined) {
//         values.push(arr[i][prop]);
//     }
//     }
//     return values;
// }

  // task 6
function calculateTotalPrice(allProducts, productName) {
    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name === productName) {
        return allProducts[i].price * allProducts[i].quantity;
    }
    }
    return 0;
}
