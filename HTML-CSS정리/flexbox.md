## flexbox

박스들을 감싸는 부모 요소에게 display:flex를 사용하면 자식박스들이 가로정렬로 배치 됩니다.

```css
/* 자주쓰는 세부 속성 */
.flex-container {
    display: flex;
    justify-content :center; /*좌우 정렬*/
    align-items : center;    /*상하 정렬*/
    flex-wrap : wrap;        /*넘치는 요소 wrap 처리*/
    flex-direction : column; /*세로 정렬*/
}

.box{
    flex-grow:2;  /*폭이 상대적으로 몇배인지 결정*/
}
```

<br />

## 헤더 간단하게 구현

```html
<!-- html -->

 <!-- 간단히 해더 만들기 -->
    <div class="flex-container">
        <p class="lo">joycoiding</p>
        <div style="flex-grow: 10;"></div>
        <div class="flex-box">Products</div>
        <div class="flex-box">Services</div>
        <div class="flex-box">Log in</div>
    </div>
```

<br />

```css
.lo{
    font-size: 24px;
    font-weight: 700;
    padding-left: 20px;
}

.flex-box{
    padding-right: 20px;
    cursor: pointer;
}

.flex-container {
    display: flex;
    align-items: center;
}
```