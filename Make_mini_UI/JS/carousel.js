$('.slide-1').click(()=>{
    $('.slide-container').css('transform','translateX(0vw)')
})

$('.slide-2').click(()=>{
    $('.slide-container').css('transform','translateX(-100vw)')
})

$('.slide-3').click(()=>{
    $('.slide-container').css('transform','translateX(-200vw)')
})

$('.slide-4').click(()=>{
    $('.slide-container').css('transform','translateX(-300vw)')
})


// 투버튼

var currentImg = 1
$('.slide-next').click(()=>{
    
        $('.slide-container').css('transform','translateX(-' + currentImg +'00vw)')

        if(currentImg < 3){
            currentImg = currentImg +1
        }
})

$('.slide-before').click(()=>{
    $('.slide-container').css('transform','translateX(-' + (currentImg-1) +'00vw)')
    if(currentImg > 1){
        currentImg = currentImg -1;
    }
})