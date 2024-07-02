const hof = (a) => (b) => (c) => {
    return a + (b * c);
}
// const first = hof(3);
// const first = (b) => (c) => {
//     return 3 + (b * c);
// }
// const second = first(4);
// const second = (c) => {
//     return 3 + (4 * c);
// }
// const third = second(5);
const third = 3 + (4 * 5);
console.log(third);