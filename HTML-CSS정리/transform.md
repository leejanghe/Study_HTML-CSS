## transform

transform은 어떤 요소를 독립적으로 움직이게 만들고 싶을 때 사용합니다. 특히 애니메이션 동작시킬 때 transform 속성을 자주 사용합니다.


```js
.box:hover {
  animation-name : 클래스이름;
  animation-duration : 1s;
  animation-timing-function : linear; //동작속도/
  animation-delay : 1s; //시작 전 딜레이/
  animation-iteration-count : infinite; //몇회 반복할것인가/
  animation-play-state : paused;  //애니메이션을 멈추고 싶은 경우 자바스크립트로 이거 조정/
  animation-fill-mode: forwards;  //애니메이션 끝난 후에 원상복구 하지말고 정지/
}
```

<br />

추가적으로 애니메이션을 효과적으로 사용하기 위해 가장 먼저 `@keyframes` 을 사용합니다

```js
@keyframes test{
    0% {
        transform : translateX(0px); // 애니메이션이 0%만큼 동작시
    }
    50%{
        transform : translateX(-20px); // 애니메이션이 50%만큼 동작시
    }
    100%{
        transform : translateX(20px); // 애니메이션이 100%만큼 동작시
    }
}
```

<br />

## 간단한 기능구현

움직이는 버튼 만들어보기

```css
.btn {
    padding: 30px;
    border-radius: 5px;
    background: rgb(12, 11, 11);
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
}


.btn:hover{
    animation-name: test;
    animation-duration: 1s;
}


@keyframes test{
    0%{
        transform: translateX(0px);
    }
    25%{
        transform: translateX(-20px);
    }
    50%{
        transform: translateX(20px);
    }
    75%{
        transform: translateX(-20px);
    }
    100%{
        transform: translateX(0px);
    }
}
```