# Movie Sommelier(무비 소믈리에)

## 1. 목표와 기능

### 1.1 목표
- 영화를 보고싶은데 어떤 영화를 봐야할지 고민하는 사용자를 위한 서비스
- 최신영화 추천 서비스
- 과거의 명작 추천 서비스
### 1.2 기능
- 사용자 취향을 기반으로 챗봇이 자동으로 영화를 추천
- 최신영화의 줄거리를 간략하게 소개하고 예고편을 볼 수 있도록 링크 연동
- 베스트영화의 줄거리를 간략하게 소개하고 예고편을 볼 수 있도록 링크 연동

## 2. 개발 환경 및 배포 URL
### 2.1 개발 환경
- html
- Java Script

### 2.2 배포 URL
https://k2h2j3.github.io/Ormi_Project_1/

## 3. 프로젝트구조

```bash
C:.
│  index.html
│  
└─assets
    ├─css
    │      footer.css
    │      loading.css
    │      main.css
    │      modal.css
    │      movieposter.css
    │      
    ├─icon
    │      film.png
    │      
    ├─js
    │      Chatbot.js
    │      modal.js
    │      
    └─movieimg
            bestmovie1.png
            bestmovie2.png
            bestmovie3.png
            bestmovie4.png
            movie1.png
            movie2.png
            movie3.png
            movie4.png
```
            
## 4. 역할 분담
- 개인프로젝트 : 김승겸

## 5. UI

![loading](https://github.com/k2h2j3/Ormi_Project_1/assets/74819625/194d8a13-0f76-4061-b12c-30328f21171d)

영화 취향을 입력 후 검색 시 챗봇의 답변이 올라오기 전까지 로딩화면 띄움


![answer](https://github.com/k2h2j3/Ormi_Project_1/assets/74819625/875e5d2f-c7b9-4e0a-8d54-6dd304ce4a02)

챗봇의 답변이 올라오면 로딩화면이 사라짐


![link](https://github.com/k2h2j3/Ormi_Project_1/assets/74819625/f6fc0452-78fd-4b54-9db8-4ff41896ce09)

영화 포스터이미지에 마우스를 갖다대면 확대되며 클릭 할 시 모달창이 나오면서 줄거리와 출연진 소개, 이미지를 클릭하면 영화 예고편 유튜브 링크로 이동




## 6. 메인 기능
- 년도(시작 연도~끝 연도), 장르(액션, 로맨스, 코미디등..), 국내외를 입력하면 APi로 연동된 챗봇이 입력된 사용자의 취향정보를 통해 자동으로 영화를 추천해준다.
- 최신 영화, 베스트 영화 소개

## 7. 추가 기능
- 검색 버튼을 누르면 챗봇의 답변이 올라오기전까지 로딩창이 나오도록 구현
- 사용자가 영화관에서 영화를 고르는 듯한 느낌을 주기 위해 디자인 구현
- 최신 영화, 베스트 영화 포스터이미지에 마우스를 대면 확대하는 효과를 통해 눈에 띄기 쉽게 구현
- 포스터이미지를 누르면 모달을 통해 영화 출연진과 줄거리를 간략히 소개하고 예고편을 볼 수 있는 링크이미지 구현

## 8. 개발하며 느낀 점
html, css, JavaScript 를 처음 배우고 시작한 프로젝트이다.
처음에 html 공간분할, 쿼리 사용, css 입히기, javascript 함수 구현등에 익숙치 않았지만 사용하면서 손에 익숙해지면서 그 동안 배웠던 것들을 정리할 수 있는 시간이었다.
특히 css 디자인, 로딩바 구현, 자바스크립트 함수 구현(버튼 이벤트, 모달)은 구글링이 정말 많은 도움이 되었고, 심화적으로 더 배울 수 있는 시간이었다.
강사님의 피드백을 통해 html의 구조(header, main, footer)와 id, class명을 짓는것에 대해 배울 수 있었고, css 디자인(원색 조합 비추천)에 대해서도 알 수 있었다.
다만 영화정보 API를 통해 이미지와 줄거리를 가져오는 기능을 구현하는데 어려움을 겪어 결국 구현하지 못했던 것이 아쉬웠다.
