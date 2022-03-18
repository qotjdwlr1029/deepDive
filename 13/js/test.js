
/*
[예제 13-01]
function add(x,y){
    //매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    //즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
    console.log(x, y);
    return x + y;
}

add (2,5);

//매개변수는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y);
*/

/*
[예제 13-02]
var var1 = 1;           //코드의 가장 바깥 영역에서 선언한 변수

if(true){
    var var2 = 2;       //코드 블록 내에서 선언한 변수
    if(true){
        var var3 = 3;   // 중첩된 코드 블록 내에서 선언한 변수
    }
}

function foo(){
    var var4 = 4;       //함수 내에서 선언한 변수
    function bar(){
        var var5 = 5;   //중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
*/

/*
[예제 13-03]
var x = 'global';

function foo(){
    var x = 'local';
    console.log(x);
}

foo();

console.log(x);
*/

/*
var x = 'global x';
var y = 'global y';

function outer(){
    var z = "outer's local z";

    console.log(x);
    console.log(y);
    console.log(z);

    function inner(){
        var x = "inner's local x";

        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();

}

outer();

console.log(x);
console.log(z);
*/

/*
function foo(){
    console.log('global function foo');
}

function bar(){
    function foo(){
        console.log('local function foo');
    }

    foo();
}

bar();
*/

/*
[예제 13-07]
//var키워드로 선언된 변수는 오로지 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
var x = 1;

if(true){
    var x = 10;
}

//if문안에 선언된 x는 함수레벨 스코프에 해당하지 않기 때문에 기존에 선언된 x에 재할당이 된다.
console.log(x);
*/

/*
[예제 13-08]

var i = 10;

//for 문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for(var i = 0; i < 5;i++){
    console.log(i);
}

//의도치 않게 변수의 값이 변경되었다.
console.log(i);
*/

/*
var x = 1;

function foo(){
    var x = 10;
    bar();
}

function bar(){
    console.log(x);
}

foo();
bar();
*/