// const callback = () => {
//     console.log('2초마다 실행됩니다');
//     setTimeout(callback, 2000);
// }
// setTimeout(callback, 2000);
// 위 구현을 setInterval() 로 바꿔서 구현
const intervalId = setInterval(() => {
    console.log('2초마다 실행됩니다');
}, 2000);

const interval2 = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

setTimeout(() => {
    clearInterval(intervalId)
}, 10000);
