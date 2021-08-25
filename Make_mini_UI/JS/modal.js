// 제이쿼리로 구현
$('#login').on('click',()=>{
    $('.black-bc').fadeIn();
})

$('#btn-close').on('click',()=>{
    $('.black-bc').fadeOut();
})

$('form').on('submit',(e)=>{
    if($('#email').val()===''){
        e.preventDefault();
        $('#email-alert').show()
    }
    if($('#password').val()===''){
        e.preventDefault();
        $('#password-alert').show()
    }else{
        alert('로그인이 완료되었습니다!')
        $('#email-alert').hide()
        $('#password-alert').hide()
        $('.black-bc').fadeOut();
    }
    
})


//.hide, show, slideDown, slideUp

// // 일반적인 자바스크립트로 구현하기
// var showLogin = document.querySelector("#login"); 
// var showbg = document.querySelector(".black-bc")
// var btnClose = document.getElementById("btn-close"); 

// showLogin.addEventListener("click", ()=>{
//     showbg.style.display="block"
// }); 

// btnClose.addEventListener("click", ()=>{
//     showbg.style.display="none"
// }); 

// if 문으로 해보기

// $('#login').on('click',()=>{
//     if($('.dd').val() ==='안녕'){
//         $('.black-bc').fadeIn();
//     }
    
// })