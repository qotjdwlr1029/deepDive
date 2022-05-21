/*
//[예제 33-01]
*/
//Symbol 함수를 호출하여 유일무이한 심벌 값을 생성한다.
const mySymbol = Symbol();
console.log(typeof mySymbol);

//심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol);