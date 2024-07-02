// const r = solution(2,91);
// console.log(r);
function solution_181931(a, d, included) {
    let nums = Array(included.length);
    let next = a;
    let result = 0;
    for(let i = 0; i < included.length; i++){
    nums[i] = next;
    next += d;
        if(included[i]){
            result += nums[i];
        }
    }
    return result;
}
console.log(solution_181931(3,4,[true, false, false, true, true]));

function solution_181933(a, b, flag) {
    return flag? a+b : a-b;
}

console.log(solution_181933(-4,7,true));

