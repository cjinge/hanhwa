//company.js

//cont2 - 경영이념
var cont2_arr = [
    ["환경경영", "[Environmental Management]", "인간과 환경이 조화로운 세상을 열어가고 환경보전을 최우선으로 생가하는 기업"],
    ["윤리경영", "[Ethical Management]", "기업의 이익에 앞서서 정직과 신용을 바탕으로 고객과 사회, 국가에 대한 의무를 우선하는 윤리경영 실현"],
    ["인재경영", "[Human resources management]", "인재경영을 통해 임직원의 지식과 창의력, 도덕성이 최고로 실현될 수 있도록 역량 집중"]
];

var cont2_content = document.querySelector("#cont2 .content .image");
var cont2_inner = "";

cont2_arr.forEach(function(v, i){
    cont2_inner+= `
    <div class="box">
        <h6>${v[0]}</h6>
        <p>${v[1]}</p>
        <p>${v[2]}</p>
    </div>
    `;
});
cont2_content.innerHTML = cont2_inner;