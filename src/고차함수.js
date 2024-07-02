const func = () => {
    return () => {
        console.log('hello');
    }
}
func()();
const aa = func();
aa();
