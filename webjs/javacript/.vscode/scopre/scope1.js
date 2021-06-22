var vscope = 'global';
//지역, 전역변수  , 지역 변수는 이름의 중복을 피할 수 있다 
//var를 함수밖에서 사용하면 전역,  함수 안이면 지역 변수 
function fscopre() {
    var vscope = 'local';
    vscope = 'local'   //지역변수가 이미 존재하니 4라인의 지역변수 vscopre를  의미한다 
}

fscopre();
alert(vscope);



// 

function a() {
    var i = 0;           // var 붙어 있지않으면 전역을 의미한다 
}
for(var i = 0 ;  i < 5; i++) {
    a();
    document.write(i);
}


// 익명함수 함수를 선언과 동시에 사용 , 
(function() {

    var MYAPP = {}

    MYAPP.calculator = {
        'left' : null,
        'right':null
    }
    
    MYAPP.coordiname = {
        'left' : null,
        'right':null
    }
    
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum() {
        return MYAPP.calculator.left  + MYAPP.calculator.right;
    }
    document.write(sum())
}())


// 자바스크립느느 함수 안에서만 지역변수이고 다른 곳에서는 지역변수의 의미를 가지지 않는다 
//ex 

for(var i = 0; i < 1; i++) {
    var name = 'kcj3054'
}
alert(name);   //name은 지역변수가 아니라서 사용가능.




//static scope

var i = 5;

function a() {
    var i = 10;
    b();
}
function b() {
    document.write(i);  // 이것은 i = 5를 의미한다 
}

a() 