function next1() {
    var div = document.getElementById('postcard1');
    div.style.zIndex = '-5';
}
function next2() {
    var div = document.getElementById('postcard2');
    div.style.zIndex = '-4';
}
function next3() {
    var div = document.getElementById('postcard3');
    div.style.zIndex = '-3';
}
function next4() {
    var div = document.getElementById('postcard4');
    div.style.zIndex = '-2';
}

function no(){
    var div = document.getElementById('crying');
    var div2 = document.getElementById('postcard1');
    var div3 = document.getElementById('postcard2');
    var div4 = document.getElementById('postcard3');
    var div5 = document.getElementById('postcard4');
    var div6 = document.getElementById('postcard5');
    var div7 = document.getElementById('happy');
    div.style.zIndex = '1';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';
}

function yes(){
    var div = document.getElementById('happy');
    var div2 = document.getElementById('postcard1');
    var div3 = document.getElementById('postcard2');
    var div4 = document.getElementById('postcard3');
    var div5 = document.getElementById('postcard4');
    var div6 = document.getElementById('postcard5');
    var div7 = document.getElementById('crying');
    div.style.zIndex = '1';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';
}
