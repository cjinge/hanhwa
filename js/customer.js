//customer

//cont1 - 고객문의
var cont1_arr = [
    ["꿈에그린 고객센터", "080 - 279 - 2400", "icon01.png"],
    ["꿈에그린 고객문의 〉", "", "icon02.png"],
    ["꿈에그린 A/S문의 〉", "", "icon03.png"],
];

var cont1_content = document.querySelector("#cont1 .contact .content");
var cont1_inner = "";

cont1_arr.forEach(function(v, i){
    cont1_inner += `
    <div class="box">
        <div class="apt_reference">
            <p>${v[0]}</p>
            <p>${v[1]}</p>
        </div>
        <div class="image">
            <img src="./img/customer/${v[2]}" alt="">
        </div>
    </div>
    `;
});
cont1_content.innerHTML = cont1_inner;