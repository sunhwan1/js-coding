const data = [
    {
        url: 'http://asdfas.net/img/asdfasdf/'
    },
    {
        url: 'http://twojasdlkf.net/img/aratdsf'
    },
    {
        url: 'http://bhoertm.net/img/biuherk/'
    },
    {
        url: null
    }
];

console.log('Original data:', data);

const data2 = data.map(item => {
    if (item.url !== null && typeof item.url === 'string') {
        return {
            url: item.url.endsWith('/') ? item.url.slice(0, -1) : item.url
        };
    } else if (item.url === null) {
        return {
            url: null // 혹은 다른 처리 방법을 선택할 수 있음
        };
    } else {
        // 다른 경우, 예를 들어 item.url이 문자열이 아닌 경우에 대한 처리
        return {
            url: item.url // 그대로 반환하거나 다른 처리 방법을 선택할 수 있음
        };
    }
});

console.log('Modified data:', data2);
