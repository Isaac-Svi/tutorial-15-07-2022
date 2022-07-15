// const arr = [1, 2, 3, 4, 5];
// // const arr2 = new Array([1, 2, 3, 4, 5])

// const cb = (val, index, ar) => {
//     console.log(val, index, ar);
// };

// arr.forEach(cb);
// arr.forEach((_, index) => {
//     console.log(index);
// });

// Array.prototype.myForEach = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         // value   index  array
//         cb(this[i], i, this);
//     }
// };

// const x = () => {}
// arr.forEach(x)
// arr.forEach(() => {})

// const y = (arg) => { /*,,,*/ }
// y('asdfasdf')
// const str = 'asdfasdf'
// y(str)

const arr = [1, 2, 3, 4, 5];

const cb = (val, index, ar) => {
    console.log(val, index, ar);
};

function myForEach(list, callback) {
    for (let i = 0; i < list.length; i++) {
        //      value   index  array
        callback(list[i], i, list);
    }
}

myForEach(arr, cb);

// const btn = document.getElementById('my-btn')
// const callback = (e) => {
//     e.x
// }
// btn.addEventListener('mouseover', callback)
