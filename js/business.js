//business

// cont1 - 이미지 슬라이드


//공용 함수구문
    // function commonFunc(){
    //     var $curSlide = $("#slider .slider_space ul li").eq(2).attr("rel");
    //     console.log($curSlide);
    //     // $("#slider .rel_num").text($curSlide);
    // }


    //#1-1. 구조를 구성한다. (센터 기준으로 좌측에 슬라이드 이미지가 2장이 존재) css에서 margin-left: -200%;
    //#1-2. 맨 아래의 2장의 슬라이드를 맨 처음으로 가져다 놓는다. (nextAll() : 기준 선택자로부터 다음에 위치한 모든 형제)
    var $lastSlide = $("#cont1 .slide_space ul li").eq(2).nextAll();
    console.log($lastSlide);
    $("#cont1 .slide_space ul").prepend($lastSlide);


    //#2. 자동 슬라이드 기능 구현
    setInterval(function(){
        var $hover = $("#cont1 .slide_space").hasClass("hover");
        var $stop = $("#cont1 .slide_space").hasClass("stop");
        
        if($hover == true || $stop == true){
        }else{
            var $first = $("#cont1 .slide_space ul li").first();
            $("#cont1 .slide_space ul").stop().animate({"margin-left":"-200%"}, 350, function(){
                $("#cont1 .slide_space ul").append($first).css("margin-left", "-100%");

                // commonFunc();

            });
        }
    }, 3500);

    //#3. 마우스오버시 자동 슬라이드의 일시정지기능 구현
    $("#cont1 .slide_space").hover(function(){  //마우스가 영역 내로 진입시 이벤트 발생 : mouseenter 이벤트
        $(this).addClass("hover");
    }, function(){  //마우스가 영역 외로 이탈시 이벤트 발생 : mouseleave 이벤트 
        $(this).removeClass("hover");
    });


    //#5. 이전 버튼과 다음 버튼(화살표)
    $("#cont1 .slide_space .slide_prev").click(function(){
        var $last = $("#cont1 .slide_space ul li").last();
        $("#cont1 .slide_space ul").stop().animate({"margin-left":"0%"}, 350, function(){
            $("#cont1 .slide_space ul").prepend($last).css("margin-left","-100%");
            // commonFunc();
        });

        return false;
    });
    $("#cont1 .slide_space .slide_next").click(function(){
        var $first = $("#cont1 .slide_space ul li").first();
        $("#cont1 .slide_space ul").stop().animate({"margin-left":"-200%"}, 350, function(){
            $("#cont1 .slide_space ul").append($first).css("margin-left","-100%");
            // commonFunc();
        });
        
        return false;
    });







//cont2
var cont2_arr = [
    ["업무시설", "예술적이고 쾌적한 사무용 빌딩을 한화건설이 만듭니다.", "01_img.png"],
    ["레저시설", "조화를 이뤄 여유로운 레저생활을 창조합니다.", "02_img.png"],
    ["판매/영업시설", "시선과 발길이 머무는 공간을 완성합니다.", "03_img.png"],
    ["의료/교육시설", "최적의 의료환경, 최고의 교육환경을 만들어 갑니다.", "04_img.png"],
    ["특수시설", "대전 엑스포 한빛탑, 종합운동장, 서울역사 등 지역의 랜드마크를 만들어갑니다.", "05_img.png"],
    ["리모델링", "시오래된 건물이 꿈에 그리던 아름다운 모습으로 재탄생합니다.", "06_img.png"]
];

var cont2_content = document.querySelector("#cont2 .content ul");
var cont2_inner ="";

cont2_arr.forEach(function(v, i){
    cont2_inner += `
    <a href="">
        <li class="box_bg" style="background-image: url(../img/business/${v[2]});";>
            <div class="top">
                <span class="nanum">0${i+1}</span>
                <p class="title nanum">${v[0]}</p>
            </div>

            <p class="text nanum">${v[1]}</p>
        </li>
    </a>
    `;
});
cont2_content.innerHTML = cont2_inner;



