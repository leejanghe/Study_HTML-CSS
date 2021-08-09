## css연결

href라는 속성에 CSS파일 경로를 지정할수 있습니다.

```html
<link href="css/main.css" rel="stylesheet">
```

<br />

## 기본  CSS 작성법

css를 작성할때 기본적인 셀렉터가 있습니다. 셀렉터는 아이디(#id), 클래스(.), 일반태그로 연결해서 작성할수 있습니다.

```js
//html
<div class="title">안뇽</div>

//css
.title{
    color : blue;
    width : 200px;
}
```

<br />

## 셀렉터 우선순위

```js
style=""  // 1000점 (html에서 적용)
#id       // 100점
.class    // 10점
p         // 1점
```

점수가 높을 수록 더 우선적으로 적용됩니다.
