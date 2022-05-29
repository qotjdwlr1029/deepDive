/*
//[예제 36-01]
//ES5
var arr = [1,2,3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three);
*/

/*
//[예제 36-02]
const arr = [1,2,3];

//ES6 배열 디스트럭쳐링 할당
const [one, two, three] = arr;

console.log(one, two, three);
*/

/*
//[예제 36-06]
//우변에 이터러블을 할당하여야 하며, 변수의 개수와 이터러블의 요소 갯수가 반드시 같을 필요는 없다.
const [a, b] = [1, 2];
console.log(a, b);

const [c, d] = [1];
console.log(c, d);

const [e, f] = [1, 2, 3];
console.log(e, f);

const [g, , h] = [1, 2, 3];
console.log(g, h);
*/

/*
//[예제 36-07]
//변수에 기본값을 설정할 수 있다.
const [a, b, c=3] = [1, 2];
console.log(a, b, c);

const [e, f = 10, g = 3] = [1, 2];
console.log(e, f, g);
*/

/*
//[예제 36-10, 11]


//ES5
var user = { firstName : 'Ungmo', lastName : 'Lee' }

var firstName = user.firstName
var lastName = user.lastName

console.log(firstName, lastName);

//ES6
const user1 = { firstName : 'Ungmo', lastName : 'Lee' }
const {firstName, lastName} = user1;

console.log(firstName, lastName);
*/

/*
//[예제 36-13]

//할당하지 않으면 에러가 발생한다.

const {lastName, firstName};//SyntaxError: Missing initializer in destructuring declaration
const {lastName, firstName} = null; //TypeError: Cannot destructure property 'lastName' of 'null' as it is null.
*/

/*
//[예제 36-15]
const user = {firstName : 'Ungmo', lastName : 'Lee'};

//프로퍼티 키를 기준으로 디스트럭쳐링 할당이 이루어진다.
//프로퍼티 키가 lastName인 프로퍼티 값을 ln에 할당하고,
//프로퍼티 키가 firstName인 프로퍼티 값을 fn에 할당한다.

const {firstName : fn, lastName : ln} = user;
console.log(fn, ln);
*/

/*
//[예제 36-16]
const { firstName = 'Ungmo', lastName } = {lastName : 'Lee'};
console.log(firstName, lastName);

const {firstName : fn = 'Ungmo', lastName : ln} = {lastName : 'Lee'};
console.log(fn, ln);
*/

/*
//[예제 36-17]
onst str = 'Hello';
//String 래퍼 객체로부터 length프로퍼티만 추출한다.
const { length } = str;
console.log(length);

const todo = {id : 1, content : 'HTML', completed : true};
const { id } = todo;
console.log(id);
*/

/*
//[예제 36-18]
const todo = {id : 1, content : 'HTML', completed : true};
const { id } = todo;

function printTodo (todo){
    console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '미완료'} 상태 입니다.`)
}
printTodo(todo);
*/

/*
//[예제 36-19]
const todo = {id : 1, content : 'HTML', completed : true};
const { id } = todo;

function printTodo ({content, completed}){
    console.log(`할일 ${content}은 ${completed ? '완료' : '미완료'} 상태 입니다.`)
}
printTodo(todo);
*/

/*
//[예제 36-20]
//배열의 요소가 객체인 경우 배열, 객체 디스트럭쳐링 할당을 혼용할 수 있다.
const todos = [
    {id : 1, content : 'HTML', completed : true},
    {id : 2, content : 'CSS', completed : false},
    {id : 3, content : 'JS', completed : false}
]

// todos 배열의 두 번째 요소이 객체로부터 id 프로퍼티 만 추출한다.
const [,{id},{completed}] = todos;
console.log(id, completed);
*/


/*
//[예제 36-21]

const user = {
    name : 'Lee',
    address : {
        zipCode : '03068',
        city : 'Seoul'
    }
};

// address 프로퍼티 키로 객체를 추출하고 이 객체의 city 프로퍼티 키로 값을 추출한다.
const { address : { city } } = user;
console.log(city);
const {address} = user;
console.log(address);
*/


