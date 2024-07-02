const func = (msg) => {
    return () => {
        console.log(msg);
    }
}
func('hihi')();
const aa = func('hihi');
aa(); // 함수로 호출