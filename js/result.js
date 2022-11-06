const copyBtn = document.querySelector('.copy_btn');
const facebookShare = document.querySelector('.facebook_share');

//// 카카오 공유 코드 ///
const kakaoShare = document.querySelector('.kakao_share');

$(function(){
    let url = window.location.href; //내 url
    let img = $('.result_img img').attr('src'); // img의 src 값을 가져와서 넣어줌

    $("meta[property='og\\:url']").attr("content", url);
    $("meta[property='og\\:image']").attr("content", url);
});

// kakaoShare.init('c89568cf4e08bb792b4bee2b01b9f965');
// 해당부분만 주석을 해제하면 url, facebook 전체가 안됨
function sendLink() {
    let result_url = window.location.href;
    Kakao.Share.sendDefault ({
        objectType: 'feed',
        content: {
        title: '나의 개발 유형은?',
        description: '나에게 꼭 맞는 개발 유형을 알아보자!!',
        imageUrl:
            'https://mbit.weniv.co.kr/static/img/mbit_thumbnail.png',
        link: {
            mobileWebUrl: 'https://mbit.weniv.co.kr',
            webUrl: 'https://mbit.weniv.co.kr',
        },
        },
        social: {
            likeCount: 286,
            commentCount: 45,
            sharedCount: 845,
        },
        buttons: [
        {
            title: '결과 보러가기',
            link: {
            mobileWebUrl: result_url,
            webUrl: result_url,
            },
        },
        {
            title: '테스트 하러가기',
            link: {
            mobileWebUrl: 'https://mbit.weniv.co.kr',
            webUrl: 'https://mbit.weniv.co.kr',
            },
        },
        ],
    });
}

//// 카카오 공유 코드 끝 ////



function copyUrl(){
    let tmp = document.createElement('input'); //임시로 만듬
    let url = window.location.href;

    //body에 tmp를 붙이고, url을 저장한 뒤 복사하고 제거. 다른 방법들도 있음
    document.body.appendChild(tmp); 
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다");
}

function sharefacebook(){
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}

copyBtn.addEventListener('click', copyUrl); //함수 호출
facebookShare.addEventListener('click', sharefacebook);

//// 카카오 공유 코드 ////
kakaoShare.addEventListener('click', sendLink);