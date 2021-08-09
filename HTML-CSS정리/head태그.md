## head 태그

html은 head태그와 body태그로 구성되어 있습니다.

```html
<!DOCTYPE HTML>
<head>
    <!-- 생략 -->
</head>
<body>
    <!-- 생략 -->
</body>
```

head태그에는 각종 css파일들, js파일, 사이트 제목, 여러가지 meta태그들을 넣을수 있습니다.

## meta태그

```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="안녕하세여 조이코딩입니당!">
  <meta name="keywords" content="HTML,CSS,JavaScript,자바스크립트,코딩">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

사이트의 인코딩 형식을 지정할때 `charset="UTF-8"`라고 속성을 적을수 있습니다.  
`name="description"`속성은 사이트의 설명을 적을수 있습니다.  
`name="keywords"`속성은 검색에 도움을 줍니다.  
`name="viewport"`속성은 화면 설정입니다.