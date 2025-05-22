// 流操作练习，从简单到复杂
// 昨晚这些联系，对流的知识基本就掌握了



// 阶段一
// Q1: 从数组中筛选出偶数，并将它们平方，最后求和
let arrQ1 = [1, 2, 3, 4, 5, 6]
const arrQ1Resutl = arrQ1.filter(value => value % 2 === 0)
    .map(value => value * value)
    .reduce((sum, value) => sum += value)
    // .forEach(value => console.log(value))

console.log('Q1 result: ', arrQ1Resutl);

// Q2: 将字符串数组中长度大于3的，转为大写并返回新数组
const arrQ2 = ['hi', 'hello', 'world', 'yo']
const resultQ2 = arrQ2.filter(value => value.length > 3)
    .map(value => value.toUpperCase())
console.log('Q2 result: ', resultQ2);

// Q3: 将嵌套数组 [1, [2, 3], [4, 5]] 展平为一维数组，保留所有偶数
const arrQ3 =  [1, [2, 3], [4, 5]]
const resultQ3 = arrQ3.flat(Infinity)
    .filter(value => value%2==0)
console.log('Q3 result: ', resultQ3);

// 统计一个数组中每个字符串的长度，并返回长度数组总和
const arrQ4 = ['a', 'abc', 'hello', 'sdfsfddsf']
const resultQ4 = arrQ4.map(value => value.length)
    .reduce((sum, value) => sum + value)
console.log('Q4 result: ', resultQ4);



// 阶段2，更复杂，难度提升

// Q5: 从一个学生数组中，找出成绩大于60分的学生的姓名，并按字母顺序排列
const students = [
    { name: 'Alice', score: 58 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 62 },
    { name: 'David', score: 45 }
];

const resultQ5 = students.filter(item => item.score > 60)
    .sort((a,b) => a.name.localeCompare(b.name))
console.log('Q5 result: ', resultQ5);


// Q6: 统计一段文本中每个单词出现的次数（不区分大小写）
const textQ6 = "Hello world hello HELLO";
const countQ6 = {}
textQ6.trim()
    .split(' ')
    .map(value => value.toUpperCase())
    .forEach(value => {
        countQ6[value] = (countQ6[value] || 0) + 1
    })
console.log("Q6 result: ", countQ6);


// Q7: 从一个用户列表中提取所有兴趣（interest）为字符串的一维数组，去重后按字母顺序排列
const users = [
    { name: 'A', interests: ['music', 'movies', 'books'] },
    { name: 'B', interests: ['sports', 'music'] },
    { name: 'C', interests: ['books', 'travel'] }
];
// 输出: ['books', 'movies', 'music', 'sports', 'travel']

let resultQ7 = users.flatMap(item => item.interests)
resultQ7 = [...new Set(resultQ7)]
// resultQ7 = Array.from(resultQ7)

console.log('result Q7: ', resultQ7);


// Q8: 给定一组订单数据，计算每个人的订单总金额
const ordersQ8 = [
    { user: 'Alice', amount: 30 },
    { user: 'Bob', amount: 20 },
    { user: 'Alice', amount: 70 },
    { user: 'Bob', amount: 60 }
];
// 输出: { Alice: 100, Bob: 80 }

// 方法一
// const listQ8 = {}
// ordersQ8.map(item =>{
//     listQ8[item.user] = (listQ8[item.user] || 0) + item.amount
// })

// console.log(listQ8);

// 方法二，使用reduce
const listQ8 = ordersQ8.reduce((acc, item) => {
    acc[item.user] = (acc[item.user] || 0) + item.amount
    return acc
}, {})  // 这里必须给一个初始值{},定义它是一个空的键值对
console.log(listQ8);



// Q9: 将一个嵌套的数字数组展平，并移除重复项，按升序排序
const nestedQ9 = [1, [2, 3], [3, 4, 5], [1, 2]];
const resultQ9 = [...new Set(nestedQ9.flat(Infinity)
    .sort((a,b) => a-b))]
console.log('Q9 result: ', resultQ9);


// ---------------------------------------------
// 阶段三，更加复杂，





/**
 * Q10: 员工绩效分析
 * 给定一组员工数据，每个员工有多个项目的评分，
 * 找出所有员工的平均评分，返回平均分大于80的员工姓名，并按平均分从高到低排序。
 * */
