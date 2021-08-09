## html 기본 문법

html은 <태그>로 이루어져있습니다. 태그들을 열고 닫은 후 내부에 글이나 그림을 넣을수 있습니다.

```html
<p>저는 문장 같은거를 써요!</p>

<h1>저는 제목 위주로 씁니다!</h1>

<img src="이미지경로">

<a href="#">링크링크!</a>

<button>버튼클릭!</button>

<ul><li>쩜! 리스트작성!</li></ul>

<ol><li>숫자! 리스트작성!</li></ol>

<select>
    <option>옵션1</option>
    <option>옵션2</option>
    <option>옵션3</option>
</select>
```

위에 있는 것들은 아주 기본적인 태그 입니다! 

<br />

## input태그

input태그는 img태그와 같이 단일 태그입니다. 타입에 따라 다양한 기능이 있습니다. 그중 자주 쓰는 기능만 정리!!!

```html
<input type="text">
<input type="email">
<input type="password">
<input type="radio">
<input type="file">
<input type="checbox">
<input type="submit">
```

추가적으로 input에 넣는 대표적인 속성들이 있습니다.

```html
<input placeholder="회색글씨" value="입력된값" name="기능개발에 필요한 인풋이름">
```

## input css기능

css에서 html속성으로 css셀렉터를 사용할수 있습니다.

```css
/* css 파일 */
input[type=submit]{
    color : red;
}
```

input속성이 submit인 요소만 찾아서 스타일을 줄 수 있습니다!