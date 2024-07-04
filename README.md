## REQUIREMENT 셋업 필요 툴.

- nodejs
- vscode

## HOW TO INSTALL

- git clone
```cmd
\> git clone https://github.com/ICTP-june/js-coding.git
Cloning into 'js-coding'...
remote: Enumerating objects: 59, done.
remote: Counting objects: 100% (59/59), done.
remote: Compressing objects: 100% (37/37), done.
remote: Total 59 (delta 12), reused 57 (delta 10), pack-reused 0
Receiving objects: 100% (59/59), 23.01 KiB | 5.75 MiB/s, done.
Resolving deltas: 100% (12/12), done.
```

- npm install
```
\> npm install --save-dev
added 71 packages, and audited 72 packages in 784ms

13 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## HOW TO USE

### src/ 아래 내용 
- `node filename.js`로 실행
```
\> node data.js
```

### newsserver/newsapi.js 

+ 사전작업
  + APIkey 세팅
    - [https://newsapi.org](https://newsapi.org) 가입 후 로그인, apikey 참조

  + apiKey 아래 `YOUR_API_KEY`에 인입.
```js
// line 5
const API_KEY = 'YOUR_API_KEY';
```

- newsapi 실행
```
newsserver\> node newsapi.js
```

- 동작 확인
![](https://blog.kakaocdn.net/dn/H1Urn/btsInFkuVdW/ydTJF3cNhYmC4fC3Y99Fy0/img.png)
