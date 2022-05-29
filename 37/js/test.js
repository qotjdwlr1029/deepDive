// set 객체는 중복되지 않는 유일한 값들의 집합이다.
/*
//[예제 37-01]
const set = new Set();
console.log(set);
*/

/*
//[예제 37-02]
// Set 생성자 함수는 이터러블을 인수로 받아 Set객체를 생성한다.
// 이때 중복된 값은 Set객체에 요소로 저장되지 않는다.
const set1 = new Set([1,2,3,3]);
console.log(set1);

const set2 = new Set('hello');
console.log(set2);
*/

/*
//[예제 37-03]
// 가장 최소 인덱스를 반환하는데 그 인덱스가 현재 진행하는 인덱스와 동일하면 저장한다.
//배열의 중복 요소 제거
const uniq = array => array.filter((v, i, self) => self.indexOf(v) === i);

console.log(uniq([2,1,2,3,4,3,4]))

// Set을 사용한 배열의 중복 요소 제거
const uniq1 = array => [...new Set(array)]
console.log(uniq1([2,1,2,3,4,3,4]))
*/

/*
//[예제 37-04]
//Set.prototype.size프로퍼티를 할당
const {size} = new Set([1, 2, 3, 3]);
console.log(size);
*/