const employeesQ10 = [
    { name: 'Alice', scores: [90, 85, 88] },
    { name: 'Bob', scores: [70, 75, 72] },
    { name: 'Charlie', scores: [95, 92, 96] },
    { name: 'David', scores: [60, 65, 58] }
];

let resultQ10 = employeesQ10.reduce((acc, item) => {
    let scoresList = item.scores
    let scoresAvg = scoresList.reduce((sum, value) => sum += value) / scoresList.length
    const newItem = {}
    newItem[item.name] = (scoresAvg || 0)
    acc.push(newItem)
    return acc
},[]).sort((a,b) => {
    const [key1, value1] = Object.entries(a)[0];
    const [key2, value2] = Object.entries(b)[0];

    return value1 - value2
})

// resultQ10 = resultQ10.sort((a,b) => b.value - a.value)

console.log('Q10 result: ', resultQ10);

/**
 * Q11: 购物车优惠计算
 * 给定购物车数组，包含商品名称、单价和数量，计算每个商品的总价，
 * 然后找出总价大于100的商品名称列表，按字母排序。
 */
const cartQ11 = [
    { product: 'TV', price: 450, quantity: 1 },
    { product: 'Phone', price: 300, quantity: 2 },
    { product: 'Book', price: 15, quantity: 4 },
    { product: 'Pen', price: 5, quantity: 10 }
];

const resultQ11 = cartQ11.filter(item => item.price * item.quantity > 100)
    .map(item => item.product)
    .sort((a,b) => a.localeCompare(b))
console.log('Q11 result:', resultQ11);







/**
 * Q12: 评论系统数据清洗
 * 有一组评论数据，每条评论包含用户名、评论内容和回复（回复是数组），
 * 提取所有用户名和回复用户名，合并去重后按字母排序。
 */
const commentsQ12 = [
    { user: 'Alice', content: 'Good', replies: ['Bob', 'Charlie'] },
    { user: 'Bob', content: 'Thanks', replies: ['Alice'] },
    { user: 'Charlie', content: 'Nice', replies: [] }
];

// 输出: ['Alice', 'Bob', 'Charlie']
// 思路，先使用reduce合并所有，在使用flat降维数组，再使用set去重，再使用...变回数组，再使用sort排序
const resultQ12 = [...new Set(commentsQ12.reduce((acc, item) => {
    acc.push(item.user)
    acc.push(item.replies)
    return acc
}, []).flat(Infinity))].sort((a,b) => a.localeCompare(b))
console.log('Q12 result: ', resultQ12);




/**
 * Q13: 电影评分数据分析
 * 有一个电影列表，每个电影有多个评分（1-5分），计算每个电影的平均分，
 * 然后返回平均分最高的前三部电影名称。
 */
const moviesQ13 = [
    { title: 'Movie A', ratings: [4, 5, 3, 4] },
    { title: 'Movie B', ratings: [5, 5, 5, 4] },
    { title: 'Movie C', ratings: [3, 2, 4] },
    { title: 'Movie D', ratings: [4, 4, 4, 4] },
];

  // 输出: ['Movie B', 'Movie D', 'Movie A']

const resultQ13 = moviesQ13.map(item => {
    let avg = item.ratings.reduce((acc, value) => acc + value) / item.ratings.length
    item['avg'] = avg
    return item
})
    .sort((a,b) => b['avg'] - a['avg'])
    .slice(0, 3)
    .map(item => item.title)

console.log('Q13 result: ', resultQ13);



/**
 * Q14: 订单和用户合并统计
 * 有两个数组，一个是用户信息，一个是订单信息，
 * 返回一个新数组，每个元素包含用户名和该用户所有订单的总金额。
 */

const usersQ14 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const ordersQ14 = [
    { userId: 1, amount: 50 },
    { userId: 2, amount: 30 },
    { userId: 1, amount: 70 },
    { userId: 2, amount: 20 },
];

  // 输出:
  // [
  //   { name: 'Alice', total: 120 },
  //   { name: 'Bob', total: 50 }
  // ]

const totalMap = ordersQ14.reduce((acc, order) => {
    acc[order.userId] = (acc[order.userId] || 0) + order.amount;
    return acc
}, {})

const resultQ14 = usersQ14.map(user => {
    obj = {
        name: user.name,
        total: ptotalMap[user.id] || 0
    }
    return obj
})
console.log('Q14 resultQ14: ', resultQ14);














