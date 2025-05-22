
// Different way to create array
let arr = []
arr = Array()
arr = Array(1,2,3)
arr = Array(3)  // 创建一个有三个元素容量的空数组
arr = Array.of(1,2,3,4) // ES6，以后同一使用它

// 用于把类数组或可迭代对象转换成真正的数组
const obj = {0: 'a', 1: 'b'}
arr = Array.from(obj)   // ['a', 'b']
arr = Array.from('abc') // ['a','b','c']

// Set
let arrset = Array.from(new Set(['func', 'window']))  // ['func', window]
const map = new Map([[1,2], [2,4], [3,6]])
let arrMap = Array.from(map) // [[1,2], [3,4],[5,6]]
let arrMapValues = Array.from(map.values())

// map 的使用方法
const map2 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
])

console.log('map2 keys: ', map2.keys());
console.log('map2 values: ', map2.values());

// 将其转换成数组
const arrMap2Keys = Array.from(map2.keys())
const arrMap2Values = Array.from(map.values())

console.log("arrMap2Keys: ", arrMap2Keys);
console.log("arrMap2Values: ", arrMap2Values);


console.log('------------');


// splice 添加，删除，替换，改变与数组
let arr2 = Array.of(1,2,3,4,5,6,7)
// 使用splice来添加元素
arr2.splice(2, 2)
console.log('Delete elements by splice: ', arr2);

// 是哟个splice来删除元素
arr2.splice(2, 0, ...[3,4])
console.log('Add elements by splice: ', arr2);


// pop 删除最后一个元素
arr = [1,2,3,4,5]
arr.pop()   // [1,2,3,4]
console.log('arr after using pop: ', arr);  // [ 1, 2, 3, 4 ]


// shift删除数组的第一个元素
arr.shift()
console.log('arr after using shift', arr);  // [ 2, 3, 4 ]

// push 向末尾添加元素
arr.push(5)

// unshift向开头添加元素
arr.unshift(1)
console.log('current after using push and unshift', arr);


// --------------------

// *** sort方法，重点
// 根据提前定义好的函数来排序，默认根据unicode
// 函数返回值小于0，a在b前面，等于0位置不变，大于0，则b在a之前


let arrSort = [9,15,35,21,42,2,7];

// 结果小于0，a排在b之前，从小到大
arrSort.sort((a,b) => a-b)
console.log("After ascending sort: ", arrSort);

// 结果大于0，a排在b之后，从大到小
arrSort.sort((a,b) => b-a)
console.log("After descending sort: ", arrSort);

// 更复杂的条件
// 根据年龄排序，
let arrSortAge = [{age: 18, sex: 0}, {age: 19, sex: 0}, {age: 20, sex: 0}, {age: 18, sex: 1}, {age: 19, sex: 1}];

const sortByAge = (a, b) => {
    if(a.age === b.age){
        return a.sex - b.sex
    }else{  // Ascending sort
        return a.age - b.age
    }
}

arrSortAge.sort(sortByAge)
console.log('Using customize function to sort: ',arrSortAge);




// reverse
arrSort.reverse()
console.log('ArrSort: ', arrSort);


// ES6 --------------------------
// 使用fill填充数组
let arrFill = Array(5).fill(1)
console.log('After using fill: ', arrFill);

// 填充值2，从2-4位置
arrFill.fill(2, 1,3)
console.log('After using fill: ', arrFill);


// 使用slice来烤鹅比数组元素，不改变原数组
const arrSlice = arrFill.slice(0,3)
console.log('Using slcie to copy the array: ',arrSlice);


// join，将数组里面的元素连接，然后转换成字符串
let a = [1,2,3];
let strJoin = a.join('-')
console.log('The string after using join: ', strJoin);  // 1-2-3



// Concat，连接多个数组
let arrConcat1 = [1,2,3];
let arrConcat2 = [4,5];
let afterConcat = arrConcat1.concat(arrConcat2)
console.log('After concat: ', afterConcat);



// indexOf查找数组中某元素的索引值
let arrIndexOf = ['a', 'b', 'c']
console.log('The index of the b: ', arrIndexOf.indexOf('b'));   // 1

// 使用include来查找是否包含某个函数
// indexOf也可以查看是否包含元素，但是不能检查NaN

let arrInclude = [1,NaN, 100,'42','b'];
arrInclude.includes(NaN)    // true
arrInclude.includes('b')    // true
arrInclude.includes(5)      // false


// 以下都是流操作，都很重要

// Foreach **** 重点
// arr.forEach(function(value, index, arr), this);
let arrForEach = [1,2,3,4, ,5 ];
const objForEach = {name: 'obj'};

arrForEach.forEach((value, index, array) => {
    arrForEach[4] = 'edited'
    arrForEach.push(6)
    console.log(value, index);
    console.log(this.name); // "obj"
}, obj) //这里让obj成为this


// some函数检测数组中是否存在满足条件的元素
let arrSome = [1,2,3,4,5];
arrSome.some((value) => {
    if (value === 5) console.log('Using some function to find 5');
})

// filter过滤数组，返回新数组
let arrFilter = [1,2,3,4,5]
const newArrFilter = arrFilter.filter((value) => {
    return value >= 3
})
console.log('New Array after filter: ', newArrFilter);

// Map对数组中的每一个元素都进行处理，返回新的数组
let arrMapF = [1,2,3,4,5];
const newArrMapF = arrMapF.map((value) => {
    return value * 2
})
console.log('The array after using map: ', newArrMapF);


// reduce数组的累加器，合成一个值
// 参数arr.reduce((total, value, index, arr), init)
// total，value这两个参数是必须的
let arrReduce = [1,2,3,4];
arrReduce.reduce((total, value) => {
    return total + value
})


// find/ findIndex() 根据条件找到数组成员，只找一个
// arr.find(function(value, index, arr), this);
let arrFind = [1,2,3,4,'a'];
let stringElemnent = arrFind.find((value) => {
    let isString = false
    isString = typeof value === 'string' ? true : false
    return isString
})
console.log('Array after using find: ', stringElemnent);

// flat深度遍历展开数组
let arrFlat = [1,2,[3,4,[5,6]]]
let arrOneD = arrFlat.flat()
console.log('One dimensional array by using flat: ', arrOneD);
arrOneD = arrOneD.flat()
console.log('One dimensional array by using flat: ', arrOneD);


let arrFlat2 = [1,2,[3,4,[5,6]]]
// 使用Infinity可以全部展开，展开最深层
let arrOneD2 = arrFlat2.flat(Infinity)
console.log('全部展开： ', arrOneD2);
console.log('Infinity: ', Infinity);


// keys和values也可以用在数组中，key代表index，value代表值
let arrKeyValue = [9,8,7,6,5,4,3,2,1]
for(let index of arrKeyValue.keys()){
    console.log('Keys in Array: ', index);
}

for(let index of arrKeyValue.values()){
    console.log('values in Array: ', index);
}

// entries() 返回 键值对
for(let [index, value] of arrKeyValue.entries()){
    console.log(index,value); // 0,9  1,8  2,7
}



























