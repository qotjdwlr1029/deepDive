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

/*
//[예제 37-05]
//size 프로퍼티는 setter 함수 없이 getter 함수만 존재하는 접근자 프로퍼티이다.
const set = new Set([1,2,3]);
console.log(Object.getOwnPropertyDescriptor(Set.prototype,'size'));

set.size = 10;  //무시된다.
console.log(set.size);
*/

/*
//[예제 37-06]
const set = new Set();
console.log(set);   //Set(0) {}

set.add(1);
console.log(set);   //Set(1) { 1 }
*/

/*
//[예제 37-07]
const set = new Set();

set.add(1).add(2);
console.log(set);
*/

/*
//[예제 37-08]
const set = new Set();

set.add(1).add(2).add(2);
console.log(set);
*/


/*
//[예제 37-09]
// === 을 사용하면 NaN과 NaN을 동일하게 평가하지 않는다.
// 하지만 Set객체는 NaN과 NaN을 동일하게 평가하여 중복 추가를 허용하지 않는다.
const set = new Set();

console.log(NaN === NaN);
console.log(0 === -0);

set.add(NaN).add(NaN);
console.log(set);
*/

/*
//[예제 37-11]
const set = new Set([1,2,3]);

console.log(set.has(2));
console.log(set.has(4));
*/

/*
//[예제 37-12]
const set = new Set([1,2,3]);

set.delete(2);
console.log(set);

set.delete(1);
console.log(set);
*/

/*
//[예제 37-13]
const set = new Set([1, 2, 3]);

set.delete(0);      //없는 요소를 삭제하면 무시된다.
console.log(set);
*/

/*
//[예제 37-14]
const set = new Set([1, 2, 3]);

//delete는 불리언 값을 반환한다.
set.delete(1).delete(2);    //set.delete(...).delete is not a function
*/

/*
//[예제 37-15]
const set = new Set([1, 2, 3]);

set.clear();
console.log(set);   //Set(0) {}
*/

/*
//[예제 37-16]
//Set.prototype.forEach는 다음과 같이 3개의 인수를 전달받는다.
//첫번째 인수 : 현재 순회 중인 요소값
//두번째 인수 : 현재 순회 중인 요소값
//세번째 인수 : 현재 순회 중인 set 객체 자체
const set = new Set([1, 2, 3]);

set.forEach((v1, v2, set) => console.log(v1, v2, set));
//1 1 Set(3) { 1, 2, 3 }
//2 2 Set(3) { 1, 2, 3 }
//3 3 Set(3) { 1, 2, 3 }
*/

/*
//[예제 37-17]
//Set객체는 이터러블이라서 for ... of문을 사용할 수 있다.
const set = new Set([1, 2, 3]);

// Set 객체는 Set.prototype의 Symbol.iterator를 상속 받는 이터러블이다.
console.log(Symbol.iterator in set);    //true

// Set 객체는 이터러블이므로 for ... of를 사용할 수 있다.
for(const value of set){
    console.log(value);
}

// Set 객체는 이터러블이므로 스프레드 문법을 사용할 수 있다.
console.log(...set);
*/

/*
//[예제 37-18]
Set.prototype.intersection = function(set){
    const result = new Set();

    for(const value of set){
        // 2개의 set요소가 공통되는 요소이면 교집합의 대상이다.
        // this는 생성하게 될 Set객체이다.
        if(this.has(value))result.add(value);
    }

    return result;
}

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

console.log(setB.intersection(setA));
console.log(setA.intersection(setB));
*/

/*
//[예제 37-19]
Set.prototype.intersection = function(set){
    return new Set([...set].filter(v => this.has(v)));
}

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

console.log(setB.intersection(setA));
console.log(setA.intersection(setB));
*/

/*
//[예제 37-20]
Set.prototype.union = function(set){
    // this(Set 객체)를 복사
    const result = new Set(this);

    for(const value of set){
        result.add(value);
    }

    return result;
};

const setA = new Set([1, 2, 3]);
const setB = new Set([2, 4]);

console.log(setA.union(setB));
console.log(setB.union(setA));
*/

/*
//[예제 37-21]
Set.prototype.union = function(set){
    console.log([...set]);
    console.log([...this]);
    console.log([...set, ...this]);
    return new Set([...set, ...this]);
}

const setA = new Set([1, 2, 3]);
const setB = new Set([2, 4]);

console.log(setA.union(setB));
console.log(setB.union(setA));
*/

/*
//[예제 37-22]
Set.prototype.difference = function(set){

    const result = new Set(this);

    for(const value of set){

        result.delete(value);

    }

    return result;

}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.difference(setB));
console.log(setB.difference(setA));
*/

/*
//[예제 37-23]
Set.prototype.difference = function(set){
    return new Set([...this].filter(v => !set.has(v)));
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.difference(setB));
console.log(setB.difference(setA));
*/


