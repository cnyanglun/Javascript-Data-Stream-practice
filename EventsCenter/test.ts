import EventCenter from './event-center.js'; // 注意 .js 后缀，因为是 ESModule
import notifiedObject from './notifiedObject.js'

const eventCenter = new EventCenter();

// 创建物体
const obj1 = new notifiedObject('object1');
const obj2 = new notifiedObject('object2');
const obj3 = new notifiedObject('object3');

// 模拟物体 1、2、3 监听事件 A
eventCenter.on('A', () => obj1.notify());
eventCenter.on('A', () => obj2.notify());
eventCenter.on('A', () => obj3.notify());

// 触发事件 A
eventCenter.emit('A');
