var functionInfo = [
    {
        subject : '함수 이름',
        content : [
            '함수 이름은 식별자다. 따라서 식별자 네이밍 규칙을 준수해야 한다.',
            '함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다.',
            '함수 이름은 생략할 수 있다. 이름이 있는 함수를 기명 함수, 이름이 없는 함수를 무명/익명 함수라 한다.'
        ]
    },
    {
        subject : '매개변수 목록',
        content : [
           '0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분한다.',
           '각 매개변수에는 함수를 호출할 때 지정한 인수가 순서대로 할당된다. 즉, 매개변수 목록은 순서에 의미가 있다.',
           '매개변수는 함수 몸체 내에서 변수와 동일하게 취급된다. 따라서 매개변수도 변수와 마찬가지로 식별자 네이밍 규칙을 준수해야 한다.'
        ]
    },
    {
        subject : '함수 몸체',
        content : [
            '함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록이다.',
            '함수 몸체는 참수 호출에 의해 실행된다.'
        ]
    }
]

window.onload = function(){

    var table = document.getElementById('functionLiteralInfo');
    var tbody = table.children[2];

    for(var i = 0; i< functionInfo.length ;i++){

        var tr = document.createElement('tr');
        var subject = document.createElement('td');
        var contentDiv = document.createElement('td');
        var list = document.createElement('ul');

        var contents = functionInfo[i].content;

        for( var j = 0; j < contents.length ;j++ ){
            var li = document.createElement('li');
            list.appendChild(li);
            li.textContent = contents[i];
        }

        subject.textContent = functionInfo[i].subject;

        contentDiv.appendChild(list);
        tr.appendChild(subject);
        tr.appendChild(contentDiv);

        tbody.appendChild(tr);
    }


    console.log(tbody);

    console.log(tbody.textContent);

}