/*
//[예제 37-24]
Set.prototype.isSuperset = function(subset){

    for(const value of subset){
        if(!this.has(value)) return false;
    }

    return true;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.isSuperset(setB));
console.log(setB.isSuperset(setA));
*/

/*
//[예제 37-25]
Set.prototype.isSuperset = function(subset){
    const supersetArr = [...this];
    return [...subset].every(v => supersetArr.includes(v));
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.isSuperset(setB));
console.log(setB.isSuperset(setA));
*/

/*
//[예제 37-26]
const map = new Map();
console.log(map);   //Map(0) {}
*/

/*
//[예제 37-27]
//Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성한다.
//이때 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야 한다.
const map1 = new Map([['key1','value1'],['key2','value2']]);
console.log(map1);  //Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

const map2 = new Map([1,2]) //Iterator value 1 is not an entry object
*/

/*
//[예제 37-28]
const map1 = new Map([['key1','value1'],['key1','value2']]);
console.log(map1);  //Map(1) { 'key1' => 'value2' }
*/

/*
//[예제 37-29]
//Map.prototype.size의 값을 사용한다.
const { size } = new Map([['key1','value1'],['key2','value2']]);
console.log(size);
*/

/*
//[예제 37-30]
const map = new Map([['key1','value1'],['key2','value2']]);

console.log(Object.getOwnPropertyDescriptor(Map.prototype,'size'));

map.size = 10;  //무시된다.
console.log(map.size);
*/

/*
//[예제 37-31]
//map에 요소를 추가할 때는 Map.prototype.set을 사용한다.
const map = new Map();
console.log(map);

map.set('key1','value1');
console.log(map);
*/

/*
//[예제 37-32]
//set 메서드는 새로운 요소가 추가된 Map객체를 반환한다.
const map = new Map();

map
    .set('key1','value1')
    .set('key2','value2')

console.log(map);
*/

/*
//[예제 37-34]
const map = new Map();

console.log(NaN === NaN);
console.log(+0 === -0);

map.set(NaN, 'value1').set(NaN, 'value2');
map.set(+0, 'value1').set(-0, 'value2');

console.log(map);
*/

/*
//[예제 37-35]
//키가 되는 데이터의 자료형에 제한은 없다.
const map = new Map();

const lee = { name : 'Lee' };
const kim = { name : 'Kim' };

map
    .set(lee, 'developer')
    .set(kim, 'designer');

console.log(map);
*/

/*
//[예제 37-36]
//특정 요소를 취득하려면 Map.prototype.get메서드를 사용한다.
const map = new Map();

const lee = { name : 'Lee' };
const kim = { name : 'Kim' };

map
    .set(lee, 'developer')
    .set(kim, 'designer');

console.log(map.get(lee));      //developer
console.log(map.get('key'));    //undefined
*/

/*
//[예제 37-37]
// Map.prototype.has 메서드를 사용한다. 특정 요소의 존재 여부를 나타내는 불리언 값을 반환한다.
const lee = { name : 'Lee' };
const kim = { name : 'Kim' };

const map = new Map([[lee,'developer'],[kim,'designer']]);

console.log(map.has(lee));
console.log(map.has('key'));
*/

/*
//[예제 37-38]
//Map의 요소를 삭제하려면 Map.prototype.delete 메서드를 사용한다.
const lee = { name : 'Lee' };
const kim = { name : 'Kim' };

const map = new Map([[lee,'developer'],[kim,'designer']]);

map.delete(lee);
console.log(map);
*/

/*
//[예제 37-41]
//Map의 요소를 일괄로 삭제하려면 Map.prototype.clear메서드를 사용한다.
const lee = { name : 'Lee' }
const kim = { name : 'Kim' }

const map = new Map([[lee,'developer'],[kim,'designer']]);

map.clear();
console.log(map);
*/

/*
//[예제 37-42]
const lee = { name : 'Lee' }
const kim = { name : 'Kim' }

const map = new Map([[lee,'developer'],[kim,'designer']]);

map.forEach((k, v, map) => console.log(k, v, map));

//developer { name: 'Lee' } Map(2) {
//    { name: 'Lee' } => 'developer',
//    { name: 'Kim' } => 'designer'
//  }
//  designer { name: 'Kim' } Map(2) {
//   { name: 'Lee' } => 'developer',
//    { name: 'Kim' } => 'designer'
//  }
*/

/*
//[예제 37-43]
const lee = { name : 'Lee' }
const kim = { name : 'Kim' }

const map = new Map([[lee,'developer'],[kim,'designer']]);

console.log(Symbol.iterator in map);

for(const entry of map){
    console.log(entry);
}
*/

/*
//[예제 37-44]
const lee = { name : 'Lee' }
const kim = { name : 'Kim' }

const map = new Map([[lee,'developer'],[kim,'designer']]);

for(const value of map.keys()){
    console.log(value);
}

for(const value of map.values()){
    console.log(value);
}

for(const value of map.entries()){
    console.log(value);
}
*/