
/*
[예제 14-01]
//지역 변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸한다.
function foo(){
    var x = 'local';
    console.log(x);
    return x;
}

foo();
console.log(x);
*/

var x = 'global';

function foo(){
    console.log(x);
    /*지역변수 x가 런타임 이전에 생성되었지만 할당문을 실행하지 않아서 undefined로 할당한다.*/
    var x = 'local';
    console.log(x);
}

foo();
console.log(x);

