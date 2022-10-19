
## 원티드 프리온보딩 프론트엔드 코스


 ## 1. 배포 링크 
 ### https://todoapp365.netlify.app

 ### [ 사전과제 블로깅](https://velog.io/@support/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%82%AC%EC%A0%84%EA%B3%BC%EC%A0%9C)
 

## 2. 프로젝트 구조
```bash

src
├── 📂 api
├── 📂 component
│   ├── 📂 auth
│   │    ├── 📄 Login
│   │    └── 📄 SignUP
│   ├── 📂 todo
│   │    ├── 📄 TodoHeader
│   │    ├── 📄 TodoCreate
│   │    ├── 📄 TodoList 
│   │    └── 📄 TodoItem
├── 📂 hooks
├── 📂 pages
│   ├── 📄 auth
│   └── 📄 todo
└── 📂 utils

``` 
## 3. 기능 시연 GIF

- 로그인 , 회원가입
- 로그인 성공시 todo 페이지로 리다이렉트

<img src="https://user-images.githubusercontent.com/86206374/196597041-76df2fad-5b60-4d06-b9d7-d161e55f964c.gif" width="500" height="450"/>

- Todo List 추가, 수정, 삭제 
- 로그아웃

<img src="https://user-images.githubusercontent.com/86206374/196597578-733c4e83-6490-4539-b98b-66ce709d7b53.gif" width="500" height="450"/>

- 성능 최적화

<img src="https://user-images.githubusercontent.com/86206374/196598915-73372383-cccb-414a-b16b-78a9f165ffab.gif" width="500" height="450"/>




## 4. 프로젝트 설치 및 실행

1. root 경로에 .env 파일 생성

```
REACT_APP_API_URL=https://pre-onboarding-selection-task.shop
```

2. 프로젝트 패키지 설치

```
npm install
```

3. 프로젝트 실행
```
npm start
```


## 5. 사용 라이브러리


Axios 
, react-router-dom

Emotion , 
React-Icons , 
react-toastify 
