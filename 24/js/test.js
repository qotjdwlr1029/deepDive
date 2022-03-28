/*
//[예제 24-01]
const x = 1;

function outerFunc(){
    const x = 10;

    function innerFunc(){
        //중첩함수 innerFunc함수에서 x를 접근하면 상위 스코프에 있는 outerFunc의 x에 접근한다.
        console.log(x);
    }

    innerFunc();
}

outerFunc();
*/

/*
//[예제 24-02]
const x = 1;

function outerFunc(){
    const x= 10;
    innerFunc();
}

// outerFunc를 호출하면 innerFunc함수를 호출하게 되는데 
// innerFunc에서 x를 접근하게 되면 outerFunc에 있는 10이 아닌 전역에 선언된 1에 접근하게 된다.
// 그 이유는 함수의 호출이 아니라 함수가 정의된 위치에 따라서 스코프가 결정되기 때문이다.
function innerFunc(){
    console.log(x);
}

outerFunc();
*/


/*
//[예제 24-03]
const x = 1;

function foo(){
    const x = 10;
    bar();
}

function bar(){
    console.log(x);
}

foo();
bar();
*/

/*
//[예제 24-04]
//함수는 자신의 내부 슬롯 [[Environment]]에 자신이 정의된 환경 즉, 상위 스코프의 참조를 저장한다.

const x = 1;

function foo(){
    const x = 10;

    // 상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
    // 함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
    bar();
}

// 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 [[Environment]]에 저장하여 기억한다.
function bar(){
    console.log(x);
}
*/

/*
//[예제 24-05]
*/

const x = 1;

// 1)
function outer(){
    const x = 10;
    const inner = function(){ console.log(x) }; // 2)
    return inner;
}

// outer 함수를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer();  // 3)
//outer함수의 렉시컬 환경은 inner함수의 [[Environment]] 내부 슬롯에 의해 참조되고 있고
// inner 함수는 전역 변수 innerFunc에 의해 참조되고 있으므로 가비지 컬렉션의 대상이 되지 않기 때문이다.
// 가비지 컬렉터는 누군가가 참조하고 있는 메모리 공간을 함부로 해제하지 않는다.

innerFunc();    // 4) 10

// 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명주기가
// 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첩함수를 클로저라고 부른다.

