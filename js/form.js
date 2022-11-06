function scrollUp(){
    const vheight = $('.test').height(); // 각 문제들을 감싸고 있는 .test의 height 값을 가져오는 코드
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() /* 해당 코드는 최상단에 있는 height 반환*/ / vheight) -1) * vheight)
    }, 500);
}

function scrollDown(){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() /* 해당 코드는 최상단에 있는 height 반환*/ / vheight) + 1) * vheight)
    }, 500);
}

$(function(){
    $('.next_btn').click(function(e){ //next button눌렀을 때 문항이 선택되었는지 검사, scrolldown
        let divs = $(this).parent().prev().children() ;
        //$this : 클릭 이벤트가 발생한 요소 
        //($this).parent() 클릭 이벤트가 발생한 요소의 부모, 즉 버튼을 감싸고 있는 div 태그
        //($this).parent().prev() 그 태그의 이전 태그, 즉 문항들을 감싼 또다른 div 태그
        //($this).parent().prev().children() - div 태그의 자식, 즉, 문항들의 배열
        let inputs = divs.find('input:checked');
        if(inputs.length < 1){
            alert('문항이 선택되지 않았습니다');
            return false;
        }
        e.preventDefault(); // button 클릭 시 발생하는 기본 동작들 중단 
        scrollDown();
    });

    $('.prev_btn').click(function(e){ //이전 button눌렀을 때 scrollUp 호출
        e.preventDefault();
        scrollUp();
    });

    $('#form').submit(function(e){ //form 전체의 문항이 선택되었는지 검사
        let radios = $('input[type=radio]:checked');
        if (radios.length<3){
            alert("문항이 선택되지 않았습니다");
            return false;
        }
        return true;
    });
    
    $('html, body').animate({ //새로고침 했을 때 화면이 이동되게 하는 함수. scrollup과 down은 animate함수 주로 사용
        scrollTop:0 
    }, 500);
});