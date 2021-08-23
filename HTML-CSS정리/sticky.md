## sticky

스티키는 스크롤이 되었을 때 화면에 고정되는 요소를 만들때 사용합니다.  
position:fixed는 항상 화면에 고정되는 요소를 만들때 사용하지만 positon:sticky 는 스크롤이 되어서 이 요소가 화면에 나오면 고정시킨다는 특성이 있습니다.

<br />

## 간단한 예제 만들기

```html
    <div class="black">
        <h4 class="text">hello joycoiding!!! this is sticky!!!! wow!!!</h4>
        <div class="sticky">저는 잠시 고정됩니다!!</div>
    </div>
```

```css
.black {
    background: black;
    height: 3000px;
    margin-top: 800px;
    margin-bottom: 1600px;
}

.text{
    float:left;
    color:white;
    padding:20px;
    font-size: 2rem;
}

.sticky{
    position: sticky;
    background-color: tomato;
    width: 400px;
    height: 700px;
    float: right;
    top:100px;
    font-size: 2rem;
    color: white;
    padding: 20px;
}
```