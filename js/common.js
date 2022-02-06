//HEADER
var $headerSpace = document.querySelector("#header");
var $headerCont = `

    <div class="wrap">
        <div class="logo">
            <a href="./index.html"><img src="./img/head_logo.png" alt="한화 로고"></a>
        </div>

        <div class="menu">
            <ul>
                <li><a href="./company.html">Hanwha E&C</a>
                    <ul>
                        <li><a href="">경영이념</a></li>
                        <li><a href="">연혁</a></li>
                        <li><a href="">조직도</a></li>
                        <li><a href="">재무정보</a></li>
                        <li><a href="">CI</a></li>
                        <li><a href="">BI</a></li>
                        <li><a href="">찾아오시는길</a></li>
                    </ul>
                </li>
                <li><a href="./business.html">BUSINESS</a>
                    <ul>
                        <li><a href="">토목 사업</a></li>
                        <li><a href="">건축 사업</a></li>
                        <li><a href="">주택 사업</a></li>
                        <li><a href="">재무정보</a></li>
                        <li><a href="">플랜트 사업</a></li>
                        <li><a href="">기술연구소</a></li>
                    </ul>
                </li>
                <li><a href="./pr_center.html">PR CENTER</a>
                    <ul>
                        <li><a href="">사회공헌</a></li>
                        <li><a href="">공익사업</a></li>
                        <li><a href="">활동내용</a></li>
                        <li><a href="">윤리경영</a></li>
                        <li><a href="">공지사항</a></li>
                        <li><a href="">사내소식</a></li>
                        <li><a href="">홍보자료실</a></li>
                    </ul>
                </li>
                <li><a href="./careers.html">CAREERS</a>
                    <ul>
                        <li><a href="">인재개발</a></li>
                        <li><a href="">인사제도</a></li>
                        <li><a href="">직무소개</a></li>
                        <li><a href="">채용공고</a></li>
                        <li><a href="">채용FAQ</a></li>
                    </ul>
                </li>
                <li><a href="./customer.html">CUSTOMER</a>
                    <ul>
                        <li><a href="">고객문의</a></li>
                        <li><a href="">고객문의확인</a></li>
                        <li><a href="">사이버신문고</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="right">
            <div class="lang_btn">
                <a href="" class="kor" onmouseover="korMouseOver()"; onmouseout="korMouseOut()";></a>
                <a href="" class="eng" onmouseover="engMouseOver()"; onmouseout="engMouseOut()";></a>
            </div>

            <div class="hamburger" onmouseover="hamMouseOver()"; onmouseout="hamMouseOut()";>
                
            </div>
        </div>
    </div>

`;
$headerSpace.innerHTML = $headerCont;



//- right menu - language image mouse over/out
var $header_kor = document.querySelector("#header a.kor");
function korMouseOver(){
    $header_kor.style.backgroundPosition = "0 50%";
}
function korMouseOut(){
    $header_kor.style.backgroundPosition = "0 50%";
}

var $header_eng = document.querySelector(".eng");
function engMouseOver(){
    $header_eng.style.backgroundPosition = "0 50%";
}
function engMouseOut(){
    $header_eng.style.backgroundPosition = "-29.5px 50%";
}

//- right menu - hamburger mouse over/out
var $hamburger = document.querySelector("#header .hamburger");
function hamMouseOver(){
    $hamburger.style.backgroundPosition = "-29px 50%";
}
function hamMouseOut(){
    $hamburger.style.backgroundPosition = "0 50%";
}





// FOOTER
var $footerSpace = document.querySelector("#footer");
var $footerCont = `
    <div class="wrap">

        <div class="foot_left">
            <div class="foot_logo">
                <a href=""><img src="./img/footer_logo.png" alt="한화 로고"></a>
            </div>

            <div class="foot_main">
                <div class="foot_menu">
                    <ul>
                        <li><a href="">해외현장 임직원가족</a></li>
                        <li><a href="">개인정보 처리방침</a></li>
                        <li><a href="">공정거래 사업지침</a></li>
                        <li><a href="">협력업체 시스템</a></li>
                    </ul>
                </div>

                <div class="foot_info">
                    <p>서울시 영등포구 여의대로 24 전경련회관</p>
                    <p>TEL 02.2055.6000 080.729.2400</p>
                    <p>Copyright 2022 Hanwha Engineering & Construction corp.</p>
                </div>
            </div>
        </div>

        <div class="foot_right">
            <div class="sns">
                <ul>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>

            <div class="family_site">
                <div class="site_head">
                    <a href=""><img src="./img/site_head.jpg" alt=""></a>
                </div>
                
                <div class="site_body"></div>
            </div>
        </div>

    </div> <!--wrap-->

    <div class="top_btn">
        <a href="#header"><img src="./img/top_btn.png" alt="위로 가는 버튼"></a>
    </div>
`;
$footerSpace.innerHTML = $footerCont;



//공용

$(document).ready(function(){

    //top_btn
    $(".top_btn").click(function(){
        $("html, body").animate({scrollTop : $("body").offset().top}, 500);
        return false;
    });


});