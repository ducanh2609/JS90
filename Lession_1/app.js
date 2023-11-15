// console.log('2', num2);
// let num1 = 2
// var num2 = 10
// const num3 = 15
// console.log('1', num1);
// console.log('3', num3);



// let test1 = function () {
//     console.log('test1');
// }

// var test2 = function () {
//     console.log('test2');
// }

// const test3 = function () {
//     console.log('test3');
// }
// test1()
// test2()
// test3()

// var a = 10

// for (let i = 0; i < 1; i++) {
//     var a = 10
//     console.log('1', a)
// }


// console.log('2', a)


// sum(4, 6)

// function sum(a, b) {
//     console.log(a + b)
// }

// sum(2, 3)

// f1(2, 3)

// var f1 = (num1, num2) => {
//     console.log(num1 + num2)
// }


// // f1(4, 5)
// f1('4', 5)

// console.log(name)

// console.log(this)

// const obj = {
//     name: 'Anh',
//     birthDay: 1993,
//     age: () => {
//         console.log(this)
//         console.log(2023 - this.birthDay);
//     }
// }

// const obj1 = {
//     name: 'Anh',
//     birthDay: 1993,
//     age: function () {
//         console.log(this)
//         console.log(2023 - this.birthDay);
//     }
// }

// obj1.age()
// obj.age()


// const obj = {
//     name: 'Anh',
//     birthDay: 1993,
//     age: function () {
//         console.log(this)
//         console.log(2023 - this.birthDay);
//     }
// }
// const obj2 = {
//     name: 'Binh',
//     birthDay: 1991,
// }

// obj2.age = obj.age

// obj2.age()


// const firstName = 'Duc'
// const lastName = 'Anh'
// const fullName = firstName + ' ' + lastName
// const fullName1 = [firstName, lastName, 'A1', 'A2'].join('&')
// const fullName2 = `${firstName} ${lastName}&A1`


// console.log(fullName2)

// import func from "./modules/func.js"
// func(2, 3)


// const arr = [1, 2, 3]
// // const arr2 = arr

// const arr2 = [...arr]
// arr.push(4)
// console.log('1', arr)
// console.log('2', arr2)

// const arr1 = [1, 2, 3]
// // const arr2 = [4, 5, 6]
// const arr = [...arr1, 4, 5]
// console.log(arr)

// const obj1 = {
//     name: 'Anh'
// }
// const obj2 = {
//     age: '30',
//     name: 'Duc',
// }

// const obj = { ...obj2, ...obj1, name: 'Tuan', address: 'YB' }
// console.log(obj)

// function sum(...args) {
//     console.log(args);
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// }

// sum(1, 2, 3, 4)

// const { name, age, address } = obj
// // let name = obj.name
// console.log(name);
// console.log(age)
// console.log(address)

// arr.forEach((item) => {
//     // logic code
//     console.log(item);
// })

// const arrNew = arr.map(item => {
//     // logic code
// })
// const arr = [1, 2, 3]
// // const mutil = (x) => x * x
// // const newArr = arr.map(mutil)

// const newArr = arr.filter(item => item >= 2)

// console.log(newArr)


// arr.reduce((start, item, index, arr) => {
//     // logic code
// }, startType)
// const newArr = arr.reduce((obj, item, index) => {
//     if (item >= 2) obj[index] = item
//     return obj
// }, {})

// console.log(newArr)

