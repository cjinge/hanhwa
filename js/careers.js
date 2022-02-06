//careers.js

//cont1 - 인재상
var cont1_arr = [
    ["CHALLENGE", "도전적인 한화인", "기존의 틀에 안주하지 않고 변화와 혁신을 통해 최고를 추구한다.", "맡은 분야에서 최고가 되기 위해 적극적인 자기개발을 한다. 열린 사고와 창의적 발상으로 새로운 방안과 기회를 찾아낸다. 할 수 있다는자신감으로 도전적인 목표를 설정하고 달성한다.", "icon_challenge.jpg"],
    ["DEDICATION", "헌신적인 한화인", "회사, 고객, 동료와의 인연을 소중히 여기며 보다 큰 목표를 위해 혼신의 힘을 다한다.", "고객과 약속을 소중히 여기며 고객가치를 지속적으로 창출한다. 공동운명체의식을 바탕으로, 서로의 가능성을 믿고 협력한다.", "icon_dedication.jpg"],
    ["INTEGRITY", "진실된 한화인", "자긍심을 바탕으로 원칙에 따라 바르고 공정하게 행동합니다.", "눈 앞의 이익에 흔들리지 않고 원칙에 따라 정직하게 행동한다. 공과 사를 구분하여 능력과 성과에 따라 투명하고 공정하게 대우한다.", "icon_integrity.jpg"],
];

var cont1_content = document.querySelector("#cont1 .content");
var cont1_inner = "";

cont1_arr.forEach(function(v, i){
    cont1_inner += `
    <div class="box">
        <div class="image" style="background-image:url(./img/careers/${v[4]});"></div>
        <div class="title">
            <p class="eng">${v[0]}</p>
            <h6>${v[1]}</h6>
        </div>
        <div class="text">
            <p>${v[2]}</p>
            <p>${v[3]}</p>
        </div>
    </div>
    `;
});
cont1_content.innerHTML = cont1_inner;


//cont3 - 인재육성
var cont3_arr = [
    ["회사 비전 및 가치 공유 프로그램", "img01.jpg", "icon01.png"],
    ["전문인력 육성 프로그램", "img02.jpg", "icon02.png"],
    ["GLOBAL 인재 양성 프로그램", "img03.jpg", "icon03.png"],
];

var cont3_content = document.querySelector("#cont3 .content .top_cont");
var cont3_inner = "";

cont3_arr.forEach(function(v, i){
    cont3_inner += `
    <div class="box">
        <div class="image" style="background-image:url(./img/careers/${v[1]})";>
            <div class="icon"><img src="./img/careers/${v[2]}"></div>
            <p>${v[0]}</p>
        </div>
    </div>
    `;
});
cont3_content.innerHTML = cont3_inner;











